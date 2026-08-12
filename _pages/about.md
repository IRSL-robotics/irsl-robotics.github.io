---
layout: about
title: Home
permalink: /
subtitle: Research Group @ KAIST
description: Intelligent Robotic Systems Lab (IRSL) at KAIST, led by professor Min Jun Kim.

profile: false
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<!-- The Intelligent Robotic Systems Lab (IRSL), led by Prof. Min Jun Kim, develops intelligent robots that can safely interact with complex environments. -->

<div class="irsl-home" markdown="1">

<img src="{{ '/assets/img/irsl_lab.jpg' | relative_url }}" alt="Intelligent Robotic Systems Lab" class="irsl-home__hero">

### We are hiring!  
If you are interested in joining our group, send an email to minjun.kim@kaist.ac.kr. Please include your transcript with a CV.

Please don't hesitate to ask me any questions (position vacancy, research direction/topics, lab management policy, etc.). 

#### Open positions  

- We are constantly seeking for motivated graduate students for all research topics (see "Research" tap)
- Undergraduate students are also very welcome for internship, individual research program, and URP

#### Qualifications  
  
**Common**  
- Strong self-motivation
- Communication skills
- Written and spoken English skills
- Mathematics, programming, abstract thinking

**Post-doc**  
- Excellent track record (publication, git-hub, or anything that proves yourself)
- New skillset that may bring a breakthrough for our research

**Ph.D.**  
- Crystal clear understanding on your own Master thesis
- Ability to propose a research topic out of what you have done
- Research independency

**Master**  
- Solid background on electrical/mechanical/aerospace engineering, computer engineering/science, mathematics, physics, or any other robotics related fields
- Outstanding GPA and/or research experience and/or strong SOP

**Bonus**  
- Strong recommendation letters
- Hands-on experience with real robotic systems
- Familiarity with robotic software and frameworks (3D CAD, Linux, Matlab, Python, OpenCV, ROS, AI framework, ...)  

<div class="irsl-home__logos">
  <img src="{{ '/assets/img/logo.png' | relative_url }}" alt="Intelligent Robotic Systems Lab Logo">
  <img src="{{ '/assets/img/kaist_logo.png' | relative_url }}" alt="KAIST Logo">
</div>

<p class="irsl-home__identity">
  © Intelligent Robotic Systems Lab (IRSL) at KAIST · Led by Prof. Min Jun Kim<br>
  <span>카이스트 김민준 교수님 연구실</span>
</p>

</div>

<style>
  .irsl-home {
    color: var(--global-text-color, #111827);
    font-size: 1rem;
    line-height: 1.72;
  }

  .irsl-home__hero {
    display: block;
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 12px;
  }

  .irsl-home h3 {
    margin: 0 0 0.85rem;
    font-size: 1.55rem;
    letter-spacing: -0.025em;
  }

  .irsl-home h4 {
    margin: 2rem 0 0.8rem;
    padding-bottom: 0.45rem;
    border-bottom: 1px solid var(--global-divider-color, rgba(0, 0, 0, 0.1));
    font-size: 1.12rem;
  }

  .irsl-home p {
    margin-bottom: 0.8rem;
  }

  .irsl-home p > strong:only-child {
    display: inline-block;
    margin-top: 0.75rem;
    color: var(--global-text-color, #111827);
    font-size: 0.96rem;
  }

  .irsl-home ul {
    margin: 0.35rem 0 1rem;
    padding-left: 1.3rem;
  }

  .irsl-home li {
    margin-bottom: 0.4rem;
    padding-left: 0.15rem;
  }

  .irsl-home__logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(1rem, 4vw, 2.5rem);
    margin: 2.75rem 0 1.25rem;
  }

  .irsl-home__logos img:first-child {
    width: 150px;
    max-width: 36%;
  }

  .irsl-home__logos img:last-child {
    width: 220px;
    max-width: 44%;
  }

  .irsl-home .irsl-home__identity {
    margin: 0;
    padding-top: 0.9rem;
    border-top: 1px solid var(--global-divider-color, rgba(0, 0, 0, 0.1));
    color: var(--global-text-color-light, #667085);
    font-size: 0.72rem;
    line-height: 1.55;
    text-align: center;
  }

  .irsl-home__identity span {
    opacity: 0.82;
  }

  @media (max-width: 600px) {
    .irsl-home {
      font-size: 0.96rem;
      line-height: 1.68;
    }

    .irsl-home h3 {
      font-size: 1.4rem;
    }

    .irsl-home__hero {
      margin-bottom: 1.6rem;
    }
  }
</style>
