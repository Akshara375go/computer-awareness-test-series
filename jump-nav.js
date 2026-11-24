/* QUESTION JUMP NAVIGATOR add-on for test.html
   Adds a "Jump to question" panel on the quiz screen of every test.
   Numbers are coloured: green = correct, red = wrong, grey = skipped, outlined = not attempted, blue ring = current. */
(function(){
  const css = document.createElement("style");
  css.textContent =
    "#jn{margin-top:16px}" +
    "#jn .jt{display:flex;gap:10px;flex-wrap:wrap}" +
    "#jn .jt .btn{flex:1;min-width:150px;padding:10px 12px}" +
    "#jn .jp{background:var(--card);border:1px solid var(--card-border);border-radius:12px;padding:14px;margin-top:10px}" +
    "#jn .jg{display:grid;grid-template-columns:repeat(auto-fill,minmax(42px,1fr));gap:8px}" +
    "#jn .jc{height:40px;border-radius:8px;border:1px solid var(--card-border);background:#0f1430;color:var(--text);font-weight:700;font-size:.85rem;cursor:pointer;font-family:inherit}" +
    "#jn .jc:hover{border-color:var(--accent)}" +
    "#jn .jc.ok{background:rgba(46,204,143,.2);border-color:var(--good);color:#fff}" +
    "#jn .jc.no{background:rgba(255,92,106,.2);border-color:var(--bad);color:#fff}" +
    "#jn .jc.sk{background:#2a2f55;color:var(--muted)}" +
    "#jn .jc.cur{outline:2px solid var(--accent);outline-offset:1px}" +
    "#jn .lg{display:flex;gap:12px;flex-wrap:wrap;margin-top:12px;font-size:.74rem;color:var(--muted)}" +
    "#jn .lg i{display:inline-block;width:11px;height:11px;border-radius:3px;margin-right:4px;vertical-align:-1px;border:1px solid var(--card-border)}";
  document.head.appendChild(css);

  let open = false;

  function cls(k){
    const a = answers[k];
    if (a === null || a === undefined) return "";
    if (a === -1) return "sk";
    return a === Q[k].a ? "ok" : "no";
  }

  function render(){
    const quiz = document.getElementById("quiz");
    if (!quiz || !Q.length || !quiz.querySelector(".qmeta")) return;
    let box = document.getElementById("jn");
    if (!box){
      box = document.createElement("div");
      box.id = "jn";
      quiz.insertBefore(box, quiz.firstChild);
    }
    let g = "";
    for (let k = 0; k < Q.length; k++){
      g += '<button class="jc ' + cls(k) + (k === i ? " cur" : "") + '" data-k="' + k + '">' + (k + 1) + '</button>';
    }
    box.innerHTML =
      '<div class="jt"><button class="btn ghost" id="jnToggle">' + (open ? "▲ HIDE QUESTIONS" : "☰ JUMP TO QUESTION") + '</button>' +
      '<button class="btn ghost" id="jnFinish">FINISH TEST</button></div>' +
      (open ? '<div class="jp"><div class="jg">' + g + '</div>' +
        '<div class="lg"><span><i style="background:rgba(46,204,143,.5)"></i>Correct</span><span><i style="background:rgba(255,92,106,.5)"></i>Wrong</span>' +
        '<span><i style="background:#2a2f55"></i>Skipped</span><span><i></i>Not attempted</span></div></div>' : "");
    document.getElementById("jnToggle").onclick = () => { open = !open; render(); };
    document.getElementById("jnFinish").onclick = () => {
      const left = answers.filter(a => a === null || a === undefined || a === -1).length;
      const msg = left ? "You have " + left + " unanswered question(s). Finish the test now?" : "Finish the test and see your result?";
      if (confirm(msg)) finish();
    };
    box.querySelectorAll(".jc").forEach(b => b.onclick = () => {
      i = +b.dataset.k;
      open = false;
      renderQ();
      window.scrollTo(0, 0);
    });
  }

  const quiz = document.getElementById("quiz");
  /* re-draw the panel each time a question is drawn */
  new MutationObserver(() => { if (!document.getElementById("jn")) render(); }).observe(quiz, { childList: true });
  /* refresh colours right after an option is chosen */
  quiz.addEventListener("click", e => { if (e.target.closest(".opt")) setTimeout(render, 0); });
})();
