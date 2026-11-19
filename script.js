// A LITTLE SPACE
// Main interactions

document.addEventListener("DOMContentLoaded", function () {

  // SURPRISE BUTTON

  const surpriseButton =
    document.getElementById("surpriseButton");

  const surpriseMessage =
    document.getElementById("surpriseMessage");

  if (surpriseButton && surpriseMessage) {

    surpriseButton.addEventListener("click", function () {

      surpriseMessage.textContent =
        "Just a little reminder that you are special. ♡";

      createHearts(35);

      surpriseButton.textContent =
        "One more time? ♡";

    });

  }


  // HEART ANIMATION

  function createHearts(amount) {

    const hearts = ["♡", "♥", "💕", "💗", "💖"];

    for (let i = 0; i < amount; i++) {

      const heart = document.createElement("span");

      heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "-30px";
      heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

      heart.style.pointerEvents = "none";
      heart.style.zIndex = "9999";

      document.body.appendChild(heart);

      const duration = 2000 + Math.random() * 2000;

      heart.animate(
        [
          {
            transform: "translateY(0) rotate(0deg)",
            opacity: 1
          },
          {
            transform: "translateY(110vh) rotate(360deg)",
            opacity: 0
          }
        ],
        {
          duration: duration,
          easing: "ease-in"
        }
      );

      setTimeout(function () {
        heart.remove();
      }, duration);

    }

  }


  // CHAT BUTTON

  const chatButton =
    document.getElementById("chatButton");

  if (chatButton) {

    chatButton.addEventListener("click", function () {

      alert(
        "Your little AI companion is coming soon. ♡"
      );

    });

  }


  // NAVIGATION

  const navLinks =
    document.querySelectorAll('.nav-links a');

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      navLinks.forEach(function (item) {
        item.style.color = "";
      });

      link.style.color = "#bd7e91";

    });

  });


  // WELCOME BUTTON INTERACTION

  const welcomeButton =
    document.querySelector(".main-button");

  if (welcomeButton) {

    welcomeButton.addEventListener("mouseenter", function () {
      welcomeButton.style.transform = "translateY(-3px)";
    });

    welcomeButton.addEventListener("mouseleave", function () {
      welcomeButton.style.transform = "translateY(0)";
    });

  }

});
