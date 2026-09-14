---
layout: page
permalink: /publications/
title: publications
description: publications by categories in reversed chronological order.
nav: true
nav_order: 3
# Emits one schema.org ScholarlyArticle per entry (see the comment in _layouts/bib.liquid).
# Only one page should claim to be the page about a given DOI; this is that page.
structured_data: true
---

<!-- _pages/publications.md -->

Legend - <ins>underline</ins>: self; \*: corresponding author; †: equal contribution.

Publications accompanied by a **preview image** indicate **first authorship**.

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
