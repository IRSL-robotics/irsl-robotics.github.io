---
layout: page
permalink: /profiles/
title: Members
description: # members of the lab or group
nav: true
nav_order: 1
---

<style>
.member-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.member-card {
  border: 1px solid var(--global-divider-color, #e5e7eb);
  border-radius: 14px;
  padding: 1.1rem 1.2rem;
  background: var(--global-card-bg-color, #ffffff);
}

.member-card summary {
  cursor: pointer;
  list-style: none;
}

.member-card summary::-webkit-details-marker {
  display: none;
}

.member-name {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.15rem;
}

.member-role {
  font-size: 0.92rem;
  color: var(--global-text-color-light, #6b7280);
}

.member-info {
  margin-top: 1rem;
  font-size: 0.95rem;
}

.info-line {
  margin-bottom: 0.75rem;
}

.member-section {
  margin-top: 1.1rem;
}

.member-section-title {
  font-weight: 700;
  margin-bottom: 0.45rem;
  color: var(--global-theme-color, #2563eb);
}

.member-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0.9rem 0 1rem 0;
}

.member-button {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border: 1px solid var(--global-theme-color, #2563eb);
  border-radius: 999px;
  color: var(--global-theme-color, #2563eb);
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
}

.member-button:hover {
  background: var(--global-theme-color, #2563eb);
  color: #ffffff;
  text-decoration: none;
}

.timeline {
  display: grid;
  gap: 0.45rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 8.5rem 1fr;
  gap: 0.8rem;
}

.timeline-date {
  color: var(--global-text-color-light, #6b7280);
  white-space: nowrap;
}

.timeline-desc {
  color: var(--global-text-color, #111827);
}

.activity-list {
  margin: 0.25rem 0 0 1.1rem;
  padding: 0;
}

.activity-list li {
  margin-bottom: 0.35rem;
}

.pub-list {
  margin: 0.25rem 0 0 1.1rem;
  padding: 0;
}

.pub-list li {
  margin-bottom: 0.45rem;
}

@media (max-width: 600px) {
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0.1rem;
  }
}
</style>

## Professor

<div class="member-grid">

<details class="member-card">
<summary>
  <div class="member-name">Min Jun Kim</div>
  <div class="member-role">Assistant Professor</div>
</summary>

<div class="member-info">

  <div class="info-line">
    <strong>Email:</strong> minjun.kim@kaist.ac.kr
  </div>

  <div class="member-links">
    <a class="member-button" href="{{ '/assets/pdf/cv/CV_Minjun_Kim.pdf' | relative_url }}" target="_blank">
      CV
    </a>
  </div>

  <div class="member-section">
    <div class="member-section-title">Education & Experience</div>

    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">2020.08–present</div>
        <div class="timeline-desc">Assistant Professor, KAIST, Korea</div>
      </div>

      <div class="timeline-item">
        <div class="timeline-date">2016.06–2020.07</div>
        <div class="timeline-desc">Research Scientist, DLR, Germany</div>
      </div>

      <div class="timeline-item">
        <div class="timeline-date">2016.03–2016.05</div>
        <div class="timeline-desc">Postdoctoral Researcher, POSTECH, Korea</div>
      </div>

      <div class="timeline-item">
        <div class="timeline-date">2010.03–2016.02</div>
        <div class="timeline-desc">Ph.D., POSTECH, Korea</div>
      </div>

      <div class="timeline-item">
        <div class="timeline-date">2006.03–2010.02</div>
        <div class="timeline-desc">B.S., Korea University, Korea</div>
      </div>
    </div>
  </div>

  <div class="member-section">
    <div class="member-section-title">Academic Activities</div>

    <p><strong>Reviewer</strong></p>
    <ul class="activity-list">
      <li>IEEE/RSJ IROS, IEEE ICRA, IEEE CASE</li>
      <li>IEEE T-RO, IEEE RA-L, IEEE T-IE, IEEE T-NSRE, JCAS</li>
      <li>Mathematical Problems in Engineering</li>
      <li>European Journal of Control</li>
      <li>Intelligent Service Robotics</li>
    </ul>

    <p><strong>Associate Editor</strong></p>
    <ul class="activity-list">
      <li>IEEE Robotics and Automation Letters, 2017–2019</li>
      <li>IEEE/RSJ International Conference on Intelligent Robots and Systems, 2018, 2019, 2020</li>
      <li>IEEE International Conference on Robotics and Automation, 2020, 2021, 2022</li>
    </ul>
  </div>
</div>
</details>

</div>


## Ph.D. Candidates

<div class="member-grid">

<details class="member-card">
<summary>
  <div class="member-name">Kanghyun Kim</div>
  <div class="member-role">Ph.D. Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->
  <div class="member-links">
    <a class="member-button" href="{{ '/assets/pdf/cv/CV_Kanghyun_Kim.pdf' | relative_url }}" target="_blank">
      CV
    </a>
  </div>
  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Robot learning, manipulation, control</p>
  </div>
  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>

    <ul class="pub-list">
      <li><strong>K. Kim</strong>, J. Lee, and M. J. Kim, "Augmented SE(3)-diffusion models for Fingered Grasp Generation from Raw 3D Scenes with a Single Tabletop Object", <em>IEEE SII 2025</em></li>
      <li><strong>K. Kim</strong>, D. Park, and M. J. Kim, “A Reachability Tree-Based Algorithm for Robot Task and Motion Planning”, <em>IEEE ICRA 2023</em></li>
    </ul>
  </div>
  <div class="member-section">
    <div class="member-section-title">Publications (Domestic)</div>

    <ul class="pub-list">
      <li><strong>K. Kim</strong>, and M. J. Kim, “Optimization-based Manipulation Planning for Dual-arm Robot with Neural Graspable Set”, <em>The 19th KRoC</em></li>
      <li><strong>K. Kim</strong>, D. Park, and M. J. Kim, “Reachability tree-based Task and Motion Planner using Abstract Action Plan Sampling”, <em>The 18th KRoC</em></li>
    </ul>
  </div>
</div>
</details>


<details class="member-card">
<summary>
  <div class="member-name">Jinyeong Jeong</div>
  <div class="member-role">Ph.D. Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->
  <div class="member-links">
    <a class="member-button" href="{{ '/assets/pdf/cv/CV_Jinyeong_Jeong.pdf' | relative_url }}" target="_blank">
      CV
    </a>
  </div>
  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Motion planning, reinforcement learning</p>
  </div>
  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>

    <ul class="pub-list">
      <li><strong>J. Jeong</strong>, S. Park, S. Lee, D. Youn, and M. J. Kim, "Designing an End-to-End UAV System for Insulator Inspection under Transmission Tower Environments", <em>IEEE ICEIC 2024</em></li>
      <li><strong>J. Jeong</strong>, and M. J. Kim, “Passivity-based Decentralized Control for Collaborative Grasping of Under-Actuated Aerial Manipulators”, <em>IEEE ICRA 2023</em></li>
      <li><strong>J. Jeong</strong>, H. Mishra, C.Ott, and M. J. Kim, "A Memory-based SO(3) Parameterization: Theory and Application to 6D Impedance Control with Radially Unbounded Potential Function", <em>IEEE ICRA 2022</em></li>
      <li><strong>J. Jeong</strong>, M. J. Kim, “Interaction control of under-actuated UAV capable of exerting downward force”, <em>ANBRE21</em></li>
    </ul>
  </div>
  <div class="member-section">
    <div class="member-section-title">Publications (Domestic)</div>

    <ul class="pub-list">
      <li><strong>J. Jeong</strong>, and M. J. Kim, “Decentralized Passive Impedance Control Method for Collaborative Grasping of Aerial Manipulators”, <em>The 18th KRoC</em></li>
      <li>S. Lee, <strong>J. Jeong</strong>, and M. J. Kim, “Implementation of Impedance Controller for Redundant Robot Manipulators Using Extended Exponential Coordinates”, <em>The 37th ICROS (winner of the outstanding undergraduate paper award)</em></li>
    </ul>
  </div>
</div>
</details>


<details class="member-card">
<summary>
  <div class="member-name">Ji Wan Han</div>
  <div class="member-role">Ph.D. Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->

  <div class="member-links">
    <a class="member-button" href="{{ '/assets/pdf/cv/CV_Jiwan_Han.pdf' | relative_url }}" target="_blank">
      CV
    </a>
  </div>

  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Robotics, AI, control</p>
  </div>

  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>

    <ul class="pub-list">
      <li>T. Kim, <strong>J. W. Han</strong>, and M. J. Kim, "Safe Robot Teleoperation with Constrained Nonlinear Disturbance Observer", <em>IEEE RiTA 2024</em></li>
      <li><strong>J. W. Han</strong>, and M. J. Kim, “Learning-based method for Estimating Free Motion Disturbances Using Historical Velocity Memory” <em>(poster presentation), IEEE ICCAS 2024</em></li>
      <li><strong>J. W. Han</strong>, D. Park, and M. J. Kim, "Constrained Nonlinear Disturbance Observer for Robotic Systems", <em>IEEE ICRA 2024</em></li>
    </ul>
  </div>
  <div class="member-section">
    <div class="member-section-title">Publications (Domestic)</div>

    <ul class="pub-list">
      <li><strong>J. W. Han</strong>, and M. J. Kim, “QP-Based Precision Robot Motion Control with Robot Environment Interaction Capability and Sensorless Setup”, <em>The 19th KRoC</em></li>
    </ul>
  </div>
</div>
</details>


<details class="member-card">
<summary>
  <div class="member-name">Seo Wook Han</div>
  <div class="member-role">Ph.D. Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->

  <div class="member-links">
    <a class="member-button" href="https://seowookhan.github.io/SeoWookHan/" target="_blank" rel="noopener noreferrer">
      CV
    </a>
  </div>

  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Robotics, AI, control</p>
  </div>

  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>

    <ul class="pub-list">
      <li><strong>S. W. Han</strong>, and M. J. Kim, “Learning Multi-Contact Localization via Diffusion Models with Proprioceptive Sensing,” <em>2025 RSS Workshop on Navigating Contact Dynamics in Robotics</em></li>
      <li><strong>S. W. Han</strong>, and M. J. Kim, “CDM: Contact Diffusion Model for Multi-Contact Point Localization”, <em>IEEE ICRA 2025</em></li>
      <li><strong>S. W. Han</strong>, and M. J. Kim, “Contact Estimation Diffusion Model for Collaborative Robots” <em>(poster presentation), IEEE ICCAS 2024</em></li>
      <li><strong>S. W. Han</strong>, M. Iskandar, J. Lee and M. J. Kim, “Online Multi-Contact Feedback Model Predictive Control for Interactive Robotic Tasks", <em>IEEE ICRA 2024</em></li>
      <li><strong>S. W. Han</strong>, and M. J. Kim, “Proprioceptive Sensor-Based Simultaneous Multi-Contact Point Localization and Force Identification for Robotic Arms”, <em>IEEE ICRA 2023</em></li>
    </ul>
  </div>
  <div class="member-section">
    <div class="member-section-title">Publications (Domestic)</div>

    <ul class="pub-list">
      <li><strong>S. W. Han</strong>, M. Iskandar, J. Lee, and M. J. Kim, “Optimization-based Multi-Contact Force Control”, <em>The 19th KRoC</em></li>
      <li><strong>S. W. Han</strong>, and M. J. Kim, “Multi-Contact Point Localization and Force Identification for Collaborative Robot Arm using Proprioceptive Sensor”, <em>The 18th KRoC</em></li>
    </ul>
  </div>
  <div class="member-section">
    <div class="member-section-title">Awards</div>

    <ul class="pub-list">
      <li>ICROS Daejeon-Chungcheong Branch Academic Conference Outstanding Paper Award </li>
    </ul>
  </div>
</div>
</details>



<details class="member-card">
<summary>
  <div class="member-name">Seongsu Park</div>
  <div class="member-role">Ph.D. Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->

  <div class="member-links">
    <a class="member-button" href="{{ '/assets/pdf/cv/CV_Seongsu_Park.pdf' | relative_url }}" target="_blank">
      CV
    </a>
  </div>

  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Robotics, AI, control</p>
  </div>

  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>

    <ul class="pub-list">
      <li><strong>S. Park</strong>, and M. J. Kim, "Design of a Fully Actuated Drone with Non-Isotropic Wrench Shape", <em>IEEE/RSJ IROS 2024</em></li>
      <li>J. Jeong, <strong>S. Park</strong>, S. Lee, D. Youn, and M. J. Kim, "Designing an End-to-End UAV System for Insulator Inspection under Transmission Tower Environments", <em>IEEE ICEIC 2024</em></li>
    </ul>
  </div>

</div>
</details>



<details class="member-card">
<summary>
  <div class="member-name">Jiwon Kim</div>
  <div class="member-role">Ph.D. Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->

  <div class="member-links">
    <a class="member-button" href="https://material-saver-5cf.notion.site/Jiwon-Kim-182380f06b718028910dcd61521e7cd6" target="_blank" rel="noopener noreferrer">
      CV
    </a>
  </div>

  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Robotics, AI, control</p>
  </div>

  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>

    <ul class="pub-list">
      <li><strong>J. Kim</strong>, and M.J. Kim, "Disturbance-Aware Model Predictive Control of Underactuated Robotics Systems", <em>IEEE/RSJ IROS 2024</em></li>
    </ul>
  </div>

</div>
</details>



<details class="member-card">
<summary>
  <div class="member-name">Sungmin Kim</div>
  <div class="member-role">Ph.D. Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->

  <div class="member-links">
    <a class="member-button" href="https://hazel-drop-19f.notion.site/Sungmin-Kim-1856925c187a80c4b682f386c5aa97a7?pvs=4" target="_blank" rel="noopener noreferrer">
      CV
    </a>
  </div>

  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Robotics, AI, control</p>
  </div>

  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>

    <ul class="pub-list">
      <li><strong>S. M. Kim</strong>, and M. J. Kim, “Learning Reactive Motion Policies by Leveraging Latent Data Manifolds” <em>(poster presentation), IEEE ICCAS 2024</em></li>
    </ul>
  </div>
  <div class="member-section">
    <div class="member-section-title">Publications (Domestic)</div>

    <ul class="pub-list">
      <li>이효준, <strong>김성민</strong>, 김민준, “전문가 개입 없이 안전한 매니퓰레이터의 강인제어 매개변수 자동 튜닝 방법”, <em>2023 한국정밀공학회 추계학술대회 논문집(KSPE), November, 2023.</em></li>
    </ul>
  </div>
</div>
</details>



<details class="member-card">
<summary>
  <div class="member-name">Sanghoon Lee</div>
  <div class="member-role">Ph.D. Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->

  <div class="member-links">
    <a class="member-button" href="{{ '/assets/pdf/cv/CV_Sanghoon_Lee.pdf' | relative_url }}" target="_blank">
      CV
    </a>
  </div>

  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Robotics, AI, control</p>
  </div>

  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>

    <ul class="pub-list">
      <li>J. Jeong, S. Park, <strong>S. Lee</strong>, D. Youn, and M. J. Kim, "Designing an End-to-End UAV System for Insulator Inspection under Transmission Tower Environments", <em>IEEE ICEIC 2024</em></li>
    </ul>
  </div>
  <div class="member-section">
    <div class="member-section-title">Publications (Domestic)</div>

    <ul class="pub-list">
      <li><strong>S. Lee</strong>, J. Jeong, and M. J. Kim, “Implementation of Impedance Controller for Redundant Robot Manipulators Using Extended Exponential Coordinates”, <em>The 37th ICROS (winner of the outstanding undergraduate paper award)</em></li>
    </ul>
  </div>

</div>
</details>



<details class="member-card">
<summary>
  <div class="member-name">Taeho Yun</div>
  <div class="member-role">Ph.D. Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->

  <div class="member-links">
    <a class="member-button" href="https://time-muenster-bdf.notion.site/TAE-HO-YUN-1655c373d7ca80fda388e9a3e427dd3a?pvs=4" target="_blank" rel="noopener noreferrer">
      CV
    </a>
  </div>

  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Robotics, AI, control</p>
  </div>

  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>

    <ul class="pub-list">
      <li>Y. B. Lee*, <strong>T. H. Yun*</strong> and M. J. Kim, "Extreme High-Gain Friction Observer of Flexible Joint Robots With L1 Adaptive Framework," <em>in IEEE Transactions on Robotics (T-RO), 2026 (* = Co-first, will be presented @ Humanoids 2026, California, USA)</em></li>
      <li><strong>T. H. Yun</strong>, F. Beck, M. J. Kim and J. Lee, "Exact Fractional Order Impedance Rendering for Highly Flexible and Multi-Jointed Robots Using Time-Delay Estimation,” <em>in IEEE Robotics and Automation Letters (RA-L), vol. 10, no. 12, pp. 12891-12898, Dec. 2025. (will be presented @ IROS 2026, Pittsburgh, USA)</em></li>
      <li><strong>T. H. Yun</strong> and M. J. Kim, "Disturbance Observer With Constraints", <em>in IEEE Control Systems Letters, vol. 8, pp. 1949-1954, 2024. (presented in 63rd IEEE Conference on Decision and Control (CDC), Milano, Italy)</em></li>
    </ul>
  </div>
  <div class="member-section">
    <div class="member-section-title">Publications (Domestic)</div>

    <ul class="pub-list">
      <li><strong>T. H. Yun</strong>, ”Smart Air Circulator for indoor environment”, <em>The 17th Korea Robotics Society Annual Conference (KRoC2022), PyeongChang, Korea, May. 11-14, 2022. (Undergraduate Excellent Dissertation Award).</em></li>
    </ul>
  </div>
</div>
</details>

</div>


## MS Candidates  

<div class="member-grid">

<details class="member-card">
<summary>
  <div class="member-name">Sunho Kim</div>
  <div class="member-role">MS Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->
  <div class="member-links">
    <a class="member-button" href="{{ '/assets/pdf/cv/CV_Sunho_Kim.pdf' | relative_url }}" target="_blank">
      CV
    </a>
  </div>
  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Robot learning, manipulation, control</p>
  </div>

  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>

    <ul class="pub-list">
      <li>Tung Minh Luu, Younghwan Lee, Donghoon Lee, <strong>Sunho Kim</strong>, Min Jun Kim, Chang D. Yoo. "Enhancing Rating-Based Reinforcement Learning to Effectively Leverage Feedback from Large Vision-Language Models." <em>Forty-second International Conference on Machine Learning (ICML), 2025.</em></li>
      <li><strong>Sunho Kim</strong>, Hayeon Park, and Chang-Gun Lee. "Optimizing the Response Time for ROS Tasks in Multi-Core Processors." <em>2023 IEEE/ACM 27th International Symposium on Distributed Simulation and Real Time Applications (DS-RT). IEEE, 2023.</em></li>
    </ul>
  </div>
  <div class="member-section">
    <div class="member-section-title">Publications (Domestic)</div>

    <ul class="pub-list">
      <li><strong>Sunho Kim</strong>, Dongmin Shin and Chang-Gun Lee. "Autoware Controller Interface for Actual Vehicle Driving," <em>Korea Computer Congress, 2022.</em></li>
    </ul>
  </div>
</div>
</details>

<details class="member-card">
<summary>
  <div class="member-name">Wonjun Han</div>
  <div class="member-role">MS Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->
  <div class="member-links">
    <a class="member-button" href="{{ '/assets/pdf/cv/CV_Wonjun_Han.pdf' | relative_url }}" target="_blank">
      CV
    </a>
  </div>
  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Motion planning, reinforcement learning</p>
  </div>

  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>
  </div>

</div>
</details>


<details class="member-card">
<summary>
  <div class="member-name">Jaehun Jeong</div>
  <div class="member-role">MS Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->
  <div class="member-links">
    <a class="member-button" href="{{ '/assets/pdf/cv/CV_Jaehun_Jeong.pdf' | relative_url }}" target="_blank">
      CV
    </a>
  </div>
  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Robotics, AI, control</p>
  </div>

  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>
  </div>

</div>
</details>


<details class="member-card">
<summary>
  <div class="member-name">Seoyoon Kim</div>
  <div class="member-role">MS Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->
  <div class="member-links">
    <a class="member-button" href="{{ '/assets/pdf/cv/CV_Seoyoon_Kim.pdf' | relative_url }}" target="_blank">
      CV
    </a>
  </div>
  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Robotics, AI, control</p>
  </div>

  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>
  </div>

</div>
</details>


<details class="member-card">
<summary>
  <div class="member-name">Jinyeol Kim</div>
  <div class="member-role">MS Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->
  <div class="member-links">
    <a class="member-button" href="{{ '/assets/pdf/cv/CV_Jinyeol_Kim.pdf' | relative_url }}" target="_blank">
      CV
    </a>
  </div>
  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Robotics, AI, control</p>
  </div>

  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>
  </div>

</div>
</details>


<details class="member-card">
<summary>
  <div class="member-name">Seungmin Shin</div>
  <div class="member-role">MS Candidate</div>
</summary>

<div class="member-info">

  <!-- <div class="info-line">
    <strong>Email:</strong> student.email (at) kaist.ac.kr
  </div> -->
  <div class="member-links">
    <a class="member-button" href="{{ '/assets/pdf/cv/CV_Seungmin_Shin.pdf' | relative_url }}" target="_blank">
      CV
    </a>
  </div>
  <div class="member-section">
    <div class="member-section-title">Research Interests</div>
    <p>Robotics, AI, control</p>
  </div>

  <div class="member-section">
    <div class="member-section-title">Publications (International)</div>
  </div>

</div>
</details>

</div>


## Alumni

- Jiwan Han (M.S. 2023, continuing as a Ph.D. student)
- Seo Wook Han  (M.S. 2024, continuing as a Ph.D. student)
- Hyojun Lee (M.S. 2024)
- Seongsu Park (M.S. 2024, continuing as a Ph.D. student)
- Suhwan Sung (M.S. 2024)
- Jiwon Kim (M.S. 2025, continuing as a Ph.D. student)
- Sungmin Kim (M.S. 2025, continuing as a Ph.D. student)
- Sanghoon Lee (M.S. 2025, continuing as a Ph.D. student)
- Taeho Yun (M.S. 2025, continuing as a Ph.D. student)
- Young Bin Lee (M.S. 2025)
- Seung Min Yang (M.S. 2025)




<!-- <div class="member-grid">

<details class="member-card">
<summary>
  <div class="member-name">Student Name</div>
  <div class="member-role">Undergraduate Intern</div>
</summary>

<div class="member-info">

<p><strong>Email:</strong> student.email (at) kaist.ac.kr</p>
<p><strong>Research interests:</strong> Robotics, AI, embedded systems</p>

<p><strong>Projects / Publications (International)</strong></p>

<ul>
  <li>Project title or paper title, Year</li>
</ul>

</div>
</details>

</div> -->
