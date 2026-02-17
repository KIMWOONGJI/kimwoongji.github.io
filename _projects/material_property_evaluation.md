---
layout: page
title: material property evaluation
description: 
img: assets/img/project/dynamic-material-property-evaluation/dynamic-material-property-evaluation-1.png
importance: 3
category: experiment
related_publications: true
---

<hr>

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/dynamic-material-property-evaluation/dynamic-material-property-evaluation-1.png" title="ASTM E1876 experimental setup" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Experimental setup for dynamic material property evaluation complying with <em>ASTM E1876-22</em>.
        </div>
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        <h4><strong>Dynamic Material Property Evaluation</strong></h4>
        <p>This project aims to determine the dynamic Young's modulus, shear modulus, and Poisson's ratio of the materials used in transducer fabrication and prototype development. It ensures the reliability of FEM-based simulations and incorporates material-specific properties into the design process.{% cite kimDesignAnalysisExperimental2025b %}</p>
        <h5>Standard</h5>
        <p><em>ASTM E1876-22: Standard Test Method for Dynamic Young's Modulus, Shear Modulus, and Poisson's Ratio by Impulse Excitation of Vibration</em></p>
        <h5>Experimental Setup</h5>
        <ul>
            <li>Test specimen and fixture complying with <em>ASTM E1876-22</em></li>
            <li>Spectrum analyzer, Measurement microphone, Impact hammer</li>
        </ul>
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/dynamic-material-property-evaluation/dynamic-material-property-evaluation-2.png" title="ASTM E1876 results" %}
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        <style>
            .table-sm-text td, .table-sm-text th {
                font-size: 0.7rem !important;
                padding: 0.1rem !important;
            }
        </style>
        <table class="table table-sm table-borderless table-sm-text">
            <thead>
                <tr>
                    <th>Material</th>
                    <th>Source / Method</th>
                    <th>$E$ [GPa]</th>
                    <th>$G$ [GPa]</th>
                    <th>$\nu$ [-]</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="3">Al 7075-T651</td>
                    <td>MatWeb</td>
                    <td>71.700</td>
                    <td>26.955</td>
                    <td>0.330</td>
                </tr>
                <tr>
                    <td>E1876</td>
                    <td>73.268</td>
                    <td>26.405</td>
                    <td>0.387</td>
                </tr>
                <tr>
                    <td>Rel. Err. [%]</td>
                    <td>2.187</td>
                    <td>-2.039</td>
                    <td>17.390</td>
                </tr>
                <tr>
                    <td rowspan="3">SS 316L</td>
                    <td>MatWeb</td>
                    <td>193.000</td>
                    <td>75.391</td>
                    <td>0.280</td>
                </tr>
                <tr>
                    <td>E1876</td>
                    <td>190.358</td>
                    <td>76.854</td>
                    <td>0.238</td>
                </tr>
                <tr>
                    <td>Rel. Err. [%]</td>
                    <td>-1.369</td>
                    <td>1.940</td>
                    <td>-14.841</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="caption">
    Experimental results (left) and comparison of material properties obtained by FEM with MatWeb data and ASTM E1876 measurements (right).
</div>

<hr>

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/piezo-impedance/piezo-impedance-1.png" title="piezoelectric impedance analysis setup" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Experimental setup for piezoelectric material property characterization using impedance analysis.
        </div>
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        <h4><strong>Piezoelectric Material Characterization</strong></h4>
        <p>Verification of piezoelectric material constants (transversely orthotropic Young's modulus, Poisson's ratio, damping coefficient, piezoelectric constants, and permittivity) through impedance analysis of ceramic rings, and validation of their consistency by comparing experimental measurements with FEM-based simulations.{% cite kimDesignAnalysisExperimental2025b %}</p>
        <h5>Experimental Setup</h5>
        <ul>
            <li>Impedance analyzer, Test fixture</li>
        </ul>
        <h5>Results</h5>
        <p>Demonstrated that the discrepancy between experimental impedance (blue dash-dotted curve) and simulated response (red solid curve) enables evaluation of the validity of piezoelectric property data provided in supplier datasheets.</p>
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/piezo-impedance/piezo-impedance-2.png" title="impedance result 1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/piezo-impedance/piezo-impedance-3.png" title="impedance result 2" %}
    </div>
</div>
<div class="caption">
    Comparison between experimental measurements and FEM simulations. Agreement (left) validates supplier data, while discrepancy (right) indicates unreliability.
</div>

<hr>

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/pe-se-curve/pe-se-curve-1.png" title="PE/SE curve experimental setup" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Experimental setup for PE/SE curve measurement of piezoelectric/electrostrictive materials using a laser Doppler vibrometer and Sawyer-Tower circuit.
        </div>
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        <h4><strong>PE/SE Curve Measurement</strong></h4>
        <p>Evaluation of piezoelectric properties of powder- or ink-supplied piezoelectric/electroactive polymer materials, considering possible property variations due to mixing with other substances during device fabrication.{% cite parkInteractiveDeformableColored2024 %}</p>
        <h5>Experimental Setup</h5>
        <ul>
            <li>Laser Doppler vibrometer, Sawyer-Tower circuit</li>
            <li>Polymer film cantilevers were prepared as test specimens, and a custom fixture with pogo pins was designed to prevent sample damage during electrical measurements.</li>
        </ul>
        <h5>Results</h5>
        <p>Simultaneous acquisition of polarization-electric field (PE) and strain-electric field (SE) curves was achieved for piezoelectric polymers; for electrostrictive polymers, the effective piezoelectric constant ($e_{31,f}$) under applied electric field bias was extracted.</p>
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/pe-se-curve/pese_custom_jig.png" title="custom fixture" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/pe-se-curve/pe-se-curve-2.png" title="PE SE curves" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/pe-se-curve/pe-se-curve-3.png" title="effective piezoelectric constant" %}
    </div>
</div>
<div class="caption">
    Custom fixture with pogo pins (left), typical PE/SE curves (middle), and extracted effective piezoelectric constant ($e_{31,f}$) (right).
</div>