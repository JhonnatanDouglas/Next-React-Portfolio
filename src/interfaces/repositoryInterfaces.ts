import { iProjects } from "./projectsInterfaces";
import { iSkillTechs } from "./skillsInterfaces";
import { iSocialLinks } from "./socialInterfaces";
import { iTechCategory } from "./techsItemsInterfaces";

export interface iRepository {
  getAllProjects: () => Promise<iProjects[] | []>;
  getAllSkills: () => Promise<iSkillTechs[] | []>;
  getAllContactLinks: () => Promise<iSocialLinks[] | []>;
  getAllFooterLinks: () => Promise<iSocialLinks[] | []>;
  getAllLanguages: () => Promise<iTechCategory[] | []>;
  allProjects: iProjects[];
  allSkills: iSkillTechs[];
  allContactLinks: iSocialLinks[];
  allFooterLinks: iSocialLinks[];
  allLanguages: iTechCategory[];
}
