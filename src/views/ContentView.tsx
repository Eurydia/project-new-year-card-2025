import {
  KeyRounded,
  LocalFloristRounded,
} from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  Divider,
  Fab,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { brown, yellow } from "@mui/material/colors";
import { alpha, Box, Stack } from "@mui/system";
import { FC, Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router";
import { StyledMarkdown } from "../components/StyledMarkdown";
import { decryptDocument } from "../core/crypto";
import { LoaderData } from "../types/loader";
import hero from "/assets/images/hero2.jpg";

const UNLOCKED_DATE = new Date(2025, 0, 1);

export const ContentView: FC = () => {
  const { content: encrypted, id } =
    useLoaderData() as LoaderData;
  const { t, i18n } = useTranslation();
  const { palette } = useTheme();
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [content, setContent] = useState(encrypted);
  const [passphrase, setPassphrase] = useState("");

  const handleDialogOpen = () => {
    if (isDecrypted) {
      return;
    }
    setDialogOpen(true);
  };

  const handleDecrypt = async () => {
    if (delta > 0) {
      return;
    }
    decryptDocument(encrypted, id, passphrase)
      .then((ok) => {
        setContent(ok);
        setIsDecrypted(true);
      })
      .finally(() => {
        setPassphrase("");
        setDialogOpen(false);
      });
  };
  const now = Date.now() / 1000;
  const target = UNLOCKED_DATE.getTime() / 1000;
  const delta = target - now;

  const fontFamily =
    i18n.language === "en"
      ? "ibm plex serif"
      : "noto serif thai";
  return (
    <Fragment>
      <Box
        width="100%"
        sx={{
          backgroundColor: alpha(yellow["100"], 0.2),
        }}
      >
        <Box
          component="img"
          width="100%"
          loading="eager"
          src={hero}
          sx={{
            border: "none",
            objectFit: "cover",
            objectPosition: "0% 40%",
            height: "45vh",
          }}
        />
        <Box
          padding={4}
          sx={{
            color: brown["700"],
            margin: "auto",
            maxWidth: "md",
          }}
        >
          <StyledMarkdown>{content}</StyledMarkdown>
          <Divider
            flexItem
            variant="middle"
          >
            <LocalFloristRounded color="primary" />
          </Divider>
        </Box>
      </Box>
      <Dialog
        fullWidth
        disableRestoreFocus
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="md"
        slotProps={{
          backdrop: {
            sx: {
              backdropFilter: "blur(5px)",
            },
          },
        }}
      >
        <DialogContent>
          <Stack spacing={1}>
            <TextField
              autoFocus
              value={passphrase}
              fullWidth
              placeholder={t("passcode")}
              onChange={(e) =>
                setPassphrase(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleDecrypt();
                }
              }}
              slotProps={{
                htmlInput: {
                  sx: {
                    fontFamily: "Ubuntu Mono",
                  },
                  autoCapitalize: "off",
                  autoComplete: "off",
                },
              }}
            />
            <Stack
              direction="row"
              spacing={2}
              useFlexGap
              flexWrap="wrap"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Button
                disableElevation
                disableRipple
                variant="contained"
                onClick={handleDecrypt}
                disabled={delta > 0}
                sx={{
                  maxWidth: "fit-content",
                }}
              >
                {t("unlock")}
              </Button>
              <Typography
                color={palette.secondary.dark}
                fontFamily={fontFamily}
              >
                {t("contentLocked")}
              </Typography>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
      <Fab
        disableRipple
        color="primary"
        onClick={handleDialogOpen}
        sx={{
          visibility: isDecrypted ? "hidden" : "visible",
          position: "fixed",
          bottom: 32,
          left: 32,
        }}
      >
        <Tooltip
          placement="left"
          title={
            <Typography fontFamily={fontFamily}>
              {t("unscramble")}
            </Typography>
          }
        >
          <KeyRounded />
        </Tooltip>
      </Fab>
    </Fragment>
  );
};
