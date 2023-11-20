"use client";
import React, { useCallback } from "react";
import * as S from "./styles";
import Region from "@/components/region/Region";
import { RegionInterface } from "../../../api/interfaces/Region";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

interface IRegionsProps {
  regions: RegionInterface[];
}

const Regions = ({ regions }: IRegionsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onPageChange = (page: number) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("region_id", page.toString());
    const query = params.toString();
    router.push(pathname + "?" + query);
  };

  return (
    <S.RegionsContainer>
      {regions.map((e) => (
        <Region
          onClick={() => onPageChange(e.id)}
          key={e.id}
          text={e.name}
          id={e.id}
          isActive={parseInt(searchParams.get("region_id")) === e.id}
        />
      ))}
    </S.RegionsContainer>
  );
};

export default Regions;
