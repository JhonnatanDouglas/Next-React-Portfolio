import type { Engine } from "tsparticles-engine";

interface iBackgroundContext {
  particlesLoaded: () => Promise<void>;
  particlesInit: (engine: Engine) => Promise<void>;
}

interface iDarkModeContext {
  handleThemeSwitch: () => void;
  themeMode: boolean;
}

interface iHeaderContext {
  toggleNav: () => void;
  isOpen: boolean;
}

export type { iBackgroundContext, iDarkModeContext, iHeaderContext };
