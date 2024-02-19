import type { Engine } from "tsparticles-engine";

export interface iBackgroundContext {
  particlesLoaded: () => Promise<void>;
  particlesInit: (engine: Engine) => Promise<void>;
}
