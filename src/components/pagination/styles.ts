"use client";
import styled from "styled-components";
import { DARK_GRAY_COLOR, GRAY_COLOR } from "@/constants/styles";

export const PaginationContainer = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
  justify-content: center;
  margin-top: 10px;
`;
export const PaginationItem = styled.li<{ $isActive?: boolean }>`
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  padding: 19.5px 25.2px;
  border-radius: 10px;
  border: 1px solid ${GRAY_COLOR};
  color: ${({ $isActive }) => ($isActive ? "inherit" : `${DARK_GRAY_COLOR}`)};
  background-color: ${({ $isActive }) => ($isActive ? "#fff" : "none")};
`;
