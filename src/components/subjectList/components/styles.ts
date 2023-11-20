"use client";

import styled from "styled-components";

export const SubjectItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 80px;
  width: 100%;
  gap: 20px;

  &:nth-child(even) {
    border: 1px solid #f3f4f5;
    border-radius: 10px;
  }
`;

export const SubjectName = styled.div`
  width: 100%;
`;
export const SubjectPosition = styled.div`
  padding: 32px;
`;
