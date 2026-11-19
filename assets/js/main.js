/* FibiOS — main.js
   Vanilla JS, no dependencies. Loaded with `defer`.

   1. Theme switcher         (persists to localStorage)
   2. Mobile navigation
   3. Contact form           (mailto hand-off)
   4. Newsletter forms       (stub — no provider wired)
   5. Ledger filters         (buttons + pillar cards)
   6. Latest analysis cards  (built from the feed)
   7. Scroll reveal
*/
(function () {
  "use strict";

  /* Enable reveal animations. CSS gates on .js-enabled so that
     without JS, .reveal elements are simply visible. */
  document.documentElement.classList.add("js-enabled");

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  /* ------------------------------------------------------------------
     1. Theme switcher
     ------------------------------------------------------------------ */
  (function themeSwitcher() {
    var KEY = "fibios-theme";
    var VALID = ["light", "fibios", "dark"];
    var root = document.documentElement;

    function read() {
      try {
        var v = window.localStorage.getItem(KEY);
        return VALID.indexOf(v) === -1 ? "fibios" : v;
      } catch (e) { return "fibios"; }
    }
    function write(mode) {
      try { window.localStorage.setItem(KEY, mode); } catch (e) {}
    }
    function apply(mode) {
      root.setAttribute("data-theme", mode);
      document.querySelectorAll("[data-set-theme]").forEach(function (btn) {
        btn.setAttribute(
          "aria-pressed",
          btn.getAttribute("data-set-theme") === mode ? "true" : "false"
        );
      });
    }

    onReady(function () {
      apply(read());
      document.querySelectorAll("[data-set-theme]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var mode = btn.getAttribute("data-set-theme");
          apply(mode);
          write(mode);
        });
      });
    });
  })();

  /* ------------------------------------------------------------------
     2. Mobile navigation
     ------------------------------------------------------------------ */
  (function mobileNav() {
    onReady(function () {
      var toggle = document.querySelector(".nav-toggle");
      var nav = document.getElementById("primary-nav");
      if (!toggle || !nav) return;

      function close() {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
      function open() {
        toggle.setAttribute("aria-expanded", "true");
        nav.classList.add("is-open");
      }

      toggle.addEventListener("click", function () {
        if (toggle.getAttribute("aria-expanded") === "true") close();
        else open();
      });

      document.addEventListener("keydown", function (e) {
        if (e.key !== "Escape") return;
        if (toggle.getAttribute("aria-expanded") !== "true") return;
        close();
        toggle.focus();
      });

      document.addEventListener("click", function (e) {
        if (toggle.getAttribute("aria-expanded") !== "true") return;
        if (nav.contains(e.target) || toggle.contains(e.target)) return;
        close();
      });

      var timer = null;
      window.addEventListener("resize", function () {
        if (timer) window.clearTimeout(timer);
        timer = window.setTimeout(function () {
          if (window.innerWidth >= 640) close();
        }, 150);
      });
    });
  })();

  /* ------------------------------------------------------------------
     3. Contact form (mailto hand-off)
     ------------------------------------------------------------------ */
  (function contactForm() {
    onReady(function () {
      var form = document.querySelector("form[data-mailto]");
      if (!form) return;

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        var nameEl    = form.querySelector("#name");
        var emailEl   = form.querySelector("#email");
        var messageEl = form.querySelector("#message");
        var subjectEl = form.querySelector("#subject");

        var name    = nameEl    ? nameEl.value.trim()    : "";
        var email   = emailEl   ? emailEl.value.trim()   : "";
        var message = messageEl ? messageEl.value.trim() : "";
        var subject = subjectEl ? subjectEl.value        : "General enquiry";

        if (!name || !email || !message) return;

        var to = form.getAttribute("data-mailto");
        var body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
        var href = "mailto:" + to
          + "?subject=" + encodeURIComponent("[" + subject + "] Enquiry from " + name)
          + "&body="    + encodeURIComponent(body);

        window.location.href = href;
      });
    });
  })();

  /* ------------------------------------------------------------------
     4. Newsletter forms (stub)
        Handles both the in-page `.newsletter` form and the site-wide
        `.footer-newsletter` form. Neither transmits anything.
     ------------------------------------------------------------------ */
  (function newsletter() {
    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function wire(form, inputSel, statusSel, okMessage) {
      var input  = form.querySelector(inputSel);
      var status = form.querySelector(statusSel);
      if (!input || !status) return;

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var value = input.value.trim();
        if (!EMAIL_RE.test(value)) {
          status.style.color = "var(--text-muted)";
          status.textContent = "Enter a valid email address. Nothing has been sent.";
          return;
        }
        status.style.color = "var(--accent)";
        status.textContent = okMessage;
        form.reset();
      });
    }

    onReady(function () {
      document.querySelectorAll(".footer-newsletter form").forEach(function (f) {
        wire(f, ".footer-newsletter-input", ".footer-newsletter-status",
          "Thanks — this form is not yet connected to a provider, so nothing was sent.");
      });
      document.querySelectorAll(".newsletter").forEach(function (f) {
        wire(f, ".newsletter-input", ".newsletter-status",
          "Declared stub: your address was not transmitted to a server; no provider is configured.");
      });
    });
  })();

  /* ------------------------------------------------------------------
     5. Ledger filters + pillar cards
     ------------------------------------------------------------------ */
  (function ledgerFilters() {
    onReady(function () {
      var filterBtns  = document.querySelectorAll(".filter-btn");
      var feedItems   = document.querySelectorAll(".feed-item");
      var pillarCards = document.querySelectorAll(".pillar-card");
      if (!filterBtns.length) return;

      function applyFilter(target) {
        filterBtns.forEach(function (b) {
          b.classList.toggle("active", b.getAttribute("data-target") === target);
        });
        feedItems.forEach(function (item) {
          var match = target === "all" || item.getAttribute("data-tag") === target;
          item.style.display = match ? "" : "none";
        });
      }

      filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          applyFilter(btn.getAttribute("data-target"));
        });
      });

      pillarCards.forEach(function (card) {
        card.addEventListener("click", function () {

          applyFilter(target);
        });
      });
    });
  })();

  /* ------------------------------------------------------------------
     6. Latest analysis cards (built from the feed)
     ------------------------------------------------------------------ */
  (function latestCards() {
    var CAP = 2;

    function buildCard(data) {
      var card = document.createElement("article");
      card.className = "card";

      var body = document.createElement("div");
      body.className = "card-body";

      if (data.tag) {
        var tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = data.tag;
        body.appendChild(tag);
      }

      var title = document.createElement("h3");
      title.className = "card-title";
      var link = document.createElement("a");
      link.setAttribute("href", data.href);
      link.textContent = data.title;
      title.appendChild(link);
      body.appendChild(title);

      if (data.dek) {
        var dek = document.createElement("p");
        dek.className = "card-text";
        dek.textContent = data.dek;
        body.appendChild(dek);
      }

      var meta = document.createElement("p");
      meta.className = "card-meta";
      var byline = document.createElement("span");
      byline.textContent = "Juno Uni Hera";
      var time = document.createElement("time");
      time.setAttribute("datetime", data.date);
      time.textContent = data.label;
      meta.appendChild(byline);
      meta.appendChild(time);
      body.appendChild(meta);

      card.appendChild(body);
      return card;
    }

    onReady(function () {
      var grid = document.querySelector("[data-latest-grid]");
      if (!grid) return;

      var candidates = [];
      document.querySelectorAll("#articles .feed-item").forEach(function (row) {
        if (row.getAttribute("data-status") !== "published") return;
        var time = row.querySelector("time[datetime]");
        var link = row.querySelector(".feed-title a");
        if (!time || !link) return;
        var stamp = Date.parse(time.getAttribute("datetime"));
        if (isNaN(stamp)) return;
        var dek = row.querySelector(".feed-dek");
        candidates.push({
          stamp:  stamp,
          href:   link.getAttribute("href"),
          title:  link.textContent,
          tag:    row.getAttribute("data-tag"),
          dek:    dek ? dek.textContent : "",
          date:   time.getAttribute("datetime"),
          label:  time.textContent
        });
      });

      if (!candidates.length) return;
      candidates.sort(function (a, b) { return b.stamp - a.stamp; });
      candidates = candidates.slice(0, CAP);

      // Skip rebuilding if the grid already matches (prevents a flash)
      var existing = grid.querySelectorAll(".card");
      var matches  = existing.length === candidates.length;
      for (var i = 0; matches && i < candidates.length; i++) {
        var a = existing[i].querySelector(".card-title a");
        var t = existing[i].querySelector("time[datetime]");
        if (!a || !t) { matches = false; break; }
        if (a.getAttribute("href") !== candidates[i].href) { matches = false; break; }
        if (t.getAttribute("datetime") !== candidates[i].date) { matches = false; break; }
      }
      if (matches) return;

      var frag = document.createDocumentFragment();
      candidates.forEach(function (d) { frag.appendChild(buildCard(d)); });
      while (grid.firstChild) grid.removeChild(grid.firstChild);
      grid.appendChild(frag);
    });
  })();

  /* ------------------------------------------------------------------
     7. Scroll reveal
     ------------------------------------------------------------------ */
  (function scrollReveal() {
    onReady(function () {
      var reveals = document.querySelectorAll(".reveal");
      if (!reveals.length) return;

      // Graceful fallback: show everything immediately
      if (!("IntersectionObserver" in window)) {
        reveals.forEach(function (el) { el.classList.add("active"); });
        return;
      }

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        });
      }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      });

      reveals.forEach(function (el) { observer.observe(el); });
    });
  })();

})();

/* Cursor-tracking glow — sets --mx / --my on card + quote box */
(function () {
  "use strict";
  document.querySelectorAll(".standard-card, .article-hero-quote").forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - rect.left) + "px");
      card.style.setProperty("--my", (e.clientY - rect.top) + "px");
    });
    card.addEventListener("pointerleave", function () {
      card.style.removeProperty("--mx");
      card.style.removeProperty("--my");
    });
  });
})();

/* ==========================================================================
   SUPER AWESOME HIGH-TECH PILLAR ENGINE
   ========================================================================== */
(function initHighTechPillars() {
  "use strict";

  // Respect users who prefer reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const cards = document.querySelectorAll(".pillar-card");
  
  // -- 1. TEXT SCRAMBLE CONFIG --
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+1234567890";
  
  cards.forEach(card => {
    // Get the title element and its original text
    const title = card.querySelector(".scramble-text");
    if (!title) return;
    const originalText = title.getAttribute("data-value") || title.innerText;
    let interval = null;

    // -- 2. MOUSE MOVE ENGINE (Spotlight + 3D Tilt) --
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      
      // Calculate mouse position relative to the card (for the spotlight)
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Set the CSS variables for the radial gradient
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);

      // Calculate 3D Tilt Math
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Max tilt angle (e.g., 4 degrees)
      const maxTilt = 4; 
      
      // Calculate rotation based on distance from center
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      // Apply the transform. Override the CSS transition for instant tracking
      card.style.transition = "transform 0.1s ease-out, background-color 0.3s ease";
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    // -- 3. MOUSE LEAVE ENGINE (Reset) --
    card.addEventListener("mouseleave", () => {
      // Reset tilt and spotlight
      card.style.transition = "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.3s ease";
      card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      card.style.setProperty("--x", `50%`);
      card.style.setProperty("--y", `50%`);
      
      // Stop scramble and reset text
      clearInterval(interval);
      title.innerText = originalText;
    });

    // -- 4. MOUSE ENTER ENGINE (Start Scramble) --
    card.addEventListener("mouseenter", () => {
      let iteration = 0;
      
      clearInterval(interval);
      
      interval = setInterval(() => {
        title.innerText = title.innerText
          .split("")
          .map((letter, index) => {
            // If we've revealed this character, show the real text
            if (index < iteration) {
              return originalText[index];
            }
            // Otherwise, show a random tech character
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");
        
        // Stop when we reach the full length
        if (iteration >= originalText.length) {
          clearInterval(interval);
        }
        
        // Speed: Increase to make it finish faster, decrease for slower
        iteration += 1 / 3; 
      }, 30);
    });
  });
})();

/* ==========================================================================
   SUPER AWESOME HIGH-TECH HERO ENGINE
   ========================================================================== */
(function initHighTechHero() {
  "use strict";

  const hero = document.querySelector(".hero");
  if (!hero) return;

  // Respect accessibility preferences
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ------------------------------------------------------------------
     1. TEXT DECRYPTION ENGINE (Corrected)
     ------------------------------------------------------------------ */
  if (!prefersReducedMotion) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}|:<>?1234567890";
    
    // Helper: Recursively find all text nodes without breaking HTML tags
    function getTextNodes(node) {
      let textNodes = [];
      for (let child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3) { // Text node
          textNodes.push(child);
        } else if (child.nodeType === 1) { // Element node
          textNodes.push(...getTextNodes(child));
        }
      }
      return textNodes;
    }

    const targets = [
      document.querySelector(".hero-kicker"),
      document.querySelector(".hero-sub")
    ];

    targets.forEach(target => {
      if (!target) return;
      
      // 1. Store the ORIGINAL text nodes so we never lose the real words
      const textNodes = getTextNodes(target);
      const originalData = textNodes.map(node => ({
        node: node,
        text: node.nodeValue
      }));

      // Add the decryption color effect
      target.classList.add("decrypting");

      let progress = 0; // Goes from 0 to 100

      const interval = setInterval(() => {
        originalData.forEach(data => {
          let newText = data.text.split("").map(char => {
            // Keep spaces as spaces
            if (char === " " || char === "\n") return char;
            
            // Math.random() * 100 gives 0-100. 
            // If it's less than our progress, reveal the real letter.
            // Otherwise, show a random symbol.
            if (Math.random() * 100 < progress) {
              return char;
            }
            return letters[Math.floor(Math.random() * letters.length)];
          }).join("");
          
          data.node.nodeValue = newText;
        });

        progress += 4; // Speed of decryption (higher = faster)
        
        if (progress >= 100) {
          clearInterval(interval);
          target.classList.remove("decrypting");
          // Failsafe: perfectly restore original text
          originalData.forEach(data => {
            data.node.nodeValue = data.text;
          });
        }
      }, 30);
    });
  }
  /* ------------------------------------------------------------------
     2. 3D PARALLAX & GRID SPOTLIGHT
     ------------------------------------------------------------------ */
  if (!prefersReducedMotion) {
    let ticking = false;

    hero.addEventListener("mousemove", (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = hero.getBoundingClientRect();
          
          // Mouse position relative to the hero
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          // Percentage for the spotlight
          const xPercent = (x / rect.width) * 100;
          const yPercent = (y / rect.height) * 100;

          // Center of the hero
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          // Calculate Parallax values (Max 5 degrees rotation, 10px translation)
          const rx = ((y - centerY) / centerY) * -5;
          const ry = ((x - centerX) / centerX) * 5;
          
          const tx = ((x - centerX) / centerX) * 15;
          const ty = ((y - centerY) / centerY) * 15;

          // Apply variables to the CSS
          hero.style.setProperty("--mx", `${xPercent}%`);
          hero.style.setProperty("--my", `${yPercent}%`);
          
          const masthead = hero.querySelector(".hero-masthead");
          if (masthead) {
            masthead.style.setProperty("--rx", `${rx}deg`);
            masthead.style.setProperty("--ry", `${ry}deg`);
            masthead.style.setProperty("--tx", `${tx}px`);
            masthead.style.setProperty("--ty", `${ty}px`);
          }

          ticking = false;
        });
        ticking = true;
      }
    });

    // Reset on mouse leave
    hero.addEventListener("mouseleave", () => {
      const masthead = hero.querySelector(".hero-masthead");
      hero.style.setProperty("--mx", `50%`);
      hero.style.setProperty("--my", `50%`);
      if (masthead) {
        masthead.style.setProperty("--rx", "0deg");
        masthead.style.setProperty("--ry", "0deg");
        masthead.style.setProperty("--tx", "0px");
        masthead.style.setProperty("--ty", "0px");
      }
    });
  }

  /* ------------------------------------------------------------------
     3. REAL SYSTEM TELEMETRY HUD
     ------------------------------------------------------------------ */
  
  // Helper to detect OS
  function getOS() {
    const ua = navigator.userAgent;
    if (ua.indexOf("Win") !== -1) return "WINDOWS";
    if (ua.indexOf("Mac") !== -1) return "MACOS";
    if (ua.indexOf("Linux") !== -1) return "LINUX";
    if (ua.indexOf("Android") !== -1) return "ANDROID";
    if (ua.indexOf("like Mac") !== -1) return "IOS";
    return "UNKNOWN";
  }

  // Get network info safely (Safari doesn't support this)
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  const hudLeft = document.createElement("div");
  hudLeft.className = "hero-hud";
  hudLeft.innerHTML = `
    <div>SYS_LOAD: <span class="hud-val" id="hud-fps">-- FPS</span></div>
    <div>CPU_CORES: <span class="hud-val">${navigator.hardwareConcurrency || 'N/A'}</span></div>
    <div>DEVICE_RAM: <span class="hud-val">${navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'N/A'}</span></div>
  `;

  const hudRight = document.createElement("div");
  hudRight.className = "hero-hud-right";
  hudRight.innerHTML = `
    <div>NET_LATENCY: <span class="hud-val">${conn && conn.rtt ? conn.rtt + ' ms' : 'N/A'}</span></div>
    <div>RESOLUTION: <span class="hud-val">${window.screen.width}x${window.screen.height}</span></div>
    <div>PLATFORM: <span class="hud-val">${getOS()}</span></div>
  `;

  hero.appendChild(hudLeft);
  hero.appendChild(hudRight);

  // Live FPS counter (replaces the old random setInterval)
  if (!prefersReducedMotion) {
    let lastFrameTime = performance.now();
    let frames = 0;
    
    function calcFPS() {
      const now = performance.now();
      frames++;
      
      // Update the display every 1 second
      if (now >= lastFrameTime + 1000) {
        const fps = Math.round((frames * 1000) / (now - lastFrameTime));
        const fpsEl = document.getElementById("hud-fps");
        
        // Colorize FPS based on performance
        if (fpsEl) {
          fpsEl.textContent = fps + " FPS";
          if (fps < 30) fpsEl.style.color = "var(--color-danger)";
          else if (fps < 50) fpsEl.style.color = "var(--color-warning)";
          else fpsEl.style.color = "#FFFFFF"; // Normal white
        }
        
        frames = 0;
        lastFrameTime = now;
      }
      requestAnimationFrame(calcFPS);
    }
    
    requestAnimationFrame(calcFPS);
  }


})();


/* ------------------------------------------------------------------
   7. Side Navigation Scrollspy
   ------------------------------------------------------------------ */
(function sideNavScrollspy() {
  function init() {
    var sections = Array.from(document.querySelectorAll("section[id]"));
    var navPills = Array.from(document.querySelectorAll(".side-nav-pill"));
    if (!sections.length || !navPills.length) return;

    function getPillTargetId(pill) {
      var dataSec = pill.getAttribute("data-section");
      if (dataSec) return dataSec;
      var href = pill.getAttribute("href") || "";
      return href.startsWith("#") ? href.slice(1) : "";
    }

    function setActivePill(sectionId) {
      navPills.forEach(function (pill) {
        pill.classList.toggle("active", getPillTargetId(pill) === sectionId);
      });
    }

    // Smooth scroll when clicking a pill
    navPills.forEach(function (pill) {
      pill.addEventListener("click", function (e) {
        var targetId = getPillTargetId(pill);
        var targetSection = targetId ? document.getElementById(targetId) : null;
        if (!targetSection) return;

        e.preventDefault();
        var header = document.querySelector(".site-header");
        var headerHeight = header ? header.getBoundingClientRect().height : 0;
        var targetTop =
          window.scrollY + targetSection.getBoundingClientRect().top - headerHeight;
        window.scrollTo({ top: targetTop, behavior: "smooth" });
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, "", "#" + targetId);
        }
        setActivePill(targetId);
      });
    });

    function updateActiveOnScroll() {
      var triggerY = window.innerHeight * 0.4;
      var activeSection = sections[0];

      for (var i = 0; i < sections.length; i++) {
        var rect = sections[i].getBoundingClientRect();
        if (rect.top <= triggerY) {
          activeSection = sections[i];
        }
      }

      // Snap to the final section when scrolled to the bottom of the document
      var nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20;
      if (nearBottom) {
        activeSection = sections[sections.length - 1];
      }

      setActivePill(activeSection.getAttribute("id"));
    }

    window.addEventListener("scroll", updateActiveOnScroll, { passive: true });
    window.addEventListener("resize", updateActiveOnScroll, { passive: true });
    updateActiveOnScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
