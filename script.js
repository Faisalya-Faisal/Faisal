const envelope = document.getElementById("envelope");
const typeText = document.getElementById("typeText");
const nextBtn = document.getElementById("nextBtn");
const surprise = document.getElementById("surprise");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const popup = document.getElementById("popup");

let message = "Life hasn’t been easy for me. I’ve been fighting silent battles, carrying heavy days, and smiling through the struggles.. 🥺❤️\n\nBut the thought of marrying you gives me strength. Chappuma… I’m waiting for that one day —the day I can finally call you mine in front of Allah,the day our Nikah turns every hardship into peace.Until then, I’ll hold on.\n\nBecause with you, everything feels worth it.🫂💕";
let index = 0;

/* Envelope click open */
envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  typeWriter();
});

/* Typewriter effect */
function typeWriter() {
  if (index < message.length) {
    typeText.innerHTML += message.charAt(index) === "\n" ? "<br>" : message.charAt(index);
    index++;
    setTimeout(typeWriter, 40);
  }
}

/* Open surprise section */
nextBtn.addEventListener("click", () => {
  envelope.style.display = "none";
  surprise.style.display = "block";
});

/* No button running */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 140);
  const y = Math.random() * (window.innerHeight - 80);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* Yes button popup */
yesBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

/* Close popup */
function closePopup() {
  popup.style.display = "none";
}

/* Floating hearts background */
const heartsContainer = document.querySelector(".floating-hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 250);
