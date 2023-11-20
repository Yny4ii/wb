import React from "react";
import * as S from "./styles";

interface IRegionProps {
  id:number;
  isActive?: boolean;
  text: string;
  onClick: (id:number)=>void;
}

const Region = ({ text, isActive, onClick, id }: IRegionProps) => {
  return <S.RegionContainer onClick={()=> onClick(id)} $isActive={isActive}>{text}</S.RegionContainer>;
};

export default Region;
