type iTechItem = {
  id: string;
  name: string;
  link: string;
  alt: string;
};

type iTechCategory = {
  id: number;
  stack: "frontend" | "backend" | "extra";
  list: iTechItem[];
};

export type { iTechCategory, iTechItem };
