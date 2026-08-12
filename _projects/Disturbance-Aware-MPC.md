---
layout: page
title: Disturbance-Aware Model Predictive Control
publication_title: "Disturbance-Aware Model Predictive Control of Underactuated Robotics Systems"
permalink: /projects/disturbance-aware-mpc/
description: Real time robust MPC for underactuated robots subject to unmatched disturbances.
img: assets/img/publication_preview/da-mpc.gif
importance: 1
category: Control
research_area: robot-control
research_item_type: publication
paper_url: https://ieeexplore.ieee.org/abstract/document/10801851
video_url: https://youtu.be/I3UTf2dZVbE
related_publications: false
---

{% include publication-detail-styles.liquid %}

<div class="publication-detail" markdown="1">

<a class="publication-detail__back" href="{{ '/research/robot-control/' | relative_url }}">&larr; Back to Control &amp; Safety</a>

<p class="publication-detail__lead">{{ page.description }}</p>

{% include figure.liquid loading="eager" path=page.img title=page.title class="img-fluid rounded z-depth-1" %}

## Overview

Disturbance-Aware MPC improves the robustness of model predictive control for underactuated robotic systems. A nonlinear disturbance observer estimates unknown disturbances online, and the controller explicitly incorporates those estimates into its future state predictions.

The approach works with standard optimal control solvers and is suitable for real time control. Its effectiveness was demonstrated on an underactuated quadrotor and compared with L1 adaptive MPC in simulation.

## Video

{% include video.liquid path="https://www.youtube.com/embed/I3UTf2dZVbE" class="img-fluid rounded z-depth-1" %}

## Publication

J. Kim and M. J. Kim, “Disturbance-Aware Model Predictive Control of Underactuated Robotics Systems,” *IEEE/RSJ IROS*, 2024. [IEEE](https://ieeexplore.ieee.org/abstract/document/10801851)

<div class="publication-detail__footer"><a class="publication-detail__source" href="https://sites.google.com/view/kaist-roboticslab/research/aerial-manipulation/da_mpc">Original Project Page ↗</a></div>

</div>
