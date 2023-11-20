import { SubjectPriority } from "./SubjectPriority";

export interface Advert {
  article: number;
  url: string;
  image: string;
  image_big: string;
  advert_id: number;
  cpm: number;
  position: number;
  position_on_page: number;
  page: number;
  subject: Subject;
  delivery_time: number;
}

export interface Subject {
  id: number;
  name: string;
}

export interface AdvertsResponse {
  bets: Advert[];
  subject_priorities: SubjectPriority[];
}
