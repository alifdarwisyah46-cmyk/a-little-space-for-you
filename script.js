
document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // LETTER
  // =========================

  const envelopeButton = document.getElementById("envelopeButton");
  const loveLetter = document.getElementById("loveLetter");
  const envelopeLabel = document.getElementById("envelopeLabel");

  if (envelopeButton && loveLetter) {
    envelopeButton.addEventListener("click", function () {

      const isClosed = !loveLetter.classList.contains("is-open");

      if (isClosed) {
        loveLetter.classList.remove(
          "is-open", "is-closed", "from-side", "bomb-drop"
        );

        void loveLetter.offsetWidth;

        const animation = Math.random() < 0.5
          ? "from-side"
          : "bomb-drop";

        loveLetter.classList.add("is-open", animation);
        loveLetter.setAttribute("aria-hidden", "false");
        envelopeButton.setAttribute("aria-expanded", "true");

        if (envelopeLabel) {
          envelopeLabel.textContent = "Close your letter";
        }

      } else {
        loveLetter.classList.remove(
          "is-open", "from-side", "bomb-drop"
        );
        loveLetter.classList.add("is-closed");

        loveLetter.setAttribute("aria-hidden", "true");
        envelopeButton.setAttribute("aria-expanded", "false");

        if (envelopeLabel) {
          envelopeLabel.textContent = "Open your letter";
        }
      }
    });
  }


  // =========================
  // SURPRISE HEARTS
  // =========================

  const surpriseButton = document.getElementById("surpriseButton");
  const surpriseMessage = document.getElementById("surpriseMessage");

  if (surpriseButton) {
    surpriseButton.addEventListener("click", function () {

      if (surpriseMessage) {
        surpriseMessage.textContent =
          "You are one of my favourite parts of life. ♡";
      }

      createHearts();
    });
  }

  function createHearts() {

    const oldLayer = document.getElementById("loveExplosion");
    if (oldLayer) oldLayer.remove();

    const layer = document.createElement("div");
    layer.id = "loveExplosion";
    document.body.appendChild(layer);

    const symbols = [
      "❤️", "💗", "💕", "💖",
      "💘", "💞", "♥", "♡"
    ];

    for (let i = 0; i < 350; i++) {

      const heart = document.createElement("span");
      heart.className = "flying-heart";

      heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = Math.random() * 100 + "vh";
      heart.style.fontSize = (16 + Math.random() * 35) + "px";
      heart.style.animationDuration = (3 + Math.random() * 4) + "s";
      heart.style.animationDelay = (Math.random() * 1.5) + "s";

      heart.style.setProperty(
        "--drift",
        (Math.random() * 300 - 150) + "px"
      );

      layer.appendChild(heart);
    }

    setTimeout(function () {
      layer.remove();
    }, 9500);
  }


  // =========================
  // AI CHAT
  // =========================

  const WORKER_URL =
    "https://a-little-alif.alifdarwisyah46.workers.dev/";

  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const chatWindow = document.getElementById("chatWindow");
  const sendChat = document.getElementById("sendChat");

  if (chatForm && chatInput && chatWindow && sendChat) {

    let sessionId = localStorage.getItem("alifChatSession");

    if (!sessionId) {
      sessionId = "alif-" + Date.now() + "-" +
        Math.random().toString(36).slice(2);

      localStorage.setItem("alifChatSession", sessionId);
    }

    function addMessage(message, sender) {

      const bubble = document.createElement("div");

      bubble.className =
        "chat-message " +
        (sender === "user" ? "user-message" : "ai-message");

      const name = document.createElement("span");
      name.className = "chat-name";
      name.textContent =
        sender === "user" ? "You" : "A Little Alif ♡";

      const text = document.createElement("p");
      text.textContent = message;

      bubble.appendChild(name);
      bubble.appendChild(text);
      chatWindow.appendChild(bubble);

      // Scroll inside chat only, not the whole website
      chatWindow.scrollTop = chatWindow.scrollHeight;

      return bubble;
    }

    chatForm.addEventListener("submit", async function (event) {

      // Stop the browser's default form submission
      event.preventDefault();
      event.stopPropagation();

      const message = chatInput.value.trim();

      if (!message || sendChat.disabled) return;

      addMessage(message, "user");

      chatInput.value = "";
      sendChat.disabled = true;
      sendChat.textContent = "...";

      const typing = addMessage(
        "Give me a little moment... ♡",
        "ai"
      );

      try {

        const response = await fetch(WORKER_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: message,
            sessionId: sessionId
          })
        });

        const data = await response.json();

        typing.remove();

        if (!response.ok) {
          throw new Error(
            data.error || "AI service unavailable"
          );
        }

        if (!data.reply) {
          throw new Error("The AI didn't send a reply.");
        }

        addMessage(data.reply, "ai");

      } catch (error) {

        typing.remove();

        console.error("Chat error:", error);

        addMessage(
          "Oops, something went wrong. Can you try again in a moment? ♡",
          "ai"
        );

      } finally {

        sendChat.disabled = false;
        sendChat.textContent = "Send ♡";

      }
    });
  }


  // =========================
  // NAVIGATION
  // =========================

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      navLinks.forEach(function (item) {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });


  // =========================
  // SMOOTH SCROLL
  // =========================

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

});



