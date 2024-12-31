import { Box, styled } from "@mui/material";
import { FC } from "react";
import Markdown, { Components } from "react-markdown";

const StyledP = styled("p")({
  textIndent: 24,
});

const COMPONENT_OVERRIDE: Partial<Components> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  p: ({ node, children, ...rest }) => {
    return <StyledP {...rest}>{children}</StyledP>;
  },
};

type StyledMarkdownProps = {
  children: string;
};
export const StyledMarkdown: FC<StyledMarkdownProps> = (
  props
) => {
  const { children } = props;

  return (
    <Box
      overflow="auto"
      sx={{
        wordWrap: "break-word",
        whiteSpace: "wrap",
      }}
    >
      <Markdown components={COMPONENT_OVERRIDE}>
        {children}
      </Markdown>
    </Box>
  );
};
