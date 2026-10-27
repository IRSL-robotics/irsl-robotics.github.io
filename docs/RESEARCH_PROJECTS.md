# Research projects

The Research landing page keeps its three original areas. Category pages display project cards with compressed demonstration videos and link to individual project pages.

The category pages omit the three-area navigation strip and its project counts. The All research areas link returns to the Research landing page.

There are 14 retained project records: 11 public projects and three private drafts.

| Area                       | Public projects, in display order                                             |
| -------------------------- | ----------------------------------------------------------------------------- |
| Robot Control & Safety     | Memory-based SO(3), C-NRIC, L1AFO, Multi-Contact Feedback MPC                 |
| Physical AI                | ContactFlowFilter, SCDP, Contact Diffusion Model (CDM), MCP-EP, Tire Stacking |
| Robotic Systems & Hardware | SAM2, SARAM-H                                                                 |

SCDM, Fault-Tolerant Flight, and gO-AMPC are private. Tire Stacking, SAM2, and SARAM-H remain public without an assigned publication date and appear after dated projects within their areas.

## Content and sorting

- `_data/research_projects.yml` contains project descriptions, visibility, chronological keys, source references, metrics, and representative publications.
- Detail pages with representative publications use a centered project header: the latest paper's title is the main heading, authors appear as individual names, and the venue, year, and status sit on a separate highlighted line. Earlier versions retain their own title, authors, and venue below the main paper. The full Representative Publications section remains below the project content. Projects without recorded publications keep the standard page heading.
- The project header links to the Original Project Page when a public `source_url` is recorded. Links that redirect to a sign-in page are omitted.
- The former Selected Results, In the Demo, and Platform sections are hidden on every project page. Their source metrics, highlights, and platform details remain in the data for reference; method and experiment content is rendered through the project's content include.
- `_data/research_areas.yml` defines category names and URLs. Change a project's `area` to move it; counts and return links update automatically.
- Public cards are filtered with `published: true` and sorted by `publication_sort` descending. Zero is reserved for projects without confirmed publication chronology.
- `_pages/research-projects/` provides stable URLs. Keep page titles/descriptions aligned with the corresponding data record.
- `_includes/research-project-gallery.liquid`, `research-project-detail.liquid`, and `research-project-video.liquid` are site-specific content templates. Longer content lives in `_includes/research-project-content/`.
- Page styles and preview behavior live in `assets/css/research-projects.css` and `assets/js/research-projects.js`.

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

Descriptions are adapted to this site's format. Each detail page credits its source. `docs/research-media-sources.yml` records the source URL and local destination of each imported media asset. CDM's citation pages use the publisher's Crossref record (4702–4708), correcting the differing page range on the source project page.

SCDP includes the architecture diagram, responsive Meta-World result charts, nine manipulation demonstrations, and two humanoid demonstrations from the official project page. Video captions retain the source's 2× or 4× playback speeds. The paper and code links point to arXiv and the IRSL-robotics/SCDP repository. The author spelling “Yeong Jin Heo” follows arXiv and the existing bibliography; the project website spells the name differently.

Jinyeong Jeong and Min Jun Kim's newly accepted RA-L paper is recorded in `_bibliography/papers.bib`, All Publications, Jinyeong's Members entry, and the Memory-based SO(3) representative publications. Selected Publications renders the bibliography and connects public project papers to the new internal project pages. No unconfirmed Youtube link or co-first-author marker is added.

The RA-L entry `jeong2026direction` uses `assets/img/publication_preview/direction-preserving-so3-first-experiment.gif` for automatic looping in Selected Publications. It contains only the first comparison experiment from `assets/video/research/memory-based-so3.mp4` (0.50–7.75 seconds), encoded at 384 × 216 and 10 fps with a 96-color palette and infinite looping. The earlier JPG is retained as a still image, but is not the publication preview.

Memory-based SO(3) groups its ICRA 2022 conference paper and RA-L 2026 journal version. C-NRIC groups its ICRA 2024 conference paper and Intelligent Service Robotics 2026 journal version. Each citation has a `version` label, its own author list, and its own resource links. Both publication keys link to the same project from Selected Publications; the latest publication continues to determine the project's position in the Research gallery.

The former Google Sites project links, including Memory-based SO(3), C-NRIC, and L1AFO, redirected to Google sign-in when checked on 2026-10-27. They are omitted from the Research pages and the legacy `_projects/` documents. L1AFO's representative publication reuses the title, authors, venue, year, acceptance status, and resources already recorded in `_bibliography/papers.bib` and `_projects/L1AFO.md`.

## Original content and private drafts

The original `_projects/` documents and `_includes/research-project-list.liquid` remain available; inaccessible Google Sites links have been removed. The three category pages now use the new gallery, so the old Research Topic and Publications sections no longer appear there. Existing project URLs remain available. Changing those category includes back to `research-project-list.liquid` restores the former layout.

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

Gallery previews play only while visible. Each has a play/pause control; leaving the viewport or switching browser tabs pauses it. Reduced-motion and data-saver preferences disable automatic playback. Native video controls remain available without JavaScript. Detail pages use manual playback.
