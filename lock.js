/* ============================================================
   LOCK + LAUNCH SETTINGS  (edit only this block)
============================================================ */
(function () {
  var CFG = {
    FREE_TESTS: 2,                                   // tests 1-2 free
    PRICE: "\u20B949",
    RAZORPAY_LINK: "https://rzp.io/rzp/uvfDzSNI",
    TELEGRAM_DM: "https://t.me/Blackpanther2201",
    UNLOCK_CODE: "CBT49",                            // give this to students after payment
    LAUNCH: "2026-11-09T10:00:00+05:30",             // 9 Nov 2026, 10:00 AM IST
    LAUNCH_TEXT: "9 Nov, 10:00 AM",
    KEY: "cbt_unlocked_v1"                           // change to ..._v2 to re-lock everyone
  };

  function unlocked() { try { return localStorage.getItem(CFG.KEY) === "1"; } catch (e) { return false; } }
  function setUnlocked() { try { localStorage.setItem(CFG.KEY, "1"); } catch (e) {} }
  function live() { return Date.now() >= new Date(CFG.LAUNCH).getTime(); }
  function locked(n) { return n > CFG.FREE_TESTS && !unlocked(); }
  function same(a, b) { return String(a).trim().toLowerCase() === String(b).trim().toLowerCase(); }

  // unlock through a shared link:  index.html?code=CBT49
  try {
    var qp = new URLSearchParams(location.search).get("code");
    if (qp && same(qp, CFG.UNLOCK_CODE)) setUnlocked();
  } catch (e) {}

  // block direct opening of test.html?t=N
  var isTestPage = /test\.html$/i.test(location.pathname);
  if (isTestPage) {
    var n = parseInt(new URLSearchParams(location.search).get("t"), 10) || 1;
    if (locked(n) || !live()) {
      window.CBT_BLOCKED = true;
      location.replace("index.html?need=" + n);
    }
  }

  // ---------- modal ----------
  var css = document.createElement("style");
  css.textContent =
    "#cbtOv{position:fixed;inset:0;background:rgba(0,0,0,.75);display:none;align-items:center;justify-content:center;z-index:9999;padding:16px}" +
    "#cbtBox{background:var(--card,#151a35);border:1px solid var(--card-border,#262d52);border-top:3px solid var(--coral,#ff6b73);color:var(--text,#d9e0ff);max-width:400px;width:100%;border-radius:14px;padding:22px;text-align:center;font-family:inherit;max-height:92vh;overflow:auto}" +
    "#cbtBox h2{color:#fff;font-size:1.15rem;margin-bottom:8px;font-family:Georgia,serif}" +
    "#cbtBox p{color:var(--muted,#a9b4e0);font-size:.86rem;margin:6px 0 12px}" +
    "#cbtBox .live{background:rgba(140,158,255,.15);border:1px solid var(--accent,#8c9eff);color:var(--accent,#8c9eff);border-radius:8px;padding:8px;font-size:.8rem;font-weight:700;margin-bottom:12px}" +
    "#cbtBox a.b,#cbtBox button.b{display:block;width:100%;text-decoration:none;border:0;cursor:pointer;font:inherit;font-weight:800;font-size:.82rem;letter-spacing:.4px;padding:12px;border-radius:8px;margin-bottom:10px}" +
    "#cbtBox .pay{background:var(--coral,#ff6b73);color:#0b1020}" +
    "#cbtBox .tgb{background:#229ED9;color:#fff}" +
    "#cbtBox .ok{background:var(--accent,#8c9eff);color:#0b1020}" +
    "#cbtBox input{width:100%;padding:11px;border-radius:8px;border:1px solid var(--card-border,#262d52);background:#0b1020;color:#fff;text-align:center;margin-bottom:8px;font:inherit}" +
    "#cbtBox .x{background:none;color:var(--muted,#a9b4e0);border:0;cursor:pointer;font:inherit;font-size:.8rem;margin-top:2px}" +
    "#cbtErr{color:#ff8a8a;font-size:.8rem;min-height:16px;margin-bottom:6px}" +
    ".cbt-lockbadge{margin-left:6px}";
  document.head.appendChild(css);

  var ov;
  function build() {
    if (ov) return;
    ov = document.createElement("div");
    ov.id = "cbtOv";
    ov.innerHTML =
      '<div id="cbtBox">' +
      '<h2>\uD83D\uDD12 Unlock All Tests (' + (CFG.FREE_TESTS + 1) + '\u201320) for ' + CFG.PRICE + '</h2>' +
      '<div class="live" id="cbtLive"></div>' +
      '<p><b>Step 1:</b> Pay ' + CFG.PRICE + ' once.</p>' +
      '<a class="b pay" id="cbtPay" target="_blank" rel="noopener">PAY ' + CFG.PRICE + ' NOW</a>' +
      '<p><b>Step 2:</b> Send your payment screenshot on Telegram to get your unlock code.</p>' +
      '<a class="b tgb" id="cbtTg" target="_blank" rel="noopener">SEND SCREENSHOT ON TELEGRAM</a>' +
      '<p style="margin-bottom:6px"><b>Step 3:</b> Enter your unlock code.</p>' +
      '<input id="cbtCode" placeholder="Enter unlock code" autocomplete="off">' +
      '<div id="cbtErr"></div>' +
      '<button class="b ok" id="cbtUnlock">UNLOCK</button>' +
      '<button class="x" id="cbtClose">Close</button>' +
      '</div>';
    document.getElementById("cbtPay").href = CFG.RAZORPAY_LINK;
    document.getElementById("cbtTg").href = CFG.TELEGRAM_DM;
    document.getElementById("cbtClose").onclick = close;
    ov.addEventListener("click", function (e) { if (e.target === ov) close(); });
    document.getElementById("cbtUnlock").onclick = function () {
      var v = document.getElementById("cbtCode").value;
      if (same(v, CFG.UNLOCK_CODE)) {
        setUnlocked(); close(); location.href = "index.html";
      } else {
        document.getElementById("cbtErr").textContent = "Wrong code. Pay and DM us on Telegram to get the code.";
      }
    };
  }
  function open() {
    build();
    document.getElementById("cbtLive").textContent = live()
      ? "\u2705 All tests are live now"
      : "\uD83D\uDCC5 Pay on or before 9th November. All tests will be available on 9th November, 10:00 AM.";
    document.getElementById("cbtErr").textContent = "";
    ov.style.display = "flex";
  }
  function close() { if (ov) ov.style.display = "none"; }

  window.CBT = { cfg: CFG, unlocked: unlocked, locked: locked, live: live, open: open, close: close };
})();
