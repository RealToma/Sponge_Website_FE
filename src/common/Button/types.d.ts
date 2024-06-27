import React, { ReactNode } from "react";

export type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  leftIcon?: ReactNode;
};
