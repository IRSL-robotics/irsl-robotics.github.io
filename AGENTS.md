# Agent Guidelines for al-folio (v1.x)

`al-folio` is the **starter repo** for the pluginized v1 architecture.

## Read This First

- Start with `.github/copilot-instructions.md` for architecture, ownership boundaries, and CI expectations.
- Use `docs/BOUNDARIES.md` as the source of truth for starter-vs-plugin ownership.
- Use `.agents/skills/al-folio-bootstrap/SKILL.md` for new-site setup tasks.
- Use `.agents/skills/al-folio-v1-migration/SKILL.md` for customized fork migrations.
- `.codex/skills` and `.claude/skills` are symlinks to `.agents/skills` for agent-specific discovery.

## What This Repo Owns

- Starter wiring (`Gemfile`, `_config.yml`)
- Starter content and documentation
- Cross-plugin integration tests
- Visual regression tests

Runtime/component logic belongs in owning plugin repos (`al_folio_core`, `al_folio_distill`, `al_search`, `al_icons`, `al_cookie`, and other `al-*` gems).
Long-form documentation lives in `docs/`; keep this root file as the short discovery entry point for coding agents.

## Validated Local Command Set

Run from repo root:

```bash
npm ci
npm run lint:prettier
npm run lint:style-contract
bundle exec jekyll build --baseurl /al-folio
bash test/integration_comments.sh
bash test/integration_plugin_toggles.sh
bash test/integration_distill.sh
bash test/integration_bootstrap_compat.sh
bash test/integration_upgrade_cli.sh
npx playwright install chromium webkit
npm run test:visual
bundle exec al-folio upgrade audit
bundle exec al-folio upgrade overrides audit
bundle exec al-folio upgrade report
docker compose up -d
curl -fsS http://127.0.0.1:8080/al-folio/ >/dev/null
docker compose logs --tail=80
docker compose down
```

Docker note: v1 uses `/srv/jekyll/bin/entry_point.sh` and serves from container-local `/tmp/_site` to avoid host bind-mount write deadlocks.

## Agent Routing Rules

- If change is starter wiring/docs/integration/visual testing: edit here.
- If change is runtime feature behavior: route to owning plugin repo.
- Do not add starter-local npm build scripts for theme/runtime assets.
- Keep docs aligned with pluginized v1 ownership.
- If you create or keep local overrides of plugin-owned files, run `bundle exec al-folio upgrade overrides audit` and commit `.al-folio-overrides.yml` after review.


## 홈페이지 콘텐츠 수정 규칙

0. 중요 규칙
- 요청 없이 커밋하거나 배포하지 않는다.
- 업데이트 하는데 정확하게 제공되어야 하는 정보는 마음대로 생성하지 말고, 사용자에게 대화로 요청한다.

1. 논문 추가 시
- 논문 추가 시 All Publications와 해당 저자의 Members 목록을 함께 업데이트한다. 
- Selected Publications의 경우 Major 학회인 경우만 업데이트한다. 
- 공동 제1저자는 사용자가 지정한 경우에만 표시한다.
- 논문 버튼 이름과 순서는 Paper, Bib, Youtube, Project로 한다.
- 프로젝트의 Representative Publications에 추가하고, Project 버튼을 연결한다.
- 업데이트 시 버튼, 논문 이름, 학회 명 등은 해당 페이지의 규칙에 따른다.


2. Members 추가 시

3. Projects 페이지 수정 시
