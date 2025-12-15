document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const initialContent = app.innerHTML;

  const STYLE_ID = "tutorial-style";

  const tutorialCSS = `
    * { margin:0; padding:0; box-sizing:border-box; }
    :root { --bg:#000; --card:#111; --text:#fff; --muted:#aaa; --accent:#fff; --radius:12px; --shadow:0 6px 20px rgba(255,255,255,0.1); --font:"Inter","Segoe UI",Arial,sans-serif; }
    body { font-family:var(--font); background:var(--bg); color:var(--text); line-height:1.7; }
    .tutorial-container { max-width:900px; width:100%; display:flex; flex-direction:column; gap:2rem; margin:3rem auto; }
    h1 { font-size:1.8rem; font-weight:700; text-align:center; color:var(--text); text-transform:uppercase; letter-spacing:2px; margin-bottom:1rem; }
    h1::after { content:""; display:block; width:60px; height:2px; background:var(--text); margin:0.6rem auto 0; border-radius:2px; }
    .tutorial-step { display:flex; align-items:center; justify-content:space-between; gap:2rem; background:var(--card); border-radius:var(--radius); padding:1.5rem; box-shadow:var(--shadow); transition:transform 0.3s ease, box-shadow 0.3s ease; }
    .tutorial-step:hover { transform:translateY(-4px); box-shadow:0 10px 24px rgba(255,255,255,0.15); }
    .step-text { flex:1; font-size:1rem; }
    .step-text strong { color:var(--text); }
    .step-image { flex:1; display:flex; justify-content:center; }
    .step-image img { max-width:100%; height:auto; border-radius:var(--radius); box-shadow:0 4px 12px rgba(255,255,255,0.1); cursor:pointer; transition:transform 0.3s ease, filter 0.3s ease; }
    .step-image img:hover { transform:scale(1.05); filter:brightness(1.2); }
    .back-button { text-align:center; margin-top:2rem; }
    .back-button a { display:inline-block; background:var(--text); color:var(--bg); padding:0.8rem 1.6rem; border-radius:var(--radius); text-decoration:none; font-weight:600; transition:background 0.3s ease, transform 0.2s ease; }
    .back-button a:hover { background:#ccc; transform:translateY(-2px); }
    .modal { display:none; position:fixed; z-index:999; left:0; top:0; width:100%; height:100%; background-color:rgba(0,0,0,0.85); justify-content:center; align-items:center; flex-direction:column; }
    .modal-content { max-width:50%; max-height:60%; border-radius:var(--radius); box-shadow:0 6px 20px rgba(255,255,255,0.2); }
    .close-btn { position:absolute; top:20px; right:20px; background:#fff; border:none; padding:0.5rem 1rem; cursor:pointer; border-radius:var(--radius); }
  `;

  function injectCSS() {
    if (!document.getElementById(STYLE_ID)) {
      const styleTag = document.createElement("style");
      styleTag.id = STYLE_ID;
      styleTag.textContent = tutorialCSS;
      document.head.appendChild(styleTag);
    }
  }
  function removeCSS() {
    const styleTag = document.getElementById(STYLE_ID);
    if (styleTag) styleTag.remove();
  }

  // Tutorial "Como salvar o mundo" — TODOS os passos
  const tutorialSaveHTML = `
    <div class="tutorial-container">
      <h1>Como salvo o meu mundo?</h1>

      <section class="tutorial-step">
        <div class="step-text">
          1 - Clique no mundo que deseja salvar e, em seguida, clique em <strong>Backup</strong> e você verá opções de exportação do seu mundo.
        </div>
        <div class="step-image"><img src="imgs/1.png" alt="Passo 1"></div>
      </section>

      <section class="tutorial-step">
        <div class="step-text">
          2 - Clique em <strong>EXPORT EPK FILE</strong>, Isso vai gerar um arquivo EPK com os dados do seu mundo.
        </div>
        <div class="step-image"><img src="imgs/2.png" alt="Passo 2"></div>
      </section>

      <section class="tutorial-step">
        <div class="step-text">
          3 - O arquivo será criado com o <strong>mesmo nome do seu mundo</strong>, guarde-o em uma pasta fácil de localizar.
        </div>
        <div class="step-image"><img src="imgs/3.png" alt="Passo 3"></div>
      </section>

      <h1>Como importar o mundo salvo</h1>

      <section class="tutorial-step">
        <div class="step-text">
          4 - Para jogar o mundo salvo, clique em <strong>Create New World</strong>.
        </div>
        <div class="step-image"><img src="imgs/4.png" alt="Passo 4"></div>
      </section>

      <section class="tutorial-step">
        <div class="step-text">
          5 - Selecione <strong>"LOAD EPK FILE"</strong>.
        </div>
        <div class="step-image"><img src="imgs/5.png" alt="Passo 5"></div>
      </section>

      <section class="tutorial-step">
        <div class="step-text">
          6 - Selecione o arquivo <strong>.EPK</strong>-  que você exportou no início.
        </div>
        <div class="step-image"><img src="imgs/6.png" alt="Passo 6"></div>
      </section>

      <section class="tutorial-step">
        <div class="step-text">
          7 - Não altere nenhuma configuração. Clique em <strong>Continue</strong>.
        </div>
        <div class="step-image"><img src="imgs/7.png" alt="Passo 7"></div>
      </section>

      <section class="tutorial-step">
        <div class="step-text">
          8 - - Pronto. O mundo foi importado e você pode jogar com <strong>- todo o progresso anterior.</strong>
        </div>
        <div class="step-image"><img src="imgs/8.png" alt="Passo 8"></div>
      </section>

      <div class="back-button"><a href="#" id="btn-back">⬅ VOLTAR</a></div>
    </div>

    <div id="imageModal" class="modal">
      <button class="close-btn">FECHAR</button>
      <img class="modal-content" id="modalImg" alt="Imagem do passo">
    </div>
  `;

  // Tutorial "Como jogar online" — CÓPIA COMPLETA (você edita textos/imagens depois)
  const tutorialOnlineHTML = `
    <div class="tutorial-container">
      <h1>Como criar um convite</h1>

      <section class="tutorial-step">
        <div class="step-text">
          1 - Ao entrar no mundo, no menu de opções clique em <strong>Invite</strong>;
        </div>
        <div class="step-image"><img src="imgs/online1.png" alt="Passo 1"></div>
      </section>

      <section class="tutorial-step">
        <div class="step-text">
          2 - Na próxima tela, clique em <strong>Continue</strong>;
        </div>
        <div class="step-image"><img src="imgs/online2.png" alt="Passo 2"></div>
      </section>

      <section class="tutorial-step">
        <div class="step-text">
          3 - Configure da maneira que achar melhor e clique em <strong>Start Shared World</strong>;
        </div>
        <div class="step-image"><img src="imgs/online3.png" alt="Passo 3"></div>
      </section>

            <section class="tutorial-step">
        <div class="step-text">
          4 - Após concluir a configuração do invite, veja que apareceu uma mensagem com um <strong>código verde</strong> no chat, esse código é o invite que você vai passar para quem for entrar no mundo.
        </div>
        <div class="step-image"><img src="imgs/online4.png" alt="Passo 4"></div>
      </section>

      <h1>Como entrar em um mundo usando o código</h1>

      <section class="tutorial-step">
        <div class="step-text">
          5 - Com o código de invite em mãos, é só ir em Multiplayer e depois clicar em <strong>Direct Connect</strong>;
        </div>
        <div class="step-image"><img src="imgs/online5.png" alt="Passo 5"></div>
      </section>

      <section class="tutorial-step">
        <div class="step-text">
          6 - Depois em <strong>Join Shared World</strong>;
        </div>
        <div class="step-image"><img src="imgs/online6.png" alt="Passo 6"></div>
      </section>

      <section class="tutorial-step">
        <div class="step-text">
          7 - E por fim, coloque o código de invite fornecido e clique em <strong>Join World</strong>.
        </div>
        <div class="step-image"><img src="imgs/online7.png" alt="Passo 7"></div>
      </section>

      <div class="back-button"><a href="#" id="btn-back">⬅ VOLTAR</a></div>
    </div>

    <div id="imageModal" class="modal">
      <button class="close-btn">FECHAR</button>
      <img class="modal-content" id="modalImg" alt="Imagem do passo">
    </div>
  `;

  // Helpers para modal
  function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    if (!modal || !modalImg) return;
    modal.style.display = "flex";
    modalImg.src = src;
  }
  function closeModal() {
    const modal = document.getElementById("imageModal");
    if (modal) modal.style.display = "none";
  }

  // Delegação de eventos (funciona mesmo trocando innerHTML)
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;

    // Abrir tutorial salvar
    if (t.closest("#btn-save")) {
      e.preventDefault();
      injectCSS();
      app.innerHTML = tutorialSaveHTML;
      return;
    }

    // Abrir tutorial online (cópia completa)
    if (t.closest("#btn-online")) {
      e.preventDefault();
      injectCSS();
      app.innerHTML = tutorialOnlineHTML;
      return;
    }

    // Voltar
    if (t.closest("#btn-back")) {
      e.preventDefault();
      app.innerHTML = initialContent;
      removeCSS();
      return;
    }

    // Abrir modal na imagem
    const img = t.closest(".step-image img");
    if (img) {
      e.preventDefault();
      openModal(img.getAttribute("src"));
      return;
    }

    // Fechar modal (botão)
    if (t.closest(".close-btn")) {
      e.preventDefault();
      closeModal();
      return;
    }

    // Fechar modal clicando no backdrop
    const modal = document.getElementById("imageModal");
    if (modal && t === modal) {
      e.preventDefault();
      closeModal();
    }
  });
});