type iTech = {
  id: number;
  name: string;
};

type iTechStack = {
  backend: iTech[];
  frontend: iTech[];
};

interface iProjects {
  id: number;
  condition: string;
  stack: string;
  title: string;
  description: string;
  repository: string;
  img: string;
  alt: string;
  artCreatorBy: string;
  page?: string;
  figma?: string;
  techs: iTechStack;
}

export type { iProjects, iTechStack, iTech };
