---
layout: page
title: tubebench
title_icon: tubebench # logo before the title on /projects/ and on this page (_includes/brand_mark.liquid)
description: Open-source MATLAB application for four-microphone impedance-tube measurements after ASTM E2611 — transmission loss, reflection, transfer impedance and transfer matrix — with instrument control, guided switching calibration and a validity check on every frequency line.
tags: [impedance tube, transfer impedance, transmission loss, acoustic measurement, instrument control, matlab]
img: assets/img/project/tubebench/tubebench-card.png
importance: 1
category: tools
---

<hr>

<h4><strong>Synopsis</strong></h4>

Commercial impedance-tube systems, especially four-microphone tubes for transmission loss and transfer impedance, are expensive and tied to their vendor's hardware, so many labs build their own. But a home-built tube solves only the hardware half: run by hand across separate instruments and scripts, settings drift, channels get swapped, and calibrations stop matching the data. **Instrument control is what turns a do-it-yourself tube into a measurement system.**

**{% include brand_mark.liquid name="tubebench" %}tubebench** does this in one window. It drives the signal generator and the acquisition, guides the microphone calibration, and computes the specimen's properties after ASTM E2611[^1], flagging every frequency line it cannot trust. It runs on general-purpose instruments, takes new ones through a driver interface, includes a virtual tube for trying it without hardware, and is open source.

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% comment %}
          Two sizes made with a Lanczos filter, chosen by the browser through srcset: the 3840 px
          screenshot of the repository, shrunk 4x by the browser into this 900 px column, aliased
          its small text badly. 900 px serves ordinary screens, 1800 px high-density ones.
        {% endcomment %}
        <figure>
          <img
            src="{{ 'assets/img/project/tubebench/tubebench-window-1800.webp' | relative_url }}"
            srcset="{{ 'assets/img/project/tubebench/tubebench-window-900.webp' | relative_url }} 900w, {{ 'assets/img/project/tubebench/tubebench-window-1800.webp' | relative_url }} 1800w"
            sizes="(min-width: 930px) 900px, calc(100vw - 30px)"
            width="1800"
            height="946"
            loading="eager"
            alt="The tubebench window: instrument, tube, excitation, calibration and measurement controls on the left, and a 3D section of the four-microphone impedance tube on the right"
            class="img-fluid rounded z-depth-1"
          >
        </figure>
    </div>
</div>
<div class="caption">
    The {% include brand_mark.liquid name="tubebench" %}tubebench window: the controls follow the workflow from top to bottom, and the 3D tube follows the geometry entered.
</div>

<div class="table-responsive">
<table class="table table-sm">
  <tbody>
    <tr><th scope="row">Method</th><td>Four-microphone transfer-matrix method (ASTM E2611)</td></tr>
    <tr><th scope="row">Results</th><td>Reflection, transmission, transmission loss, transfer impedance, transfer matrix</td></tr>
    <tr><th scope="row">Excitation</th><td>Swept sine, stepped sine, random noise</td></tr>
    <tr><th scope="row">Instruments</th><td>Keysight 33220A, HBK LAN-XI; others through drivers, guided by a Claude Code skill</td></tr>
    <tr><th scope="row">Platform</th><td>MATLAB R2022b, Signal Processing Toolbox</td></tr>
    <tr><th scope="row">Licence</th><td>MIT &middot; <a href="https://github.com/kimwoongji/tubebench">github.com/kimwoongji/tubebench</a></td></tr>
  </tbody>
</table>
</div>

<hr>

<h4><strong>Measurement chain</strong></h4>

<div class="row justify-content-sm-center">
    <div class="col-sm-11 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/tubebench/measurement-chain.svg" title="tubebench measurement chain" alt="Measurement chain: tubebench drives the signal generator over SCPI, the amplifier drives the loudspeaker of the tube, four microphones M1 to M4 around the specimen feed the LAN-XI module, which streams to tubebench" class="img-fluid only-light" %}
        {% include figure.liquid loading="eager" path="assets/img/project/tubebench/measurement-chain-dark.svg" title="tubebench measurement chain" alt="Measurement chain: tubebench drives the signal generator over SCPI, the amplifier drives the loudspeaker of the tube, four microphones M1 to M4 around the specimen feed the LAN-XI module, which streams to tubebench" class="img-fluid only-dark figure-panel-dark" %}
    </div>
</div>
<div class="caption">
    {% include brand_mark.liquid name="tubebench" %}tubebench drives the generator over SCPI and reads four microphones through the acquisition module.
</div>

<div class="mt-3 mb-3">
<p>The generator and the acquisition need no shared clock. All four channels are sampled together, so dividing each by a reference channel cancels the unknown drive spectrum $S(f)$; the remaining gain ratio $C_k$ is removed by the calibration below.</p>
$$
H_k^{\,m} = \frac{Y_k}{Y_{\mathrm{ref}}} = C_k\,H_k
$$
</div>

As in the [automated field characterization]({% link _projects/aco_field_characterization.md %}) system, safety checks are part of the sequence: the output level is read back before the generator is switched on, and configured limits refuse unsafe settings.

<hr>

<h4><strong>Adapting to other labs</strong></h4>

Another lab's tube rarely comes with the same instruments. {% include brand_mark.liquid name="tubebench" %}tubebench talks to hardware only through drivers, so supporting a new signal generator or acquisition module, including NI DAQ devices and audio interfaces, means writing one driver class; the session, calibration, analysis and window stay unchanged.

In [Claude Code](https://claude.com/claude-code), the `/add-instrument` skill walks a lab through it:

1. **Manual first**: start from the instrument's programming manual; commands are never guessed.
2. **Suitability check**: confirm the instrument can do what the measurement needs before writing any code.
3. **Driver, model and tests**: build them from templates, then test everything in simulation.
4. **Hardware, step by step**: verify on the real instrument one step at a time, with the operator present and the output off first.

<hr>

<h4><strong>Switching calibration and validity</strong></h4>

<div class="row justify-content-sm-center">
    <div class="col-sm-11 mt-3 mt-md-0">
        {% include video.liquid path="assets/img/project/tubebench/switching-calibration.mp4" poster="/assets/img/project/tubebench/switching-calibration-poster.webp" title="Switching calibration on the virtual tube" class="img-fluid rounded z-depth-1" autoplay=true loop=true muted=true playsinline=true %}
    </div>
</div>
<div class="caption">
    Switching calibration on the virtual tube.
</div>

The gain and phase mismatch between microphones is measured in place by swapping them between ports: twelve guided steps, closed by an automatic empty-tube check. Every frequency line then gets a verdict, and lines that the geometry, calibration, signal quality or termination cannot support are masked, with the reason shown.

<hr>

<h4><strong>Verification</strong></h4>

<div class="row justify-content-sm-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/project/tubebench/simulation-recovery.png" title="simulated recovery of R and tau" alt="Reflection and transmission coefficient magnitudes recovered from a simulated measurement with a log sweep and with stepped sines, plotted over the analytic values" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    Simulation: reflection (top) and transmission (bottom) recovered by the full chain, against the analytic values (black).
</div>

The full measurement chain recovers the analytic values of the virtual tube, and more than 360 automated tests cover the analysis, the drivers and the window. On the lab's instruments, calibrations and swept-sine measurements have been run; validation on reference specimens is under way. Raw data are never overwritten, and every result is stored with its configuration, calibration and software version.

<h6><strong>Development Contributions</strong></h6>

- **Instrument control** for a home-built four-microphone tube: the full ASTM E2611 workflow in one application.
- **No shared clock** needed between generator and acquisition.
- **Self-qualifying results**: a validity verdict for every frequency line.
- **Virtual tube** for end-to-end testing without hardware.
- **Open source**, with plug-in instrument drivers and a Claude Code skill that guides other labs through adding their own.

<hr>

<h4><strong>Principle</strong></h4>

Each microphone pair separates the forward and backward plane waves on its side of the specimen (ASTM E1050[^2]); with one pair on each side, the specimen is characterized as a two-port (ASTM E2611, Song and Bolton[^3]).

<div class="mt-3 mb-3">
$$
p(x) = A\,e^{-jkx} + B\,e^{+jkx}
$$
<p>From the upstream amplitudes $A_1, B_1$ and the downstream $A_2, B_2$, referred to the specimen faces $x_L$ and $x_R$:</p>
$$
R = \frac{B_1\,e^{+jkx_L}}{A_1\,e^{-jkx_L}}, \qquad
\tau = \frac{A_2\,e^{-jkx_R}}{A_1\,e^{-jkx_L}}
$$
<p>For a thin element, the transfer impedance and the transmission loss it implies, independent of the termination:</p>
$$
Z_t = \frac{p_L - p_R}{u}, \qquad
\mathrm{TL} = 20\log_{10}\left\lvert 1 + \frac{Z_t}{2Z_c} \right\rvert
$$
<p>The usable band follows from the geometry, with the microphone spacing between 1&nbsp;% and 40&nbsp;% of a wavelength: 118&nbsp;Hz to 4.73&nbsp;kHz for the lab tube (29&nbsp;mm bore and spacing).</p>
</div>

<hr>

<h4><strong>Source code</strong></h4>

Source code, user guide and theory notes: <https://github.com/kimwoongji/tubebench>. To cite:

```bibtex
@software{kim_tubebench,
  author  = {Kim, Woongji},
  title   = {tubebench: four-microphone impedance-tube measurements in MATLAB},
  year    = {2026},
  url     = {https://github.com/kimwoongji/tubebench},
  license = {MIT}
}
```

An earlier two-microphone tube is described on the [hardware]({% link _projects/hardware.md %}) page.

<hr>

<h4><strong>References</strong></h4>

[^1]: <small>ASTM E2611-24, _Standard Test Method for Normal Incidence Determination of Porous Material Acoustical Properties Based on the Transfer Matrix Method_. ASTM International. DOI: [10.1520/E2611-24](https://doi.org/10.1520/E2611-24).</small>
[^2]: <small>ASTM E1050-24, _Standard Test Method for Impedance and Absorption of Acoustical Materials Using a Tube, Two Microphones and a Digital Frequency Analysis System_. ASTM International. DOI: [10.1520/E1050-24](https://doi.org/10.1520/E1050-24).</small>
[^3]: <small>B. H. Song and J. S. Bolton, "A transfer-matrix approach for estimating the characteristic impedance and wave numbers of limp and rigid porous materials," _J. Acoust. Soc. Am._, vol. 107, no. 3, pp. 1131--1152, 2000. DOI: [10.1121/1.428404](https://doi.org/10.1121/1.428404).</small>
