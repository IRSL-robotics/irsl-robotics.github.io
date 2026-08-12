---
layout: page
title: "CDM: Contact Diffusion Model"
publication_title: "CDM: Contact Diffusion Model for Multi-Contact Point Localization"
permalink: /projects/cdm/
description: A diffusion model for accurate multi-contact point localization using proprioceptive sensing.
img: assets/img/publication_preview/cdm.gif
importance: 1
category: Intelligence
research_area: physical-ai
research_item_type: publication
paper_url: https://ieeexplore.ieee.org/document/11127780
video_url: https://youtu.be/6kDZrnkFvp4
related_publications: false
---

{% include publication-detail-styles.liquid %}

<div class="publication-detail" markdown="1">

<a class="publication-detail__back" href="{{ '/research/physical-ai/' | relative_url }}">&larr; Back to Physical AI</a>

<p class="publication-detail__lead">{{ page.description }}</p>

{% include figure.liquid loading="eager" path=page.img title=page.title class="img-fluid rounded z-depth-1" %}

## Overview

CDM is a learning based method for locating multiple contacts on a robot from joint torque sensors and a force and torque sensor at the base. A diffusion model represents the multiple contact configurations that can produce the same sensor measurements, while signed distance field information helps the model reason over complex robot surfaces.

The method runs in real time and was validated in simulation and on a physical robot. It achieved localization errors of 0.44 cm for a single contact and 1.24 cm for two contacts in real world experiments.

## Video

{% include video.liquid path="https://www.youtube.com/embed/6kDZrnkFvp4" class="img-fluid rounded z-depth-1" %}

## Publication

S. W. Han and M. J. Kim, “CDM: Contact Diffusion Model for Multi-Contact Point Localization,” *IEEE ICRA*, 2025. [arXiv](https://arxiv.org/abs/2502.06109) · [IEEE](https://ieeexplore.ieee.org/document/11127780)

<div class="publication-detail__footer"><a class="publication-detail__source" href="https://sites.google.com/view/kaist-roboticslab/research/mobile-manipulation/cdm">Original Project Page ↗</a></div>

</div>
