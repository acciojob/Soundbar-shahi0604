const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsContainer = document.getElementById("buttons");


function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}

sounds.forEach(sound => {
  const audio = document.createElement("audio");
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});


sounds.forEach(sound => {
  const button = document.createElement("button");
  button.innerText = sound;
  button.className = "btn";

  button.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });

  buttonsContainer.appendChild(button);
});


const stopButton = document.createElement("button");
stopButton.innerText = "Stop";
stopButton.className = "stop";

stopButton.addEventListener("click", stopSounds);

buttonsContainer.appendChild(stopButton);