export type ThemeType = "default" | "light";

export interface Technologies {
  svg: string;
  title: string;
}

export interface Project {
  fields: {
    appMisPelis: string;
    linkImgPagina: string;
    linkDeArticle: string;
    github: string;
    id: number;
    technologiess?: Technologies[];
    description?: string;
  };
}

export interface NodemailRequestType {
  email: string;
  name: string;
  message: string;
}

export interface LikesRequestType {
  id: string;
  proyect: string;
  like: number;
}
