const buttonsRoot = document.getElementById("buttons");

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const audioMap = new Map();

const stopAll = () => {
  audioMap.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
};

const createButton = (label, className, onClick) => {
  const button = document.createElement("button");
  button.className = className;
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
};

sounds.forEach((sound) => {
  const audio = new Audio(`sounds/${sound}.mp3`);
  audio.preload = "auto";
  audioMap.set(sound, audio);

  const button = createButton(sound, "btn", () => {
    stopAll();
    audio.currentTime = 0;
    audio.play();
  });

  buttonsRoot.appendChild(button);
});

const stopButton = createButton("stop", "btn stop", () => {
  stopAll();
});

buttonsRoot.appendChild(stopButton);
