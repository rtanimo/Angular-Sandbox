export interface Section {
  number: number;
  title: string;
  path: string;
}

export interface Chapter {
  number: number;
  title: string;
  path: string;
  sections: Section[];
}
