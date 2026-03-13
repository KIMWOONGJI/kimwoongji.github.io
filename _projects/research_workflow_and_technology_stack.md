---
layout: page
title: research workflow and technology stack
description: A systematic methodology integrating multiphysics simulation, component-based modeling, and scalable data infrastructure
tags: [research workflow, technology stack]
img: 
importance: 1
category: skills
---

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/research-workflow-and-technology-stack/research-schematic-diagram.svg" title="Research workflow and technology stack" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    Research workflow and technology stack.
</div>

This infographic outlines the integrated methodology and technical infrastructure that underpin my research and development processes. It highlights a systematic approach bridging analytical modeling, high-fidelity simulations, and scalable data management to accelerate scientific discovery and engineering innovation.

<hr>

<h4><strong><i class="fa-solid fa-puzzle-piece"></i> Models</strong></h4>

- **Analytic model** - Enabled low-cost design space exploration by establishing relationships between design parameters and key performance metrics.
- **FEM model** - Applied for high-fidelity simulations and design for manufacturing, validating performance with practical prototypes.
- **Component-based model** - Implemented using Simulink, Simscape, and LTspice to capture multiphysics behavior, an approach particularly suited when modularity, hierarchy, and extensibility are required.

<h4><strong><i class="fa-solid fa-laptop-code"></i> Languages/Software</strong></h4>

- **MATLAB <i class="fa-solid fa-arrows-alt-h"></i> COMSOL Multiphysics <i class="fa-solid fa-arrows-alt-h"></i> SolidWorks**<br>Integrated workflow: developed analytical models and applied optimization algorithms in MATLAB, automated FEM simulations through COMSOL LiveLink, and generated parameterized CAD geometries in SolidWorks for iterative design validation.
- **Simulink/Simscape** <small>(Modelica-based)</small> - Component-based system modeling for transient, multi-domain simulations.
- **LTspice** - Applied for electrical and electronic circuit simulations as well as multiphysics system studies, using distributed- and lumped-element models.

<h4><strong><i class="fa-solid fa-network-wired"></i> Infrastructure & Version Control</strong></h4>

- **Git & DVC** - Managed source codes, simulation scripts, collaborative development, and tracked large datasets.
- **GitHub / Nextcloud / TrueNAS** - Deployed these scalable data infrastructures from the ground up to accelerate research and development workflows.
- **Slurm & HPC Clusters** - Managed resource allocation and batch job scheduling on High-Performance Computing clusters to accelerate high-fidelity FEM simulations.
