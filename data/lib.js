/* Shared registry for both pages (deck + tutor notes) and print.js.
   Concept-card HTML may mark key details as {{blanks}}: they render as click-to-reveal cloze spans.
   CVS.fig(name, caption, src, page[, cls]) builds a click-to-zoom course figure from img/<name>.jpg
   (sizes from data/figs.js); src is a key of CVS.SRC. Past-paper options keep their original order. */
window.CVS = {
  sections: [],
  dims: {},
  SRC: {
    lab: 'Lab Direction &#8211; ECG',
    ekg: 'Peer &#8211; EKG',
    heart: 'Peer &#8211; Physiology of the Heart',
    ac75: 'AC75&#8211;79 CVS',
    ac80: 'AC80 CVS1 MCQ',
    ac81: 'AC81 CVS MCQ'
  },
  cloze: function (h) { return String(h).replace(/\{\{([\s\S]*?)\}\}/g, '<span class="cz">$1</span>'); },
  fig: function (name, cap, src, page, cls) {
    var d = this.dims[name];
    if (!d) throw new Error('no image ' + name);
    var alt = String(cap).replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
    return '<figure class="scan' + (cls ? ' ' + cls : '') + '"><div class="paperimg"><img src="img/' + name + '.jpg" width="' + d[0] + '" height="' + d[1] + '" alt="' + alt + '" loading="lazy" decoding="async"></div><figcaption>' + cap + ' <span class="src">' + this.SRC[src] + ', p.' + page + '</span></figcaption></figure>';
  },
  add: function (sec) {
    sec.items.forEach(function (it) { if (it.html) it.html = window.CVS.cloze(it.html); });
    this.sections.push(sec);
  }
};
