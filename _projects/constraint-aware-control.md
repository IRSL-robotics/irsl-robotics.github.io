---
layout: page
title: Constraint-Aware Control
permalink: /projects/constraint-aware-control/
description: Control methods that remain robust to uncertainty while respecting the constraints required for safe and dependable real-world operation.
img: assets/img/publication_preview/da-mpc.gif
importance: 2
category: Control
research_area: robot-control
research_item_type: project
related_publications: false
---

{% include publication-detail-styles.liquid %}

<div class="publication-detail constraint-aware-control" markdown="1">

<a class="publication-detail__back" href="{{ '/research/robot-control/' | relative_url }}">&larr; Back to Robot Control &amp; Safety</a>

<p class="publication-detail__lead"><strong>Making robots trusted partners in the real world:</strong> we develop control methods that remain <strong>robust under uncertainty</strong> while respecting the <strong>constraints</strong> required for <strong>safe and dependable operation</strong>.</p>

Robots can become part of everyday life only if they operate reliably **beyond controlled laboratory conditions**. In the real world, **disturbances, modeling errors, changing contacts, and underactuation** continually challenge nominal predictions. At the same time, **state and input limits**, feasible operating regions, and task-specific requirements define which actions are acceptable. A controller that only compensates for uncertainty may maintain performance yet still command behavior that is **infeasible or unsafe**.

For this reason, our research treats **robustness** and **constraint handling** as complementary requirements. **Model predictive control** anticipates how current decisions will affect future motion and constraints, while **constrained robust control** brings operational requirements directly into disturbance rejection and feedback. Our goal is to build controllers that maintain performance as conditions change without losing sight of the limits required for safe deployment.

To date, we have pursued this goal primarily through **model-based approaches** in two complementary directions: **Model Predictive Control under Uncertainty and Constraints** and **Robust Control with Constraints**. The first uses system models, prediction, and optimization to anticipate future behavior and account for uncertainty and constraints over a planning horizon; the second extends robust control methods by explicitly incorporating constraints into disturbance rejection framework.

## Model Predictive Control under Uncertainty and Constraints

Model predictive control turns control into a sequence of decisions over a future horizon. By combining a **dynamical model** with task objectives and **state, input, or interaction constraints**, MPC can choose an action based not only on its immediate effect but also on the behavior it is expected to produce.

<figure class="publication-detail__media">
  <img
    src="{{ '/assets/img/publication_preview/online.gif' | relative_url }}"
    alt="Online multi-contact feedback model predictive control experiment"
    loading="lazy"
  >
</figure>

In interactive tasks, relevant constraints can change as contacts appear at previously unknown locations. Online multi-contact feedback MPC estimates **contact locations and forces**, incorporates the evolving interaction into its prediction model, and updates the robot's behavior in real time. This provides a basis for predictive control that responds to the physical situation instead of relying on a fixed contact plan.

<figure class="publication-detail__media">
  <img
    src="{{ '/assets/img/publication_preview/da-mpc.gif' | relative_url }}"
    alt="Disturbance-aware model predictive control experiment on an underactuated quadrotor"
    loading="lazy"
  >
</figure>

Real-world disturbances create another source of mismatch between prediction and reality. **Disturbance-Aware MPC** uses a **nonlinear disturbance observer** to estimate unknown effects online and incorporates those estimates into state predictions. This allows the controller to adapt its prediction model as conditions change, making planning more robust to unmatched disturbances and providing a stronger basis for satisfying operational constraints on underactuated systems.

**Future work** will consider uncertainty not only in perturbations but also in system state estimations and constraint boundaries. **Stochastic and chance-constrained MPC**, **risk-aware objectives**, and explicit **recursive-feasibility analysis** will help controllers make decisions according to both the likelihood and consequence of constraint violation. We also aim to extend these methods across manipulators, mobile and aerial robots, and other platforms operating in dynamic environments.

## Robust Control with Constraints

**Robust control** is essential when a robot must perform despite modeling error and unknown external effects, but **robustness alone** does not determine which behaviors are acceptable. Aggressive disturbance rejection can conflict with **state, input, or interaction limits**. Reliable control therefore requires a way to preserve disturbance-rejection performance while explicitly enforcing the constraints that define admissible operation.

We study how user-defined constraints can be embedded directly into disturbance-observer-based control. A **constrained disturbance observer** uses optimization to reconcile the nominal response, the estimated disturbance, and a feasible region. When no constraint is active, it behaves like a conventional disturbance observer; when a constraint becomes active, it modifies the response rather than rejecting the disturbance without regard to the limit.

<figure class="publication-detail__media">
  <img
    src="{{ '/assets/img/publication_preview/cnric.gif' | relative_url }}"
    alt="Constrained nonlinear disturbance observer transitioning from free motion to contact response"
    loading="lazy"
  >
</figure>

This idea also extends to **nonlinear robot control**. By embedding optimization in a nonlinear disturbance observer, the controller can retain the practical structure of observer-based feedback while adding task-dependent properties such as **contact-responsive motion**. The robot can follow its desired motion in free space and alter its behavior when an unknown interaction occurs.

## Future Directions

Looking ahead, we aim to combine these model-based foundations with **data-driven uncertainty models** and **learned policies** that can capture hard-to-model dynamics, adapt through experience, and generalize across tasks and robotic platforms—without giving up **explicit constraint enforcement**.

## Representative Publications

### Model Predictive Control under Uncertainty and Constraints

1. **Disturbance-Aware Model Predictive Control of Underactuated Robotics Systems**  
   *Jiwon Kim, Min Jun Kim*  
   *IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2024*

2. **Online Multi-Contact Feedback Model Predictive Control for Interactive Robotic Tasks**  
   *Seo Wook Han, Maged Iskandar, Jinoh Lee, Min Jun Kim*  
   *IEEE International Conference on Robotics and Automation (ICRA), 2024*

### Robust Control with Constraints

1. **Disturbance Observer With Constraints**  
   *Tae Ho Yun, Min Jun Kim*  
   *IEEE Control Systems Letters (L-CSS), 2024*

2. **Constrained Nonlinear Disturbance Observer for Robotic Systems**  
   *Ji Wan Han, Daehyung Park, Min Jun Kim*  
   *IEEE International Conference on Robotics and Automation (ICRA), 2024*

</div>
