---
layout: page
title: mechanical vibration characterization
description: Mechanical vibration characterization of radiating plates using laser Doppler vibrometry (LDV) for transducer validation.
img: assets/img/project/mech-vibration-characterization/mech-vibration-characterization-2.png
importance: 2
category: experiment
related_publications: true
scholar:
  style: apa
---

<hr>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mech-vibration-characterization/mech-vibration-characterization-1.png" title="LDV measurement setup" alt="Single-point laser Doppler vibrometer measurement setup for radiating plate vibration characterization" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Single-point LDV and motorized stages for radial scanning.
        </div>
        <figure id="plate-ema-draft" class="mt-2" style="scroll-margin-top: 5rem">
            <div class="motion-figure" style="aspect-ratio: 16 / 9; background: var(--global-bg-color)">
                <div class="only-light">
                    <video data-src="{{ '/assets/video/plate-ema/plate-ema-light.mp4' | relative_url }}" poster="{{ '/assets/video/plate-ema/plate-ema-poster.webp' | relative_url }}" width="640" height="360" muted loop playsinline preload="none" aria-hidden="true"></video>
                </div>
                <div class="only-dark">
                    <video data-src="{{ '/assets/video/plate-ema/plate-ema-dark.mp4' | relative_url }}" poster="{{ '/assets/video/plate-ema/plate-ema-poster.webp' | relative_url }}" width="640" height="360" muted loop playsinline preload="none" aria-hidden="true"></video>
                </div>
            </div>
            <figcaption class="caption">The laser scans from the center to the rim to map the plate’s vibration mode shapes.</figcaption>
        </figure>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <h4><strong>Experimental modal analysis</strong></h4>
        <p>To identify the vibration modes of a radiating plate, I needed to measure how its surface moved from the center to the rim. I paired a single-point laser Doppler vibrometer (LDV) with motorized linear stages so I could map the response across the plate with the equipment available in the lab. This avoided the cost of a dedicated scanning vibrometer.</p>
        <p>I wrote a MATLAB program to coordinate the stage motion, excitation and data acquisition. After alignment, the system ran unattended, repeating the same frequency sweep at each position. The resulting amplitude and phase maps showed where vibration was strongest and which regions moved out of phase. I compared these patterns with finite element predictions, as shown below for the plate’s eighth mode.</p>
        <p>In a stepped-plate parametric array loudspeaker, I used these measurements to trace unwanted audible sound to combination resonance. Under amplitude-modulated excitation, lower-order modes of the plate radiated sound directly {% cite kimDesignAnalysisExperimental2025b %}. In a follow-up study, I used LDV measurements to verify that adding elastic meta-units to the plate suppressed those parasitic vibrations {% cite kim2026Dualmetamaterials %}.</p>
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mech-vibration-characterization/mech-vibration-characterization-3.png" title="EMA amplitude - FEM" alt="FEM-predicted experimental modal analysis amplitude at 8th eigenmode" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mech-vibration-characterization/mech-vibration-characterization-4.png" title="EMA amplitude - experiment" alt="Experimentally measured modal analysis amplitude at 8th eigenmode" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mech-vibration-characterization/mech-vibration-characterization-5.png" title="EMA phase - FEM" alt="FEM-predicted modal analysis phase at 8th eigenmode" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mech-vibration-characterization/mech-vibration-characterization-6.png" title="EMA phase - experiment" alt="Experimentally measured modal analysis phase at 8th eigenmode" %}
    </div>
</div>
<div class="caption">
    Measured amplitude (left pair) and phase (right pair) agree with FEM predictions near the eighth mode. Each pair shows the prediction first.
</div>

<hr>

<div class="row">
    <div class="col-sm-3 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/lrm-characterization/lrm-characterization-1.png" title="Experimental velocity frequency response" alt="Velocity frequency response measurement setup of locally resonant metamaterial unit" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Single-point LDV measuring the velocity of an elastic meta-unit on the vibration exciter.
        </div>
    </div>
    <div class="col-sm-4 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/lrm-characterization/lrm-characterization-2.png" title="FEM velocity frequency response" alt="FEM and experimental velocity frequency response comparison for locally resonant metamaterial" %}
        <div class="caption">
            Bold curves show FEM predictions. Lighter curves show the measured velocity responses.
        </div>
    </div>
    <div class="col-sm-5 mt-0 mt-md-0">
        <h4><strong>Locally Resonant Metamaterial Characterization</strong></h4>
        <p>I measured the velocity response of 3D-printed elastic meta-units and compared the resonance peaks with finite element predictions. The resulting estimates of the units’ effective properties guided the redesign for the target resonance frequency {% cite kim2026Dualmetamaterials %}.</p>
        <h5>Experimental Setup</h5>
        <ul>
            <li>Spectrum analyzer, single-point laser Doppler vibrometer, power amplifier, vibration exciter</li>
        </ul>
    </div>
</div>

<hr>

<div class="row">
    <div class="col-sm-3 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/plate-impedance/plate-impedance-1.png" title="Experimental plate impedance response" alt="Plate impedance measurement setup for radiating plate with and without locally resonant metamaterial" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Custom jig coupling the center of the radiating plate to the impedance head.
        </div>
    </div>
    <div class="col-sm-4 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/plate-impedance/plate-impedance-2.png" title="FEM plate impedance response" alt="Impedance response of radiating plate without and with locally resonant metamaterial" %}
        <div class="caption">
            Center-point impedance of the bare plate (gray) and the plate fitted with elastic meta-units (blue).
        </div>
    </div>
    <div class="col-sm-5 mt-0 mt-md-0">
        <h4><strong>Plate Impedance Characterization</strong></h4>
        <p>I used a custom jig to measure mechanical impedance at the center of the radiating plate. The jig provided rigid support at the drive point while limiting its influence on plate motion. With the elastic meta-units attached, the single impedance peak near 2 kHz splits into two {% cite kim2026Dualmetamaterials %}.</p>
        <h5>Experimental Setup</h5>
        <ul>
            <li>Spectrum analyzer, power amplifier, vibration exciter, impedance head, custom jig</li>
        </ul>
    </div>
</div>

<hr>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/miniature-diaphragm-characterization/miniature-diaphragm-characterization-1.png" title="Diaphragm compliance measurement setup" alt="Miniature polymer diaphragm compliance measurement setup using passive excitation" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Setup for measuring diaphragm motion under acoustic excitation.
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <h4><strong>Miniature Diaphragm Characterization</strong></h4>
        <p>I developed a LabVIEW-controlled test to measure the compliance of submillimeter polymer diaphragms for acoustic sensors. A loudspeaker excited the micrometer-thick membrane while a microphone recorded sound pressure and a laser vibrometer measured motion across its surface. The resulting map of displacement per unit pressure provided a check against the finite element prediction.</p>
        <h5>Experimental Setup</h5>
        <ul>
            <li>LabVIEW acquisition, loudspeaker, measurement microphone, laser vibrometer, motorized stage</li>
        </ul>
        <p>A pressure chamber could improve measurement reliability by providing finer control over the applied sound pressure.</p>
        {% include figure.liquid loading="eager" path="assets/img/project/miniature-diaphragm-characterization/miniature-diaphragm-characterization-2.png" title="Diaphragm compliance results" alt="Polymer square diaphragm under test and compliance measurement results" %}
        <div class="caption">
             Square polymer diaphragm (left) and measured displacement per unit pressure (right).
        </div>
    </div>
</div>

<hr>

<script defer src="{{ '/assets/js/motion-figure.js' | relative_url | bust_file_cache }}"></script>
