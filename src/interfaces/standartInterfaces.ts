import { iTech } from "./projectsInterfaces";
import { iTechItem } from "./techsItemsInterfaces";

export interface iChildrenProps {
  children: React.ReactNode;
}

export interface iLinkProps {
  children?: React.ReactNode;
  goToPage: string;
}

export interface iDevProps {
  children: React.ReactNode;
  devTitle: string;
}

export interface iProject {
  titleProject: string;
  descriptionProject: string;
  linkRepository: string;
  databaseProject: iTech[];
  databaseProjectExtra?: iTech[];
  conditionProject: string;
  linkPage?: string;
  linkFigma?: string;
}

export interface iButtonGroup {
  buttonOne: string;
  buttonTwo: string;
  buttonThree: string;
  routeOne: string;
  routeTwo: string;
  routeThree: string;
}

export interface iLeftDesign {
  linkImageOwner: string;
  messageImageOwner: string;
  imageDesign: any;
  imageAlt: string;
}

export interface iRightImage {
  imageDefault: any;
  altDefault: string;
  linkTech?: string;
  messageImageOwner?: string;
}

export interface iMostUsedTech {
  id: number;
  name: string;
  img: string;
  alt: string;
}

export interface iTechListDev {
  dev: string;
  database: iTechItem[];
  mode?: "top" | "bottom";
}
