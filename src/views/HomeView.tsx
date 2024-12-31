import {
  alpha,
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  amber,
  orange,
  pink,
  yellow,
} from "@mui/material/colors";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form } from "react-router";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export const HomeView: FC = () => {
  const { t } = useTranslation();
  const { shape, palette } = useTheme();
  const [busy, setBusy] = useState(false);

  const [id, setId] = useState("");
  const disabled = id.normalize().trim().length === 0;
  const handleSubmit = () => {
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
    }, 10000);
  };

  return (
    <Box
      sx={{
        color: palette.secondary.main,
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(to bottom right, ${yellow["50"]}, ${amber["50"]}, ${orange["100"]}, ${pink["100"]})`,
      }}
    >
      <Form
        action="/card"
        method="get"
        onSubmit={handleSubmit}
      >
        <Stack
          useFlexGap
          padding={8}
          spacing={2}
          sx={{
            margin: "auto",
            maxWidth: "md",
            height: "100%",
            padding: 8,
            borderRadius: shape.borderRadius,
            backgroundColor: alpha(
              palette.secondary.light,
              0.5
            ),
          }}
        >
          <Typography
            variant="h4"
            component="h1"
          >
            {t("newYearCard")}
          </Typography>
          <TextField
            placeholder={t("cardId")}
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            fullWidth
            slotProps={{
              input: {
                sx: {
                  backgroundColor: "white",
                  color: palette.secondary.dark,
                },
              },
              htmlInput: {
                autoCapitalize: "off",
                autoComplete: "off",
                autoSave: "off",
                sx: {
                  fontFamily: "Ubuntu Mono",
                },
              },
            }}
          />
          <Stack
            useFlexGap
            width="100%"
            spacing={2}
            direction="row"
            flexWrap="wrap"
            alignItems="flex-end"
            justifyContent="space-between"
          >
            <Button
              disableRipple
              disableElevation
              disabled={disabled || busy}
              variant="contained"
              type="submit"
            >
              {busy ? (
                <CircularProgress variant="indeterminate" />
              ) : (
                t("open")
              )}
            </Button>
            <LanguageSwitcher />
          </Stack>
        </Stack>
      </Form>
    </Box>
  );
};
