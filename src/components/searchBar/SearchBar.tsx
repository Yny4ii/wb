"use client";
import React, { useCallback, useState } from "react";
import * as S from "./styles";
import Input from "@/components/input/Input";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SearchIcon from "@/components/icons/SearchIcon";
import { log } from "util";

interface ISearchBar {}

const SearchBar = ({}: ISearchBar) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("input") || "");

  const onClickSearchButton = (value: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("input", value);
    const query = params.toString();
    router.push(pathname + "?" + query);
  };
  return (
    <S.SearchBarWrapper>
      <S.SearchBarTitle>Актуальные ставки</S.SearchBarTitle>
      <S.SearchBarContainer>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={"Поиск по названию или артиклу"}
          icon={<SearchIcon />}
        />
        <PrimaryButton onClick={() => onClickSearchButton(value)}>
          Поиск
        </PrimaryButton>
      </S.SearchBarContainer>
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
