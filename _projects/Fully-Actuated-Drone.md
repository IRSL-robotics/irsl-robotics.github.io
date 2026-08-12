---
layout: page
title: Fully Actuated Drone with Non-Isotropic Wrench Shape
publication_title: "Design of a Fully Actuated Drone with Non-Isotropic Wrench Shape"
permalink: /projects/fully-actuated-drone/
description: An energy efficient fully actuated drone designed for directional aerial contact forces.
img: assets/img/publication_preview/design.gif
importance: 2
category: Hardware
research_area: hardware-design
research_item_type: publication
paper_url: https://ieeexplore.ieee.org/abstract/document/10801419
video_url: https://youtu.be/QhGdCXcCHgg
related_publications: false
---

{% include publication-detail-styles.liquid %}

<div class="publication-detail" markdown="1">

<a class="publication-detail__back" href="{{ '/research/hardware-design/' | relative_url }}">&larr; Back to Robotic Systems &amp; Hardware</a>

<p class="publication-detail__lead">{{ page.description }}</p>

{% include figure.liquid loading="eager" path=page.img title=page.title class="img-fluid rounded z-depth-1" %}

## Overview

Conventional fully actuated drones often tilt their propellers symmetrically, producing an isotropic wrench shape that can waste energy during directional contact tasks. This project begins with the force and torque set required for aerial contact manipulation and incorporates it directly into the vehicle design optimization.

The optimized non-isotropic configuration preserves the required wrench capability while reducing hovering energy. In simulation, it more than doubled hovering efficiency and improved contact force efficiency by nearly 1.4 times compared with a typical fully actuated design.

## Video

{% include video.liquid path="https://www.youtube.com/embed/QhGdCXcCHgg" class="img-fluid rounded z-depth-1" %}

## Publication

S. Park and M. J. Kim, “Design of a Fully Actuated Drone with Non-Isotropic Wrench Shape,” *IEEE/RSJ IROS*, 2024. [IEEE](https://ieeexplore.ieee.org/abstract/document/10801419)

<div class="publication-detail__footer"><a class="publication-detail__source" href="https://sites.google.com/view/kaist-roboticslab/research/aerial-manipulation/aerial_research-topic-5">Original Project Page ↗</a></div>

</div>
