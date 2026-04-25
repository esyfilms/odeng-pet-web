const views = {
  home: {
    title: "Home",
    mood: "Calm",
    message: "Odeng is in the room.",
    sprite: "./assets/baby-normalized/babyodeng-walkforward_0002.png",
    panel: ["Care Surface", "Eight commands stay in the thumb zone."],
  },
  food: {
    title: "Food",
    mood: "Hungry",
    message: "Treats fall while Odeng chews.",
    sprite: "./assets/baby-normalized/babyodeng-chew-generated_0004.png",
    front: true,
    panel: ["Food", "Choose treat or drink.", ["Treat", "Drink"]],
    effect: "treats",
  },
  play: {
    title: "Play",
    mood: "Ready",
    message: "Bark at enemies. Jump over rocks.",
    sprite: "./assets/baby-normalized/babyodeng-walkforward_0004.png",
    panel: ["Mini Game", "Only the active game controls appear.", ["Bark", "Jump"]],
    effect: "game",
  },
  wash: {
    title: "Wash",
    mood: "Dirty",
    message: "Water falls in alternating lines.",
    sprite: "./assets/baby-normalized/babyodeng-frontsitting-shower_0003.png",
    front: true,
    panel: ["Wash", "One tap starts cleaning.", ["Shower"]],
    effect: "water",
  },
  heal: {
    title: "Heal",
    mood: "Sick",
    message: "Medicine drops toward Odeng.",
    sprite: "./assets/baby-normalized/babyodeng-chew-generated_0005.png",
    front: true,
    panel: ["Heal", "Use only when Odeng needs care.", ["Medicine"]],
    effect: "pill",
  },
  poop: {
    title: "Poop",
    mood: "Clean",
    message: "No submenu. Cleaning starts immediately.",
    sprite: "./assets/baby-normalized/babyodengsidesitting_0003.png",
    panel: ["Poop Clean", "Sweep clears the floor and returns home."],
    effect: "sweep",
  },
  nap: {
    title: "Nap",
    mood: "Sleep",
    message: "Tap again to wake Odeng.",
    sprite: "./assets/baby-normalized/babyodeng-sleep-generated_0004.png",
    sleep: true,
    panel: ["Nap", "Sleep and wake are one control.", ["Wake"]],
    effect: "zzz",
  },
  tricks: {
    title: "Tricks",
    mood: "Focus",
    message: "Watch the sequence. Repeat it back.",
    sprite: "./assets/baby-normalized/babyodeng-barking-scene_0002.png",
    panel: ["Memory Game", "Bark · Jump · Sit. Difficulty adapts.", ["Bark", "Jump", "Sit"]],
    effect: "bark",
  },
};

const els = {
  title: document.getElementById("view-title"),
  mood: document.getElementById("status-pill"),
  message: document.getElementById("micro-message"),
  sprite: document.getElementById("odeng-sprite"),
  effects: document.getElementById("scene-effects"),
  panel: document.getElementById("action-panel"),
  commands: [...document.querySelectorAll(".command")],
};

function setView(viewName) {
  const view = views[viewName] || views.home;
  els.title.textContent = view.title;
  els.mood.textContent = view.mood;
  els.message.textContent = view.message;
  els.sprite.src = view.sprite;
  els.sprite.className = "odeng-sprite";
  if (view.front) els.sprite.classList.add("front");
  if (view.sleep) els.sprite.classList.add("sleep");
  els.commands.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
  renderPanel(view);
  renderEffect(view.effect);
}

function renderPanel(view) {
  const [kicker, title, actions = []] = view.panel;
  const actionMarkup = actions.length
    ? `<div class="panel-actions">${actions.map((action, index) => `<button class="panel-action${index ? " secondary" : ""}" type="button">${action}</button>`).join("")}</div>`
    : "";
  els.panel.innerHTML = `
    <p class="panel-kicker">${kicker}</p>
    <p class="panel-title">${title}</p>
    ${actionMarkup}
  `;
}

function renderEffect(effect) {
  els.effects.innerHTML = "";
  if (effect === "treats") {
    [9, 25, 70, 84].forEach((left, index) => {
      const img = document.createElement("img");
      img.className = "treat";
      img.src = `./assets/treats/dogtreats_${String(index + 1).padStart(4, "0")}.png`;
      img.alt = "";
      img.style.left = `${left}%`;
      img.style.animationDelay = `${index * 120}ms`;
      els.effects.appendChild(img);
    });
  }
  if (effect === "water") {
    [37, 43, 50, 56, 63].forEach((left, index) => {
      const line = document.createElement("span");
      line.className = "water-line";
      line.style.left = `${left}%`;
      line.style.setProperty("--delay", `${index * 115}ms`);
      els.effects.appendChild(line);
    });
  }
  if (effect === "pill") {
    els.effects.innerHTML = '<img class="pill-drop" src="./assets/menu/medicine-pill.png" alt="">';
  }
  if (effect === "zzz") {
    els.effects.innerHTML = '<span class="zzz">Zzz</span>';
  }
  if (effect === "game") {
    els.effects.innerHTML = '<img class="hazard" src="./assets/game/stones.png" alt=""><span class="bark-mark"></span>';
  }
  if (effect === "sweep") {
    els.effects.innerHTML = '<span class="sweep"></span>';
  }
  if (effect === "bark") {
    els.effects.innerHTML = '<span class="bark-mark"></span>';
  }
}

els.commands.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

setView("home");
