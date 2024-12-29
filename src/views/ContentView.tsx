import {
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { StyledMarkdown } from "../components/StyledMarkdown";
import { LoaderData } from "../types/loader";

export const ContentView: FC = () => {
  const { content } = useLoaderData() as LoaderData;
  const { t } = useTranslation();

  return (
    <Container maxWidth="md">
      <Stack
        spacing={2}
        padding={4}
      >
        <Stack
          alignItems="self-start"
          justifyContent="center"
          spacing={1}
          direction="column"
        >
          <Stack
            width="100%"
            useFlexGap
            direction="row"
            flexWrap="wrap"
            spacing={1}
            alignItems="baseline"
            justifyContent="space-between"
          >
            <Typography>{t("passcode")}</Typography>
            <LanguageSwitcher />
          </Stack>
          <TextField
            fullWidth
            size="small"
          />
          <Button
            disableElevation
            disableRipple
            variant="contained"
            size="small"
          >
            {t("unlock")}
          </Button>
        </Stack>
        <Divider flexItem />
        <StyledMarkdown>{content}</StyledMarkdown>
      </Stack>
    </Container>
  );
};
