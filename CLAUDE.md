# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Woongji Kim's personal academic site (https://kimwoongji.github.io), built on the
[al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Most of the repo is upstream theme
code; the actual site content lives in a small set of files (see "Content vs. theme" below).

Ruby/Jekyll does the building. Python is only a build-time helper — do not confuse the two.

## Local development

```bash
source ~/projects/jekyll_env/bin/activate   # required — see below
bundle exec jekyll serve                    # http://127.0.0.1:4000
```

Two environment details that are easy to forget and are **not** discoverable from the repo:

- **The Python venv lives outside the repo** at `~/projects/jekyll_env`. Activating it is not
  optional: the `jekyll-jupyter-notebook` plugin shells out to `jupyter nbconvert` during the build,
  so without it the build fails on notebook conversion.
- **Ruby gems are already installed** to `~/gems` (`GEM_HOME`/`PATH` are exported in `~/.zshrc`).
  `bundle install` is not needed unless the `Gemfile` changes; `bundle check` confirms the state.

Expected build noise — neither indicates a problem:

- ~40 Dart Sass deprecation warnings from `_sass/tabler-icons/` (upstream uses pre-3.0 Sass syntax).
- A ~15s first build, dominated by `[NbConvertApp] Converting notebook`.

Formatting is Prettier with the Shopify Liquid plugin (`printWidth: 150`), plus pre-commit hooks
(trailing whitespace, EOF, YAML check):

```bash
npx prettier --write .
pre-commit run --all-files
```

Note `.prettierignore` excludes `_data/citations.yml`, `_scripts/*`, and vendored CSS/JS.

## Content vs. theme

When making content changes, these are the files that matter. Everything else is upstream theme code
and should generally be left alone:

| Path                       | Purpose                                             |
| -------------------------- | --------------------------------------------------- |
| `_bibliography/papers.bib` | All publications (see below)                        |
| `_projects/*.md`           | Project pages                                       |
| `_pages/*.md`              | about / cv / publications / projects / repositories |
| `assets/json/resume.json`  | CV content (JSON Resume format)                     |
| `_data/*.yml`              | `socials`, `venues`, `coauthors`, `repositories`    |
| `_config.yml`              | Site-wide settings                                  |

Collections defined in `_config.yml`: `books`, `news`, `projects`.

`_pages/cv.md` renders from **`assets/json/resume.json`**, not `_data/cv.yml`. `_layouts/cv.liquid:4`
falls back to `_data/cv.yml` only via `{% unless site.data.resume %}`, and `jekyll_get_json` always
populates `site.data.resume`, so `_data/cv.yml` is dead weight here. Edit the JSON.

## Publications pipeline

This is the most interconnected part of the site — a change to a `.bib` entry can touch four layers.

1. **`_bibliography/papers.bib`** is the source of truth. Rendered by `jekyll-scholar`, configured
   under `scholar:` in `_config.yml` (style `nature`, grouped by year descending, `last_name: [Kim]`).
2. **`_layouts/bib.liquid`** renders each entry and its badges. al-folio adds non-standard BibTeX
   fields that drive presentation rather than citation: `abbr`, `preview`, `selected`, `award`,
   `google_scholar_id`, `altmetric`, `dimensions`, `inspirehep_id`, `pdf`, `code`, `slides`. These are
   stripped from the displayed BibTeX via `filtered_bibtex_keywords` in `_config.yml`.
3. **Citation counts** come from `_data/citations.yml`, looked up in `bib.liquid:324-334`. That file
   is **generated — never hand-edit it.** See below.
4. **Site-specific author conventions** (documented in the legend at `_pages/publications.md`):
   markers are written _inline in the author field_, e.g. `author = {Kim†, Woongji and Rho*, Junsuk}`
   — `†` for equal contribution, `*` for corresponding author. A `preview` image signals first
   authorship. Preserve these markers when editing entries.

`_projects/*.md` front matter uses `related_publications: true` to pull matching entries from the
bibliography, plus `importance` (sort order) and `category` (grouping on `_pages/projects.md`).

### Media coverage — local addition, not upstream al-folio

Renders as a "Media coverage" block below the badges: a label, then one row per group. Split across
two files, following the same idiom as `abbr` → `_data/venues.yml`: the bib entry carries only what
is paper-specific.

- **`_data/press.yml`** — outlet registry: display name, `group`, `domain`, optional `invert_dark`.
  Also defines the groups and their display order (`English`, `Korean`, `Video`; `embed: true` on a
  group renders players instead of links). Outlet names are written in English or romanized,
  matching the co-author's list at https://beomseokohme.github.io/publications/.

  **There are no logo files.** Icons are hotlinked at render time from
  `https://www.google.com/s2/favicons?domain=<domain>&sz=128`, which normalizes every site's mark to
  the same square — adding an outlet is a name, a group and a domain, nothing else. The tradeoff is
  deliberate: the page calls google.com once per outlet, so visitors are exposed to Google on load.
  The service serves the site's native favicon when it is smaller than requested, and falls back to
  a generic globe when it has nothing; in that case omit `domain:` so the name stands alone
  (Kyongbuk Maeil and Veritas Alpha are the current examples).

- **`_bibliography/papers.bib`** — a `press` field per entry, formatted `<slug>|<article url>` with
  entries separated by `;`.
- **`_layouts/bib.liquid`** renders it; `_sass/_base.scss` (`.press`) styles it; `press` is in
  `filtered_bibtex_keywords`.

Items in the `Video` group render as a YouTube poster frame linking out, **not** an `<iframe>`.
`bib.liquid` pulls the id from whichever URL form the bib entry gives (`watch?v=`, `/shorts/`,
`youtu.be/`) and builds an `i.ytimg.com/vi/<id>/hqdefault.jpg` still. Embedding was tried first and
abandoned: whether a video plays embedded is settled in the browser against the page origin, and one
of these rendered "Video unavailable" despite reporting `playableInEmbed: true` — not reproducible
server-side. A still cannot fail that way. `/shorts/` links are tagged vertical; the box is sized by
height with `aspect-ratio` so the 9:16 and 16:9 posters sit level, and `object-fit: cover` crops
YouTube's 4:3 still back to the real frame.

One layout constraint worth keeping: `.badges` is nested **inside** `.links` so the DOI button and
the Altmetric/Dimensions/Scholar badges are items of a single flex row. Inline-block alignment could
not line them up, because those scripts decide their own heights at runtime. `.links` must stay a
direct child of the entry div — `assets/js/common.js` finds the entry with
`$(this).parent().parent()` from `a.abstract`.

Deliberate behaviours: an outlet with no `domain` falls back to its name as text, and a slug missing
from the registry still renders (ungrouped, showing the raw slug) so typos surface instead of
silently vanishing. Because `%` starts a comment in BibTeX, percent-encode any `%` in article URLs
as `%25`.

### Citation counts are updated by CI, not locally

`bin/update_scholar_citations.py` reads `scholar_userid` from `_data/socials.yml`, queries Google
Scholar via the `scholarly` package, and writes `_data/citations.yml`. It skips work if already run
today or if counts are unchanged.

**`scholarly` is intentionally not installed in the local venv.** `.github/workflows/update-citations.yml`
installs `requirements.txt` in CI and runs the script there; every `Update Google Scholar citations`
commit is authored by `GitHub Actions <actions@github.com>`. Don't install it locally or run the
script by hand unless specifically debugging it.

That workflow runs on **cron (Mon/Wed/Fri 00:00 UTC) + `workflow_dispatch` — not on push.** To force
a refresh: `gh workflow run update-citations.yml`.

Caveat worth knowing: the PAT is commented out at `update-citations.yml:17-19`, so the bot's commit
uses the default `GITHUB_TOKEN`. GitHub does not let such commits trigger other workflows, so a
citation update **does not redeploy the site** — the new numbers go live on the next human push.

## Deployment

Push to `main` → `.github/workflows/deploy.yml` → Jekyll build (`JEKYLL_ENV=production`) → purgecss →
publish `_site/` to the `gh-pages` branch. Deploy is **path-filtered** (`deploy.yml:8-32`): edits
confined to e.g. `README.md`, `CUSTOMIZE.md`, or `lighthouse_results/` will not trigger a build.

CI installs only `nbconvert` on the Python side (`deploy.yml:94`), which is why the local venv only
needs `nbconvert` to mirror it.

Local production-parity build:

```bash
JEKYLL_ENV=production bundle exec jekyll build
purgecss -c purgecss.config.js
```

Other workflows: `prettier.yml`, `axe.yml` (a11y), `broken-links.yml`, `codeql.yml`,
`lighthouse-badger.yml`, `update-tocs.yml`.

## Custom plugins

`_plugins/*.rb` are local Ruby plugins, not gems. Most relevant: `google-scholar-citations.rb` and
`inspirehep-citations.rb` (Liquid tags that scrape citation counts at build time, with in-process
caching and randomized sleeps), `cache-bust.rb`, `external-posts.rb`, `hide-custom-bibtex.rb`.

Note the redundancy: `google_scholar_citations` scrapes live during the build, while
`_data/citations.yml` is the CI-generated cache. `bib.liquid` prefers the cached file.
