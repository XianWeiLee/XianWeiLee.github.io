---
layout: archive
title: "CV"
title_zh: "简历"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="lang-en">
{% capture cv_en %}
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
{% endcapture %}
{{ cv_en | markdownify }}
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
{% capture cv_en_service %}
Service
======
* Session Chair, ICASSP 2026
* Reviewer for CVPR, AAAI, IJCAI, and ECCV
{% endcapture %}
{{ cv_en_service | markdownify }}
</div>

<div class="lang-zh">
{% capture cv_zh %}
教育背景
======
* 北京邮电大学，计算机科学与技术博士，2021.09–2027.06（预计）
* 西安电子科技大学，智能科学与技术工学学士，2017.09–2021.06

科研项目
======
* “十四五”国家重点研发计划：高格式电影 AI 视频增强（2024.10–2026.10）
  * 电影级 SDR 转 HDR、HDRMovieformer，以及达芬奇插件

专业技能
======
* 计算机视觉：HDR 转换、图像超分辨率、图像修复、美学评价
* Python、PyTorch、OpenCV、Linux、C++、ONNX、OpenFX / 达芬奇插件开发

论文
======
{% endcapture %}
{{ cv_zh | markdownify }}
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
{% capture cv_zh_service %}
学术服务
======
* ICASSP 2026 Session Chair
* CVPR、AAAI、IJCAI、ECCV 审稿人
{% endcapture %}
{{ cv_zh_service | markdownify }}
</div>
