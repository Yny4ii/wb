"use client";
import React, { useState } from "react";
import Input from "@/components/input/Input";
import * as S from "./styles";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { signIn } from "../../../api/api";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("+79871111111@gmail.com");
  const [password, setPassword] = useState("P9lV9jVhAC");
  const router = useRouter();
  const handleClickLoginButton = async () => {
    const res = await signIn(email, password);
    if (res.access) {
      setCookie("authToken", res.access);
      router.push("/");
      router.refresh();
    }
  };
  return (
    <S.LoginPageContainer>
      <S.LoginContainer>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"E-mail"}
        ></Input>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"Пароль"}
        ></Input>
        <PrimaryButton onClick={handleClickLoginButton}>
          Авторизоваться
        </PrimaryButton>
      </S.LoginContainer>
    </S.LoginPageContainer>
  );
};

export default Login;
