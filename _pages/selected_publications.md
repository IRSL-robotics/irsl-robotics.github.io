---
layout: page
permalink: /selected_publications/
title: Selected Publications
description:
nav: false
---

<!-- _pages/publications.md -->

<!-- <p><strong>*</strong> Co-first authors; <strong>†</strong> Co-corresponding authors.</p> -->

<div class="publications">

{% bibliography %}

</div>



<div class="publication-legacy" markdown="1">

### Before 2017

- <span data-publication-year="2016" data-publication-venue="IROS">W. Lee, M. J. Kim, and W. K. Chung, "Joint torque servo control of electro-hydrostatic actuators for high torque-to-weight ratio robot control", IEEE/RSJ IROS 2016</span>
- <span data-publication-year="2016" data-publication-venue="IROS">M. J. Kim, W. Lee, C. Ott, and W. K. Chung, "A passivity-based admittance control design using feedback interconnections", IEEE/RSJ IROS 2016</span>
- <span data-publication-year="2016" data-publication-venue="ICRA">W. Lee, M. J. Kim, and W. K. Chung, "Model-free joint torque control strategy for hydraulic robots", IEEE ICRA 2016</span>
- <span data-publication-year="2016" data-publication-venue="ICRA">M. J. Kim et al., "Powered upper-limb control using passivity-based nonlinear disturbance observer for unknown payload carrying applications", IEEE ICRA 2016</span>
- <span data-publication-year="2015" data-publication-venue="T-RO">M. J. Kim, and W. K. Chung, "Disturbance-observer-based PD control of flexible joint robots for asymptotic convergence", IEEE T-RO</span>
- <span data-publication-year="2015" data-publication-venue="T-RO">M. J. Kim, Y. Choi, and W. K. Chung, "Bringing Nonlinear H-infinity Optimality to Robot Controllers", IEEE T-RO</span>
- <span data-publication-year="2015" data-publication-venue="IROS">M. J. Kim, W. Lee, and W. K. Chung, "Carrying heavy payload with limited sensory information using high order disturbance observer", IEEE/RSJ IROS 2015</span>
- <span data-publication-year="2014" data-publication-venue="IROS">M. J. Kim, and W. K. Chung, "Robust control of flexible joint robots based on motor-side dynamics reshaping using disturbance observer (DOB)", IEEE/RSJ IROS 2014</span>
- <span data-publication-year="2013" data-publication-venue="IROS">M. J. Kim, and W. K. Chung, "Design of nonlinear H-infinity optimal impedance controllers", IEEE/RSJ IROS 2013</span>
- <span data-publication-year="2012" data-publication-venue="IROS">M. J. Kim, S. Park, and W. K. Chung, "Nonlinear robust internal loop compensator for robust control of robotic manipulators", IEEE/RSJ IROS 2012</span>
- <span data-publication-year="2011" data-publication-venue="IROS">J. Lee, S. Kim, Y. S. Kim, W. K. Chung, and M. J. Kim, "Automated surgical planning and evaluation algorithm for spinal fusion surgery with three-dimensional pedicle mode", IEEE/RSJ IROS 2011</span>

</div>

<style>
  .publications h2.bibliography,
  .publication-legacy h3 {
    margin: 2.75rem 0 1.25rem;
    padding: 0.2rem 0 0.45rem 0.7rem;
    border-bottom: 1px solid color-mix(in srgb, var(--global-theme-color, #2563eb) 18%, transparent);
    border-left: 2px solid color-mix(in srgb, var(--global-theme-color, #2563eb) 55%, transparent);
    color: color-mix(in srgb, var(--global-theme-color, #2563eb) 72%, var(--global-text-color, #111827));
    font-size: 1.2rem;
    font-weight: 650;
    letter-spacing: -0.01em;
  }

  .publications h2.bibliography:first-child {
    margin-top: 0.5rem;
  }

  .publication-legacy {
    margin-top: 3.75rem;
    padding-top: 1.75rem;
    border-top: 1px solid color-mix(in srgb, var(--global-divider-color, rgba(0, 0, 0, 0.12)) 65%, transparent);
  }

  .publication-legacy h3 {
    margin-top: 0;
  }

  .publications .abbr img.publication-preview--portrait {
    display: block;
    width: 100% !important;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    object-position: center;
  }

</style>

<script>
  (() => {
    const initializePublicationEnhancements = () => {
      const publications = document.querySelector(".publications");
      const projectLinks = {
        {% for project in site.data.publication_projects %}
          "{{ project[0] }}": "{{ project[1] | relative_url }}"{% unless forloop.last %},{% endunless %}
        {% endfor %}
      };

      if (!publications) return;

      publications.querySelectorAll(".abbr img.preview").forEach((preview) => {
        const cropPortraitPreview = () => {
          if (preview.naturalHeight > preview.naturalWidth * 0.78) {
            preview.classList.add("publication-preview--portrait");
          }
        };

        if (preview.complete) cropPortraitPreview();
        else preview.addEventListener("load", cropPortraitPreview, { once: true });
      });

      Object.entries(projectLinks).forEach(([bibKey, projectUrl]) => {
        const publication = document.getElementById(bibKey);
        const links = publication?.querySelector(".links");
        if (!links || links.querySelector(".project-link")) return;

        const projectLink = document.createElement("a");
        projectLink.href = projectUrl;
        projectLink.className = "project-link btn btn-sm z-depth-0";
        projectLink.setAttribute("role", "button");
        projectLink.textContent = "Proj";
        links.prepend(projectLink);
      });

      publications.querySelectorAll(".links a").forEach((link) => {
        const href = link.getAttribute("href") || "";
        const label = link.textContent.trim().toLowerCase();
        let source = "";

        if (link.classList.contains("project-link")) {
          source = "project";
        } else if (href.includes("ieeexplore.ieee.org")) {
          source = "ieee";
          link.textContent = "IEEE";
        } else if (href.includes("sciencedirect.com")) {
          source = "elsevier";
          link.textContent = "Elsevier";
        } else if (href.includes("arxiv.org") || label === "arxiv") {
          source = "arxiv";
          link.textContent = "arXiv";
        } else if (href.includes("youtube.com") || href.includes("youtu.be") || label === "video") {
          source = "youtube";
          link.textContent = "YouTube";
        } else if (label === "bib") {
          source = "bib";
        } else if (label === "html") {
          source = "web";
          link.textContent = "Website";
        }

        if (source) link.classList.add("publication-source-link", `publication-source-link--${source}`);
      });

    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializePublicationEnhancements, { once: true });
    } else {
      initializePublicationEnhancements();
    }
  })();
</script>
