const STORAGE_KEY = "odeng-local-baby-prototype-v2";

const MENU_ITEMS = [
  { id: "food", label: "Food", icon: "feeding-bowl.png", row: "top" },
  { id: "play", label: "Play", icon: "play-shoe.png", row: "top" },
  { id: "wash", label: "Wash", icon: "clean-shower.png", row: "top" },
  { id: "heal", label: "Heal", icon: "medicine-pill.png", row: "top" },
  { id: "stats", label: "Stats", icon: "stats-scale.png", row: "bottom" },
  { id: "poop", label: "Poop", icon: "poop-clean.png", row: "bottom" },
  { id: "nap", label: "Nap", icon: "nap-zzz.png", row: "bottom" },
  { id: "tricks", label: "Tricks", icon: "tricks-camera.png", row: "bottom" },
];

const MENU_ICON_PATHS = {
  food: '<path d="M7 10h10l-1 6H8l-1-6Z"/><path d="M9 8h6"/><path d="M10 16v2h4v-2"/>',
  play: '<circle cx="12" cy="12" r="5"/><path d="M12 7v10M7 12h10"/>',
  wash: '<path d="M8 8h8"/><path d="M10 8V6h4v2"/><path d="M9 11v5M12 11v5M15 11v5"/>',
  heal: '<path d="M8 14 14 8a3 3 0 0 1 4 4l-6 6a3 3 0 0 1-4-4Z"/><path d="m11 11 4 4"/>',
  stats: '<path d="M6 17V9M12 17V6M18 17v-5"/><path d="M4 17h16"/>',
  poop: '<path d="M9 17h6a3 3 0 0 0 0-6h-1a3 3 0 0 0-6 0h1a3 3 0 0 0 0 6Z"/><path d="M12 8c0-1 .6-2 2-2"/>',
  nap: '<path d="M7 16h10"/><path d="M8 14a4 4 0 0 1 7-3"/><path d="M15 6h4l-4 4h4"/>',
  tricks: '<path d="M7 8h10v8H7z"/><path d="M9 6h6"/><path d="M10 12h4"/>',
};

const ACTION_ICON_PATHS = {
  treat: '<path d="M8 10h8l1 5-2 3H9l-2-3 1-5Z"/><path d="M10 8h4"/><path d="M10 13h1M13 12h1M15 14h1"/>',
  drink: '<path d="M8 7h7l-1 11H9L8 7Z"/><path d="M15 10h2a2 2 0 0 1 0 4h-2"/><path d="M9 12h5"/>',
  bark: '<path d="M7 12h3"/><path d="M12 9l5-3M12 12h7M12 15l5 3"/>',
  jump: '<path d="M6 16c3-7 9-7 12 0"/><path d="M8 16h10"/>',
  wash: MENU_ICON_PATHS.wash,
  heal: MENU_ICON_PATHS.heal,
  sleep: MENU_ICON_PATHS.nap,
};

const BABY_ROOT = "./assets/baby-normalized/";
const BABY_GENERATED_ROOT = "./assets/baby-normalized/";
const ADULT_ROOT = "../public/assets/animations/";
const TREAT_ROOT = "./assets/treats/";
const GAME_ROOT = "./assets/game/";
const ADULT_STAGE_AGE = 13;

const SEQUENCES = {
  baby: {
    egg: frames(BABY_ROOT, "babyodeng-breaking-out-of-shell_", 4),
    walk: frames(BABY_ROOT, "babyodeng-walkforward_", 5),
    bark: frames(BABY_ROOT, "babyodeng-barking-scene_", 4),
    jump: frames(BABY_ROOT, "babyodeng-jumping_", 5),
    poop: frames(BABY_ROOT, "babyodeng-pooping-scene_", 5),
    happy: frames(BABY_ROOT, "babyodeng-frontsitting-happy_", 4),
    sad: frames(BABY_ROOT, "babyodeng-frontsitting-sad_", 4),
    shower: frames(BABY_ROOT, "babyodeng-frontsitting-shower_", 5),
    sick: frames(BABY_ROOT, "babyodeng-sittingforward-sick_", 5),
    sideSit: frames(BABY_ROOT, "babyodengsidesitting_", 3),
    wag: frames(BABY_ROOT, "babyodengtailwagging_", 4),
    sleep: frames(BABY_GENERATED_ROOT, "babyodeng-sleep-generated_", 5),
    eat: frames(BABY_GENERATED_ROOT, "babyodeng-chew-generated_", 6),
    drink: frames(BABY_GENERATED_ROOT, "babyodeng-drink-generated_", 6),
    hungry: [`${BABY_ROOT}babyodeng-sittingforward-hungry.png`],
    front: [
      `${BABY_ROOT}babyodeng-walking-sideways-front-sitting_0002.png`,
      `${BABY_ROOT}babyodeng-walking-sideways-front-sitting_0003.png`,
      `${BABY_ROOT}babyodeng-walking-sideways-front-sitting_0004.png`,
    ],
  },
  adult: {
    walk: ["merged-frame-0.png", "merged-frame-1.png", "merged-frame-2.png", "merged-frame-3.png", "merged-frame-4.png", "merged-frame-5.png", "merged-frame-6.png"].map((file) => `${ADULT_ROOT}${file}`),
    sit: ["sitting-frame-0.png", "sitting-frame-1.png", "sitting-frame-2.png", "sitting-frame-3.png", "sitting-frame-4.png", "sitting-frame-5.png"].map((file) => `${ADULT_ROOT}${file}`),
    wag: ["sitting-wag-0.png", "sitting-wag-1.png", "sitting-wag-2.png", "sitting-wag-3.png", "sitting-wag-4.png"].map((file) => `${ADULT_ROOT}${file}`),
    bark: frames(ADULT_ROOT, "barking_", 5),
    jump: frames(ADULT_ROOT, "jump_", 4),
    sleep: frames(ADULT_ROOT, "odeng-sleeping_", 4),
    poop: frames(ADULT_ROOT, "pooping_", 5),
    petting: frames(ADULT_ROOT, "sidesitting-petting-sequence_", 5),
    front: frames(ADULT_ROOT, "sitting forward_", 4),
    eat: frames(ADULT_ROOT, "chewing_sequence_", 4),
    eatHappy: frames(ADULT_ROOT, "chewing_happy_sequence_", 4),
    wash: frames(ADULT_ROOT, "shower_sequence_", 4),
    washHappy: frames(ADULT_ROOT, "shower_happy_", 5),
    sad: frames(ADULT_ROOT, "sitting-sad-sequence_", 5),
  },
};

const TREAT_FILES = Array.from({ length: 15 }, (_, index) => `${TREAT_ROOT}dogtreats_${String(index + 1).padStart(4, "0")}.png`);
const GAME_ASSETS = {
  stone: `${GAME_ROOT}stones.png`,
  catFrames: Array.from({ length: 8 }, (_, index) => `${GAME_ROOT}cat/frame_${String(index).padStart(3, "0")}.png`),
  squirrelFrames: Array.from({ length: 6 }, (_, index) => `${GAME_ROOT}squirrel/frame_${String(index).padStart(3, "0")}.png`),
};

const els = {
  title: document.getElementById("screen-title"),
  mood: document.getElementById("screen-mood"),
  screen: document.getElementById("screen-shell"),
  topMenu: document.getElementById("top-menu"),
  bottomMenu: document.getElementById("bottom-menu"),
  stage: document.getElementById("stage-hitbox"),
  sprite: document.getElementById("pet-sprite"),
  bars: document.getElementById("mini-bars"),
  statusChip: document.getElementById("status-chip"),
  message: document.getElementById("message"),
  effects: document.getElementById("effects"),
  deck: document.getElementById("action-deck"),
  game: document.getElementById("game-layer"),
};

const state = loadState();
let pendingQueryAction = null;
const runtime = {
  spriteTimer: null,
  ambientToken: 0,
  actionToken: 0,
  effectTimer: null,
  petLeft: 124,
  faceLeft: false,
  busy: false,
  play: null,
  hatchTimer: null,
  homePose: "side",
  barkTimers: new Map(),
};

init();

function init() {
  applyQueryDebug();
  normalizeState();
  buildMenus();
  bindEvents();
  tickSimulation();
  renderAll();
  setInterval(() => {
    tickSimulation();
    renderAll();
  }, 1000);
  handleSceneChange();
  if (pendingQueryAction) {
    setTimeout(() => runQueryAction(pendingQueryAction), 80);
  }
}

function frames(root, prefix, count) {
  return Array.from({ length: count }, (_, index) => `${root}${prefix}${String(index + 1).padStart(4, "0")}.png`);
}

function defaultState() {
  const now = Date.now();
  return {
    phase: "egg",
    cursor: "food",
    deckCursor: 0,
    scene: "home",
    hatchTaps: 0,
    hatchedAt: null,
    lastUpdatedAt: now,
    lastInteractionAt: now,
    food: 64,
    sleep: 60,
    love: 58,
    vit: 88,
    poopCount: 0,
    overfed: 0,
    overwash: 0,
    playCount: 0,
    sick: false,
    napping: false,
    napStartedAt: null,
    message: "Tap the egg 100 times to hatch Odeng.",
    trickSequence: randomTrickSequence(3),
    trickProgress: 0,
    trickShowing: false,
    trickStreak: 0,
    mealChoice: "treat",
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultState(), ...JSON.parse(raw) } : defaultState();
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeState() {
  if (!state.cursor) state.cursor = "food";
  if (!state.scene) state.scene = "home";
  if (typeof state.deckCursor !== "number") state.deckCursor = 0;
  if (!MENU_ITEMS.find((item) => item.id === state.cursor)) state.cursor = "food";
  if (state.phase === "egg") state.scene = "home";
}

function bindEvents() {
  els.topMenu.addEventListener("click", onMenuClick);
  els.bottomMenu.addEventListener("click", onMenuClick);
  els.stage.addEventListener("click", onStageClick);
}

function onMenuClick(event) {
  const button = event.target.closest("[data-menu]");
  if (!button) return;
  const targetScene = button.dataset.menu;
  state.cursor = targetScene;
  state.deckCursor = 0;
  state.lastInteractionAt = Date.now();
  if (state.phase === "egg") {
    state.message = "Pet the egg first. Menus unlock after hatching.";
    buildMenus();
    renderAll();
    saveState();
    return;
  }
  if (state.scene === targetScene) {
    goHome("");
    return;
  }
  openScene(targetScene);
}

function openScene(scene) {
  if (state.phase === "egg") return;
  stopPlayMode();
  clearEffects();
  runtime.busy = false;
  if (state.scene === "nap" && state.napping) {
    finishNap("Odeng woke up.");
  }
  state.scene = scene;
  state.cursor = scene;
  state.deckCursor = 0;
  if (scene === "tricks") {
    state.trickSequence = randomTrickSequence(Math.max(3, Math.min(6, state.trickSequence?.length || 3)));
    state.trickProgress = 0;
    state.trickShowing = false;
  }
  state.message = sceneMessage(scene);
  renderAll();
  handleSceneChange();
  if (scene === "poop") {
    runPoopClean();
  }
  saveState();
}

function goHome(message = homeMessage()) {
  stopPlayMode();
  clearEffects();
  runtime.busy = false;
  if (state.scene === "nap" && state.napping) {
    finishNap("Odeng woke up.");
  }
  state.scene = "home";
  state.deckCursor = 0;
  state.message = message;
  renderAll();
  handleSceneChange();
  saveState();
}

function onStageClick() {
  state.lastInteractionAt = Date.now();
  if (state.phase === "egg") {
    petEgg();
    return;
  }

  if (state.scene === "home") {
    petHome();
    return;
  }
  if (state.scene === "play" && runtime.play?.over) {
    restartPlayMode();
    return;
  }
  if (!runtime.busy) goHome("");
}

function onDeckClick(event) {
  const action = event.target.closest("[data-action]");
  if (!action) return;
  const type = action.dataset.action;
  const items = actionableDeckItems();
  const index = items.findIndex((item) => item.action === type);
  if (index >= 0) state.deckCursor = index;
  activateDeckAction(type);
}

function hatchBaby() {
  state.phase = "baby";
  state.hatchedAt = Date.now();
  state.scene = "home";
  state.cursor = "food";
  state.deckCursor = 0;
  state.napping = false;
  state.napStartedAt = null;
  state.message = "Baby Odeng hatched.";
  state.sick = false;
  renderAll();
  handleSceneChange();
}

function sceneMessage(scene) {
  if (scene === "home") return homeMessage();
  if (scene === "food") return "Choose treat or drink. Odeng stays front-facing until the meal ends.";
  if (scene === "play") return "Funky Run: Bark scares cats and squirrels. Jump over rocks.";
  if (scene === "wash") return "Wash is immediate. Too much washing makes Odeng sad.";
  if (scene === "heal") return "Heal only helps when Odeng is sick or weak.";
  if (scene === "stats") return statsMessage();
  if (scene === "poop") return "Cleaning the poop.";
  if (scene === "nap") return state.napping ? "Odeng is sleeping. Tap Sleep again to wake her up." : "Tap Sleep to let Odeng nap.";
  if (scene === "tricks") return "Countdown, watch the actions, then repeat the same order.";
  return "";
}

function homeMessage() {
  return "";
}

function visualStage(age = ageState()) {
  if (state.phase === "egg") return "egg";
  return age.dogAge >= ADULT_STAGE_AGE ? "adult" : "baby";
}

function isAdultStage(age = ageState()) {
  return visualStage(age) === "adult";
}

function currentSitFrames(age = ageState()) {
  return isAdultStage(age) ? SEQUENCES.adult.sit : SEQUENCES.baby.sideSit;
}

function currentWalkFrames(age = ageState()) {
  return isAdultStage(age) ? SEQUENCES.adult.walk : SEQUENCES.baby.walk;
}

function currentBarkFrames(age = ageState()) {
  return isAdultStage(age) ? SEQUENCES.adult.bark : SEQUENCES.baby.bark;
}

function currentJumpFrames(age = ageState()) {
  return isAdultStage(age) ? SEQUENCES.adult.jump : SEQUENCES.baby.jump;
}

function currentPoopFrames(age = ageState()) {
  return isAdultStage(age) ? SEQUENCES.adult.poop : SEQUENCES.baby.poop;
}

function currentFrontFrames(age = ageState()) {
  return isAdultStage(age) ? SEQUENCES.adult.front : SEQUENCES.baby.front;
}

function currentFrontOptions(age = ageState()) {
  return isAdultStage(age) ? { front: true, adultFront: true } : { front: true };
}

function currentHappyFrames(age = ageState(), context = "generic") {
  if (!isAdultStage(age)) return SEQUENCES.baby.happy;
  return context === "wash" ? SEQUENCES.adult.washHappy : SEQUENCES.adult.eatHappy;
}

function currentHappyOptions(age = ageState()) {
  return isAdultStage(age) ? { front: true, adultFront: true } : { front: true };
}

function currentSadFrames(age = ageState()) {
  return isAdultStage(age) ? SEQUENCES.adult.sad : SEQUENCES.baby.sad;
}

function currentSadOptions(age = ageState()) {
  return isAdultStage(age) ? {} : { front: true };
}

function currentSickFrames(age = ageState()) {
  return isAdultStage(age) ? SEQUENCES.adult.sad : SEQUENCES.baby.sick;
}

function currentSickOptions(age = ageState()) {
  return isAdultStage(age) ? {} : { front: true };
}

function currentSleepFrames(age = ageState()) {
  if (isAdultStage(age)) return SEQUENCES.adult.sleep;
  return SEQUENCES.baby.sleep;
}

function currentChewFrames(kind = "treat", age = ageState()) {
  if (isAdultStage(age)) return SEQUENCES.adult.eat;
  return kind === "drink" ? SEQUENCES.baby.drink : SEQUENCES.baby.eat;
}

function currentChewOptions(age = ageState()) {
  return isAdultStage(age) ? { front: true, adultFront: true } : { front: true };
}

function buildMenus() {
  renderMenuRow(els.topMenu, MENU_ITEMS.filter((item) => item.row === "top"));
  renderMenuRow(els.bottomMenu, MENU_ITEMS.filter((item) => item.row === "bottom"));
}

function renderMenuRow(container, items) {
  const signature = items.map((item) => `${item.id}:${state.cursor === item.id || state.scene === item.id ? 1 : 0}`).join("|");
  if (container.dataset.signature === signature) return;
  container.dataset.signature = signature;
  container.innerHTML = "";
  for (const item of items) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "menu-icon";
    button.dataset.menu = item.id;
    button.title = item.label;
    if (state.cursor === item.id || state.scene === item.id) button.classList.add("active");
    button.innerHTML = menuIconSvg(item.id);
    const label = document.createElement("span");
    label.className = "menu-label";
    label.textContent = item.label;
    button.appendChild(label);
    container.appendChild(button);
  }
}

function menuIconSvg(id) {
  return `<svg class="menu-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${MENU_ICON_PATHS[id] || MENU_ICON_PATHS.stats}</svg>`;
}

function actionIconSvg(id) {
  const path = ACTION_ICON_PATHS[id];
  if (!path) return "";
  return `<svg class="deck-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${path}</svg>`;
}

function renderAll() {
  const age = ageState();
  const activeSceneMessage = sceneMessage(state.scene);
  const showPlayFeedback = state.scene === "play" && state.message && state.message !== activeSceneMessage;
  els.screen.dataset.scene = state.scene;
  els.screen.dataset.phase = visualStage(age);
  els.title.textContent = titleLabel();
  els.mood.textContent = moodLabel();
  els.statusChip.textContent = moodLabel().toUpperCase();
  els.message.className = "message";
  if (state.scene === "stats") els.message.classList.add("stats-note");
  if (showPlayFeedback) els.message.classList.add("play-note");
  const suppressSceneMessage = runtime.busy && (state.scene === "food" || state.scene === "wash");
  const hidePlayIntro = state.scene === "play" && !showPlayFeedback;
  const staleHatchMessage = state.message === "Baby Odeng hatched.";
  const showInlineMessage = state.message && !staleHatchMessage && state.message !== activeSceneMessage;
  els.message.textContent = state.scene === "stats" || suppressSceneMessage || hidePlayIntro || !showInlineMessage ? "" : state.message;
  renderBars(age);
  renderDeck(age);
  renderGameLayer();
  syncPersistentEffects();
  buildMenus();
}

function titleLabel() {
  if (state.phase === "egg") return "Egg";
  if (state.scene === "home") return "Odeng";
  return state.scene.toUpperCase();
}

function moodLabel() {
  if (state.phase === "egg") return "Waiting";
  if (state.poopCount >= 3) return "Dirty";
  if (isSick()) return "Sick";
  if (state.food < 24) return "Hungry";
  if (state.sleep < 24) return "Sleepy";
  if (state.love < 24) return "Lonely";
  return "Calm";
}

function renderBars(age) {
  if (state.phase === "egg" || state.scene !== "stats") {
    els.bars.className = "bars";
    els.bars.innerHTML = "";
    return;
  }
  els.bars.className = "bars stats-bars";
  const items = [
    ["Food", state.food],
    ["Sleep", state.sleep],
    ["Love", state.love],
    ["Vit", state.vit],
  ];
  const rows = items.map(([label, value]) => `
    <div class="mini-bar mini-bar-card">
      <span class="mini-label">${label}</span>
      <div class="mini-track"><div class="mini-fill" style="width:${Math.max(0, Math.min(100, value))}%"></div></div>
      <span class="mini-value">${Math.round(value)}</span>
    </div>
  `).join("");
  const ageProgress = Math.round((age.dogAge / 60) * 100);
  els.bars.innerHTML = `
    <section class="stats-panel">
      <div class="stats-kicker">Status</div>
      ${rows}
      <div class="mini-bar mini-bar-card age-row">
        <span class="mini-label">Age</span>
        <div class="mini-track"><div class="mini-fill" style="width:${ageProgress}%"></div></div>
        <span class="mini-value">${age.dogAge}</span>
      </div>
    </section>
    <aside class="age-panel">
      <div class="age-heading">Life</div>
      <div class="age-primary">Dog ${age.dogAge}</div>
      <div class="age-secondary">Human ${age.humanEq}</div>
      <div class="age-stage">${age.stage}</div>
    </aside>
  `;
}

function renderDeck(age) {
  const { items, mode } = currentDeckConfig(age);
  els.deck.className = `action-deck scene-${state.scene}`;
  els.deck.classList.toggle("single-action", items.length === 1);
  els.deck.classList.toggle("hidden", !items.length);
  if (!items.length) {
    els.deck.dataset.signature = "";
    els.deck.innerHTML = "";
    return;
  }
  const markup = `<div class="deck-grid deck-${mode}">
    ${items.map((item) => {
      if (!item.action) return `<div class="deck-info${item.subtle ? " subtle" : ""}">${item.label}</div>`;
      const activeIndex = actionableDeckItems(age).findIndex((deckItem) => deckItem.action === item.action);
      const active = activeIndex === state.deckCursor ? " active" : "";
      return `<button type="button" class="deck-action${item.subtle ? " subtle" : ""}${active}" data-action="${item.action}">${actionIconSvg(item.action)}<span>${item.label}</span></button>`;
    }).join("")}
  </div>`;
  if (els.deck.dataset.signature === markup) return;
  els.deck.dataset.signature = markup;
  els.deck.innerHTML = markup;
  els.deck.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.dataset.action;
      const itemsNow = actionableDeckItems();
      const index = itemsNow.findIndex((item) => item.action === type);
      if (index >= 0) state.deckCursor = index;
      activateDeckAction(type);
    });
  });
}

function handleSceneChange() {
  clearActionTimers();
  if (state.phase === "egg") {
    renderEggProgress();
    return;
  }
  if (state.scene === "home") {
    startAmbientHome();
    return;
  }
  stopAmbientHome();
  if (state.scene === "play") {
    startPlayMode();
    return;
  }
  renderScenePose();
  if (state.scene === "tricks") {
    setTimeout(() => {
      if (state.scene === "tricks" && !runtime.busy && !state.trickShowing) startTrickRound();
    }, 220);
  }
}

function renderScenePose() {
  const age = ageState();
  if (state.scene === "food" || state.scene === "wash" || state.scene === "stats" || state.scene === "tricks") {
    runtime.homePose = "front";
    const frontFrames = currentFrontFrames(age);
    holdFrame(frontFrames[frontFrames.length - 1], currentFrontOptions(age));
    return;
  }
  if (state.scene === "heal") {
    runtime.homePose = "front";
    if (isSick()) startLoop(currentSickFrames(age), { fps: 5, ...currentSickOptions(age) });
    else holdFrame(currentHappyFrames(age)[0], currentHappyOptions(age));
    return;
  }
  if (state.scene === "poop") {
    runtime.homePose = "side";
    const sitFrames = currentSitFrames(age);
    holdFrame(sitFrames[sitFrames.length - 1], {});
    return;
  }
  if (state.scene === "nap") {
    runtime.homePose = "side";
    if (state.napping) {
      const sleepFrames = currentSleepFrames(age);
      holdFrame(sleepFrames[sleepFrames.length - 1], { sleep: true });
      renderEffects("zzz");
    } else {
      const sitFrames = currentSitFrames(age);
      holdFrame(sitFrames[sitFrames.length - 1], {});
    }
  }
}

function startAmbientHome() {
  stopPlayMode();
  clearEffects();
  syncPersistentEffects();
  const token = ++runtime.ambientToken;
  runtime.busy = false;
  runtime.homePose = "side";
  const sitFrames = currentSitFrames();
  holdFrame(sitFrames[sitFrames.length - 1], {});
  runAmbientLoop(token);
}

function stopAmbientHome() {
  runtime.ambientToken += 1;
}

async function runAmbientLoop(token) {
  runtime.faceLeft = false;
  while (token === runtime.ambientToken && state.scene === "home" && state.phase !== "egg") {
    const age = ageState();
    const adultStage = isAdultStage(age);
    if (isSick()) {
      runtime.homePose = adultStage ? "side" : "front";
      await sickHold(token);
      await pause(240);
      continue;
    }
    if (!adultStage && runtime.homePose === "front") {
      const frontChoice = weightedPick([
        { type: "frontIdle", weight: 44 },
        { type: "frontHappy", weight: 18 },
        { type: "backToSide", weight: 38 },
      ]);
      if (frontChoice === "frontIdle") {
        await frontIdle(token);
      } else if (frontChoice === "frontHappy") {
        await frontHappy(token);
      } else {
        await returnFrontToSide(token);
      }
      await pause(180);
      continue;
    }
    const choice = weightedPick([
      { type: "walk", weight: adultStage ? 54 : 46 },
      { type: "sit", weight: adultStage ? 24 : 20 },
      { type: "front", weight: adultStage ? 0 : 10 },
      { type: "wag", weight: 10 },
      { type: "bark", weight: adultStage ? 7 : 8 },
      { type: "jump", weight: adultStage ? 5 : 7 },
      { type: "poop", weight: state.poopCount < 2 ? 0.25 : 0 },
    ]);
    if (choice === "walk") {
      await walkBurst(token, 24 + Math.random() * 22);
    } else if (choice === "sit") {
      await sitHold(token);
    } else if (choice === "front") {
      await frontHold(token);
    } else if (choice === "wag") {
      await wagHold(token);
    } else if (choice === "bark") {
      await barkAtSpot(token);
    } else if (choice === "jump") {
      await jumpAtSpot(token);
    } else if (choice === "poop") {
      await poopAtSpot(token);
    }
    await pause(180);
  }
}

async function walkBurst(token, distance) {
  if (token !== runtime.ambientToken) return;
  const sitFrames = currentSitFrames();
  if (runtime.homePose === "side") {
    await playReverseOnce(sitFrames, { fps: 6 });
  }
  const minX = 56;
  const maxX = 192;
  let moved = 0;
  runtime.homePose = "walk";
  startLoop(currentWalkFrames(), { fps: 7 });
  while (moved < distance && token === runtime.ambientToken && state.scene === "home") {
    const next = runtime.petLeft + (runtime.faceLeft ? 4 : -4);
    if (next <= minX || next >= maxX) {
      runtime.faceLeft = !runtime.faceLeft;
      break;
    }
    runtime.petLeft = next;
    applySpriteLayout({});
    moved += 4;
    await pause(1000 / 7);
  }
  if (token !== runtime.ambientToken || state.scene !== "home") return;
  stopSpriteTimer();
  runtime.homePose = "side";
  holdFrame(sitFrames[sitFrames.length - 1], {});
}

async function sitHold(token) {
  if (token !== runtime.ambientToken) return;
  const sitFrames = currentSitFrames();
  if (runtime.homePose !== "side") {
    await playOnce(sitFrames, { fps: 6 });
    if (token !== runtime.ambientToken || state.scene !== "home") return;
  }
  runtime.homePose = "side";
  holdFrame(sitFrames[sitFrames.length - 1], {});
  await pause(860);
}

async function frontHold(token) {
  if (token !== runtime.ambientToken) return;
  const age = ageState();
  const frontFrames = currentFrontFrames(age);
  const frontOptions = currentFrontOptions(age);
  runtime.homePose = "front";
  await playOnce(frontFrames, { fps: 6, ...frontOptions });
  if (token !== runtime.ambientToken || state.scene !== "home") return;
  holdFrame(frontFrames[frontFrames.length - 1], frontOptions);
  await pause(700);
}

async function frontIdle(token) {
  if (token !== runtime.ambientToken) return;
  const age = ageState();
  const frontFrames = currentFrontFrames(age);
  runtime.homePose = "front";
  holdFrame(frontFrames[frontFrames.length - 1], currentFrontOptions(age));
  await pause(720);
}

async function frontHappy(token) {
  if (token !== runtime.ambientToken) return;
  const age = ageState();
  const frontFrames = currentFrontFrames(age);
  runtime.homePose = "front";
  await playOnce(currentHappyFrames(age), { fps: 6, ...currentHappyOptions(age) });
  if (token !== runtime.ambientToken || state.scene !== "home") return;
  holdFrame(frontFrames[frontFrames.length - 1], currentFrontOptions(age));
  await pause(420);
}

async function returnFrontToSide(token) {
  if (token !== runtime.ambientToken) return;
  const age = ageState();
  if (!isAdultStage(age)) {
    await playReverseOnce(currentFrontFrames(age), { fps: 6, ...currentFrontOptions(age) });
    if (token !== runtime.ambientToken || state.scene !== "home") return;
  }
  runtime.homePose = "side";
  const sitFrames = currentSitFrames(age);
  holdFrame(sitFrames[sitFrames.length - 1], {});
  await pause(360);
}

async function sickHold(token) {
  if (token !== runtime.ambientToken) return;
  const age = ageState();
  startLoop(currentSickFrames(age), { fps: 5, ...currentSickOptions(age) });
  await pause(980);
  if (token !== runtime.ambientToken || state.scene !== "home") return;
  const sickFrames = currentSickFrames(age);
  holdFrame(sickFrames[sickFrames.length - 1], currentSickOptions(age));
}

async function wagHold(token) {
  if (token !== runtime.ambientToken) return;
  const age = ageState();
  const sitFrames = currentSitFrames(age);
  runtime.homePose = "side";
  holdFrame(sitFrames[sitFrames.length - 1], {});
  const wagLoop = isAdultStage(age)
    ? [
        SEQUENCES.adult.wag[SEQUENCES.adult.wag.length - 2],
        SEQUENCES.adult.wag[SEQUENCES.adult.wag.length - 1],
        SEQUENCES.adult.wag[SEQUENCES.adult.wag.length - 2],
        SEQUENCES.adult.wag[SEQUENCES.adult.wag.length - 1],
      ]
    : [
        SEQUENCES.baby.wag[SEQUENCES.baby.wag.length - 2],
        SEQUENCES.baby.wag[SEQUENCES.baby.wag.length - 1],
        SEQUENCES.baby.wag[SEQUENCES.baby.wag.length - 2],
        SEQUENCES.baby.wag[SEQUENCES.baby.wag.length - 1],
      ];
  await playOnce(wagLoop, { fps: 6 });
  if (token !== runtime.ambientToken || state.scene !== "home") return;
  holdFrame(sitFrames[sitFrames.length - 1], {});
  await pause(420);
}

async function barkAtSpot(token) {
  if (token !== runtime.ambientToken) return;
  const sitFrames = currentSitFrames();
  runtime.homePose = "side";
  await playOnce(currentBarkFrames(), { fps: 6 });
  if (token !== runtime.ambientToken || state.scene !== "home") return;
  holdFrame(sitFrames[sitFrames.length - 1], {});
}

async function jumpAtSpot(token) {
  if (token !== runtime.ambientToken) return;
  const sitFrames = currentSitFrames();
  runtime.homePose = "side";
  await playOnce(currentJumpFrames(), { fps: 7 });
  if (token !== runtime.ambientToken || state.scene !== "home") return;
  holdFrame(sitFrames[sitFrames.length - 1], {});
}

async function poopAtSpot(token) {
  if (token !== runtime.ambientToken) return;
  runtime.homePose = "side";
  await playOnce(currentPoopFrames(), { fps: 6 });
  if (token !== runtime.ambientToken || state.scene !== "home") return;
  state.poopCount = Math.min(6, state.poopCount + 1);
  renderAll();
  saveState();
}

function playPetting() {
  stopAmbientHome();
  const age = ageState();
  const wagFrames = isAdultStage(age) ? SEQUENCES.adult.wag : SEQUENCES.baby.wag;
  playOnce(wagFrames, { fps: 6 }).then(() => {
    runtime.homePose = "side";
    if (state.scene === "home") startAmbientHome();
  });
}

function eggFrameForTaps(taps = 0) {
  if (taps >= 67) return SEQUENCES.baby.egg[2];
  if (taps >= 34) return SEQUENCES.baby.egg[1];
  return SEQUENCES.baby.egg[0];
}

function renderEggProgress() {
  const stageWidth = els.stage.clientWidth || 344;
  runtime.petLeft = Math.round(stageWidth / 2);
  runtime.faceLeft = false;
  holdFrame(eggFrameForTaps(state.hatchTaps), { egg: true });
}

function playFinalHatch() {
  if (runtime.hatchTimer) return;
  clearActionTimers();
  holdFrame(SEQUENCES.baby.egg[3], { egg: true });
  state.message = "100/100 pets";
  saveState();
  runtime.hatchTimer = setTimeout(() => {
    runtime.hatchTimer = null;
    hatchBaby();
    saveState();
  }, 420);
}

async function runFeed(kind) {
  if (runtime.busy) return;
  const token = ++runtime.actionToken;
  const age = ageState();
  runtime.busy = true;
  stopAmbientHome();
  clearEffects();
  const accepted = state.food < 92;
  const rainPromise = startTreatRain(kind);
  state.message = "";
  renderAll();
  startLoop(feedLoop(kind, age), feedLoopOptions(kind, age));
  await rainPromise;
  if (token !== runtime.actionToken || state.scene !== "food") return;
  if (accepted) {
    state.food = clamp(state.food + (kind === "treat" ? 14 : 8));
    state.love = clamp(state.love + 3);
    state.overfed = Math.max(0, state.overfed - 1);
  } else {
    state.overfed += 1;
    state.vit = clamp(state.vit - 4);
  }
  state.message = accepted
    ? (kind === "treat" ? "Odeng enjoyed the treats." : "Odeng had a drink.")
    : "Too full. Feeding more lowers vitality.";
  renderAll();
  saveState();
  clearEffects();
  stopSpriteTimer();
  if (accepted) {
    await playOnce(currentHappyFrames(age), { fps: 7, ...currentHappyOptions(age) });
  } else {
    await playOnce(currentSadFrames(age), { fps: 6, ...currentSadOptions(age) });
  }
  if (token !== runtime.actionToken || state.scene !== "food") return;
  runtime.busy = false;
  await pause(220);
  if (state.scene === "food") goHome(state.message);
}

async function runWash() {
  if (runtime.busy) return;
  const token = ++runtime.actionToken;
  const age = ageState();
  runtime.busy = true;
  clearEffects();
  state.message = "";
  renderAll();
  renderEffects("water");
  const washFrames = isAdultStage(age) ? SEQUENCES.adult.wash : SEQUENCES.baby.shower;
  await playOnce(washFrames, { fps: 6, ...currentFrontOptions(age) });
  if (token !== runtime.actionToken || state.scene !== "wash") return;
  await playOnce(washFrames, { fps: 6, ...currentFrontOptions(age) });
  if (token !== runtime.actionToken || state.scene !== "wash") return;
  const accepted = state.overwash < 3;
  if (accepted) {
    state.vit = clamp(state.vit + 4);
    state.message = washOutcomeMessage();
  } else {
    state.vit = clamp(state.vit - 4);
    state.message = "Too much washing makes Odeng sad.";
  }
  state.overwash += 1;
  saveState();
  clearEffects();
  if (accepted) {
    await playOnce(currentHappyFrames(age, "wash"), { fps: 6, ...currentHappyOptions(age, "wash") });
  } else {
    await playOnce(currentSadFrames(age), { fps: 6, ...currentSadOptions(age) });
  }
  if (token !== runtime.actionToken || state.scene !== "wash") return;
  runtime.busy = false;
  await pause(220);
  if (state.scene === "wash") goHome(state.message);
}

async function runHeal() {
  if (runtime.busy) return;
  const age = ageState();
  runtime.busy = true;
  clearEffects();
  if (!isSick()) {
    state.message = "Already okay.";
    await playOnce(currentHappyFrames(age), { fps: 6, ...currentHappyOptions(age) });
  } else {
    renderEffects("pill");
    startLoop(currentChewFrames("treat", age), feedLoopOptions("treat", age));
    await pause(1180);
    stopSpriteTimer();
    state.vit = clamp(state.vit + 18);
    state.food = clamp(state.food + 4);
    state.sleep = clamp(state.sleep + 4);
    state.overwash = Math.max(0, state.overwash - 2);
    state.overfed = Math.max(0, state.overfed - 1);
    state.sick = isSick();
    if (state.sick) {
      state.message = "Medicine helped, but Odeng still needs more care.";
      await playOnce(currentSickFrames(age), { fps: 6, ...currentSickOptions(age) });
    } else {
      state.message = "Odeng feels better.";
      await playOnce(currentHappyFrames(age), { fps: 6, ...currentHappyOptions(age) });
    }
  }
  runtime.busy = false;
  saveState();
  await pause(220);
  if (state.scene === "heal") goHome(state.message);
}

async function runPoopClean() {
  if (runtime.busy) return;
  const age = ageState();
  runtime.busy = true;
  const sitFrames = currentSitFrames(age);
  holdFrame(sitFrames[sitFrames.length - 1], {});
  if (state.poopCount > 0) {
    renderEffects("sweep");
    await pause(820);
    state.poopCount = 0;
    state.love = clamp(state.love + 3);
    state.message = isSick() ? "Poop is gone, but Odeng still needs more care." : "Poop cleaned. Odeng feels better.";
    await playOnce(currentHappyFrames(age), { fps: 6, ...currentHappyOptions(age) });
  } else {
    state.message = "All clean already.";
    await pause(420);
  }
  runtime.busy = false;
  renderAll();
  renderScenePose();
  saveState();
  if (state.scene === "poop") {
    await pause(520);
    if (state.scene === "poop") goHome(state.message);
  }
}

async function runNap() {
  clearEffects();
  if (state.napping) {
    finishNap("Odeng woke up.");
    renderAll();
    renderScenePose();
    saveState();
    return;
  }
  const age = ageState();
  state.napping = true;
  state.napStartedAt = Date.now();
  const sleepFrames = currentSleepFrames(age);
  await playOnce(sleepFrames, { fps: 4, sleep: true });
  if (state.napping) holdFrame(sleepFrames[sleepFrames.length - 1], { sleep: true });
  renderEffects("zzz");
  state.message = "Odeng is sleeping.";
  renderAll();
  saveState();
}

async function startTrickRound() {
  if (runtime.busy || state.scene !== "tricks") return;
  const token = ++runtime.actionToken;
  runtime.busy = true;
  state.trickShowing = true;
  state.trickProgress = 0;
  for (const count of [3, 2, 1]) {
    state.message = `Ready in ${count}`;
    renderAll();
    await pause(320);
    if (token !== runtime.actionToken || state.scene !== "tricks") return;
  }
  state.message = `Watch: ${state.trickSequence.join(" · ").toUpperCase()}`;
  renderAll();
  for (const action of state.trickSequence) {
    await performTrickAction(action, token);
    if (token !== runtime.actionToken || state.scene !== "tricks") return;
  }
  state.trickShowing = false;
  runtime.busy = false;
  state.message = "Repeat the same order.";
  renderAll();
  saveState();
}

function trickInput(type) {
  if (runtime.busy || state.trickShowing) return;
  const expected = state.trickSequence[state.trickProgress];
  if (type === expected) {
    state.trickProgress += 1;
    performTrickAction(type, null, true);
    if (state.trickProgress >= state.trickSequence.length) {
      state.trickProgress = 0;
      state.trickStreak += 1;
      state.love = clamp(state.love + 8);
      state.vit = clamp(state.vit + 4);
      state.food = clamp(state.food - 2);
      state.sleep = clamp(state.sleep - 2);
      state.message = "Sequence cleared.";
      const nextLength = state.trickStreak >= 2 && state.trickSequence.length < 6 ? state.trickSequence.length + 1 : state.trickSequence.length;
      if (state.trickStreak >= 2) state.trickStreak = 0;
      state.trickSequence = randomTrickSequence(nextLength);
      playOnce(currentHappyFrames(), { fps: 6, ...currentHappyOptions() }).then(() => {
        if (state.scene === "tricks") setTimeout(() => startTrickRound(), 600);
      });
    } else {
      state.message = `Correct ${state.trickProgress}/${state.trickSequence.length}`;
    }
  } else {
    state.trickProgress = 0;
    state.trickStreak = 0;
    const nextLength = Math.max(3, state.trickSequence.length - 1);
    state.trickSequence = randomTrickSequence(nextLength);
    state.message = "Missed the sequence.";
    playOnce(currentSadFrames(), { fps: 6, ...currentSadOptions() }).then(() => {
      if (state.scene === "tricks") setTimeout(() => startTrickRound(), 700);
    });
  }
  renderAll();
  saveState();
}

function startPlayMode() {
  clearEffects();
  runtime.play = {
    active: true,
    score: 0,
    lives: 3,
    level: 1,
    entities: [],
    nextSpawnAt: performance.now() + 920,
    barkUntil: 0,
    barkStartedAt: 0,
    jumpUntil: 0,
    jumpStartedAt: 0,
    barkCooldownUntil: 0,
    sessionCounted: false,
    over: false,
    lastNow: performance.now(),
    homeTimer: null,
    barkWaveUntil: 0,
    barkWaveStartAt: 0,
  };
  runtime.petLeft = 198;
  runtime.faceLeft = false;
  startLoop(currentWalkFrames(), { fps: 10 });
  runtime.play.timer = setInterval(() => tickPlayGame(performance.now()), 60);
  tickPlayGame(performance.now());
}

function restartPlayMode() {
  if (runtime.play?.homeTimer) clearTimeout(runtime.play.homeTimer);
  stopPlayMode();
  startPlayMode();
  state.message = "Try again.";
  renderAll();
}

function stopPlayMode() {
  if (runtime.play?.homeTimer) clearTimeout(runtime.play.homeTimer);
  clearPlayBarkTimers();
  if (runtime.play?.timer) clearInterval(runtime.play.timer);
  runtime.play = null;
  els.game.classList.add("hidden");
  els.game.innerHTML = "";
}

function triggerPlayJump() {
  const play = runtime.play;
  if (!play || play.over) return;
  countPlaySession(play);
  const now = performance.now();
  if (now < play.jumpUntil) return;
  play.jumpStartedAt = now;
  play.jumpUntil = now + 480;
  playOnce(currentJumpFrames(), { fps: 11 }).then(() => {
    if (runtime.play && !runtime.play.over) startLoop(currentWalkFrames(), { fps: 10 });
  });
}

function triggerPlayBark() {
  const play = runtime.play;
  if (!play || play.over) return;
  countPlaySession(play);
  const now = performance.now();
  if (now < play.barkCooldownUntil) return;
  play.barkStartedAt = now;
  play.barkUntil = now + 360;
  play.barkCooldownUntil = now + 500;
  play.barkWaveStartAt = now + 70;
  play.barkWaveUntil = now + 350;
  playOnce(currentBarkFrames(), { fps: 9 }).then(() => {
    if (runtime.play && !runtime.play.over && performance.now() > play.jumpUntil) {
      startLoop(currentWalkFrames(), { fps: 10 });
    }
  });
  for (const entity of play.entities) {
    if (entity.type === "stone") continue;
    const distance = Math.abs(entity.x - runtime.petLeft);
    const barkRange = 88;
    if (distance <= barkRange && !runtime.barkTimers.has(entity.id)) {
      const travelDelay = 70 + Math.max(40, (distance / barkRange) * 170);
      const timer = setTimeout(() => {
        runtime.barkTimers.delete(entity.id);
        if (!runtime.play || runtime.play.over || entity.dead) return;
        entity.dead = true;
        play.score += 12;
        renderAll();
      }, travelDelay);
      runtime.barkTimers.set(entity.id, timer);
    }
  }
}

function tickPlayGame(now) {
  const play = runtime.play;
  if (!play || !play.active) return;
  const delta = Math.min(50, now - play.lastNow);
  play.lastNow = now;
  const deltaSeconds = delta / 1000;

  if (!play.over && now >= play.nextSpawnAt) {
    const roll = Math.random();
    const type = roll < 0.46 ? "stone" : roll < 0.75 ? "cat" : "squirrel";
    play.entities.push(createPlayEntity(type, now, play.level));
    play.nextSpawnAt = now + Math.max(360, 940 - ((play.level - 1) * 88)) + (Math.random() * 260);
  }

  for (const entity of play.entities) {
    entity.x += entity.speed * deltaSeconds;
    if (entity.frames) {
      entity.frameElapsed += delta;
      if (entity.frameElapsed >= 90) {
        entity.frameElapsed = 0;
        entity.frameIndex = (entity.frameIndex + 1) % entity.frames.length;
      }
    }
    if (entity.dead && entity.x < 340) entity.x += entity.speed * deltaSeconds * 0.8;
  }

  for (const entity of play.entities) {
    if (entity.dead) continue;
    const distance = Math.abs(entity.x - runtime.petLeft);
    const collisionRange = entity.type === "stone"
      ? Math.max(18, Math.round(entity.size * 0.48))
      : Math.max(20, Math.round(entity.size * 0.42));
    if (distance <= collisionRange) {
      const jumped = now < play.jumpUntil;
      const barked = entity.type !== "stone" && now < play.barkUntil;
      if (!jumped && !barked) {
        entity.dead = true;
        play.lives = Math.max(0, play.lives - 1);
        state.message = "Odeng got hit.";
        if (play.lives <= 0) {
          play.over = true;
          play.active = false;
          if (play.timer) clearInterval(play.timer);
          state.message = `Game over. Tap to restart.`;
          stopSpriteTimer();
          holdFrame(currentSadFrames()[0], currentSadOptions());
          play.homeTimer = setTimeout(() => {
            if (state.scene === "play" && runtime.play?.over) goHome("");
          }, 2000);
          break;
        }
      }
    }
    if (!entity.dead && entity.x > 340) {
      if (entity.type === "stone" && now < play.jumpUntil) play.score += 8;
      if (entity.type !== "stone" && now < play.barkUntil) play.score += 12;
      entity.dead = true;
    }
  }

  play.entities = play.entities.filter((entity) => entity.x < 380);
  play.level = Math.max(1, 1 + Math.floor(play.score / 60));
  renderAll();
}

function renderGameLayer() {
  if (state.scene !== "play" || !runtime.play) {
    els.game.classList.add("hidden");
    els.game.innerHTML = "";
    return;
  }
  const play = runtime.play;
  els.game.classList.remove("hidden");
  const now = performance.now();
  const barkActive = now >= play.barkWaveStartAt && now < play.barkWaveUntil;
  const barkLeft = Math.max(16, Math.min(310, runtime.petLeft + (runtime.faceLeft ? -34 : 34)));
  els.game.innerHTML = `
    <div class="game-hud">
      <span>Score ${play.score}</span>
      <span>Lives ${play.lives}</span>
      <span>L${play.level}</span>
    </div>
    <div class="game-bark-wave${barkActive ? " active" : ""}" style="left:${barkLeft}px;"></div>
    ${play.entities.filter((entity) => !entity.dead).map((entity) => {
      const src = entity.frames
        ? entity.frames[entity.frameIndex % entity.frames.length]
        : GAME_ASSETS.stone;
      const opacity = 1;
      const bottom = entity.bottom;
      return `<img class="game-entity ${entity.type}" src="${src}" alt="${entity.type}" style="left:${entity.x}px; bottom:${bottom}px; width:${entity.size}px; height:${entity.size}px; opacity:${opacity};">`;
    }).join("")}
  `;
}

function randomStoneSize() {
  const roll = Math.random();
  if (roll < 0.36) return 26 + Math.round(Math.random() * 8);
  if (roll < 0.78) return 34 + Math.round(Math.random() * 8);
  return 42 + Math.round(Math.random() * 8);
}

function createPlayEntity(type, now, level = 1) {
  const isStone = type === "stone";
  const baseRunSpeed = 112 + ((level - 1) * 8);
  const size = isStone
    ? randomStoneSize()
    : type === "cat"
      ? Math.round(54 * Math.min(1.16, 1 + ((level - 1) * 0.04)))
      : Math.round(44 * Math.min(1.14, 1 + ((level - 1) * 0.04)));
  const speed = isStone
    ? baseRunSpeed + (Math.random() * 10)
    : (baseRunSpeed - 6) + (Math.random() * 12);
  return {
    id: `${type}-${now}`,
    type,
    x: -24,
    y: 0,
    dead: false,
    size,
    speed,
    bottom: isStone ? -32 : type === "cat" ? -52 : -36,
    frames: isStone ? null : (type === "cat" ? GAME_ASSETS.catFrames : GAME_ASSETS.squirrelFrames),
    frameIndex: 0,
    frameElapsed: 0,
  };
}

function renderEffects(kind = null) {
  clearEffects();
  if (kind === "zzz") {
    const x = runtime.petLeft + (runtime.faceLeft ? 20 : -20);
    const zzz = document.createElement("div");
    zzz.className = "effect-zzz";
    zzz.textContent = "Zzz";
    zzz.style.left = `${x}px`;
    els.effects.appendChild(zzz);
    return;
  }
  if (kind === "drink") {
    els.effects.innerHTML = `<div class="effect-drink" aria-hidden="true"><span></span></div>`;
    return;
  }
  if (kind === "pill") {
    const age = ageState();
    const pill = document.createElement("img");
    pill.className = "effect-pill-drop";
    pill.src = "./assets/menu/medicine-pill.png";
    pill.alt = "";
    pill.style.left = `${runtime.petLeft}px`;
    pill.style.setProperty("--pill-distance", isAdultStage(age) ? "228px" : "252px");
    els.effects.appendChild(pill);
    return;
  }
  if (kind === "water") {
    const water = document.createElement("div");
    water.className = "effect-water";
    water.setAttribute("aria-hidden", "true");
    [12, 26, 41, 57, 73, 88].forEach((x, index) => {
      const line = document.createElement("span");
      line.className = "water-line";
      line.style.setProperty("--x", `${x}%`);
      line.style.setProperty("--delay", `${index * 110}ms`);
      water.appendChild(line);
    });
    els.effects.appendChild(water);
    return;
  }
  if (kind === "sweep") {
    els.effects.innerHTML = `<div class="effect-sweep"></div>`;
    return;
  }
  if (kind === "sparkles") {
    els.effects.innerHTML = `<div class="effect-sparkles"></div>`;
  }
}

function syncPersistentEffects() {
  const shouldShowPoops = state.phase !== "egg" && state.poopCount > 0 && (state.scene === "home" || state.scene === "poop");
  if (!shouldShowPoops) {
    const existing = els.effects.querySelector(".effect-poops");
    if (existing) existing.remove();
    return;
  }
  if (els.effects.querySelector(".effect-rain, .effect-water, .effect-sweep, .effect-drink, .effect-sparkles, .effect-zzz")) return;
  const markup = poopMarkup(state.poopCount);
  const existing = els.effects.querySelector(".effect-poops");
  if (existing) existing.outerHTML = markup;
  else els.effects.insertAdjacentHTML("beforeend", markup);
}

function currentDeckConfig(age = ageState()) {
  let items = [];
  let mode = "two";
  if (state.phase === "egg") {
    items = [];
  } else {
    switch (state.scene) {
      case "home":
        items = [];
        break;
      case "food":
        items = [{ label: "Treat", action: "treat" }, { label: "Drink", action: "drink" }];
        break;
      case "play":
        items = runtime.play?.over ? [] : [{ label: "Bark", action: "bark" }, { label: "Jump", action: "jump" }];
        break;
      case "wash":
        items = [{ label: "Shower", action: "wash" }];
        break;
      case "heal":
        items = [{ label: "Heal", action: "heal" }];
        break;
      case "stats":
        items = [];
        break;
      case "poop":
        items = [];
        break;
      case "nap":
        items = [{ label: "Sleep", action: "sleep" }];
        break;
      case "tricks":
        items = [
          { label: "Bark", action: "bark" },
          { label: "Jump", action: "jump" },
          { label: "Sit", action: "sit" },
          { label: "Sleep", action: "sleep" },
        ];
        mode = "four";
        break;
      default:
        items = [];
    }
  }
  if (items.length === 1) mode = "one";
  return { items, mode };
}

function actionableDeckItems(age = ageState()) {
  return currentDeckConfig(age).items.filter((item) => item.action);
}

function activateDeckAction(type) {
  if (!type) return;
  state.lastInteractionAt = Date.now();
  if (state.phase === "egg") {
    if (type === "pet") petEgg();
    return;
  }
  if (state.scene === "food") {
    if (type === "treat" || type === "drink") runFeed(type);
  } else if (state.scene === "wash") {
    if (type === "wash") runWash();
  } else if (state.scene === "heal") {
    if (type === "heal") runHeal();
  } else if (state.scene === "poop") {
    if (type === "clean") runPoopClean();
  } else if (state.scene === "nap") {
    if (type === "sleep") runNap();
  } else if (state.scene === "play") {
    if (type === "bark") triggerPlayBark();
    if (type === "jump") triggerPlayJump();
  } else if (state.scene === "tricks") {
    if (["bark", "jump", "sit", "sleep"].includes(type)) trickInput(type);
  }
}

function petEgg() {
  state.hatchTaps += 1;
  state.message = `${state.hatchTaps}/100 pets`;
  if (state.hatchTaps >= 100) {
    state.hatchTaps = 100;
    playFinalHatch();
  } else {
    renderEggProgress();
  }
  saveState();
  renderAll();
}

function petHome() {
  playPetting();
  state.love = clamp(state.love + 3);
  state.message = "Petting raises love.";
  saveState();
}

function washOutcomeMessage() {
  return isSick() ? "Odeng is cleaner, but still needs more care." : "Odeng is clean and happy.";
}

function countPlaySession(play) {
  if (play.sessionCounted) return;
  play.sessionCounted = true;
  state.playCount += 1;
  saveState();
}

function feedLoop(kind, age = ageState()) {
  return currentChewFrames(kind, age);
}

function feedLoopOptions(kind, age = ageState()) {
  return { fps: kind === "drink" ? 7 : 8, ...currentChewOptions(age) };
}

function poopMarkup(count) {
  const positions = [12, 27, 74, 86, 38, 63];
  const piles = Array.from({ length: Math.min(count, positions.length) }, (_, index) =>
    `<div class="poop" style="left:${positions[index]}%;"></div>`
  ).join("");
  return `<div class="effect-poops">${piles}</div>`;
}

function clearEffects() {
  els.effects.innerHTML = "";
  clearTimeout(runtime.effectTimer);
}

function clearPlayBarkTimers() {
  runtime.barkTimers.forEach((timer) => clearTimeout(timer));
  runtime.barkTimers.clear();
}

function startTreatRain(kind) {
  clearEffects();
  const container = document.createElement("div");
  container.className = "effect-rain";
  const stageHeight = els.stage.clientHeight || 320;
  const fallDistance = Math.max(248, stageHeight - 36);
  const count = kind === "treat" ? 6 : 3;
  const landingSlots = [8, 18, 28, 72, 82, 92];
  const completions = [];
  for (let index = 0; index < count; index += 1) {
    if (kind === "drink") {
      const drop = document.createElement("div");
      drop.className = "effect-drink";
      drop.setAttribute("aria-hidden", "true");
      drop.innerHTML = "<span></span>";
      container.appendChild(drop);
      completions.push(pause(1450));
      break;
    }
    const img = document.createElement("img");
    img.src = randomPick(TREAT_FILES);
    img.alt = "";
    img.style.left = `${landingSlots[index % landingSlots.length]}%`;
    img.style.width = `${34 + Math.round(Math.random() * 8)}px`;
    img.style.height = img.style.width;
    img.style.setProperty("--fall-duration", `${1.2 + Math.random() * 0.45}s`);
    img.style.setProperty("--fall-distance", `${fallDistance}px`);
    completions.push(new Promise((resolve) => {
      img.addEventListener("animationend", resolve, { once: true });
    }));
    container.appendChild(img);
  }
  els.effects.appendChild(container);
  if (kind === "drink") return pause(1450);
  return Promise.all(completions);
}

function tickSimulation() {
  const now = Date.now();
  const elapsedMs = now - state.lastUpdatedAt;
  const elapsedHours = elapsedMs / 3600000;
  if (elapsedHours <= 0) return;
  if (state.phase !== "egg") {
    const wasSick = isSick();
    state.food = clamp(state.food - elapsedHours * 1.6);
    state.sleep = clamp(state.sleep - elapsedHours * 1.2);
    state.love = clamp(state.love - elapsedHours * 0.9);
    state.vit = clamp(state.vit - elapsedHours * 0.5);
    if (elapsedHours >= 12) {
      state.poopCount = Math.min(6, state.poopCount + Math.floor(elapsedHours / 12));
    }
    state.sick = isSick();
    if (state.scene === "home" && wasSick !== state.sick) {
      handleSceneChange();
    }
  }
  state.lastUpdatedAt = now;
  saveState();
}

function isSick() {
  return state.food < 18 || state.sleep < 18 || state.vit < 24 || state.poopCount >= 3 || state.overfed >= 3 || state.overwash >= 4;
}

function ageState() {
  if (state.phase === "egg") return { dogAge: 0, humanEq: 0, stage: "Egg" };
  const days = (Date.now() - state.hatchedAt) / 86400000;
  const dogAge = Math.min(60, Math.max(1, Math.floor(days * 2) + 1 + Math.floor(state.playCount / 8) + Math.floor((state.food - 50) / 30)));
  return { dogAge, humanEq: Math.floor(dogAge / 2), stage: stageLabel(dogAge) };
}

function stageLabel(dogAge) {
  if (dogAge === 0) return "Egg";
  if (dogAge < ADULT_STAGE_AGE) return "Baby";
  return "Adult";
}

function statsMessage() {
  const age = ageState();
  return `Dog ${age.dogAge} · Human ${age.humanEq}\n${age.stage}`;
}

function applyQueryDebug() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("reset") === "1") {
    localStorage.removeItem(STORAGE_KEY);
    Object.assign(state, defaultState());
  }
  const demo = params.get("demo");
  if (demo === "hatched") {
    Object.assign(state, {
      phase: "baby",
      scene: "home",
      cursor: "food",
      hatchTaps: 100,
      hatchedAt: Date.now() - (5 * 86400000),
      food: 68,
      sleep: 60,
      love: 72,
      vit: 84,
      poopCount: 1,
      sick: false,
      message: "Baby Odeng hatched.",
    });
  } else if (demo === "sick") {
    Object.assign(state, {
      phase: "baby",
      scene: "heal",
      cursor: "heal",
      hatchTaps: 100,
      hatchedAt: Date.now() - (5 * 86400000),
      food: 12,
      sleep: 16,
      love: 35,
      vit: 18,
      poopCount: 4,
      sick: true,
      message: "Baby Odeng is sick and needs care.",
    });
  }
  if (params.get("menu")) {
    state.scene = params.get("menu");
    state.cursor = params.get("menu");
  }
  if (params.get("eggtaps")) {
    state.hatchTaps = Math.max(0, Math.min(99, Number(params.get("eggtaps")) || 0));
  }
  if (params.get("action")) {
    pendingQueryAction = params.get("action");
  }
}

function runQueryAction(action) {
  if (action === "treat") {
    if (state.phase !== "egg") {
      state.scene = "food";
      state.cursor = "food";
      renderAll();
      handleSceneChange();
      runFeed("treat");
    }
    return;
  }
  if (action === "drink") {
    if (state.phase !== "egg") {
      state.scene = "food";
      state.cursor = "food";
      renderAll();
      handleSceneChange();
      runFeed("drink");
    }
    return;
  }
  if (action === "wash") {
    if (state.phase !== "egg") {
      state.scene = "wash";
      state.cursor = "wash";
      renderAll();
      handleSceneChange();
      runWash();
    }
    return;
  }
  if (action === "heal") {
    if (state.phase !== "egg") {
      state.scene = "heal";
      state.cursor = "heal";
      renderAll();
      handleSceneChange();
      runHeal();
    }
    return;
  }
}

function clearActionTimers() {
  runtime.actionToken += 1;
  stopSpriteTimer();
}

function stopSpriteTimer() {
  clearInterval(runtime.spriteTimer);
  runtime.spriteTimer = null;
}

function startLoop(frameset, options = {}) {
  stopSpriteTimer();
  let frameIndex = 0;
  const tick = () => {
    showFrame(frameset[frameIndex % frameset.length], options);
    frameIndex += 1;
  };
  tick();
  runtime.spriteTimer = setInterval(tick, Math.max(80, 1000 / (options.fps || 6)));
}

function playOnce(frameset, options = {}) {
  stopSpriteTimer();
  return new Promise((resolve) => {
    let frameIndex = 0;
    const tick = () => {
      showFrame(frameset[frameIndex], options);
      frameIndex += 1;
      if (frameIndex >= frameset.length) {
        stopSpriteTimer();
        resolve();
      }
    };
    tick();
    runtime.spriteTimer = setInterval(tick, Math.max(80, 1000 / (options.fps || 6)));
  });
}

function playReverseOnce(frameset, options = {}) {
  return playOnce([...frameset].reverse(), options);
}

function holdFrame(frame, options = {}) {
  stopSpriteTimer();
  showFrame(frame, options);
}

function showFrame(src, options = {}) {
  const age = ageState();
  els.sprite.src = encodeURI(src);
  els.sprite.className = "pet-sprite";
  els.sprite.classList.add(isAdultStage(age) ? "adult-stage" : "baby-stage");
  if (options.front) els.sprite.classList.add("front");
  if (options.adultFront) els.sprite.classList.add("adult-front");
  if (options.sleep) els.sprite.classList.add("sleep");
  if (options.egg) els.sprite.classList.add("egg");
  if (options.play) els.sprite.classList.add("play");
  if (runtime.faceLeft && !options.front && !options.egg) els.sprite.classList.add("face-left");
  applySpriteLayout(options);
}

function applySpriteLayout(options = {}) {
  els.sprite.style.setProperty("--pet-left", `${runtime.petLeft}px`);
  els.sprite.style.left = `${runtime.petLeft}px`;
  els.sprite.style.setProperty("--pet-lift", `${spriteLift()}px`);
}

function finishNap(message = "Nap restored energy.") {
  if (!state.napping) return;
  const sleptMs = Math.max(0, Date.now() - (state.napStartedAt || Date.now()));
  const sleepGain = Math.max(10, Math.min(26, Math.round(sleptMs / 2000)));
  const vitGain = Math.max(3, Math.min(10, Math.round(sleptMs / 5000)));
  state.napping = false;
  state.napStartedAt = null;
  state.sleep = clamp(state.sleep + sleepGain);
  state.vit = clamp(state.vit + vitGain);
  clearEffects();
  state.message = message;
  runtime.busy = false;
}

async function performTrickAction(action, token = null, instant = false) {
  if (token !== null && (token !== runtime.actionToken || state.scene !== "tricks")) return;
  const age = ageState();
  clearEffects();
  if (action === "bark") {
    await playOnce(currentBarkFrames(age), { fps: 7 });
  } else if (action === "jump") {
    await playOnce(currentJumpFrames(age), { fps: 8 });
  } else if (action === "sit") {
    const sitFrames = currentSitFrames(age);
    await playOnce(sitFrames, { fps: 6 });
    holdFrame(sitFrames[sitFrames.length - 1], {});
    if (!instant) await pause(220);
  } else if (action === "sleep") {
    const sleepFrames = currentSleepFrames(age);
    await playOnce(sleepFrames, { fps: 4, sleep: true });
    holdFrame(sleepFrames[sleepFrames.length - 1], { sleep: true });
    renderEffects("zzz");
    await pause(instant ? 420 : 760);
  }
  if (token !== null && (token !== runtime.actionToken || state.scene !== "tricks")) return;
  renderScenePose();
}

function spriteLift() {
  if (state.scene !== "play" || !runtime.play) return 0;
  const now = performance.now();
  if (now >= runtime.play.jumpUntil || runtime.play.jumpStartedAt <= 0) return 0;
  const duration = Math.max(1, runtime.play.jumpUntil - runtime.play.jumpStartedAt);
  const progress = Math.max(0, Math.min(1, (now - runtime.play.jumpStartedAt) / duration));
  return Math.round(Math.sin(progress * Math.PI) * 56);
}

function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function clamp(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function randomPick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomTrickSequence(length = 3) {
  const pool = ["bark", "jump", "sit", "sleep"];
  const sequence = [];
  while (sequence.length < length) {
    const choice = randomPick(pool);
    if (sequence[sequence.length - 1] === choice) continue;
    sequence.push(choice);
  }
  return sequence;
}

function weightedPick(items) {
  const total = items.reduce((sum, item) => sum + Math.max(0, item.weight), 0);
  let roll = Math.random() * total;
  for (const item of items) {
    roll -= Math.max(0, item.weight);
    if (roll <= 0) return item.type;
  }
  return items[0]?.type || "walk";
}

window.render_game_to_text = function renderGameToText() {
  const age = ageState();
  return JSON.stringify({
    phase: visualStage(age),
    scene: state.scene,
    cursor: state.cursor,
    hatchTaps: state.hatchTaps,
    mood: moodLabel(),
    food: state.food,
    sleep: state.sleep,
    love: state.love,
    vit: state.vit,
    poopCount: state.poopCount,
    sick: isSick(),
    dogAge: age.dogAge,
    humanEq: age.humanEq,
    stage: age.stage,
    play: runtime.play ? {
      score: runtime.play.score,
      lives: runtime.play.lives,
      level: runtime.play.level,
      entities: runtime.play.entities.length,
      visibleEntities: runtime.play.entities
        .filter((entity) => !entity.dead)
        .map((entity) => ({
          type: entity.type,
          x: Math.round(entity.x),
          bottom: entity.bottom,
          size: entity.size,
        })),
      over: runtime.play.over,
    } : null,
    trickSequence: state.trickSequence,
    trickProgress: state.trickProgress,
    trickShowing: state.trickShowing,
    trickLevel: state.trickSequence.length - 2,
    deckActions: actionableDeckItems().map((item) => item.action),
    petLeft: runtime.petLeft,
    faceLeft: runtime.faceLeft,
    sprite: els.sprite.getAttribute("src"),
    spriteClass: els.sprite.className,
    message: state.message,
  });
};

window.advanceTime = function advanceTime(ms) {
  state.lastUpdatedAt -= ms;
  tickSimulation();
  renderAll();
};
