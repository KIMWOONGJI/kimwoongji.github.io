---
layout: page
title: component development
description: hand-on experience on development of customized experiment setups
img: assets/img/project/impedance-tube/impedance-tube-1.png
importance: 3
category: experiment
related_publications: true
---

<hr>

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/impedance-tube/impedance-tube-1.png" title="custom-designed impedance tube" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Custom-designed impedance tube and experimental configuration for acoustic input impedance measurement of an automotive horn.
        </div>
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        <h4><strong>Custom-designed impedance tube</strong></h4>
        <p>To measure the acoustic input impedance of an automotive horn, a custom-designed impedance tube was developed and fabricated in compliance with <em>ISO 10534-2</em>. This setup enabled reliable broadband impedance characterization consistent with industrial standards.</p>
        <h5>Standard</h5>
        <p><em>ISO 10534-2:2023 Acoustics &mdash; Determination of acoustic properties in impedance tubes, Part 2: Two-microphone technique for normal sound absorption coefficient and normal surface impedance</em></p>
        <h5>Experimental Setup</h5>
        <ul>
            <li>Custom-designed impedance tube complying with <em>ISO 10534-2</em></li>
            <li>Car shell horn (device under test)</li>
            <li>Spectrum analyzer, measurement microphone</li>
        </ul>
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/impedance-tube/impedance-tube-2.png" title="impedance measurement result 1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/impedance-tube/impedance-tube-3.png" title="impedance measurement result 2" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/impedance-tube/impedance-tube-4.png" title="FEM comparison" %}
    </div>
</div>
<div class="caption">
    Experimental setup (left), components before assembly (middle), and measurement results of the custom-designed impedance tube (right).
</div>

The measured acoustic input impedance of the automotive horn showed good agreement with FEM predictions, validating the accuracy of the impedance tube design and measurement procedure.

<hr>

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mic-holder/mic-holder.png" title="custom microphone holder" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Custom microphone holder fabricated via MJF 3D printing for sequential measurement with different microphone types.
        </div>
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        <h4><strong>Custom microphone holder</strong></h4>
        <p>To prevent acoustic interference arising when multiple microphones are placed simultaneously in the same spatial position, measurements were conducted sequentially. Custom holders were fabricated so that different microphone types could occupy exactly the same spatial location during measurements{% cite kimAccurateMeasurementParametric2025a kimDesignAnalysisExperimental2025b %}.</p>
        <h5>Experimental Setup</h5>
        <ul>
            <li>Fabricated a custom microphone holder via MJF 3D printing to allow sequential use of 1/8-inch and 1/2-inch microphones at identical spatial positions</li>
            <li>Employed a quick-release adapter to enable fast microphone exchange while maintaining alignment</li>
        </ul>
        <h5>Results</h5>
        <p>Achieved consistent spatial positioning of microphones, eliminated mutual interference, and ensured reliable characterization of both ultrasonic and audible fields with minimal system variability.</p>
    </div>
</div>