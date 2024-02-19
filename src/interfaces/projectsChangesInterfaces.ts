export interface iProjectContext {
  nameProject: string;
  changeName: (name: string) => void;
  categoryDev: string;
  setCategoryDev: React.Dispatch<React.SetStateAction<string>>;
  changeDevCategory: (category: string) => void;
}
