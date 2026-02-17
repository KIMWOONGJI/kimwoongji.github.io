---
layout: page
title: mechanical vibration characterization
description: 
img: assets/img/project/mech-vibration-characterization/mech-vibration-characterization-2.png
importance: 2
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

<hr>

<div class="row">
    <div class="col-sm-3 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/lrm-characterization/lrm-characterization-1.png" title="Experimental velocity frequency response" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Velocity frequency response measurement setup of the locally resonant metamaterial unit.
        </div>
    </div>
    <div class="col-sm-4 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/lrm-characterization/lrm-characterization-2.png" title="FEM velocity frequency response" %}
        <div class="caption">
            The bold solid lines represent FEM predictions, while the translucent solid lines correspond to the experimental measurements.
        </div>
    </div>
    <div class="col-sm-5 mt-0 mt-md-0">
        <h4><strong>Locally Resonant Metamaterial Characterization</strong></h4>
        <p>To estimate the effective properties of a 3D-printed locally resonant metamaterial (LRM) and use the identified values to redesign it to meet the required resonant behavior.</p>
        <h5>Experimental Setup</h5>
        <ul>
            <li>Spectrum analyzer, single-point laser Doppler vibrometer, power amplifier, vibration exciter</li>
        </ul>
    </div>
</div>

<hr>

<div class="row">
    <div class="col-sm-3 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/plate-impedance/plate-impedance-1.png" title="Experimental plate impedance response" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Plate impedance measurement setup for vibration-based characterization of the radiating plate with/without the locally resonant metamaterial.
        </div>
    </div>
    <div class="col-sm-4 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/plate-impedance/plate-impedance-2.png" title="FEM plate impedance response" %}
        <div class="caption">
            Impedance response of the radiating plate: without (gray) and with (blue) the locally resonant metamaterial.
        </div>
    </div>
    <div class="col-sm-5 mt-0 mt-md-0">
        <h4><strong>Plate Impedance Characterization</strong></h4>
        <p>Plate impedance characterization was performed to evaluate the frequency-dependent dynamic behavior of the radiating plate with and without the locally resonant metamaterial.</p>
        <h5>Experimental Setup</h5>
        <ul>
            <li>Spectrum analyzer, power amplifier, vibration exciter, impedance head, custom jig (Carefully designed to ensure rigid support while minimizing any influence on the measurement results.)</li>
        </ul>
    </div>
</div>

<hr>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/miniature-diaphragm-characterization/miniature-diaphragm-characterization-1.png" title="Diaphragm compliance measurement setup" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Diaphragm compliance measurement setup.
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <h4><strong>Miniature Diaphragm Characterization</strong></h4>
        <p>To establish a precise measurement methodology based on passive excitation, since the compliance of thin and tiny polymer diaphragms (micrometer thick and sub-millimeter diameter) critically determines acoustic sensor performance. Obtained diaphragm compliance data and validated the methodology by comparing measurement results with FEM simulations.</p>
        <h5>Experimental Setup</h5>
        <ul>
            <li>LabVIEW-based automated measurement program</li>
            <li>Note that constructing a pressure chamber for controlled passive excitation would further improve measurement reliability and remains as future work.</li>
        </ul>
        {% include figure.liquid loading="eager" path="assets/img/project/miniature-diaphragm-characterization/miniature-diaphragm-characterization-2.png" title="EMA amplitude - FEM" %}
        <div class="caption">
             Polymer square diaphragm as the device under test (left), and compliance measurement result (right).
        </div>
    </div>
</div>

<hr>
