"use client";

import styled from "styled-components";
import { GRAY_COLOR } from "@/constants/styles";

export const RegionContainer = styled.div<{ $isActive?: boolean }>`
  height: 35px;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 28px;
  border: 1px solid ${({ $isActive }) => ($isActive ? "#fff" : `${GRAY_COLOR}`)};
  border-radius: 4px;
  background: ${({ $isActive }) => ($isActive ? "#fff" : "none")};
`;
