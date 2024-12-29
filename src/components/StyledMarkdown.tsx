import { FC } from "react";
import Markdown from "react-markdown";

type StyledMarkdownProps = {
  children: string;
};
export const StyledMarkdown: FC<StyledMarkdownProps> = (
  props
) => {
  const { children } = props;
  return <Markdown>{children}</Markdown>;
};
