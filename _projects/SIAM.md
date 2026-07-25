---
layout: page
title: SIAM
description: "A propeller-free cable-suspended dual-arm manipulation platform for high-altitude physical work."
img: assets/img/projects/siam/siam_teaser.jpg
importance: 1
category: Aerial Manipulation
related_publications: true
---

> **Status:** ongoing / prototype  
> **Keywords:** cable-suspended robot, suspended manipulation, internal actuation, teleoperation, imitation learning, high-altitude work

## Overview

**SIAM** stands for **Cable-Suspended System with Internally-Actuated Mass**.  
This project develops a cable-suspended robotic manipulation platform for automating high-altitude physical work such as inspection, maintenance, repair, tool use, and object handling.

Unlike conventional UAV-based aerial manipulators, SIAM is supported by a cable and does not rely on propellers to generate its main supporting force. Instead, the platform uses an internal actuation mechanism, including reaction wheels and a moving mass, to stabilize the suspended base while manipulation tasks are performed.

The current platform integrates a suspended base, dual-arm manipulators, dexterous hands, vision sensors, a VR-based teleoperation interface, and a learning-based policy extension into a unified manipulation pipeline.

## Motivation

High-altitude maintenance is required in infrastructure, energy, and industrial sites, including wind turbines, communication towers, concrete structures, and ship walls. These tasks often require workers to operate in dangerous and confined environments.

Many high-altitude tasks are not limited to visual inspection. They require **physical interaction** with the environment, such as tool use, surface repair, object handling, and painting. Therefore, a robotic system for high-altitude work should provide not only access to the workspace but also stable manipulation capability.

## System Concept

SIAM is designed as a propeller-free suspended manipulation system. The cable supports the weight of the system, while internal actuation is used to regulate the base motion.

The internal actuation mechanism consists of:

- **Reaction wheels** for damping base oscillation and regulating roll, pitch, and yaw motion.
- **Moving mass modules** for repositioning the center of mass and compensating base attitude changes caused by payload and arm motion.

This structure allows the system to stabilize the suspended base without using propeller thrust near the work surface.

## Integrated Hardware Platform

The implemented SIAM platform consists of:

- Cable-suspended base structure
- Reaction-wheel-based attitude stabilization module
- Moving-mass-based center-of-mass compensation module
- Dual-arm manipulation area
- Dexterous hands
- Head and wrist vision modules
- VR teleoperation interface
- Real-time control framework

The vision module includes a head camera for observing the task workspace and wrist cameras for close-range manipulation feedback.

## Control and Teleoperation Framework

The control framework converts human operator input into executable robot commands through the following pipeline:

```text
Operator Input
→ Command Mapping
→ System Control Layer
→ SIAM Hardware
```

The operator provides end-effector targets and gripper commands through a VR-based teleoperation interface. These commands are converted into robot motion through QP-based inverse kinematics, hand control, head camera control, and suspended-base stabilization.

The same control framework is used for both teleoperated execution and learning-based autonomous execution.

## Imitation Learning Extension

To extend the system from teleoperation to autonomous execution, teleoperation demonstrations are used for behavior cloning-based imitation learning.

The policy is based on **Action Chunking Transformer (ACT)**. ACT predicts a sequence of future actions from the current observation, which helps reduce command fluctuation compared with single-step action prediction.

In this project, the learned policy outputs:

- End-effector target command
- Gripper command

The predicted commands are then executed through the same SIAM control pipeline used for teleoperation.

## Demonstrated Tasks

The platform has been validated through:

- Suspended-base stabilization
- End-effector trajectory tracking
- VR-based teleoperation task execution
- Teleoperation demonstration collection
- ACT-based autonomous manipulation extension

A representative learning task is a cup pick-and-place task, where the policy grasps a randomly placed cup within a predefined workspace and moves it to a target region.

## Contribution

This project contributes:

1. **Integrated suspended manipulation platform**  
   A cable-suspended SIAM system is implemented as a real dual-arm manipulation platform.

2. **Teleoperation system for remote task execution**  
   A VR-based teleoperation interface is integrated with the SIAM control framework.

3. **Imitation learning extension for autonomous execution**  
   Teleoperation demonstrations are used to train a learning policy that replaces the operator command while preserving the same lower-level control pipeline.

## People

- Wonjun Han
- Taeho Yun

<!-- Add additional contributors here. -->

## Media

<!-- Recommended files:
- assets/img/projects/siam/siam_teaser.jpg
- assets/img/projects/siam/system_overview.jpg
- assets/img/projects/siam/teleoperation_demo.gif
- assets/img/projects/siam/autonomous_execution.gif
-->

## Publications

<!-- Add related papers, thesis, or presentation links here when available. -->
