import React from "react";
import * as S from "./styles";
import { SubjectPriority } from "../../../../api/interfaces/SubjectPriority";

interface ISubjectItemProps {
  subject: SubjectPriority;
}

const SubjectItem = ({ subject }: ISubjectItemProps) => {
  return (
    <S.SubjectItemContainer>
      <S.SubjectPosition>{subject.position}</S.SubjectPosition>
      <S.SubjectName>{subject.name}</S.SubjectName>
    </S.SubjectItemContainer>
  );
};

export default SubjectItem;
