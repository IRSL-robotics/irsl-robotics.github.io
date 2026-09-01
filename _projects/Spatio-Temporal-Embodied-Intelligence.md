---
layout: page
title: Spatio-Temporal Embodied Intelligence
permalink: /projects/spatio-temporal-embodied-intelligence/
description: Understanding space, time, and interaction for embodied intelligence.
img: assets/img/projects/spatio-temporal/scdm.png
importance: 2
category: Intelligence
research_area: physical-ai
research_item_type: project
related_publications: false
---

{% include publication-detail-styles.liquid %}

<div class="publication-detail spatio-temporal-project" markdown="1">

<a class="publication-detail__back" href="{{ '/research/physical-ai/' | relative_url }}">← Back to Physical AI</a>

<p class="publication-detail__lead">
Building embodied agents that understand where interaction matters, how the 3D world is organized, and how it changes through action.
</p>

Humans do not interact with the world as a sequence of isolated images. We continuously reason about **how they relate to one another, which parts of the environment matter for interaction, and how the world may change as we act**.

Many robotic systems, however, still treat perception as a transient input to action. This makes it difficult to maintain a consistent understanding of the environment, reason beyond the current observation, or represent the many possible ways an interaction may unfold.

Our research explores how **spatial and temporal structure can become an organizing principle for embodied intelligence**. We study how robots can identify interaction-relevant structure, maintain efficient representations of the surrounding 3D world, and use these representations to generate adaptive behavior.

---

## Spatial Intelligence for Interaction

Intelligent behavior depends not only on what a robot sees, but on **where interaction can occur and how actions are constrained by the surrounding space**.

Our research investigates models that organize action generation around this interaction-relevant spatial structure. Rather than treating an observation as an undifferentiated input, the goal is to focus computation on the parts of the environment that determine how the robot can act.

Across problems such as dexterous grasping and precise manipulation, we explore generative models that can represent **multiple physically meaningful ways of interacting with the same scene**, while remaining robust to visual variation.

<div class="publication-detail__media">

  <img
    src="{{ '/assets/img/projects/spatio-temporal/scdm.png' | relative_url }}"
    alt="Spatially conditioned action generation for dexterous robotic interaction"
    loading="lazy"
  >

</div>

Spatial conditioning provides a way to express **where action-relevant information lies in the scene** and to use that structure when generating robot behavior. In dexterous grasping, for example, this allows a model to represent diverse multi-finger configurations rather than collapsing to a small set of solutions.

The same principle extends to visuomotor control. Even from a single RGB observation, a robot can learn to extract the spatial information that matters for precise interaction while ignoring distractors and other irrelevant visual changes.

<div class="publication-detail__media">

  <img
    src="{{ '/assets/img/projects/spatio-temporal/SCDP.gif' | relative_url }}"
    alt="Precise and distractor-robust manipulation from a single RGB observation"
    loading="lazy"
  >

</div>

---

## Persistent 3D World Understanding

Embodied intelligence requires an understanding of the world that persists beyond a single observation. We study compact representations of **3D structure and dynamics** that allow robots to maintain and update their understanding of the environment over time.

Our goal is to move beyond static reconstruction toward action-oriented world representations that support perception, prediction, planning, and interaction.

<div class="publication-detail__media-grid">

  <img
    src="{{ '/assets/img/projects/spatio-temporal/3d_gaussian1.gif' | relative_url }}"
    alt="Efficient persistent 3D representation of a robotic scene"
    loading="lazy"
  >

  <img
    src="{{ '/assets/img/projects/spatio-temporal/3d_gaussian2.gif' | relative_url }}"
    alt="Learning dynamic 3D structure for robotic interaction"
    loading="lazy"
  >

</div>

<style>
  .spatio-temporal-project .publication-detail__media {
    width: min(100%, 720px);
    margin: 1.2rem auto 2rem;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    border: 1px solid color-mix(in srgb, var(--global-divider-color, #d0d5dd) 70%, transparent);
    border-radius: 16px;
    background: color-mix(in srgb, var(--global-divider-color, #d0d5dd) 18%, transparent);
    box-shadow: 0 10px 28px color-mix(in srgb, var(--global-text-color, #101828) 7%, transparent);
  }

  .spatio-temporal-project .publication-detail__media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .spatio-temporal-project .publication-detail__media-grid {
    display: grid;
    width: min(100%, 600px);
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    margin: 1.5rem auto 2.5rem;
  }

  .spatio-temporal-project .publication-detail__media-grid img {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    border: 1px solid color-mix(in srgb, var(--global-divider-color, #d0d5dd) 70%, transparent);
    border-radius: 14px;
    background: color-mix(in srgb, var(--global-divider-color, #d0d5dd) 18%, transparent);
    object-fit: cover;
    box-shadow: 0 8px 22px color-mix(in srgb, var(--global-text-color, #101828) 6%, transparent);
  }

  @media (max-width: 576px) {
    .spatio-temporal-project .publication-detail__media-grid {
      gap: 0.65rem;
    }
  }
</style>

---

## Toward Spatio-Temporal Embodied Intelligence

These directions reflect a common view of embodied intelligence: a robot should not experience the world as disconnected observations and actions.

Our long-term goal is to build **spatio-temporal world models** that capture the structure and dynamics of the physical world, and enable robots to use these models for perception, prediction, and action.

Such world models can allow embodied agents to understand dynamic 3D environments, anticipate the consequences of their actions, and generate adaptive behavior across a wide range of physical tasks.

</div>