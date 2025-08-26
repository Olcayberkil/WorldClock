var self = {
  obj: document.querySelector(".component74"),
  rootPath: '',
  params: { ServerIp: '', RootPath: '', PlayerID: '', InstanceID: '' },
  url: window.location.href,
  baseUrl: 'http://',

  getRealInstanceID() {
    var arr = (self.params.InstanceID || '').split("-");
    return arr[arr.length - 1] || '';
  },
  getServerIp() { return self.params.ServerIp; },
  getMediaListUrl(id) { return self.baseUrl + self.params.ServerIp + "/rest/getMediaListItems/" + id; },
  restGetPlayerInfoUrl() { return self.baseUrl + self.params.ServerIp + "/rest/getPlayerInfo/" + self.params.PlayerID + "/" + self.getRealInstanceID(); },

  config: {
    lang: "tr",
    catalog: {
      colors: {
        white: "white", black: "black", brown: "brown", green: "green",
        blue: "blue", red: "red", orange: "orange", yellow: "yellow",
        gray: "gray", silver: "silver", gold: "gold", pink: "pink", purple: "purple"
      },
      backgrounds: {
        white: "white", black: "black", transparent: "transparent",
        navy: "navy", teal: "teal", gray: "gray"
      },
      pageBackgrounds: {
        light: { type: "light" },
        dark: { type: "dark" },
        ocean: { type: "ocean" },
        aurora: { type: "aurora" },
        porcelain_ink: { type: "porcelain_ink" },
        cosmic_dust: { type: "cosmic_dust" },
        noir_gild: { type: "noir_gild" },
        crackle_glaze: { type: "crackle_glaze" },
        prism_rainbow: { type: "prism_rainbow" },
        night_sky: { type: "night_sky" },
        neon_waves: { type: "neon_waves" },
        grabient_dawn: { type: "grabient_dawn" },
        myPhoto: { type: "image" }
      }
    },

    themes: {
      analog1: { clock: "024" },
      analog2: { clock: "019" },
      analog3: { clock: "012" },
      analog4: { clock: "022" },
      analog5: { clock: "013" },
      analog6: { clock: "014" },
      digital1: { clock: "004" },
      digital2: { clock: "043" },
      digital3: { clock: "047" },
      digital4: { clock: "008" }
    },

    cities: {
      istanbul: {
        timezone: "Turkey_Istanbul",
        city: "İstanbul",
        country: "Türkiye",
        i18n: {
          tr: { city: "İstanbul", country: "Türkiye" },
          en: { city: "Istanbul", country: "Turkey" }
        }
      },
      ankara: {
        timezone: "Turkey_Ankara",
        city: "Ankara",
        country: "Türkiye",
        i18n: {
          tr: { city: "Ankara", country: "Türkiye" },
          en: { city: "Ankara", country: "Turkey" }
        }
      },
      nyc: {
        timezone: "USA_New_York",
        city: "New York",
        country: "ABD",
        i18n: {
          tr: { city: "New York", country: "ABD" },
          en: { city: "New York", country: "USA" }
        }
      },
      la: {
        timezone: "USA_Los_Angeles",
        city: "Los Angeles",
        country: "ABD",
        i18n: {
          tr: { city: "Los Angeles", country: "ABD" },
          en: { city: "Los Angeles", country: "USA" }
        }
      },
      london: {
        timezone: "UK_London",
        city: "Londra",
        country: "Birleşik Krallık",
        i18n: {
          tr: { city: "Londra", country: "Birleşik Krallık" },
          en: { city: "London", country: "United Kingdom" }
        }
      },
      paris: {
        timezone: "France_Paris",
        city: "Paris",
        country: "Fransa",
        i18n: {
          tr: { city: "Paris", country: "Fransa" },
          en: { city: "Paris", country: "France" }
        }
      },
      berlin: {
        timezone: "Germany_Berlin",
        city: "Berlin",
        country: "Almanya",
        i18n: {
          tr: { city: "Berlin", country: "Almanya" },
          en: { city: "Berlin", country: "Germany" }
        }
      },
      madrid: {
        timezone: "Spain_Madrid",
        city: "Madrid",
        country: "İspanya",
        i18n: {
          tr: { city: "Madrid", country: "İspanya" },
          en: { city: "Madrid", country: "Spain" }
        }
      },
      rome: {
        timezone: "Italy_Rome",
        city: "Roma",
        country: "İtalya",
        i18n: {
          tr: { city: "Roma", country: "İtalya" },
          en: { city: "Rome", country: "Italy" }
        }
      },
      tokyo: {
        timezone: "Japan_Tokyo",
        city: "Tokyo",
        country: "Japonya",
        i18n: {
          tr: { city: "Tokyo", country: "Japonya" },
          en: { city: "Tokyo", country: "Japan" }
        }
      },
      shanghai: {
        timezone: "China_Shanghai",
        city: "Şanghay", country: "Çin",
        i18n: {
          tr: { city: "Şanghay", country: "Çin" },
          en: { city: "Shanghai", country: "China" }
        }
      },
      mexico: {
        timezone: "Mexico_MexicoCity",
        city: "Mexico City",
        country: "Meksika",
        i18n: {
          tr: { city: "Mexico City", country: "Meksika" },
          en: { city: "Mexico City", country: "Mexico" }
        }
      },
    },

    clocks: {
      layout: "horizontal",
      pageBgKey: "grabient_dawn",
      items: [
        { theme: "digital2", city: "istanbul", url: { colorKey: "white", backgroundKey: "", Title: "", Message: "", Target: "", size: 285, From: "2019,1,1,0,0,0" } },
        { theme: "digital2", city: "nyc", url: { colorKey: "white", backgroundKey: "", Title: "", Message: "", Target: "", size: 285, From: "2025,1,1,0,0,0" } },
        { theme: "digital2", city: "tokyo", url: { colorKey: "white", backgroundKey: "", Title: "", Message: "", Target: "", size: 285, From: "2025,1,1,0,0,0" } },
        { theme: "digital2", city: "madrid", url: { colorKey: "white", backgroundKey: "", Title: "", Message: "", Target: "", size: 285, From: "2025,1,1,0,0,0" } },
        { theme: "digital2", city: "rome", url: { colorKey: "white", backgroundKey: "", Title: "", Message: "", Target: "", size: 285, From: "2025,1,1,0,0,0" } },



      ]
    }
  },
  mountThemeExtras(key) {
    if (key === "neon_waves") this.ensureNeonWaves();
    else this.removeNeonWaves();
  },
  ensureNeonWaves() {
    const id = "c74-waves";
    let host = document.getElementById(id);
    if (!host) {
      host = document.createElement("div");
      host.id = id;
      document.body.appendChild(host);
      // 3 katman
      for (let i = 0; i < 3; i++) {
        const w = document.createElement("div");
        w.className = "c74-wave";
        host.appendChild(w);
      }
    }
  },
 mountThemeExtras(key){
  if (key === "night_sky") this.ensureNightSky();
  else this.removeNightSky();
},
ensureNightSky(){
  const id = "c74-night";
  if (document.getElementById(id)) return;

  const host = document.createElement("div");
  host.id = id;
  host.className = "night";
  document.body.appendChild(host);

  const vw = Math.max(document.documentElement.clientWidth,  window.innerWidth  || 0);
  const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  const pad = Math.max(vw, vh) * 0.25;                         
  const diagLen = Math.hypot(vw + pad*2, vh + pad*2);          
  const spread  = diagLen * 0.15;                              

  const dx = vw + pad*2;
  const dy = vh + pad*2;
  const len = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx);

  const ux = -dy / len;
  const uy =  dx / len;

  for (let i = 0; i < N; i++){
    const s = document.createElement("div");
    s.className = "shooting_star";

    const off = (Math.random()*2 - 1) * spread;

    const sx = -pad + ux * off;
    const sy = -pad + uy * off;

    const ex = sx + dx;
    const ey = sy + dy;

    const dur   = 2400 + Math.random()*4200;   
    const delay = Math.floor(Math.random()*8000);

    s.style.setProperty('--sx', `${sx}px`);
    s.style.setProperty('--sy', `${sy}px`);
    s.style.setProperty('--dx', `${ex - sx}px`);
    s.style.setProperty('--dy', `${ey - sy}px`);
    s.style.setProperty('--angle', `${angle}rad`);
    s.style.setProperty('--t', `${Math.round(dur)}ms`);
    s.style.setProperty('--delay', `${delay}ms`);

    host.appendChild(s);
  }

  const onResize = () => {
    if (document.body.getAttribute('data-page-bg') === 'night_sky'){
      this.removeNightSky();
      this.ensureNightSky();
    } else {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    }
  };
  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', onResize);
},

removeNightSky(){
  const host = document.getElementById("c74-night");
  if (host) host.remove();
},

  aspectByClock: { "004": 3, "008": 3, "043": 3, "047": 3 },

  init() {
    this.cache();
    this.applyLangFromQuery();
    this.applyPageBackgroundFromKey();
    this.applyLayoutFromClocks();
    this.render();

    let rto;
    window.addEventListener("resize", () => { clearTimeout(rto); rto = setTimeout(() => this.render(), 150); });
    window.addEventListener("orientationchange", () => { clearTimeout(rto); rto = setTimeout(() => this.render(), 250); });
  },

  cache() {
    this.els = {
      grid: self.obj ? self.obj.querySelector("#c74-grid") : document.getElementById("c74-grid"),
      wrap: self.obj ? self.obj.querySelector(".content .wrap") : null,
      content: self.obj ? self.obj.querySelector(".content") : null
    };
  },

  applyLangFromQuery() {
    const m = location.search.match(/[?&]lang=(tr|en)\b/i);
    if (m) this.config.lang = m[1].toLowerCase();
  },
  resolveCityLabel(cityObj) {
    const lang = (this.config.lang || "tr").toLowerCase();
    const pack = cityObj?.i18n?.[lang];
    return {
      city: (pack && pack.city) || cityObj.city || "",
      country: (pack && pack.country) || cityObj.country || ""
    };
  },

  resolvePageBgEntry(key) {
    const catalog = this.config.catalog?.pageBackgrounds || {};
    if (!key) return null;
    if (typeof key === "object" && key.type) return key;

    if (typeof key === "string") {
      const raw = key.trim(), lower = raw.toLowerCase();
      if (catalog[raw]) return catalog[raw];
      if (lower === "image") {
        for (const k in catalog) if (catalog[k]?.type === "image") return catalog[k];
        console.warn('[component74] pageBgKey="image" verildi ama catalog.pageBackgrounds içinde image type bulunamadı.');
        return null;
      }
      if (lower.startsWith("image:")) {
        const url = raw.slice(raw.indexOf(":") + 1).trim();
        if (url) return { type: "image", imageUrl: url };
      }
      if (lower.startsWith("color:")) {
        const col = raw.slice(raw.indexOf(":") + 1).trim();
        if (col) return { type: "color", color: col };
      }
      if (lower === "dark") return { type: "dark" };
      if (lower === "light") return { type: "light" };
    }
    return null;
  },

  applyPageBackgroundFromKey() {
    const catalog = this.config.catalog?.pageBackgrounds || {};
    const rawKey = this.config.clocks?.pageBgKey || "light";
    let key = rawKey;
    if (!catalog[key] && rawKey.toLowerCase() === "image") {
      const firstImageKey = Object.keys(catalog).find(k => catalog[k]?.type === "image");
      key = firstImageKey || "light";
    }
    const body = document.body;
    body.classList.remove("theme-dark", "bg-custom", "bg-image");
    body.removeAttribute("style");
    body.setAttribute("data-page-bg", key);
    this.mountThemeExtras(key);
     this.mountThemeExtras(key)
  },

  applyLayoutFromClocks() {
    const g = this.els.grid;
    let mode = this.config.clocks?.layout;
    if (mode !== "horizontal" && mode !== "vertical") mode = "vertical";
    this.config.clocks.layout = mode;

    g.classList.remove("layout-vertical", "layout-horizontal", "layout-center");
    g.classList.add(mode === "horizontal" ? "layout-horizontal" : "layout-vertical");
    g.dataset.layout = mode;
  },

  getClockKind(clockId) { return this.aspectByClock[clockId] ? "digital" : "analog"; },

  render() {
    const g = this.els.grid;
    const { themes, cities } = this.config;
    const itemsAll = Array.isArray(this.config.clocks?.items) ? this.config.clocks.items : [];
    const items = itemsAll.slice(0, 5);

    const isHorizontal = (this.config.clocks?.layout === "horizontal");
    g.classList.toggle("grid-21", isHorizontal && items.length === 3);
    g.classList.toggle("grid-2x2", isHorizontal && items.length === 4);
    g.classList.toggle("grid-221", isHorizontal && items.length === 5);

    const isVertical = (this.config.clocks?.layout === "vertical");
    g.classList.toggle("v-loose-4", isVertical && items.length === 4);
    g.classList.toggle("v-loose-3", isVertical && items.length === 3);

    if (items.length < 3) console.warn(`[component74] En az 3 saat önerilir. Şu an: ${items.length}`);

    const frag = document.createDocumentFragment();
    items.forEach((row) => {
      const theme = themes[row.theme] || { clock: row.theme };
      const city = cities[row.city];
      if (!theme || !city) return;

      const kind = this.getClockKind(theme.clock);
      const frame = this.resolveFrame(theme.clock, row.url, row.frame);
      const src = this.buildClockLinkSrc(theme.clock, city.timezone, row.url || {});
      const { bg: uiBg } = this.resolveColorBg(row.url || {});
      const label = this.resolveCityLabel(city);

      const card = this.buildCard({ kind, city: label.city, country: label.country, frame, src, uiBg });
      frag.appendChild(card);
    });

    this.els.grid.innerHTML = "";
    this.els.grid.appendChild(frag);
  },

  resolveFrame(clockId, url, explicitFrame) {
    if (explicitFrame && Number(explicitFrame.w) > 0 && Number(explicitFrame.h) > 0) return explicitFrame;
    const size = Number(url?.size) || 150;
    const ratio = this.aspectByClock[clockId] || 1;
    if (ratio === 1) return { w: size, h: size };
    const h = Math.max(20, Math.round(size / ratio));
    return { w: size, h };
  },

  resolveColorBg(urlParams) {
    const { catalog } = this.config;
    const color =
      (urlParams?.Color) ??
      (urlParams?.colorKey && catalog?.colors?.[urlParams.colorKey]) ??
      (urlParams?.color);

    const bg =
      (urlParams?.Background) ??
      (urlParams?.backgroundKey && catalog?.backgrounds?.[urlParams.backgroundKey]) ??
      (urlParams?.background);

    return { color, bg };
  },

  labelFontFromFrame(frame) {
    const base = 150;
    const w = Number(frame?.w) || base;
    const scale = Math.max(0.75, Math.min(2.0, w / base)); 
    return { city: Math.round(14 * scale), country: Math.round(12 * scale) };
  },

  buildCard({ kind, city, country, frame, src, uiBg }) {
    const card = document.createElement("article");
    card.className = `clock-card kind-${kind}`;
    card.dataset.clockKind = kind;
    card.style.width = `calc(${frame.w | 0}px + 24px)`;
    if (uiBg) card.style.background = String(uiBg);

    const fonts = this.labelFontFromFrame(frame);
    card.style.setProperty('--city-fs', fonts.city + 'px');
    card.style.setProperty('--country-fs', fonts.country + 'px');

    const iframe = document.createElement("iframe");
    iframe.className = `clock-frame frame-${kind}`;
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("frameborder", "no");
    iframe.setAttribute("clocktype", "html5");
    iframe.style.width = (frame.w | 0) + "px";
    iframe.style.height = (frame.h | 0) + "px";
    iframe.src = src;

    const label = document.createElement("div");
    label.className = "label";
    label.innerHTML = `<div class="city">${this.escape(city)}</div><div class="country">${this.escape(country)}</div>`;

    card.appendChild(iframe);
    card.appendChild(label);
    return card;
  },

  buildClockLinkSrc(clockId, timezoneToken, urlParams) {
    const base = "https://www.clocklink.com/html5embed.php";
    const q = new URLSearchParams();
    q.set("clock", clockId);
    q.set("timezone", timezoneToken);

    const { color, bg } = this.resolveColorBg(urlParams || {});
    for (const [k, v] of Object.entries(urlParams || {})) {
      if (v == null || typeof v === "object") continue;
      if (k === "color" || k === "Color" || k === "background" || k === "Background" ||
        k === "colorKey" || k === "backgroundKey") continue;
      q.set(k, String(v));
    }
    if (color) {
      q.set("color", String(color));
      if (!q.has("Color")) q.set("Color", String(color));
    }
    if (bg) q.set("Background", String(bg));

    return `${base}?${q.toString()}`;
  },

  api: {
    setLang(lang) {
      self.config.lang = (lang || "tr").toLowerCase();
      self.render();
    },
    setLayout(layout) {
      self.config.clocks.layout = (layout === "horizontal" ? "horizontal" : "vertical");
      self.applyLayoutFromClocks();
      self.render();
    },
    setPageBg(key) { self.config.clocks.pageBgKey = key; self.applyPageBackgroundFromKey(); },
    setItems(arr) { self.config.clocks.items = arr; self.render(); }
  },

  escape(s) {
    return String(s ?? "").replace(/[&<>"']/g, m => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[m]));
  }
};

window.addEventListener("DOMContentLoaded", () => self.init());
