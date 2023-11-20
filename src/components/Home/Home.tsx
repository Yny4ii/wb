"use client";
import React, { useEffect } from "react";
import * as S from "./styles";
import Regions from "@/components/regions/Regions";
import SearchBar from "@/components/searchBar/SearchBar";
import Table from "@/components/table/Table";
import SubjectList from "@/components/subjectList/SubjectList";
import { RegionInterface } from "../../../api/interfaces/Region";
import { AdvertsResponse } from "../../../api/interfaces/Advert";
import { useRouter } from "next/navigation";

interface IHomeProps {
  regions: RegionInterface[];
  data: AdvertsResponse;
}

const Home = ({ regions, data }: IHomeProps) => {
  return (
    <S.HomeContainer>
      <SearchBar />
      <S.MainContainer>
        <S.SecondaryContainer>
          <Regions regions={regions} />
          {data.bets && data.bets.length > 0 && <Table data={data.bets} />}
        </S.SecondaryContainer>
        {data.subject_priorities && data.subject_priorities.length > 0 && (
          <SubjectList subjects={data.subject_priorities} />
        )}
      </S.MainContainer>
    </S.HomeContainer>
  );
};

export default Home;
