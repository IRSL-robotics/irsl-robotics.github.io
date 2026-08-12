---
layout: page
title: Constrained Nonlinear Disturbance Observer
publication_title: "Constrained Nonlinear Disturbance Observer for Robotic Systems"
permalink: /projects/constrained-nric/
description: Constraint aware nonlinear disturbance observation for contact responsive robot control.
img: assets/img/publication_preview/cnric.gif
importance: 4
category: Control
research_area: robot-control
research_item_type: publication
paper_url: https://ieeexplore.ieee.org/abstract/document/10611091
related_publications: false
---

{% include publication-detail-styles.liquid %}

<div class="publication-detail" markdown="1">

<a class="publication-detail__back" href="{{ '/research/robot-control/' | relative_url }}">&larr; Back to Control &amp; Safety</a>

<p class="publication-detail__lead">{{ page.description }}</p>

{% include figure.liquid loading="eager" path=page.img title=page.title class="img-fluid rounded z-depth-1" %}

## Overview

Constrained NRIC embeds optimization into a nonlinear disturbance observer for robotic systems. Explicit constraints give the controller additional properties while preserving the robustness and simple structure of disturbance observer based control.

One application is contact responsive motion control. The robot tracks its desired trajectory during free motion but reacts appropriately when it encounters an unknown interaction. Experiments on a physical robot validate the proposed designs.

## Publication

J. W. Han, D. Park, and M. J. Kim, “Constrained Nonlinear Disturbance Observer for Robotic Systems,” *IEEE ICRA*, 2024. [IEEE](https://ieeexplore.ieee.org/abstract/document/10611091)

<div class="publication-detail__footer"><a class="publication-detail__source" href="https://sites.google.com/view/kaist-roboticslab/research/mobile-manipulation/c-nric">Original Project Page ↗</a></div>

</div>
