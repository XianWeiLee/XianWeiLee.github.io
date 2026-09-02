---
title: "RB-HDRDiff: Reducing Banding Artifacts for Temporally Consistent SDR-to-HDRTV Reconstruction via Diffusion Models"
collection: publications
category: conferences
permalink: /publication/2026-08-01-rb-hdrdiff
excerpt: 'RB-HDRDiff uses a diffusion prior and a temporal consistency refiner to reconstruct HDRTV from SDRTV with fewer banding artifacts and more stable video results.'
date: 2026-08-01
venue: 'PRCV 2026'
paperurl: '/files/rb-hdrdiff-prcv2026.pdf'
citation: 'Li, Xianwei, et al. (2026). &quot;RB-HDRDiff: Reducing Banding Artifacts for Temporally Consistent SDR-to-HDRTV Reconstruction via Diffusion Models.&quot; <i>Chinese Conference on Pattern Recognition and Computer Vision (PRCV)</i>.'
---

**Authors:** **Xianwei Li** et al.

**Venue:** Chinese Conference on Pattern Recognition and Computer Vision (PRCV 2026), CCF-C

**Links:** [PDF](/files/rb-hdrdiff-prcv2026.pdf)

<img src="/images/venues/prcv.png" alt="PRCV" style="max-height: 48px; margin: 0.5rem 0 1rem;" />

## Abstract

Learning-based SDRTV-to-HDRTV reconstruction methods often suffer from severe banding artifacts due to the aggressive compression of visual information into low-dimensional latent spaces. Besides, most existing approaches provide limited support for maintaining temporal coherency when applied to videos, while temporally consistent HDRTV datasets remain scarce. To address these challenges, we propose RB-HDRDiff, a diffusion-based HDRTV reconstruction framework that utilizes the non-compressive latent space of diffusion models to reduce banding artifacts and improve visual fidelity. RB-HDRDiff adopts a two-stage training strategy. First, a diffusion model is pre-trained on high-quality HDR images to learn a robust HDR prior. Second, we introduce HDR Temporal Consistency Refiner, a video refinement module that improves inter-frame consistency by incorporating information from neighboring frames while maintaining computational efficiency. We further introduce a new HDR video dataset for temporally consistent HDRTV reconstruction. Extensive experiments demonstrate that RB-HDRDiff outperforms state-of-the-art methods in terms of visual quality, banding artifact reduction, and temporal stability.

## 摘要

基于学习的 SDRTV 到 HDRTV 重建方法常因将视觉信息压缩到低维潜空间而产生严重条带伪影。此外，现有方法在视频上的时序一致性支持有限，且时序一致的 HDRTV 数据集仍然稀缺。为此，我们提出 RB-HDRDiff，一种基于扩散模型的 HDRTV 重建框架，利用扩散模型非压缩潜空间减少条带伪影并提升视觉保真度。RB-HDRDiff 采用两阶段训练：首先在高质量 HDR 图像上预训练扩散模型以学习稳健的 HDR 先验；随后引入 HDR 时序一致性细化模块，利用相邻帧信息提升帧间一致性并保持计算效率。我们还提出新的 HDR 视频数据集，用于时序一致的 HDRTV 重建。大量实验表明，RB-HDRDiff 在视觉质量、条带抑制和时序稳定性上均优于现有方法。
