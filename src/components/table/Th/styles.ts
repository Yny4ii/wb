"use client";

import styled from "styled-components";

export const Th = styled.th`
  padding: 10px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 400;

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
