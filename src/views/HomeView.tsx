import {
  alpha,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form } from "react-router";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export const HomeView: FC = () => {
  const { t } = useTranslation();
  const { palette, shadows } = useTheme();

  const [id, setId] = useState("");
  const disabled = id.normalize().trim().length === 0;
  return (
    <Container maxWidth="md">
      <Form
        action="/card"
        method="get"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          width="100%"
          sx={{
            backdropFilter: "blur(10px)",
            borderRadius: "25px",
            backgroundColor: alpha("#fff", 0.4),
          }}
        >
          <Stack
            useFlexGap
            padding={8}
            spacing={4}
          >
            <Typography
              variant="h4"
              component="h1"
            >
              {t("newYearCard")}
            </Typography>
            <TextField
              placeholder={t("cardId")}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              autoSave="off"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              fullWidth
              slotProps={{
                input: {
                  sx: {
                    borderRadius: "50px",
                    backgroundColor: "white",
                  },
                },
                htmlInput: {
                  sx: {
                    fontFamily: "monospace",
                  },
                },
              }}
            />
            <Stack
              width="100%"
              useFlexGap
              spacing={2}
              direction="row"
              flexWrap="wrap"
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <Button
                disableRipple
                disableElevation
                disabled={disabled}
                variant="contained"
                type="submit"
                size="large"
              >
                {t("open")}
              </Button>
              <LanguageSwitcher />
            </Stack>
          </Stack>
        </Box>
      </Form>
    </Container>
  );
};
