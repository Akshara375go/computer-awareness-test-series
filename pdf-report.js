/* PDF REPORT ADD-ON for test.html
   Adds a "DOWNLOAD PDF" button on the result screen. Works for every test automatically.
   Uses the browser's own "Save as PDF" (works on Chrome, Edge, Safari, Firefox; phone and PC).
   Optional "Remember" notes are read from tests/test-NN-notes.js (NN = test number). */
(function(){
  const css = document.createElement("style");
  css.textContent =
    "#pr{display:none}" +
    "@media print{" +
    "@page{margin:14mm 12mm}" +
    "body>*:not(#pr){display:none!important}" +
    "#pr{display:block!important;background:#fff;color:#000;font-family:'Segoe UI',Arial,sans-serif;font-size:11pt;line-height:1.45;-webkit-print-color-adjust:exact;print-color-adjust:exact}" +
    "#pr .h{display:flex;align-items:center;gap:12px;border-bottom:2px solid #1b2a5e;padding-bottom:8px}" +
    "#pr .h img{width:52px;height:52px;border-radius:50%;object-fit:cover}" +
    "#pr .h b{color:#1b2a5e;font-size:12pt}" +
    "#pr h1{font-size:15pt;margin:10px 0 4px;color:#1b2a5e}" +
    "#pr .sum{border:1px solid #999;border-radius:6px;padding:8px 10px;margin:8px 0 12px;font-size:10.5pt}" +
    "#pr .q{border:1px solid #bbb;border-radius:6px;padding:8px 10px;margin:8px 0;break-inside:avoid;page-break-inside:avoid}" +
    "#pr .qt{white-space:pre-line;font-weight:600}" +
    "#pr .st{float:right;font-size:9.5pt;font-weight:700;margin-left:8px}" +
    "#pr .ok{color:#0a7d4f}#pr .no{color:#c0182b}#pr .sk{color:#666}" +
    "#pr .ml{display:flex;gap:16px;font-size:10pt;margin:4px 0}#pr .ml div{flex:1}" +
    "#pr .o{margin:2px 0 2px 6px;font-size:10.5pt}" +
    "#pr .o.c{color:#0a7d4f;font-weight:700}#pr .o.w{color:#c0182b;font-weight:700}" +
    "#pr .ex{margin-top:6px;font-size:10pt;border-left:3px solid #1b2a5e;padding-left:8px}" +
    "#pr .rm{margin-top:5px;font-size:10pt;background:#fff4c2;border:1px solid #e0c35a;border-radius:4px;padding:4px 8px}" +
    "#pr .ft{text-align:center;font-size:9pt;color:#444;margin-top:12px;border-top:1px solid #999;padding-top:6px}" +
    "}";
  document.head.appendChild(css);

  const root = document.createElement("div");
  root.id = "pr";
  document.body.appendChild(root);

  const L = k => String.fromCharCode(97 + k);

  function loadNotes(cb){
    if (window.TEST_NOTES) return cb();
    const s = document.createElement("script");
    s.src = "tests/test-" + String(num).padStart(2, "0") + "-notes.js";
    s.onload = s.onerror = cb;
    document.body.appendChild(s);
  }

  function build(name){
    const r = marks(), total = Q.length, skipped = total - r.c - r.w;
    const notes = window.TEST_NOTES || [];
    const title = (window.TEST_DATA && window.TEST_DATA.title) || "Practice Test";
    let h = '<div class="h"><img src="logo.png" alt=""><div><b>KARNATAKA e-Exam TEST SERIES (CBT MOCKS)</b><br>Telegram: t.me/karnatakaeExamseries</div></div>' +
      '<h1>' + esc(title) + ' – Test Report</h1>' +
      '<div class="sum">' + (name ? '<b>Name:</b> ' + esc(name) + ' &nbsp;|&nbsp; ' : '') +
      '<b>Date:</b> ' + new Date().toLocaleDateString("en-IN") + '<br>' +
      '<b>Score:</b> ' + fmt(r.m) + ' / ' + total + ' &nbsp;|&nbsp; Correct: ' + r.c + ' &nbsp;|&nbsp; Wrong: ' + r.w + ' &nbsp;|&nbsp; Skipped: ' + skipped +
      ' &nbsp;|&nbsp; Marking: +1 / −' + NEG + '</div>';
    Q.forEach((q, idx) => {
      const a = answers[idx];
      const done = a !== null && a !== undefined && a >= 0;
      const st = !done ? ["Skipped", "sk"] : a === q.a ? ["Correct ✔", "ok"] : ["Wrong ✘", "no"];
      h += '<div class="q"><span class="st ' + st[1] + '">' + st[0] + '</span><div class="qt">Q' + (idx + 1) + '. ' + esc(q.q) + '</div>';
      if (q.l && q.r){
        h += '<div class="ml"><div>' + q.l.map((x, k) => '<div>' + String.fromCharCode(65 + k) + '. ' + esc(x) + '</div>').join("") +
             '</div><div>' + q.r.map((x, k) => '<div>' + (k + 1) + '. ' + esc(x) + '</div>').join("") + '</div></div>';
      }
      q.o.forEach((t, k) => {
        const cls = k === q.a ? "c" : (done && k === a ? "w" : "");
        const tag = k === q.a ? " ✔ (Correct answer)" : (done && k === a ? " ✘ (Your answer)" : "");
        h += '<div class="o ' + cls + '">(' + L(k) + ') ' + esc(t) + tag + '</div>';
      });
      h += '<div class="ex"><b>Explanation:</b> ' + esc(q.e) + '</div>';
      const n = q.n || notes[idx];
      if (n) h += '<div class="rm"><b>📌 Remember:</b> ' + esc(n) + '</div>';
      h += '</div>';
    });
    h += '<div class="ft">KARNATAKA e-Exam TEST SERIES (CBT MOCKS) · t.me/karnatakaeExamseries</div>';
    root.innerHTML = h;
  }

  function download(){
    let name = "";
    try { name = (prompt("Enter your name for the PDF (optional):", "") || "").trim(); } catch(e){}
    loadNotes(() => {
      build(name);
      const old = document.title;
      document.title = "Test-" + String(num).padStart(2, "0") + "-Report" + (name ? "-" + name.replace(/\s+/g, "_") : "");
      window.onafterprint = () => { document.title = old; window.onafterprint = null; };
      setTimeout(() => window.print(), 250);
    });
  }

  /* Inject the button whenever the result screen is drawn */
  new MutationObserver(() => {
    const retry = document.getElementById("retry");
    if (!retry || document.getElementById("pdfBtn")) return;
    const b = document.createElement("button");
    b.className = "btn";
    b.id = "pdfBtn";
    b.textContent = "⬇ DOWNLOAD PDF";
    b.onclick = download;
    retry.parentNode.insertBefore(b, retry);
  }).observe(document.getElementById("result"), { childList: true });
})();
