---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D. in Computer Science and Technology, Beijing University of Posts and Telecommunications, 2021.09–2027.06 (expected)
* B.Eng. in Intelligence Science and Technology, Xidian University, 2017.09–2021.06

Research
======
* National Key R&D Program: AI video enhancement for high-format cinema (2024.10–2026.10)
  * Cinematic SDR-to-HDR conversion, HDRMovieformer, and a DaVinci Resolve plugin

Skills
======
* Computer vision: HDR conversion, image super-resolution, image restoration, aesthetic assessment
* Python, PyTorch, OpenCV, Linux, C++, ONNX, OpenFX / DaVinci plugin development

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service
======
* Session Chair, ICASSP 2026
* Reviewer for CVPR, AAAI, IJCAI, and ECCV
