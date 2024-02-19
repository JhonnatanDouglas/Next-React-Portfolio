"use client";

import { BackgroundContext } from "@/contexts/background";
import { DarkModeContext } from "@/contexts/darkmode";
import { useContext } from "react";
import Particles from "react-tsparticles";

const BackgroundAnimated = () => {
  const { particlesInit, particlesLoaded } = useContext(BackgroundContext);
  const { themeMode } = useContext(DarkModeContext);
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="transition-all duration-300 ease-linear"
        options={{
          name: "Parallax",
          fullScreen: {
            zIndex: -1,
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
              },
            },
            color: {
              value: themeMode ? "#F4F4F5" : "#27272A",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: {
                min: 0.1,
                max: 0.5,
              },
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
            size: {
              value: {
                min: 1,
                max: 5,
              },
              animation: {
                enable: true,
                speed: 10,
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: themeMode ? "#E4E4E7" : "#3F3F46",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "none",
                parallax: {
                  enable: true,
                  smooth: 10,
                  force: 60,
                },
              },
              onClick: {
                enable: false,
                mode: "push",
              },
            },
            modes: {
              grab: {
                distance: 400,
                links: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
              },
              repulse: {
                distance: 200,
              },
              push: {
                quantity: 2,
              },
              remove: {
                quantity: 2,
              },
            },
          },
          background: {
            color: themeMode ? "#27272A" : "#F4F4F5",
          },
        }}
      />
    </>
  );
};
export default BackgroundAnimated;
