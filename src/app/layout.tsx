import { Roboto } from "next/font/google";
import "./globals.css";
import React, { PropsWithChildren } from "react";
import { NextPage } from "next";
import StyledComponentsRegistry from "@/app/StyledComponentsRegistry";
import { cookies } from "next/headers";
import Login from "@/components/login/Login";

const roboto = Roboto({
  weight: ["700", "500", "400", "300"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken");

  return (
    <html lang="ru">
      <body className={roboto.className}>
        {authToken ? (
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        ) : (
          <Login />
        )}
      </body>
    </html>
  );
};

export default RootLayout;
