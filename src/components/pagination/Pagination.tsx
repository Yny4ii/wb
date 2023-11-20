"use client";
import React from "react";
import * as S from "./styles";

interface IPaginationProps {
  pageCount: number;
  onClick: (page: number) => void;
  currentPage: number;
}

const Pagination = ({ pageCount, onClick, currentPage }: IPaginationProps) => {
  return (
    <S.PaginationContainer>
      {Array.from({ length: pageCount }, (_, index) => index + 1).map((e) => (
        <S.PaginationItem
          $isActive={currentPage === e}
          onClick={() => onClick(e - 1)}
          key={e}
        >
          {e}
        </S.PaginationItem>
      ))}
    </S.PaginationContainer>
  );
};

export default Pagination;
