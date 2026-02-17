---
layout: page
title: Hardware design, assembly, and instrumentation
description: hand-on experience on development of customized experiment setups
img: assets/img/project/impedance-tube/impedance-tube-1.png
importance: 4
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

<hr>

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        <h4><strong>Hands-on Experience in Transducer Assembly</strong></h4>
        <p>Establish executable assembly plans, acquire proper knowledge of transducer integration, and develop appropriate tools for reliable assembly.</p>
        <h5>Technical Skills</h5>
        <ul>
            <li>Utilized a 3D-printed alignment jig to precisely align transducer parts and electrodes, designed to apply radial pre-stress and secure proper concentricity during piezoelectric ultrasonic transducer assembly.</li>
            <li>Designed and fabricated a wrench-flat clamping jig enabling controlled preload application using a torque wrench.</li>
            <li>Applied specially designed fasteners to prevent thread stripping during assembly and to withstand both preload and dynamic loads during operation.</li>
        </ul>
        <h5>Results</h5>
        <ul>
            <li>Established a consistent assembly process, with assembled ultrasonic transducers demonstrating good agreement between experimental measurements and simulation results.</li>
        </ul>
    </div>
</div>

<h5>Stepped plate parametric array loudspeaker{% cite kimDesignAnalysisExperimental2025b %}</h5>

<div class="row justify-content-sm-center">
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/sppal/1.JPEG" title="Transducer head part with alignment jig" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            1 - Transducer head part with alignment jig
        </div>
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/sppal/2.JPEG" title="The first piezostack and electrode aligned by jig" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            2 - The first piezostack and electrode aligned by jig
        </div>
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/sppal/3.JPEG" title="Adding transducer middle part" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            3 - Adding transducer middle part
        </div>
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/sppal/4.JPEG" title="The second piezostack and electrode aligned by jig" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            4 - The second piezostack and electrode aligned by jig
        </div>
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/sppal/5.JPEG" title="Adding transducer tail part" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            5 - Adding transducer tail part
        </div>
    </div>
</div>
<div class="row justify-content-sm-center">
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/sppal/10.JPEG" title="Custom-designed wrench flat clamping jig" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            6- Custom-designed wrench flat clamping jig
        </div>
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/sppal/6.JPEG" title="Tightening with wrench flat clamping jig and torque wrench" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            7 - Affix transducer with wrench flat clamping jig and mechanical vise
        </div>
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/sppal/7.JPEG" title="Tightening with wrench flat clamping jig and torque wrench" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            8 - Tightening with wrench flat clamping jig and torque wrench
        </div>
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/sppal/8.JPEG" title="Final assembly" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            9 - Final assembly
        </div>
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/sppal/9.JPEG" title="Wiring" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            10 - Wiring
        </div>
    </div>
</div>

<h5>Metamaterial-integrated parametric array loudspeaker</h5>

<div class="row justify-content-sm-center">
    <div class="col-sm-2 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/mipal/mipal-transducer-assembly-1.png" title="impedance measurement result 1" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            1 - Assembly of the Langevin-type configuration using a machine vise, custom clamping jig, and aligner.
        </div>
    </div>
    <div class="col-sm-2 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/mipal/mipal-transducer-assembly-2.png" title="impedance measurement result 2" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            2 - Preloading of the stud bolt and nut using a torque wrench.
        </div>
    </div>
    <div class="col-sm-2 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/mipal/mipal-transducer-assembly-3.png" title="FEM comparison" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            3 - Photograph of the Langevin-type configuration mounted on the transducer fixture with an O-ring.
        </div>
    </div>
    <div class="col-sm-2 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/mipal/mipal-transducer-assembly-4.png" title="FEM comparison" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            4 - Coupling of the conical horn to the Langevin transducer, with controlled preload applied using a torque wrench.
        </div>
    </div>
    <div class="col-sm-2 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/mipal/mipal-transducer-assembly-5.png" title="FEM comparison" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            5 - Assembled Langevin transducer with the conical horn.
        </div>
    </div>
    <div class="col-sm-2 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/xdcr-assembly/mipal/mipal-transducer-assembly-6.png" title="FEM comparison" class="img-fluid rounded z-depth-1" %}
        <div class="caption" style="font-size: 0.6rem;">
            6 - Fully assembled transducer architecture.
        </div>
    </div>
</div>

<hr>

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/acel-demo/acel_demo_1_overall.png" title="ACEL demonstration setup" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            ACEL demonstration setup
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <h4><strong>Circuit Implementation for Demonstration</strong></h4>
        <p>To design and implement the driving circuit for demonstration, including bandpass filters and piezo amplifiers, enabling frequency-selective sound generation synchronized with light emission. The circuitry was designed such that musical inputs from a piano app on tablet PC directly drive flexible alternating-current electroluminescent (ACEL) devices, realizing an interactive sound-and-light demonstration.{% cite parkInteractiveDeformableColored2024 %}</p>
        <h5>Technical Skills</h5>
        <ul>
            <li>Tablet PC's output signal characterization, Circuit configuration & design, Component selection, PCB layout, Assembly, EMC consideration</li>
        </ul>
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/acel-demo/acel_demo_1_circuit.png" title="Circuit diagram" %}
        <div class="caption">
            3 Cascaded circuit boards inside its housing.
        </div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/acel-demo/acel_demo_1_circuit_1.png" title="Circuit diagram" %}
        <div class="caption">
            3 dimensional view of demonstration circuit.
        </div>
    </div>
</div>

<hr>

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mems-mic-circuit-interface/mems-mic-circuit-interface-1.png" title="custom-designed impedance tube" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Custom-designed impedance tube and experimental configuration for acoustic input impedance measurement of an automotive horn.
        </div>
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        <h4><strong>MEMS Microphone Analog Interface</strong></h4>
        <p>Investigate MEMS microphone analog interfaces (voltage and charge amplifiers), evaluate the effect of parasitic capacitance from packaging and preamplifier circuits, and apply guard ring strategies to enhance sensitivity and SNR.</p>
        <h5>Technical Skills</h5>
        <ul>
            <li>Designed and fabricated custom interface PCBs for MEMS microphone die characterization.</li>
            <li>Identified parasitic capacitance sources using impedance analyzer and validated their effects through LTspice circuit simulations.</li>
            <li>Implemented guard ring connection via metal lid and verified sensitivity improvement experimentally.</li>
            <li>Characterized MEMS microphone performance in terms of sensitivity,noise floor, and SNR(A).</li>
        </ul>
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-3 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mems-mic-circuit-interface/mic-calibration-low.png" title="impedance measurement result 1" %}
        <div class="caption" style="font-size: 0.6rem;">
            Microphone calibrator for low-frequency range.
        </div>
    </div>
    <div class="col-sm-3 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mems-mic-circuit-interface/mic-calibration-high.png" title="impedance measurement result 2" %}
        <div class="caption" style="font-size: 0.6rem;">
            Microphone calibration in semi-anechoic chamber for high-frequency range.
        </div>
    </div>
    <div class="col-sm-3 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mems-mic-circuit-interface/mems-mic-circuit-interface-2.png" title="impedance measurement result 1" %}
        <div class="caption" style="font-size: 0.6rem;">
            Measured frequency response in sensitivity of the MEMS microphone with analog interface circuitry.
        </div>
    </div>
    <div class="col-sm-3 mt-0 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/mems-mic-circuit-interface/mems-mic-circuit-interface-3.png" title="impedance measurement result 2" %}
        <div class="caption" style="font-size: 0.6rem;">
            Measured power spectral density of the MEMS microphone with analog interface circuitry.
        </div>
    </div>
</div>

<hr>