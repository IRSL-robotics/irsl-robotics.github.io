# Research projects

The Research landing page keeps its three original areas. Each category page shows two sections: **Research Areas** restores the original broader research topics, followed by **Research Highlights** with the current project cards and compressed demonstration videos. Research topic cards use two columns above 700px and one on smaller screens. The Research Highlights gallery uses three columns on desktop, two at viewport widths of 701–1024px, and one at 700px or below. Both sets of cards use the same title size.

The category pages omit the three-area navigation strip and the category kicker (such as “Perception · Learning · Manipulation”). The All research areas link returns to the Research landing page. Numbered Research Areas and Research Highlights headings separate the two levels without displaying counts. Keep `research_kicker` in page front matter for the retained legacy layout only.

There are 14 retained project records: 11 public projects and three private drafts.

| Area                       | Public projects, in display order                                             |
| -------------------------- | ----------------------------------------------------------------------------- |
| Robot Control & Safety     | Memory-based SO(3), C-NRIC, L1AFO, Multi-Contact Feedback MPC                 |
| Physical AI                | ContactFlowFilter, SCDP, Contact Diffusion Model (CDM), MCP-EP, Tire Stacking |
| Robotic Systems & Hardware | SAM2, SARAM-H                                                                 |

SCDM, Fault-Tolerant Flight, and gO-AMPC are private. Tire Stacking, SAM2, and SARAM-H remain public without an assigned publication date and appear after dated projects within their areas.

## Content and sorting

- Research topics come from `_projects/` documents matching the category's `research_area` and `research_item_type: project`, ordered by `importance`. Documents with `published: false` stay hidden. Cards reuse their original titles, descriptions, images, image-fit settings, and detail URLs; edit those documents to update a broader topic.
- `_data/research_projects.yml` contains project descriptions, visibility, chronological keys, source references, metrics, and representative publications.
- The five pages imported from public original project websites set `original_project_content: true`. Their content includes preserve the original paper header, affiliations, abstract, section order, full prose, equations, figures, captions, comparison tables, demonstrations, full-video embeds, and citation section. Their layouts follow the original websites; do not replace these with short summaries or apply the generic detail-page omissions below to them. The four contact/control pages also set `math: true` for MathJax.
- Detail pages with one representative publication use a centered header with the paper title, individual author names, and venue, year, and status. Projects with multiple publications use the project name as the main heading and equally sized cards for each version, with matching title typography and explicit Journal/Conference version labels. These cards sit side by side above 700px and stack on smaller screens, preserving newest-first order. Projects without recorded publications keep the standard page heading.
- Omit the lower Representative Publications section on every detail page. Publication records, BibTeX, resource URLs, and version information remain in the data; the publication header and the separate Publications pages remain available.
- The project header links to the Original Project Page when a public `source_url` is recorded. Links that redirect to a sign-in page are omitted.
- Detail pages omit the shared opening demonstration video, including clips extracted from the PPT. Keep these media files for category-card previews; experiment videos embedded in project content and Selected Publications previews remain in place.
- Detail pages also omit the research-theme tags and short project introduction beneath the header. Category cards omit the research-theme badges as well. Keep `tags` in the project data for reference and `description` for category cards.
- Each category card is one link to its project page, including the preview, text, and empty space. Only hovering the title adds an accent color and underline; keyboard focus also highlights the title and outlines the card. Do not add a separate View Project button or nested interactive controls inside the card link.
- The detail-page header and the first content section have no separating horizontal rules; separators between later content sections remain.
- Detail-page media keep the original vertical reading order: text first, then the associated image. Do not place explanatory text and images side by side. Adjust image sizes and spacing while keeping this structure. Media use centered, bounded widths: 640px by default, 768px for wide diagrams and existing media pairs, and 480px for compact figures. Images retain their aspect ratio without cropping and link to the full asset for closer inspection. Existing pairs contain media only and stack on mobile; an unpaired video in a two-column group is centered.
- The former Selected Results, In the Demo, and Platform sections are hidden on every project page. Their source metrics, highlights, and platform details remain in the data for reference; method and experiment content is rendered through the project's content include.
- `_data/research_areas.yml` defines category names and URLs. Change a project's `area` to move it; gallery membership and return links update automatically.
- Public cards are filtered with `published: true` and sorted by `publication_sort` descending. Zero is reserved for projects without confirmed publication chronology.
- `_pages/research-projects/` provides stable URLs. Keep page titles/descriptions aligned with the corresponding data record.
- `_includes/research-project-gallery.liquid`, `research-project-detail.liquid`, and `research-project-video.liquid` are site-specific content templates. Longer content lives in `_includes/research-project-content/`.
- Page styles and preview behavior live in `assets/css/research-projects.css` and `assets/js/research-projects.js`.
- Imported originals use `assets/css/research-original-projects.css` and `assets/js/research-original-projects.js`. All source styles are scoped to `.research-original--author` or `.research-original--scdp`, retaining the lab navigation and themes. The shared detail template skips its generic hero for these pages to avoid duplicating the title.

### Chronology sources

Dates are never fabricated from a publication year. Where Crossref provides only a year, DOI registration is used as a documented ordering fallback; it is not displayed as an exact publication date.

| Project                    | Ordering date | Basis                                                                                                                             |
| -------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Memory-based SO(3)         | 2026-10-23    | DOI registration of the newly accepted RA-L paper, [10.1109/LRA.2026.3746072](https://doi.org/10.1109/LRA.2026.3746072)           |
| C-NRIC                     | 2026-08-18    | Online publication, [10.1007/s11370-026-00744-z](https://doi.org/10.1007/s11370-026-00744-z)                                      |
| ContactFlowFilter          | 2026-08-14    | DOI registration, [10.1109/TRO.2026.3723975](https://doi.org/10.1109/TRO.2026.3723975)                                            |
| SCDP                       | 2026-06-12    | First public arXiv version, [2606.14535](https://arxiv.org/abs/2606.14535); CoRL 2026 acceptance is recorded in the existing site |
| L1AFO                      | 2026-04-21    | DOI registration, [10.1109/TRO.2026.3686177](https://doi.org/10.1109/TRO.2026.3686177)                                            |
| CDM                        | 2025-05-19    | Crossref conference publication date, [10.1109/ICRA55743.2025.11127780](https://doi.org/10.1109/ICRA55743.2025.11127780)          |
| Multi-Contact Feedback MPC | 2024-05-13    | Crossref conference publication date, [10.1109/ICRA57147.2024.10611151](https://doi.org/10.1109/ICRA57147.2024.10611151)          |
| MCP-EP                     | 2023-05-29    | Crossref conference publication date, [10.1109/ICRA48891.2023.10161173](https://doi.org/10.1109/ICRA48891.2023.10161173)          |

### Research sources

The original 12 project summaries and demonstration clips come from `IRSL_promo.pptx`, slides 2–13. The presentation itself is not copied into the repository. Tire Stacking is the display name for the presentation's “Stack It Stable” project.

The following author pages supply the expanded method descriptions, diagrams, experiment clips, and result tables:

- [ContactFlowFilter](https://seowookhan.github.io/SeoWookHan/projects/1_contact_flow_filter/)
- [Multi-Contact Feedback MPC](https://seowookhan.github.io/SeoWookHan/projects/3_multi_contact_mpc/)
- [Contact Diffusion Model](https://seowookhan.github.io/SeoWookHan/projects/2_contact_diffusion_model/)
- [MCP-EP](https://seowookhan.github.io/SeoWookHan/projects/4_mcpep/)
- [SCDP](https://scdp-project.github.io/)

These five original pages were restored in full on 2026-11-03. Their research prose, headings, tables, and captions are retained instead of paraphrased. Every source image and demonstration is represented locally, including the opening ContactFlowFilter video, its multi-modality/local-minima comparisons, MPC's unknown-object stacking experiment, MCP-EP's particle-set management and dual-contact videos, and CDM's dual-contact video. Each detail page credits its source. `docs/research-media-sources.yml` records the source URL and local destination of each imported media asset.

| Imported original          | Images | Local videos | Tables | Full-video embeds |
| -------------------------- | ------ | ------------ | ------ | ----------------- |
| ContactFlowFilter          | 9      | 6            | 3      | 1                 |
| CDM                        | 5      | 3            | 1      | 1                 |
| Multi-Contact Feedback MPC | 4      | 4            | 1      | 1                 |
| MCP-EP                     | 4      | 5            | 1      | 1                 |
| SCDP                       | 2      | 11           | 1      | 0                 |

The SCDP image count includes the responsive simulation chart, whose mobile SVG is retained as an additional source. The four contact/control pages retain all six displayed equations and their inline math. Original related-project navigation points to the corresponding internal pages. Paper resources follow the lab's Paper, Bib, Youtube, Project naming and order; Project opens the original website. Alternate paper URLs and SCDP's code link remain available. Bib buttons jump to the complete citation, rendered from the verified project data. CDM's citation uses the publisher's Crossref page range (4702–4708), correcting the source website's page range.

Layout sources are [the author's project stylesheet](https://seowookhan.github.io/SeoWookHan/assets/css/site-theme.css), [SCDP's stylesheet](https://scdp-project.github.io/static/css/index.css), and [SCDP's playback/citation script](https://scdp-project.github.io/static/js/index.js). Source cards, abstract callouts, statistics, method steps, simulation panels, and experiment groupings are preserved, with scoped theme and mobile adjustments.

SCDP includes the complete abstract, architecture diagram, three method cards, responsive Meta-World result charts, nine manipulation demonstrations, and two humanoid demonstrations from the official project page. Video captions retain the source's 2× or 4× playback speeds and task steps. The paper and code links point to arXiv and the IRSL-robotics/SCDP repository. The author spelling “Yeong Jin Heo” follows arXiv and the existing bibliography; the project website spells the name differently. Equal-contribution markers are not imported without the user's explicit designation, following `AGENTS.md`.

Jinyeong Jeong and Min Jun Kim's newly accepted RA-L paper is recorded in `_bibliography/papers.bib`, All Publications, Jinyeong's Members entry, and the Memory-based SO(3) representative publications. Selected Publications renders the bibliography and connects public project papers to the new internal project pages. No unconfirmed Youtube link or co-first-author marker is added.

The RA-L entry `jeong2026direction` uses `assets/img/publication_preview/direction-preserving-so3-first-experiment.gif` for automatic looping in Selected Publications. It contains only the first comparison experiment from `assets/video/research/memory-based-so3.mp4` (0.50–7.75 seconds), encoded at 384 × 216 and 10 fps with a 96-color palette and infinite looping. The earlier JPG is retained as a still image, but is not the publication preview.

Memory-based SO(3) groups its ICRA 2022 conference paper and RA-L 2026 journal version. C-NRIC groups its ICRA 2024 conference paper and Intelligent Service Robotics 2026 journal version. Each citation has a `version` label, its own author list, and its own resource links. Both publication keys link to the same project from Selected Publications; the latest publication continues to determine the project's position in the Research gallery.

The former Google Sites project links, including Memory-based SO(3), C-NRIC, and L1AFO, redirected to Google sign-in when checked on 2026-10-27. They are omitted from the Research pages and the legacy `_projects/` documents. L1AFO's representative publication reuses the title, authors, venue, year, acceptance status, and resources already recorded in `_bibliography/papers.bib` and `_projects/L1AFO.md`.

## Original content and private drafts

The original `_projects/` documents and `_includes/research-project-list.liquid` remain available; inaccessible Google Sites links have been removed. The three category pages use `research-project-gallery.liquid` to show Research Areas above Research Highlights. Existing topic and project URLs remain available. The legacy bibliography-based Publications section is retained only in `research-project-list.liquid`.

For each private draft, visibility is disabled in both the data (`published: false`) and page front matter (`published: false`, `sitemap: false`). Its MP4 and poster are retained in `_private/research-media/`, which Jekyll does not publish. Private draft pages, their former public media URLs, and the `_private/` paths should all return 404 in the built site. This is website visibility control, not access control on the Git repository.

To publish a private draft later, enable both visibility flags, remove `sitemap: false`, and move its MP4/JPEG from `_private/research-media/` back to `assets/video/research/`.

## Media and playback

Videos are H.264 at 960 × 540 and 24 fps with fast-start metadata. PPT clips retain their full duration; the 12 original videos were reduced from 145.16 MB to 8.79 MB. Original PPT poster images were resized to at most 960 × 540. Imported diagrams are optimized WebP images, and imported experiment clips have JPEG posters extracted from the videos.

The 11 SCDP experiment clips use CRF 27 and retain their full source durations. Their posters come from the official project website. SCDP's simulation charts are retained as SVG, including the source's mobile variant.

```bash
ffmpeg -i source.mp4 -map_metadata -1 -an \
  -vf 'scale=960:540:force_original_aspect_ratio=decrease:force_divisible_by=2,pad=960:540:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=24' \
  -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p \
  -movflags +faststart -threads 2 project.mp4
```

Gallery previews play only while visible. They have no play/pause controls, labels, or icons covering the video; clicking the preview opens the project just like the rest of the card. Leaving the viewport or switching browser tabs pauses playback. Reduced-motion and data-saver preferences disable automatic playback. Poster images remain available without JavaScript.

Restored original pages retain looping demonstrations with native controls, visibility-aware playback, and a Pause autoplay / Enable autoplay toggle. Reduced-motion and data-saver preferences initially disable autoplay; manual playback remains available. Pausing an individual clip prevents automatic restarts. Without JavaScript, videos use native controls and autoplay/copy buttons stay hidden. SCDP retains its Copy BibTeX button and status message. Other detail pages continue to use manual playback through `research-project-video.liquid`. Newly restored media retain their source bytes and full duration; previously imported complete clips and optimized images are reused.
