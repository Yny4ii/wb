"use client";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import * as S from "./styles";
import SearchIcon from "@/components/icons/SearchIcon";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: React.ReactNode;
}

const Input = ({ icon, ...props }: IInputProps) => {
  return (
    <S.InputContainer>
      <input {...props} />
      {icon}
    </S.InputContainer>
  );
};

export default Input;
