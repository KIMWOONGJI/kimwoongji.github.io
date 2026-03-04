---
layout: page
title: parametric array loudspeakers
description: 
img: assets/img/12.jpg
importance: 1
category: research
related_publications: true
---

<hr>

<h4><strong>Principle</strong></h4>

<div class="row justify-content-sm-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/rigid-piston-direct-radiation.svg" title="example image" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    rigid-piston-direct-radiation.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/loudspeaker-direct-radiation.svg" title="example image" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    loudspeaker-direct-radiation.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/rigid-piston-pal-ultra.svg" title="example image" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    rigid-piston-pal-ultra.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/rigid-piston-pal-audio.svg" title="example image" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    rigid-piston-pal-audio.
</div>

Westervelt's parametric array loudspeaker (PAL) concept, which generates a highly directional audio beam by utilizing the nonlinear interaction of ultrasound waves in the air.
\begin{equation}
    \nabla^2 p - \frac{1}{c_0^2} \frac{\partial^2 p}{\partial t^2} + \frac{\delta}{c_0^4} \frac{\partial^3 p}{\partial t^3} = -\frac{\beta}{\rho_0 c_0^4} \frac{\partial^2 p^2}{\partial t^2}
    \label{eq:westervelt}
\end{equation}

<div class="row">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/parametric-array.svg" title="example image" class="img-fluid" %}
        <div class="caption">
            parametric-array.
        </div>
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        Succesive approximations of the Westervelt equation 
        \begin{align}
            \nabla^2 p_i + k_i^2 p_i                           & = 0,
            \label{eq:2}\\
            \nabla^2 p_\mathrm{a} + k_\mathrm{a}^2p_\mathrm{a} & = \frac{4 \pi^2 \beta f_\mathrm{a}^2}{\rho_0 c_0^4}p_1^*p_2,
            \label{eq:3}
        \end{align}
    </div>
</div>

<hr>

<h4><strong>Radiators</strong></h4>

<div class="row justify-content-sm-center">
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/rigid-piston.svg" title="rigid piston" %}
        <div class="caption">
            rigid-piston.
        </div>
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/phased-array.svg" title="phased array" %}
        <div class="caption">
            phased-array.
        </div>
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/flexural-plate.svg" title="flexural plate" %}
        <div class="caption">
            flexural-plate.
        </div>
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/flexural-plate-radiation.svg" title="example image" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    flexural-plate-radiation.
</div>

<hr>

<h4><strong>Stepped-plate parametric array loudspeaker (SPPAL)  </strong>{% cite kimDesignAnalysisExperimental2025b %}</h4>

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/sppal-concept.svg" title="example image" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    sppal-concept.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/sppal-ultra.svg" title="example image" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    sppal-ultra.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/sppal-audio.svg" title="example image" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    sppal-audio.
</div>

<hr>

<h4><strong>Metamaterials-integrated parametric array loudspeaker (MiPAL)</strong></h4>

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/mipal-concept.svg" title="example image" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    mipal-concept.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/mipal-ultra.svg" title="example image" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    mipal-ultra.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/mipal-audio.svg" title="example image" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    mipal-audio.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/mipal-aco-meta.svg" title="rigid piston" %}
        <div class="caption">
            mipal-aco-meta.
        </div>
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/parametric-array-loudspeaker/mipal-ela-meta.svg" title="phased array" %}
        <div class="caption">
            mipal-ela-meta.
        </div>
    </div>
</div>



