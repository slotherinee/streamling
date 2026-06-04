export interface PersonCard {
  id: number;
  name: string;
  profile: string | null;
  knownForDepartment: string;
  popularity: number;
}

export interface CreditItem {
  id: number;
  mediaType: 'movie' | 'tv';
  title: string;
  poster: string | null;
  character: string;
  year: string | null;
  rating: number;
}

export interface Person extends PersonCard {
  biography: string;
  birthday: string | null;
  deathday: string | null;
  placeOfBirth: string | null;
  gender: number | null;
  alsoKnownAs: string[];
  credits: CreditItem[];
}
