module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // Altmetric builds its popover at runtime and appends it to <body>, so the id and classes
  // the dark-mode rules in _sass/_base.scss hang off never appear in the built HTML for
  // purgecss to find. Without this the rules compile, work under `jekyll serve`, and are
  // then stripped from the production stylesheet — the failure only shows up once deployed.
  safelist: {
    // MathJax builds its <mjx-container> elements at runtime, so the rule that lets a wide display
    // equation scroll inside its own box (_sass/_base.scss) was stripped the same way, and on a
    // phone a long equation widened the whole page instead.
    greedy: [/_altmetric_popover_el/, /altmetric-popover/, /mjx-container/],
  },
};
