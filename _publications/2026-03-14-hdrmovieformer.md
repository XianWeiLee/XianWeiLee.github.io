---
title: "HDRMovieformer: A Transformer Framework and Benchmark for Cinematic SDR-to-HDR Conversion"
collection: publications
category: conferences
permalink: /publication/2026-03-14-hdrmovieformer
excerpt: 'We present HDRMovie7K, a cinematic SDR–HDR dataset from professional DCDM workflows, and HDRMovieformer, a luminance-guided transformer for theatrical SDR-to-HDR conversion.'
date: 2026-03-14
venue: 'AAAI 2026'
paperurl: '/files/hdrmovieformer-aaai2026.pdf'
citation: 'Li, Xianwei, Huiyuan Fu, Chuanming Wang, and Huadong Ma. (2026). &quot;HDRMovieformer: A Transformer Framework and Benchmark for Cinematic SDR-to-HDR Conversion.&quot; <i>Proceedings of the AAAI Conference on Artificial Intelligence</i>, 40(8), 6495–6503.'
---

**Authors:** **Xianwei Li**, Huiyuan Fu (corresponding author), Chuanming Wang, Huadong Ma

**Venue:** The 40th AAAI Conference on Artificial Intelligence (AAAI 2026), CCF-A

**Links:** [PDF](/files/hdrmovieformer-aaai2026.pdf) · [DOI](https://doi.org/10.1609/aaai.v40i8.37578) · [Code](https://github.com/XianWeiLee/HDRMovieformer)

<img src="/images/venues/aaai.png" alt="AAAI" style="max-height: 48px; margin: 0.5rem 0 1rem;" />

## Abstract

With the growing prevalence of HDR-capable cinema venues such as Cinity LED theaters, there is an increasing demand to convert existing Standard Dynamic Range (SDR) films into High Dynamic Range (HDR) formats for theatrical presentation. However, existing SDR-to-HDR conversion methods are primarily tailored for consumer-grade content such as television and therefore fall short of the stringent requirements of professional cinematic material. To bridge this gap, we present HDRMovie7K, the first large-scale, lossless dataset of cinematic SDR-HDR frame pairs sourced from professional Digital Cinema Distribution Master (DCDM) workflows. Based on this foundation, we introduce HDRMovieformer, a transformer-based framework featuring a Luminance Estimator module for luminance guidance, a Luminance-Guided Multi-Head Self-Attention to focus on critical fine-detail recovery, and a Chroma Refiner for color accuracy, optimized with a novel Wide Color Gamut Loss. To further evaluate our model in online streaming media scenarios, we introduce HDRMovie1K, a dataset curated from publicly available HDR film clips. Extensive experiments on both HDRMovie7K and HDRMovie1K demonstrate that our method achieves state-of-the-art performance.

## 摘要

随着 Cinity LED 影院等具备 HDR 放映能力的影院日益普及，将现有 SDR 影片转换为 HDR 格式以用于影院放映的需求不断增长。然而，现有 SDR 转 HDR 方法主要面向电视等消费级内容，难以满足专业电影素材的严格要求。为此，我们提出 HDRMovie7K，这是首个来自专业数字电影发行母版（DCDM）流程的大规模无损电影级 SDR–HDR 帧对数据集。在此基础上，我们提出基于 Transformer 的 HDRMovieformer：包含亮度估计模块以提供亮度引导、亮度引导多头自注意力以聚焦关键细节恢复，以及色度细化模块以保证色彩准确性，并采用新型宽色域损失进行优化。为评估在线流媒体场景，我们还构建了来自公开 HDR 影片片段的 HDRMovie1K 数据集。在 HDRMovie7K 与 HDRMovie1K 上的大量实验表明，本方法达到了当前最优性能。
