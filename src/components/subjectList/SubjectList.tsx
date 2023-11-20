import React from "react";
import * as S from "./style";
import SubjectItem from "@/components/subjectList/components/SubjectItem";
import { SubjectPriority } from "../../../api/interfaces/SubjectPriority";

interface ISubjectListProps {
  subjects: SubjectPriority[];
}

const SubjectList = ({ subjects }: ISubjectListProps) => {
  return (
    <S.SubjectListContainer>
      {subjects.map((e) => (
        <SubjectItem key={e.id} subject={e} />
      ))}
    </S.SubjectListContainer>
  );
};

export default SubjectList;
