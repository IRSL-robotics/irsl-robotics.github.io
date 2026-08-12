---
layout: page
title: Multi-Contact Localization and Force Identification
publication_title: "Proprioceptive Sensor-Based Simultaneous Multi-Contact Point Localization and Force Identification for Robotic Arms"
permalink: /projects/multi-contact-localization/
description: Proprioceptive estimation of multiple contact locations and forces on robot arms.
img: assets/img/publication_preview/proprioceptive.gif
importance: 3
category: Intelligence
research_area: physical-ai
research_item_type: publication
paper_url: https://ieeexplore.ieee.org/document/10161173
video_url: https://youtu.be/PgLwQNeAgYs
related_publications: false
---

{% include publication-detail-styles.liquid %}

<div class="publication-detail" markdown="1">

<a class="publication-detail__back" href="{{ '/research/physical-ai/' | relative_url }}">&larr; Back to Physical AI</a>

<p class="publication-detail__lead">{{ page.description }}</p>

## Overview

Safe physical interaction requires a robot to identify where contact occurs and how much force is applied. This project estimates multiple contact locations and forces using joint torque sensors together with a force and torque sensor at the robot base.

Robot mesh preprocessing supports fast computation, while a modified particle filter uses the additional base sensor information to distinguish multiple simultaneous contacts. The method was validated on a collaborative robot arm.

## Video

{% include video.liquid path="https://www.youtube.com/embed/PgLwQNeAgYs" class="img-fluid rounded z-depth-1" %}

## Publication

S. W. Han and M. J. Kim, “Proprioceptive Sensor-Based Simultaneous Multi-Contact Point Localization and Force Identification for Robotic Arms,” *IEEE ICRA*, 2023. [arXiv](https://arxiv.org/abs/2303.03903) · [IEEE](https://ieeexplore.ieee.org/document/10161173)

<div class="publication-detail__footer"><a class="publication-detail__source" href="https://sites.google.com/view/kaist-roboticslab/research/mobile-manipulation/mobile_research-topic-2">Original Project Page ↗</a></div>

</div>
