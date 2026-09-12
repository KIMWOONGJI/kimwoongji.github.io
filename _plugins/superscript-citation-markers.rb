# Superscript the authorship markers that jekyll-scholar leaves inline in
# `{% cite %}` citations.
#
# The markers (`†` equal contribution, `*` corresponding author — see the legend
# on _pages/publications.md) are written into the `author` field in
# _bibliography/papers.bib, e.g. `author = {Kim†, Woongji and Rho*, Junsuk}`.
#
# _layouts/bib.liquid already superscripts them in the bibliography author list,
# and _plugins/hide-custom-bibtex.rb strips them from the displayed BibTeX. But
# an inline citation is rendered by jekyll-scholar straight from CSL, bypassing
# both, so on pages using `scholar: style: apa` the marker came out at body size:
#
#     (Kim† et al., 2026)      instead of      (Kim<sup>†</sup> et al., 2026)
#
# This rewrites only the text inside `<a class="citation">…</a>`, so the
# already-correct `<sup>` markup elsewhere on the page is left untouched.
#
# `&` is deliberately absent from the marker set used here — bib.liquid includes
# it when filtering a plain-text field, but at this point we are editing rendered
# HTML, where `&` belongs to entities such as `&amp;`.
module Jekyll
  module SuperscriptCitationMarkers
    CITATION = %r{(<a[^>]*class="citation"[^>]*>)(.*?)(</a>)}m
    MARKERS = /([*∗†‡§¶‖]+)/

    def self.apply(html)
      return html if html.nil? || !html.include?('class="citation"')

      html.gsub(CITATION) do
        open_tag, inner, close_tag = Regexp.last_match(1), Regexp.last_match(2), Regexp.last_match(3)
        # Skip anything already superscripted so re-runs stay idempotent.
        inner = inner.gsub(MARKERS) { "<sup>#{Regexp.last_match(1)}</sup>" } unless inner.include?('<sup>')
        "#{open_tag}#{inner}#{close_tag}"
      end
    end
  end
end

Jekyll::Hooks.register [:pages, :documents], :post_render do |item|
  next unless item.output_ext == '.html'

  item.output = Jekyll::SuperscriptCitationMarkers.apply(item.output)
end
