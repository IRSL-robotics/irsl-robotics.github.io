---
layout: page
permalink: /lecture/
title: Lecture
description:
nav: true
nav_order: 6
calendar: false
---

{% assign courses = site.teachings | sort: "course_id" %}

<nav class="lecture-list" aria-label="Courses">
  {% for course in courses %}
    <a class="lecture-list__item" href="{{ course.url | relative_url }}">
      <span><strong class="lecture-list__code">{{ course.course_id }}</strong> {{ course.title }}</span>
      <span class="lecture-list__arrow" aria-hidden="true">&rarr;</span>
    </a>
  {% endfor %}
</nav>

<style>
  .lecture-list {
    display: grid;
    gap: 0.8rem;
    max-width: 720px;
  }

  .lecture-list__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.1rem 1.25rem;
    border: 1px solid var(--global-divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 12px;
    background: var(--global-card-bg-color, #fff);
    color: var(--global-text-color, #111827);
    font-size: 1rem;
    font-weight: 650;
    text-decoration: none;
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease;
  }

  .lecture-list__item:hover,
  .lecture-list__item:focus-visible {
    transform: translateX(4px);
    border-color: var(--global-theme-color, #2563eb);
    color: var(--global-theme-color, #2563eb);
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
    text-decoration: none;
  }

  .lecture-list__arrow {
    color: var(--global-theme-color, #2563eb);
    font-size: 1.1rem;
  }

  .lecture-list__code {
    margin-right: 0.35rem;
    color: var(--global-theme-color, #2563eb);
    font-weight: 750;
  }

  @media (prefers-reduced-motion: reduce) {
    .lecture-list__item {
      transition: none;
    }
  }
</style>
