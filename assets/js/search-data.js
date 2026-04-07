// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Research projects by Woongji Kim covering parametric array loudspeakers, acoustic transducers, acoustic metamaterials, field characterization, and experimental instrumentation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Open-source repositories and GitHub contributions by Woongji Kim.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum vitae of Woongji Kim — Ph.D. in Mechanical Engineering from POSTECH, specializing in acoustics, vibration, and transducer engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-acoustical-field-characterization",
          title: 'acoustical field characterization',
          description: "Fully automated acoustical field characterization system for measuring directivity and sound pressure levels in a semi-anechoic chamber.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aco_field_characterization.html";
            },},{id: "projects-hardware-design-assembly-and-instrumentation",
          title: 'Hardware design, assembly, and instrumentation',
          description: "Custom hardware design, assembly, and instrumentation for acoustic experiments, including impedance tube construction and measurement setups.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hardware.html";
            },},{id: "projects-material-property-evaluation",
          title: 'material property evaluation',
          description: "Dynamic material property evaluation of piezoelectric materials using impulse excitation technique complying with ASTM E1876 standards.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/material_property_evaluation.html";
            },},{id: "projects-mechanical-vibration-characterization",
          title: 'mechanical vibration characterization',
          description: "Mechanical vibration characterization of radiating plates using laser Doppler vibrometry (LDV) for transducer validation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mech_vibraction_characterization.html";
            },},{id: "projects-parametric-array-loudspeakers",
          title: 'parametric array loudspeakers',
          description: "Research on parametric array loudspeaker transducers — highly directional sound sources utilizing nonlinear acoustics, stepped plates, and acoustic metamaterials.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/parametric_array_loudspeakers.html";
            },},{id: "projects-my-research-workflow-and-technology-stack",
          title: 'my research workflow and technology stack',
          description: "Systematic research methodology integrating COMSOL multiphysics simulation, MATLAB-based modeling, and scalable data infrastructure for acoustic transducer development.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/research_workflow_and_technology_stack.html";
            },},{id: "projects-spurious-sound-filter",
          title: 'spurious sound filter',
          description: "Design of a spurious sound filter using a half-wavelength resonator analogy for accurate parametric array loudspeaker measurements.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spurious_sound_filter.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%6A.%6B%69%6D@%70%6F%73%74%65%63%68.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kimwoongji", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kimwoongji", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9614-6762", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Woongji-Kim/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ZHKTxKIAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
