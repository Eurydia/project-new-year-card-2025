import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();

  return (
    <Stack
      spacing={1}
      useFlexGap
      direction="row"
      flexWrap="wrap"
      divider={<Typography>/</Typography>}
    >
      <Typography
        variant="caption"
        sx={{
          cursor: "pointer",
          textDecorationLine: "underline",
        }}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </Typography>
      <Typography
        variant="caption"
        sx={{
          cursor: "pointer",
          textDecorationLine: "underline",
        }}
        onClick={() => i18n.changeLanguage("th")}
      >
        TH
      </Typography>
    </Stack>
  );
};
