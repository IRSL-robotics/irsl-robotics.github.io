---
layout: page
title: Whole-Arm Physical Intelligence
permalink: /projects/whole-arm-physical-intelligence/
description: Enabling robots to sense, understand, and use contact across their entire arms.
img: assets/img/projects/whole_arm/whole_arm_manipulation.gif
importance: 1
category: Intelligence
research_area: physical-ai
research_item_type: project
related_publications: false
---

{% include publication-detail-styles.liquid %}

<div class="publication-detail whole-arm-project" markdown="1">

<a class="publication-detail__back" href="{{ '/research/physical-ai/' | relative_url }}">&larr; Back to Physical AI</a>

<p class="publication-detail__lead">Giving robots whole-arm physical intelligence: we develop robots that can sense, understand, and use contact across their entire arms.</p>

Humans often use the shoulder, elbow, forearm, and hand together when interacting with the environment. Contact across the arm helps us guide motion, distribute force, and adapt when the surroundings are uncertain. Most robot manipulation, however, still focuses primarily on positioning and controlling the end-effector.

This end-effector-centered view leaves much of the robot arm underused. Contacts along the arm are often treated simply as collisions, even though they can provide useful information about the environment and support more coordinated ways of performing a task. Enabling robots to recognize and make use of these interactions requires perception and action to be considered together.

Our research explores how a robot can instead use its whole arm as an interface for both sensing and action. This goal brings together two closely related directions: **Whole-Arm Sensing** and **Whole-Arm Manipulation**.

## Whole-Arm Sensing

<div class="whole-arm-project__media-grid">
  <figure>
    <img src="{{ '/assets/img/projects/whole_arm/whole_arm_sensing.gif' | relative_url }}" alt="Robot demonstrating whole-arm contact sensing">
  </figure>
  <figure>
    <img src="{{ '/assets/img/projects/whole_arm/whole_arm_sensing2.gif' | relative_url }}" alt="Robot localizing physical contact along its arm">
  </figure>
</div>

Whole-Arm Sensing enables a robot to perceive where and how physical interaction occurs across its arm. By extending contact awareness beyond the gripper, the robot can better understand its physical relationship with the surrounding environment.

Rather than treating the arm only as a mechanism for positioning the hand, this direction considers every link as a potential point of interaction. Such awareness becomes especially important when a robot works close to objects, people, or confined spaces, where contact may occur at several parts of the arm and change throughout a task. The aim is to give the robot enough information to recognize these interactions and respond appropriately.

## Whole-Arm Manipulation

<figure class="whole-arm-project__media-wide">
  <img src="{{ '/assets/img/projects/whole_arm/whole_arm_manipulation.gif' | relative_url }}" alt="Robot demonstrating learned whole-arm manipulation">
</figure>

Whole-Arm Manipulation studies how robots can learn to coordinate motion and contact across the entire arm. Through whole-arm teleoperation and learning, our research aims to capture how humans use posture and physical interaction to perform tasks, and to transfer these behaviors into adaptable robot policies.

Human manipulation involves more than following a hand trajectory. We continually adjust the configuration of the arm, decide how to engage with the environment, and redistribute motion and force as a task develops. Whole-arm teleoperation provides a natural way to demonstrate these coordinated behaviors, while learning allows robots to turn the demonstrations into strategies that can adapt to new interactions and task conditions.

The two directions address complementary parts of the same problem. Sensing makes physical interaction across the arm observable, while manipulation studies how that interaction can guide learned behavior. Viewed together, they allow a robot to understand how its body is engaged with the environment and determine how to use that interaction as part of a task. This integrated perspective forms the basis of **whole-arm physical intelligence**.

## Representative Publications

### Whole-Arm Sensing

1. **Mixture of Flow Matching and Particle Filter for Proprioception-Based Online Contact Estimation**  
   *Seo Wook Han, Min Jun Kim*  
   *IEEE Transactions on Robotics (T-RO), 2026 (to be presented at Humanoids 2026)*

2. **CDM: Contact Diffusion Model for Multi-Contact Point Localization**  
   *Seo Wook Han, Min Jun Kim*  
   *IEEE International Conference on Robotics and Automation (ICRA), 2025*

3. **Proprioceptive Sensor-Based Simultaneous Multi-Contact Point Localization and Force Identification for Robotic Arms**  
   *Seo Wook Han, Min Jun Kim*  
   *IEEE International Conference on Robotics and Automation (ICRA), 2023*

### Whole-Arm Manipulation

1. **Online Multi-Contact Feedback Model Predictive Control for Interactive Robotic Tasks**  
   *Seo Wook Han, Maged Iskandar, Jinoh Lee, Min Jun Kim*  
   *IEEE International Conference on Robotics and Automation (ICRA), 2024*

</div>

<style>
  .whole-arm-project__media-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    margin: 1.25rem 0 1.75rem;
  }

  .whole-arm-project__media-grid figure,
  .whole-arm-project__media-wide {
    overflow: hidden;
    margin: 0;
    border-radius: 14px;
    background: color-mix(in srgb, var(--global-divider-color, #d0d5dd) 24%, transparent);
  }

  .whole-arm-project__media-grid img,
  .whole-arm-project__media-wide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .whole-arm-project__media-grid figure {
    aspect-ratio: 16 / 10;
  }

  .whole-arm-project__media-wide {
    max-width: 760px;
    margin: 1.25rem auto 1.75rem;
    aspect-ratio: 16 / 9;
  }

  .whole-arm-project h3 {
    margin-top: 1.8rem;
    color: color-mix(in srgb, var(--publication-accent) 78%, var(--global-text-color, #111827));
    font-size: 1.05rem;
  }

  .whole-arm-project ol {
    padding-left: 1.35rem;
  }

  .whole-arm-project ol li {
    margin-bottom: 1rem;
    padding-left: 0.25rem;
  }

  @media (max-width: 640px) {
    .whole-arm-project__media-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
