---
layout: page
title: Multi-Contact Feedback MPC
publication_title: "Online Multi-Contact Feedback Model Predictive Control for Interactive Robotic Tasks"
permalink: /projects/multi-contact-feedback-mpc/
description: Real time model predictive control that responds to multiple contacts at unknown locations.
img: assets/img/publication_preview/online.gif
importance: 3
category: Control
research_area: robot-control
research_item_type: publication
paper_url: https://ieeexplore.ieee.org/document/10611151
video_url: https://youtu.be/pZbkHaxT1ao
related_publications: false
---

{% include publication-detail-styles.liquid %}

<div class="publication-detail" markdown="1">

<a class="publication-detail__back" href="{{ '/research/robot-control/' | relative_url }}">&larr; Back to Control &amp; Safety</a>

<p class="publication-detail__lead">{{ page.description }}</p>

{% include figure.liquid loading="eager" path=page.img title=page.title class="img-fluid rounded z-depth-1" %}

## Overview

This project introduces an explicit contact feedback loop into model predictive control for interactive robotic tasks. A multi-contact particle filter estimates contact locations and forces in real time, and a spring contact model incorporates that information into the MPC formulation.

Using differential dynamic programming, the controller operates a seven degree of freedom robot without simplifying its dynamics. The resulting update rates allow the robot to respond to unexpected contacts during real world tasks.

## Videos

{% include video.liquid path="https://www.youtube.com/embed/pZbkHaxT1ao" class="img-fluid rounded z-depth-1" %}

{% include video.liquid path="https://www.youtube.com/embed/OyA4DG24TWo" class="img-fluid rounded z-depth-1" %}

## Publication

S. W. Han, M. Iskandar, J. Lee, and M. J. Kim, “Online Multi-Contact Feedback Model Predictive Control for Interactive Robotic Tasks,” *IEEE ICRA*, 2024. [arXiv](https://arxiv.org/abs/2403.08302) · [IEEE](https://ieeexplore.ieee.org/document/10611151)

<div class="publication-detail__footer"><a class="publication-detail__source" href="https://sites.google.com/view/kaist-roboticslab/research/mobile-manipulation/mobile_research-topic-5">Original Project Page ↗</a></div>

</div>
