---
layout: page
title: SIAM
description: "A propeller-free cable-suspended dual-arm manipulation platform for high-altitude physical work."
img: assets/img/projects/siam/SIAM.png
importance: 1
category: Hardware
research_area: hardware-design
research_item_type: project
related_publications: false
---

{% include publication-detail-styles.liquid %}

<div class="publication-detail siam-project" markdown="1">

<a class="publication-detail__back" href="{{ '/research/hardware-design/' | relative_url }}">&larr; Back to Robotic Systems &amp; Hardware</a>

<p class="publication-detail__lead"><strong>Building a new robotic platform for high-altitude physical work:</strong> We develop a propeller-free cable-suspended robot that combines internal stabilization and dexterous manipulation for inspection, maintenance, repair, and other physical tasks in difficult-to-access environments.</p>

Robots can already reach many high-altitude environments for inspection, but **performing physical work** in these environments remains challenging. Maintenance and repair require a robot not only to access a worksite, but also to remain stable while making contact, operating tools, handling objects, and exerting forces on the surrounding structure.

Conventional aerial manipulators typically rely on propeller thrust to support and stabilize the robot. This makes physical interaction near walls, structures, and confined workspaces difficult, particularly when sustained contact or large manipulation forces are required.

**SIAM — Cable-Suspended System with Internally-Actuated Mass — explores a different robotic system architecture.**

Instead of using propellers to support its weight, SIAM is suspended by a cable. The cable provides the main supporting force, while **internal actuation** regulates the motion and configuration of the suspended platform. This separation between **weight support** and **platform stabilization** allows us to investigate a new class of robotic systems designed specifically for physical work at height. Our goal is to develop SIAM as an integrated robotic platform that can **reach high-altitude workspaces, stabilize itself during interaction, and perform dexterous manipulation tasks**.

<figure class="siam-project__media siam-project__media--hero">
  <img
    src="{{ '/assets/img/projects/siam/SIAM.png' | relative_url }}"
    alt="The SIAM cable-suspended dual-arm robotic platform"
    loading="eager"
  >
</figure>

## Cable-Suspended Robotic System

SIAM uses a cable to support the weight of the robot, allowing the system to operate without continuously generating aerodynamic thrust near the workspace.

A suspended platform, however, introduces its own challenges. Arm motion, payload changes, and contact forces can directly disturb the base and generate oscillation. The robot must therefore regulate its suspended body while simultaneously performing manipulation.

SIAM addresses this problem by treating the **suspended base and manipulators as a single integrated robotic system**.

## Internal Actuation

A central hardware concept of SIAM is the use of **internal actuation** to control the suspended platform.

The system combines two complementary mechanisms:

* **Reaction wheels** regulate rotational motion and suppress base oscillation.
* **Moving-mass modules** modify the center of mass of the system to compensate for changes caused by arm motion and payload.

<figure class="siam-project__media siam-project__media--mechanism">
  <img
    src="{{ '/assets/img/projects/siam/Moving_Mass.png' | relative_url }}"
    alt="Moving-mass mechanism used to regulate the suspended platform"
    loading="lazy"
  >
</figure>

Because these mechanisms act internally, SIAM can regulate its suspended configuration without relying on propeller thrust close to the environment.

The broader objective is to understand how internal actuation can make cable-suspended platforms practical for manipulation-intensive tasks rather than only for passive observation or transportation.

## Integrated Manipulation Platform

SIAM is designed not as an isolated stabilization mechanism, but as a complete robotic manipulation platform.

The current system integrates:

* A cable-suspended robotic base
* Reaction-wheel-based attitude regulation
* Moving-mass-based center-of-mass compensation
* Dual-arm manipulators
* Dexterous robotic hands
* Head and wrist cameras
* VR-based teleoperation
* Real-time robot control

Together, these components allow us to study the full system-level problem of performing manipulation from a dynamically coupled suspended platform.

## Remote and Autonomous Operation

SIAM currently uses VR-based teleoperation as the primary interface for executing manipulation tasks and collecting demonstrations.

Operator commands are converted into robot motion through a shared control framework that handles inverse kinematics, hand control, sensing, and suspended-base regulation.

The same system architecture also provides a path toward autonomous operation. Demonstrations collected through teleoperation can be used to train learning-based policies, which generate manipulation commands while retaining the same underlying hardware and control stack.

<figure class="siam-project__media siam-project__media--policy">
  <img
    src="{{ '/assets/img/projects/siam/Autonomous_Policy.gif' | relative_url }}"
    alt="Autonomous SIAM policy performing a manipulation task from multiple camera views"
    loading="lazy"
  >
</figure>

In this way, learning is treated as an **extension of the robotic system**, rather than the central focus of the project.

## Toward High-Altitude Physical Work

The long-term goal of SIAM is to enable robots to perform **physical work in locations that are difficult, dangerous, or expensive for people to access**.

Potential applications include inspection, maintenance, repair, surface treatment, tool use, and object handling on structures such as wind turbines, communication towers, buildings, industrial facilities, and large vessels.

SIAM explores whether a **cable-supported, internally actuated manipulation platform** can provide a practical alternative to conventional aerial robots for these tasks.

By bringing together suspension, internal stabilization, manipulation hardware, perception, teleoperation, and autonomous execution in a single platform, the project aims to establish a new robotic system architecture for high-altitude physical work.

</div>

<style>
  .siam-project__media {
    overflow: hidden;
    width: min(100%, 760px);
    margin: 1.25rem auto 1.75rem !important;
    border-radius: 14px;
    background: color-mix(in srgb, var(--global-divider-color, #d0d5dd) 24%, transparent);
  }

  .siam-project .siam-project__media img {
    display: block;
    width: 100%;
    height: 100%;
    max-height: none;
    border-radius: 0;
    object-fit: contain;
  }

  .siam-project__media--hero {
    width: min(100%, 600px);
  }

  .siam-project .siam-project__media--hero img {
    aspect-ratio: 1;
    padding: 1rem;
  }

  .siam-project__media--mechanism {
    width: min(100%, 600px);
  }

  .siam-project .siam-project__media--mechanism img {
    aspect-ratio: 3 / 2;
  }

  .siam-project .siam-project__media--policy img {
    aspect-ratio: 16 / 9;
  }

  @media (max-width: 576px) {
    .siam-project__media {
      margin: 1.15rem auto 1.6rem !important;
    }

    .siam-project .siam-project__media--hero img {
      padding: 0.65rem;
    }
  }
</style>
