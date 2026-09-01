---
layout: page
title: Research
permalink: /research/
description:
nav: true
nav_order: 1
horizontal: false
---

<div class="research-intro">
  <p>
    We develop intelligent robotic systems that safely and autonomously interact with the physical world. Spanning
    <strong>Ground &amp; Aerial Robotics</strong>, our research brings together <strong>Control &amp; Safety</strong>,
    <strong>Physical AI</strong>, and <strong>Robotic Systems &amp; Hardware</strong> to create robots that are robust and capable
    in the real world.
  </p>
</div>

<div class="research-grid" aria-label="Research areas">
  <article class="research-card">
    <div class="research-card__image-wrap">
      <img
        src="{{ '/assets/img/projects/Robot_Control.png' | relative_url }}"
        alt="Control and safety research preview"
        class="research-card__image"
      >
      <span class="research-card__number" aria-hidden="true">01</span>
    </div>
    <div class="research-card__body">
      <p class="research-card__eyebrow">Robust Control · Safe Interaction · Adaptation</p>
      <h2>Control &amp; Safety</h2>
      <p>
        Robust and safety-aware control methods that enable reliable physical interaction under uncertainty, disturbances, and dynamic
        environments.
      </p>
      <a class="research-card__action" href="{{ '/research/robot-control/' | relative_url }}" aria-label="Explore Control and Safety projects">
        Learn More <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </article>

  <article class="research-card">
    <div class="research-card__image-wrap">
      <img
        src="{{ '/assets/img/projects/Physical_AI.png' | relative_url }}"
        alt="Physical AI research preview"
        class="research-card__image"
      >
      <span class="research-card__number" aria-hidden="true">02</span>
    </div>
    <div class="research-card__body">
      <p class="research-card__eyebrow">Perception · Learning · Manipulation</p>
      <h2>Physical AI</h2>
      <p>
        We develop embodied intelligence that combines perception, learning, and reasoning to understand physical interactions and perform complex manipulation tasks.
      </p>
      <a class="research-card__action" href="{{ '/research/physical-ai/' | relative_url }}" aria-label="Explore Physical AI projects">
        Learn More <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </article>

  <article class="research-card research-card--featured">
    <div class="research-card__image-wrap">
      <img
        src="{{ '/assets/img/projects/Hardware.png' | relative_url }}"
        alt="Robotic systems and hardware research preview"
        class="research-card__image research-card__image--hardware"
      >
      <span class="research-card__number" aria-hidden="true">03</span>
    </div>
    <div class="research-card__body">
      <p class="research-card__eyebrow">Mechanisms · Robot Design · System Integration</p>
      <h2>Robotic Systems &amp; Hardware</h2>
      <p>
        We design novel mechanisms and integrated robotic platforms that bring together actuation, sensing, and control for
        real-world operation.
      </p>
      <a class="research-card__action" href="{{ '/research/hardware-design/' | relative_url }}" aria-label="Explore Robotic Systems and Hardware projects">
        Learn More <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </article>
</div>

<style>
  .research-intro {
    max-width: 760px;
    margin: 0 0 2.25rem;
    color: var(--global-text-color-light, #5f6673);
    font-size: 1.08rem;
    line-height: 1.75;
  }

  .research-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.35rem;
    margin: 0.5rem 0 2rem;
  }

  .research-card {
    display: flex;
    min-width: 0;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--global-divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 16px;
    background: var(--global-card-bg-color, #fff);
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.07);
    transition:
      transform 180ms ease,
      box-shadow 180ms ease,
      border-color 180ms ease;
  }

  .research-card:hover {
    transform: translateY(-5px);
    border-color: color-mix(in srgb, var(--global-theme-color, #2563eb) 45%, transparent);
    box-shadow: 0 18px 38px rgba(15, 23, 42, 0.13);
  }

  .research-card__image-wrap {
    position: relative;
    overflow: hidden;
    aspect-ratio: 4 / 3;
    background: #e9edf2;
  }

  .research-card__image-wrap::after {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 55%, rgba(5, 12, 24, 0.36));
    content: "";
    pointer-events: none;
  }

  .research-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 350ms ease;
  }

  .research-card__image--hardware {
    object-position: center 58%;
  }

  .research-card:hover .research-card__image {
    transform: scale(1.035);
  }

  .research-card__number {
    position: absolute;
    right: 1rem;
    bottom: 0.65rem;
    z-index: 1;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.65rem;
    font-weight: 700;
    letter-spacing: -0.04em;
  }

  .research-card__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.35rem 1.35rem 1.45rem;
  }

  .research-card__eyebrow {
    margin: 0 0 0.45rem;
    color: var(--global-theme-color, #2563eb);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    line-height: 1.4;
    text-transform: uppercase;
  }

  .research-card h2 {
    margin: 0 0 0.7rem;
    color: var(--global-text-color, #111827);
    font-size: 1.4rem;
    letter-spacing: -0.025em;
  }

  .research-card__body > p:not(.research-card__eyebrow) {
    flex: 1;
    margin: 0 0 1.35rem;
    color: var(--global-text-color-light, #667085);
    font-size: 0.92rem;
    line-height: 1.65;
  }

  .research-card__action {
    display: inline-flex;
    align-items: center;
    min-height: 2.35rem;
    gap: 0.45rem;
    padding: 0.5rem 0.9rem;
    border-radius: 999px;
    background: var(--global-theme-color, #2563eb);
    color: #fff;
    font-size: 0.82rem;
    font-weight: 700;
    text-decoration: none;
    transition:
      gap 160ms ease,
      background-color 160ms ease;
  }

  .research-card__action:hover,
  .research-card__action:focus-visible {
    gap: 0.7rem;
    background: var(--global-hover-color, #1d4ed8);
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 991px) {
    .research-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .research-grid {
      grid-template-columns: 1fr;
      gap: 1.15rem;
    }

    .research-card__image-wrap {
      aspect-ratio: 16 / 10;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .research-card,
    .research-card__image,
    .research-card__action {
      transition: none;
    }
  }
</style>
