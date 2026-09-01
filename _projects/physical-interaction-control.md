---
layout: page
title: Robot Control & Safety
permalink: /projects/physical-interaction-control/
description: Control principles for autonomous physical interaction in uncertain, unstructured, and contact-rich environments.
img: assets/img/publication_preview/l1afo.png
importance: 1
category: Control
research_area: robot-control
research_item_type: project
related_publications: false
---

{% include publication-detail-styles.liquid %}

<div class="publication-detail physical-interaction-control" markdown="1">

<a class="publication-detail__back" href="{{ '/research/robot-control/' | relative_url }}">&larr; Back to Control &amp; Safety</a>

<p class="publication-detail__lead"><strong>Toward autonomous physical interaction in the real world:</strong> we develop control principles that let robots interact reliably amid unstructured environments, and changing physical contact.</p>

Real-world robotic tasks rarely provide exact models, fixed contact conditions, or predictable disturbances. Our research asks how control can preserve useful physical behavior as robot dynamics and interactions change, and how those principles can ultimately support the automation of complex contact-rich tasks.

Rather than pursuing individual control techniques in isolation, we seek general principles that let robots **remain predictable under uncertainty, represent complex motion without losing essential geometric structure, and interact safely and responsively through multiple, evolving contacts**.

---

## Reliable Behavior under Uncertainty

Real robots never match their mathematical models exactly. We study feedback, disturbance observation, friction estimation, and adaptive compensation as ways to make uncertain hardware behave predictably without sacrificing responsiveness or interaction quality.

The goal is not to cancel every unknown effect, but to preserve the dynamics that matter for the task while suppressing those that make behavior fragile. This provides a reliable low-level foundation for robots with rigid or flexible joints, compliant transmissions, hydraulic actuation, and other complex dynamics.

<figure class="publication-detail__media">
  <img
    src="{{ '/assets/img/publication_preview/model-free.gif' | relative_url }}"
    alt="Model-free friction estimation and compensation on a flexible-joint robot"
    loading="lazy"
  >
</figure>

---

## Mathematical Foundations for Robot Control

The mathematical structure used to describe a robot fundamentally shapes how its behavior can be analyzed and controlled. Robot motion may evolve on nonlinear configuration spaces, exhibit dynamics that are difficult to capture with conventional models, or require representations that remain meaningful over a wide range of operating conditions.

We investigate mathematical formulations that provide more expressive and principled foundations for control design. By choosing representations and dynamical descriptions that better reflect the underlying physical behavior, we aim to develop controllers with predictable global behavior, richer interaction characteristics, and rigorous stability guarantees.

<figure class="publication-detail__media">
  <img
    src="{{ '/assets/img/publication_preview/memory.gif' | relative_url }}"
    alt="Large-rotation 6D impedance control using a memory-based SO(3) parameterization"
    loading="lazy"
  >
</figure>

---

## Safe and Purposeful Physical Interaction

For robots that manipulate objects, assist people, or work against the environment, useful behavior depends on **how the robot physically responds through contact**: whether it yields compliantly, regulates force and energy, remains stable, and adapts when interaction changes unexpectedly.

We aim to develop control principles that allow robots to interact safely, compliantly, and predictably even as contact conditions change. This includes maintaining stable behavior during unexpected interaction. Ultimately, these principles should support the autonomous execution of complex contact-rich tasks in unstructured environments.

<figure class="publication-detail__media">
  <img
    src="{{ '/assets/img/publication_preview/l1afo.png' | relative_url }}"
    alt="Extreme high-gain friction observer improving backdrivability and responsive physical interaction"
    loading="lazy"
  >
</figure>

<figure class="publication-detail__media">
  <img
    src="{{ '/assets/img/publication_preview/ral.png' | relative_url }}"
    alt="Exact fractional-order impedance rendering on a physical robot"
    loading="lazy"
  >
</figure>

<div class="publication-detail__media-grid">
  <img
    src="{{ '/assets/img/publication_preview/bidirectional.gif' | relative_url }}"
    alt="Bidirectional energy flow modulation for passive admittance control"
    loading="lazy"
  >
  <img
    src="{{ '/assets/img/publication_preview/passive_im.png' | relative_url }}"
    alt="Passive impedance control of a robot with viscoelastic joints"
    loading="lazy"
  >
</div>

<figure class="publication-detail__media">
  <img
    src="{{ '/assets/img/publication_preview/passivity.gif' | relative_url }}"
    alt="Passivity-based collaborative grasping with physically coupled aerial manipulators"
    loading="lazy"
  >
</figure>

---

## Toward Trustworthy Physical Autonomy

**Reliable autonomy requires reliable physical interaction with the real world.**
Our long-term goal is to establish control principles that let robots tolerate large uncertainty, preserve rigorous guarantees, and remain compliant and responsive as physical contacts appear, disappear, and change.

Ultimately, we aim to make complex physical tasks themselves automatable: enabling robots to operate in unstructured environments and carry out contact-rich tasks involving multiple, evolving interactions without relying on precisely modeled conditions or manually engineered behavior for every contact scenario.

---

## Representative Publications

The publications below trace this direction across robust control, geometric control foundations, and compliant physical interaction. Recent work is highlighted, while earlier studies are grouped more compactly as foundations of the current direction.

### Recent Representative Work

1. **Extreme High-Gain Friction Observer of Flexible Joint Robots With L1 Adaptive Framework**  
   *Young Bin Lee, Tae Ho Yun, Min Jun Kim*  
   *IEEE Transactions on Robotics (T-RO), 2026 (to be presented at Humanoids 2026)*

2. **Exact Fractional Order Impedance Rendering for Highly Flexible and Multi-Jointed Robots Using Time-Delay Estimation**  
   *Tae Ho Yun, Fabian Beck, Min Jun Kim, Jinoh Lee*  
   *IEEE Robotics and Automation Letters (RA-L), 2025*

3. **Bidirectional Energy Flow Modulation for Passive Admittance Control**  
   *Donghyeon Lee, Dongwoo Ko, Min Jun Kim, Wan Kyun Chung*  
   *IEEE Transactions on Robotics (T-RO), 2024*

4. **Disturbance-Aware Model Predictive Control of Underactuated Robotics Systems**  
   *Jiwon Kim, Min Jun Kim*  
   *IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2024*

5. **Disturbance Observer With Constraints**  
   *Tae Ho Yun, Min Jun Kim*  
   *IEEE Control Systems Letters (L-CSS), 2024*

6. **Online Multi-Contact Feedback Model Predictive Control for Interactive Robotic Tasks**  
   *Seo Wook Han, Maged Iskandar, Jinoh Lee, Min Jun Kim*  
   *IEEE International Conference on Robotics and Automation (ICRA), 2024*

7. **Constrained Nonlinear Disturbance Observer for Robotic Systems**  
   *Ji Wan Han, Daehyung Park, Min Jun Kim*  
   *IEEE International Conference on Robotics and Automation (ICRA), 2024*

8. **Hierarchical Whole-body Control of the cable-Suspended Aerial Manipulator endowed with Winch-based actuation**  
   *Yuri S. Sarkisov, Andre Coelho, Maihara G. Santos, Min Jun Kim, Dzmitry Tsetserukou, Christian Ott, and Konstantin Kondak*  
   *IEEE International Conference on Robotics and Automation (ICRA), 2023*

9. **Passivity-based Decentralized Control for Collaborative Grasping of Under-Actuated Aerial Manipulators**  
   *Jinyeong Jeong, Min Jun Kim*  
   *IEEE International Conference on Robotics and Automation (ICRA), 2023*

10. **Passive Impedance Control of Robots with Viscoelastic Joints via Inner-loop Torque Control**  
    *Min Jun Kim, Alexander Werner, Florian Loeffl, and Christian Ott*  
    *IEEE Transactions on Robotics (T-RO), 2022*

11. **A Memory-based SO(3) Parameterization: Theory and Application to 6D Impedance Control with Radially Unbounded Potential Function**  
    *Jinyeong Jeong, Hrishik Mishra, Christian Ott, Min Jun Kim*  
    *IEEE International Conference on Robotics and Automation (ICRA), 2022*

### Selected Earlier Work

- **Asymptotically stable disturbance observer-based compliance control of electro-hydrostatic actuators** -- *IEEE/ASME Transactions on Mechatronics, 2020*
- **Compliance Control of Cable-Suspended Aerial Manipulator Using Hierarchical Control Framework** -- *IEEE/RSJ IROS, 2020*
- **Optimal Oscillation Damping Control of cable-Suspended Aerial Manipulator with a Single IMU Sensor** -- *IEEE ICRA, 2020*
- **Visual-Inertial Telepresence for Aerial Manipulation** -- *IEEE ICRA, 2020*
- **Model-free friction observers for flexible joint robots with torque measurements** -- *IEEE T-RO, 2019; with presentation at ICRA 2020*
- **A Passivity-Based Nonlinear Admittance Control With Application to Powered Upper-Limb Control Under Unknown Environmental Interactions** -- *IEEE/ASME Transactions on Mechatronics, 2019*
- **Passive Compliance Control of Aerial Manipulators** -- *IEEE/RSJ IROS, 2018*
- **A Stabilizing Controller for Regulation of UAV With Manipulator** -- *IEEE RA-L, 2018; with presentation at ICRA 2018*
- **Disturbance-observer-based PD control of electro-hydrostatically actuated flexible joint robots** -- *IEEE/RSJ IROS, 2017*
- **Enhancing joint torque control of series elastic actuators with physical damping** -- *IEEE ICRA, 2017*

<details markdown="1">
<summary><strong>Other foundational work</strong></summary>

- W. Lee, M. J. Kim, and W. K. Chung, **“Joint torque servo control of electro-hydrostatic actuators for high torque-to-weight ratio robot control,”** *IEEE/RSJ IROS, 2016*.
- M. J. Kim, W. Lee, C. Ott, and W. K. Chung, **“A passivity-based admittance control design using feedback interconnections,”** *IEEE/RSJ IROS, 2016*.
- W. Lee, M. J. Kim, and W. K. Chung, **“Model-free joint torque control strategy for hydraulic robots,”** *IEEE ICRA, 2016*.
- M. J. Kim et al., **“Powered upper-limb control using passivity-based nonlinear disturbance observer for unknown payload carrying applications,”** *IEEE ICRA, 2016*.
- M. J. Kim and W. K. Chung, **“Disturbance-observer-based PD control of flexible joint robots for asymptotic convergence,”** *IEEE T-RO*.
- M. J. Kim, Y. Choi, and W. K. Chung, **“Bringing Nonlinear H-infinity Optimality to Robot Controllers,”** *IEEE T-RO*.
- M. J. Kim, W. Lee, and W. K. Chung, **“Carrying heavy payload with limited sensory information using high order disturbance observer,”** *IEEE/RSJ IROS, 2015*.
- M. J. Kim and W. K. Chung, **“Robust control of flexible joint robots based on motor-side dynamics reshaping using disturbance observer (DOB),”** *IEEE/RSJ IROS, 2014*.
- M. J. Kim and W. K. Chung, **“Design of nonlinear H-infinity optimal impedance controllers,”** *IEEE/RSJ IROS, 2013*.
- M. J. Kim, S. Park, and W. K. Chung, **“Nonlinear robust internal loop compensator for robust control of robotic manipulators,”** *IEEE/RSJ IROS, 2012*.
- J. Lee, S. Kim, Y. S. Kim, W. K. Chung, and M. J. Kim, **“Automated surgical planning and evaluation algorithm for spinal fusion surgery with three-dimensional pedicle mode,”** *IEEE/RSJ IROS, 2011*.

</details>

</div>
