---
layout: page
title: Extreme High-Gain Friction Observer with L1 Adaptation
permalink: /projects/l1afo/
description: High gain friction observation for accurate control and natural interaction of flexible joint robots.
img: assets/img/publication_preview/l1afo.png
importance: 0
category: Control
research_area: robot-control
research_item_type: publication
related_publications: false
---

{% include figure.liquid loading="eager" path=page.img title=page.title class="img-fluid rounded z-depth-1" %}

## Overview

Compliance control allows flexible joint robots to interact with unknown environments, but joint friction can reduce control accuracy and backdrivability. Existing model free friction observers often face a tradeoff between accurate friction compensation and natural interaction with stiff environments.

This work introduces a friction observer based on an L1 adaptive framework. It supports extremely high observer gains while maintaining natural physical interaction. The controller can use measured motor signals directly, reducing implementation complexity, and its performance can be adjusted with a single parameter.

Performance analysis shows that increasing the observer gain reduces steady state error. A stable numerical method addresses the computational issues associated with very high gains. Simulations and experiments on both single joint and seven joint flexible joint robots demonstrate improved friction compensation and more natural contact with stiff environments.

## Video

{% include video.liquid path="https://www.youtube.com/embed/hDSziWYDr94" class="img-fluid rounded z-depth-1" %}

## Publication

Y. B. Lee, T. H. Yun, and M. J. Kim, “Extreme High-Gain Friction Observer of Flexible Joint Robots With L1 Adaptive Framework,” *IEEE Transactions on Robotics*, 2026. [IEEE](https://ieeexplore.ieee.org/document/11488895/) · [DOI](https://doi.org/10.1109/TRO.2026.3686177)

[Original project page](https://sites.google.com/view/kaist-roboticslab/research/mobile-manipulation/l1afo)
