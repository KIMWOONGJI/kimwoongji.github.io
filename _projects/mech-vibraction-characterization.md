---
layout: page
title: mechanical vibration characterization
description: 
img: assets/img/project/mech-vibration-characterization/mech-vibration-characterization-2.png
importance: 3
category: experiment
related_publications: true
---

<hr>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mech-vibration-characterization/mech-vibration-characterization-1.png" title="LDV measurement setup" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Single-point LDV measurement setup for mechanical vibration characterization of the radiating plate.
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <h4><strong>Mechanical vibration characterization</strong></h4>
        <p>Using MATLAB-based automated control, single-point LDV measurements were performed to obtain not only the frequency response of the radiating plate but also its experimental modal analysis (EMA). The experimental results were compared with FEM simulations, and the underlying mechanism of the previously unreported combination resonance in stepped plate parametric array loudspeakers was firstly identified{% cite kimDesignAnalysisExperimental2025b %}.</p>
        <h5>Experimental Setup</h5>
        <ul>
            <li>MATLAB-based automated measurement program</li>
            <li>Spectrum analyzer, single-point laser Doppler vibrometer, power amplifier, stage controller, linear stages</li>
        </ul>
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mech-vibration-characterization/mech-vibration-characterization-3.png" title="EMA amplitude - FEM" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mech-vibration-characterization/mech-vibration-characterization-4.png" title="EMA amplitude - experiment" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mech-vibration-characterization/mech-vibration-characterization-5.png" title="EMA phase - FEM" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mech-vibration-characterization/mech-vibration-characterization-6.png" title="EMA phase - experiment" %}
    </div>
</div>
<div class="caption">
    EMA of the radiating plate around the 8th eigenmode frequency. Amplitude: FEM (1st) and experiment (2nd). Phase: FEM (3rd) and experiment (4th).
</div>

The EMA of the radiating plate around the 8th eigenmode frequency showed close agreement between FEM predictions and experimental measurements, validating the accuracy of the modeling approach.