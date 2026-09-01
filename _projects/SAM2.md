---
layout: page
title: SAM2
permalink: /projects/sam2/
description: Enabling cable-suspended aerial manipulators to maneuver through high-altitude workspaces and physically interact with their environment.
img: assets/img/projects/sam2/sam2.png
image_fit: contain
importance: 2
category: Hardware
research_area: hardware-design
research_item_type: project
related_publications: false
---

{% include publication-detail-styles.liquid %}

<div class="publication-detail sam2-project" markdown="1">

<a class="publication-detail__back" href="{{ '/research/hardware-design/' | relative_url }}">&larr; Back to Robotic Systems &amp; Hardware</a>

<p class="publication-detail__lead"><strong>Beyond the limits of aerial physical interaction:</strong> we develop aerial robotic systems that can navigate demanding high-altitude workspaces, physically engage with their surroundings, and perform complex manipulation tasks in environments that are difficult or hazardous for people to access.</p>

Large-scale structures such as buildings, bridges, towers, and wind turbines require more than visual inspection. Maintenance, repair, surface operations, and tool use all involve direct physical interaction with the environment. Performing such tasks at height exposes human workers to substantial risk and operational cost, while robotic operation requires capabilities beyond simply reaching or observing the workspace.

SAM2, a **cable-suspended aerial manipulator with maneuverability**, actively moves through an extended workspace and physically interacts with the environment from the positions and configurations required by a task.

We continually expand the ability of aerial robots to **move, establish contact, adapt, and perform complex physical interaction in demanding high-altitude environments**.

## Design Optimization

Complex physical interaction requires effective control as well as a robotic system whose physical capabilities match the demands of the task.

In SAM2, we explicitly incorporate requirements for maneuvering, stabilization, and physical interaction into **design optimization** to develop robotic systems with the capabilities required for aerial manipulation.

We define the motion and physical interaction requirements of a task and formulate them within an optimization problem that determines the mechanical configuration and actuation design.

Through this optimization-based approach, we derive robotic configurations tailored to different physical tasks and develop systems that enable forms of aerial interaction that are difficult to realize with conventional aerial robots.

<figure class="publication-detail__media">
  <img
    src="{{ '/assets/img/projects/sam2/sam2.png' | relative_url }}"
    alt="SAM2 cable-suspended aerial manipulator"
    loading="eager"
  >
</figure>

## Maneuverability and Aerial Contact Manipulation

Aerial physical interaction requires a robot to remain stable while also **actively reaching the required workspace and approaching the environment from different positions and orientations**.

SAM2 retains the advantages of cable suspension while enabling active maneuvering throughout its surrounding workspace. After reaching a target location, the robot can establish physical contact and perform aerial contact manipulation.

Our research extends beyond simple positioning and predefined contact conditions. We investigate aerial manipulation that enables purposeful motion and physical interaction across **complex structures, diverse configurations, and uncertain environments**.

## Toward Dexterous High-Altitude Physical Work

We seek to **push beyond the current limits of high-altitude physical work** and expand the range of tasks that aerial robots can perform in environments that remain difficult or hazardous for people.

Alongside advances in maneuverability and physical interaction, we integrate research in **vision, perception, learning, and embodied intelligence** into SAM2 as a unified robotic system.

This integration enables the robot to understand its surroundings, determine where and how to interact, adapt to uncertainty, and perform increasingly complex and dexterous manipulation in real-world environments.

Ultimately, we envision aerial robots performing not only inspection, but also **maintenance, repair, surface operations, tool use, and other forms of physical work** on buildings, bridges, towers, wind turbines, and large industrial structures.

Through SAM2, we extend the role of aerial robots from observing hard-to-reach environments to **actively navigating complex workspaces, understanding their surroundings, interacting with the physical world, and carrying out complex tasks on behalf of people**.

</div>
