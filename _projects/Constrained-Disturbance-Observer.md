---
layout: page
title: Disturbance Observer With Constraints
permalink: /projects/constrained-disturbance-observer/
description: A quadratic programming framework that adds user defined constraints to disturbance observers.
img: assets/img/publication_preview/cdob.png
importance: 2
category: Control
research_area: robot-control
research_item_type: publication
related_publications: false
---

{% include publication-detail-styles.liquid %}

<div class="publication-detail" markdown="1">

<a class="publication-detail__back" href="{{ '/research/robot-control/' | relative_url }}">&larr; Back to Control &amp; Safety</a>

<p class="publication-detail__lead">{{ page.description }}</p>

{% include figure.liquid loading="eager" path=page.img title=page.title class="img-fluid rounded z-depth-1" %}

## Overview

The constrained disturbance observer, or CDOB, extends conventional disturbance rejection with explicit user defined constraints. It combines a disturbance observer with a quadratic program that simulates the nominal system while respecting those constraints.

When no constraint is active, CDOB behaves like a conventional disturbance observer. When a constraint becomes active, it limits disturbance rejection to keep the requested behavior within the feasible region. Numerical studies demonstrate this behavior across several constrained control scenarios.

## Publication

T. H. Yun and M. J. Kim, “Disturbance Observer With Constraints,” *IEEE Control Systems Letters*, 2024. [IEEE](https://ieeexplore.ieee.org/abstract/document/10571557)

<div class="publication-detail__footer"><a class="publication-detail__source" href="https://sites.google.com/view/kaist-roboticslab/research/mobile-manipulation/mobile_research-topic-6">Original Project Page &nearr;</a></div>

</div>
