import React, { FC } from 'react';
import parse from 'html-react-parser';

interface Props {
  text: string;
  className?: string;
}

export const Paragraph: FC<Props> = ({ text, className }) => (
  <div className={className}>{parse(text)}</div>
);
