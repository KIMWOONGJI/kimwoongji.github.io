---
layout: page
title: acoustical field characterization
description: fully automated acoustical field characterization system
img: assets/img/project/aco-field-characterization/main.png
importance: 1
category: experiment
related_publications: true
---

The goal of this project was to characterize the acoustic field of a developed sound source, validate theoretical models by direct comparison with experimental measurements, and ensure stable and reproducible data acquisition through automated control.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/aco-field-characterization/main@2x.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Experimental setup in a semi-anechoic chamber, including a measurement microphone, linear and rotational stages, and a spectrum analyzer.
</div>

A MATLAB-based automated measurement program was developed, which profiled and applied instrument settings via vendor-specific command sets over GPIB, ensuring consistent and reproducible measurement conditions. The system was capable of characterizing frequency response, propagation curves, and beam patterns.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/aco-field-characterization/propagation-curve-1@3x.png" title="simulated propagation curve" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/aco-field-characterization/propagation-curve-2@3x.png" title="measured propagation curve" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/aco-field-characterization/beam-pattern-1@3x.png" title="simulated beam pattern" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/aco-field-characterization/beam-pattern-2@3x.png" title="measured beam pattern" %}
    </div>
</div>
<div class="caption">
    Measurement results: propagation curves and beam patterns of the developed sound source.
</div>

The experimental data obtained from this measurement system provided direct validation of theoretical models and contributed to the following publications{% cite parkInteractiveDeformableColored2024 kimAccurateMeasurementParametric2025a kimDesignAnalysisExperimental2025b %}.