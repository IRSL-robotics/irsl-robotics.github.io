---
layout: page
title: Manipulation Planning with Tight Geometric Constraints
permalink: /projects/reachability-tree-planning/
description: Hierarchical task and motion planning guided by a reachability tree.
img: assets/img/publication_preview/TAMP.gif
importance: 2
category: Intelligence
research_area: physical-ai
research_item_type: publication
related_publications: false
---

{% include publication-detail-styles.liquid %}

<div class="publication-detail" markdown="1">

<a class="publication-detail__back" href="{{ '/research/physical-ai/' | relative_url }}">&larr; Back to Physical AI</a>

<p class="publication-detail__lead">{{ page.description }}</p>

{% include figure.liquid loading="eager" path=page.img title=page.title class="img-fluid rounded z-depth-1" %}

## Overview

Manipulation tasks with tight geometric constraints are difficult for sampling based methods because many sampled actions are infeasible. This project introduces a hierarchical planning algorithm built around a reachability tree to focus computation on promising task and motion choices.

Results from low level motion planning are returned to the high level planner. This experience improves later decisions, reduces unproductive sampling, and avoids unnecessary growth of the symbolic planning problem.

## Video

{% include video.liquid path="https://www.youtube.com/embed/Ro7cHC7oUzE" class="img-fluid rounded z-depth-1" %}

## Publication

K. Kim, D. Park, and M. J. Kim, “A Reachability Tree-Based Algorithm for Robot Task and Motion Planning,” *IEEE ICRA*, 2023. [arXiv](https://arxiv.org/abs/2303.03825) · [IEEE](https://ieeexplore.ieee.org/document/10160294)

<div class="publication-detail__footer"><a class="publication-detail__source" href="https://sites.google.com/view/kaist-roboticslab/research/mobile-manipulation/mobile_research-topic-1">Original Project Page &nearr;</a></div>

</div>
