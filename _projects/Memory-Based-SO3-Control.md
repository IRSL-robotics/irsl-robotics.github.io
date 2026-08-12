---
layout: page
title: Memory-Based SO(3) Representations for Impedance Control
permalink: /projects/memory-based-so3-control/
description: Continuous rotation representation for globally consistent task space impedance control.
img: assets/img/publication_preview/memory.gif
importance: 6
category: Control
research_area: robot-control
research_item_type: publication
related_publications: false
---

{% include figure.liquid loading="eager" path=page.img title=page.title class="img-fluid rounded z-depth-1" %}

## Overview

Classical rotation representations limit task space impedance control near rotations of pi. This project introduces extended exponential coordinates, a memory based SO(3) representation that integrates past exponential coordinates to represent rotation continuously.

The representation reconstructs the physical rotation through the exponential map and supports an impedance controller with natural behavior across large rotations. Real world experiments validate the controller beyond the local range of conventional formulations.

## Videos

{% include video.liquid path="https://www.youtube.com/embed/rYX7vmhB0m8" class="img-fluid rounded z-depth-1" %}

{% include video.liquid path="https://www.youtube.com/embed/YHuWLjrs4Ew" class="img-fluid rounded z-depth-1" %}

## Publication

J. Jeong, H. Mishra, C. Ott, and M. J. Kim, “A Memory-based SO(3) Parameterization: Theory and Application to 6D Impedance Control with Radially Unbounded Potential Function,” *IEEE ICRA*, 2022. [IEEE](https://ieeexplore.ieee.org/document/9812268)

[Original project page](https://sites.google.com/view/kaist-roboticslab/research/aerial-manipulation/eec)
