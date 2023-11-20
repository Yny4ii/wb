"use client";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import * as S from "./styles";

interface IPrimaryButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const PrimaryButton = ({ ...props }: IPrimaryButtonProps) => {
  return <S.PrimaryButtonContainer {...props}/>;
};

export default PrimaryButton;