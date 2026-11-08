(function () {
  "use strict";

  // número: vem de produtos.js; se esse arquivo tiver erro, vale o número fixo do HTML
  const NUM = (typeof WHATSAPP === "string" && /^\d{10,15}$/.test(WHATSAPP)) ? WHATSAPP : "5543991128608";
  const zap = (msg) => `https://wa.me/${NUM}?text=${encodeURIComponent(msg)}`;
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((a) => { a.href = a.href.replace(/wa\.me\/\d+/, "wa.me/" + NUM); });
  if (typeof WHATSAPP_EXIBIR === "string") {
    document.querySelectorAll("[data-zap-num]").forEach((el) => { el.textContent = WHATSAPP_EXIBIR; });
  }

  // foto de fundo tratado que não carregar: cai sozinha na foto original
  document.addEventListener("error", (e) => {
    const t = e.target;
    if (t && t.tagName === "IMG" && !t.dataset.fb && t.src.includes("/img/cut/")) {
      t.dataset.fb = "1";
      t.src = t.src.replace("/img/cut/", "/img/orig/");
    }
  }, true);
  const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const precoTxt = (p) => (typeof p.preco === "number" ? brl(p.preco) : "Preço sob consulta");
  // status: aceita "disponivel" ou "vendida" (tolera acento, maiúscula e "vendido")
  const estado = (p) => {
    const s = String(p.status || "disponivel").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
    if (s.startsWith("vend")) return "vendida";
    if (!s.startsWith("dispon")) console.warn(`Status desconhecido em "${p.nome}": "${p.status}". Use "disponivel" ou "vendida".`);
    return "disponivel";
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

  // ---- bastidores (independe do catálogo) ----
  try {
    const faixa = document.getElementById("faixa");
    const itens = [];
    BASTIDORES.videos.forEach((v, n) => itens.push(`<video src="${esc(v)}#t=0.4" controls playsinline preload="metadata" aria-label="Vídeo ${n + 1} do processo de fazer uma bolsa de crochê"></video>`));
    BASTIDORES.fotos.forEach((f) => itens.push(`<img src="${esc(f.src)}" alt="${esc(f.alt)}" loading="lazy">`));
    faixa.innerHTML = itens.join("");
  } catch (err) {
    console.error("Erro nos bastidores:", err);
    const b = document.getElementById("bastidores");
    if (b) b.hidden = true;
  }

  const grade = document.getElementById("grade");

  // ---- valida o catálogo: um item com erro não derruba o site ----
  let produtos = [];
  try {
    produtos = (typeof PRODUTOS !== "undefined" && Array.isArray(PRODUTOS) ? PRODUTOS : []).filter((p) => {
      const ok = p && typeof p.nome === "string" && Array.isArray(p.fotos) && p.fotos.length > 0;
      if (!ok) console.warn("Bolsa ignorada (precisa de nome e ao menos 1 foto):", p);
      return ok;
    });
  } catch (err) {
    console.error("Erro ao ler produtos.js:", err);
  }

  if (produtos.length === 0) {
    grade.outerHTML = `<p class="aviso">As bolsas estão sendo atualizadas. Chame a gente no <a href="${zap("Olá! Vim pelo site da Crocherê e gostaria de ver as bolsas.")}" target="_blank" rel="noopener">WhatsApp</a>.</p>`;
    return;
  }

  // ---- grade ----
  grade.innerHTML = produtos.map((p, i) => {
    const vendida = estado(p) === "vendida";
    return `
      <button type="button" class="card ${vendida ? "card--vendida" : ""}" data-i="${i}">
        <span class="card__img">
          <img src="${esc(p.fotos[0])}" alt="" loading="${i < 4 ? "eager" : "lazy"}" decoding="async">
          <span class="selo ${vendida ? "selo--vendida" : ""}">${vendida ? "Vendida" : "Pronta entrega"}</span>
        </span>
        <span class="card__corpo">
          <span class="card__nome">${esc(p.nome)}</span>
          <span class="card__preco">${precoTxt(p)}</span>
        </span>
      </button>`;
  }).join("");

  // ---- janela da peça ----
  const dlg = document.getElementById("peca");
  const foto = document.getElementById("peca-foto");
  const mini = document.getElementById("peca-mini");
  let ultimo = null;

  function abrir(i) {
    const p = produtos[i];
    const vendida = estado(p) === "vendida";
    document.getElementById("peca-nome").textContent = p.nome;
    document.getElementById("peca-desc").textContent = p.descricao || "";
    document.getElementById("peca-preco").textContent = precoTxt(p);
    const med = document.getElementById("peca-medidas");
    med.textContent = p.medidas ? `Medidas: ${p.medidas}` : "";
    med.hidden = !p.medidas;
    const selo = document.getElementById("peca-selo");
    selo.textContent = vendida ? "Vendida" : "Pronta entrega";
    selo.className = "selo" + (vendida ? " selo--vendida" : "");

    const quero = document.getElementById("peca-quero");
    quero.hidden = vendida;
    quero.href = zap(`Olá! Vi a "${p.nome}" no site da Crocherê e tenho interesse. Ainda está disponível?`);
    document.getElementById("peca-parecida").href = zap(`Olá! Gostei do modelo "${p.nome}" e gostaria de um orçamento para uma bolsa parecida.`);

    const mostrar = (k) => {
      foto.src = p.fotos[k];
      foto.alt = `${p.nome}, foto ${k + 1} de ${p.fotos.length}`;
      [...mini.children].forEach((b, j) => b.setAttribute("aria-pressed", j === k ? "true" : "false"));
    };
    mini.innerHTML = p.fotos.length > 1
      ? p.fotos.map((f, k) => `<button type="button" aria-label="Ver foto ${k + 1} de ${p.fotos.length}"><img src="${esc(f)}" alt=""></button>`).join("")
      : "";
    [...mini.children].forEach((b, k) => b.addEventListener("click", () => mostrar(k)));
    mostrar(0);
    if (typeof dlg.showModal !== "function") { window.open(zap(`Olá! Vi a "${p.nome}" no site da Crocherê e tenho interesse.`), "_blank", "noopener"); return; }
    dlg.showModal();
    dlg.scrollTop = 0;
  }

  grade.addEventListener("click", (e) => {
    const b = e.target.closest(".card");
    if (!b) return;
    ultimo = b;
    abrir(Number(b.dataset.i));
  });
  // clique no fundo escuro fecha (o conteúdo preenche toda a janela, sem padding)
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", () => { if (ultimo) ultimo.focus(); });

})();
