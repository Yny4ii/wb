"use client";
import styled from "styled-components";
import {DARK_GRAY_COLOR} from "@/constants/styles";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border-bottom: 1px solid ${DARK_GRAY_COLOR};
  width: 100%;

  input {
    outline: none;
    border: none;
    background: none;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    font-family: inherit;
  }

  svg {
    cursor: pointer;
  }
`;
