const RULES = {
  version: 1,
  needBounds: { min: 0, max: 100 },
  decayPerHour: { hunger: -2.8, sleep: -2.2, love: -0.9, poop: 2.4 },
  actions: {
    pet: { love: 14, hunger: -1 },
    nap: { sleep: 26, love: 2 },
    feed: { hunger: 34, love: 5, poop: 8 },
    wash: { poop: -38, love: 4 }
  },
  thresholds: {
    needy: { hunger: 50, sleep: 45, love: 45, poop: 55 },
    critical: { hunger: 18, sleep: 18, love: 20, poop: 82 }
  },
  rescue: { criticalWindowHours: 12 },
  timing: { uiTickMs: 1500, poopCycleHours: 2.4 }
};

const SEQUENCES = {
  home: {
    walk: ["merged-frame-0.png", "merged-frame-1.png", "merged-frame-2.png", "merged-frame-3.png", "merged-frame-4.png", "merged-frame-5.png", "merged-frame-6.png"],
    sit: ["sitting-frame-0.png", "sitting-frame-1.png", "sitting-frame-2.png", "sitting-frame-3.png", "sitting-frame-4.png", "sitting-frame-5.png"],
    sitWag: ["sitting-wag-0.png", "sitting-wag-1.png", "sitting-wag-2.png", "sitting-wag-3.png", "sitting-wag-4.png"],
    sleep: ["odeng-sleeping_0001.png", "odeng-sleeping_0002.png", "odeng-sleeping_0003.png", "odeng-sleeping_0004.png"],
    bark: ["barking_0001.png", "barking_0002.png", "barking_0003.png", "barking_0004.png", "barking_0005.png"],
    jump: ["jump_0001.png", "jump_0002.png", "jump_0003.png", "jump_0004.png"],
    poop: ["pooping_0001.png", "pooping_0002.png", "pooping_0003.png", "pooping_0004.png", "pooping_0005.png"],
    petting: ["sidesitting-petting-sequence_0001.png", "sidesitting-petting-sequence_0002.png", "sidesitting-petting-sequence_0003.png", "sidesitting-petting-sequence_0004.png", "sidesitting-petting-sequence_0005.png"],
    sad: ["sitting-sad-sequence_0001.png", "sitting-sad-sequence_0002.png", "sitting-sad-sequence_0003.png", "sitting-sad-sequence_0004.png", "sitting-sad-sequence_0005.png"]
  },
  care: {
    seated: ["sitting forward_0001.png", "sitting forward_0002.png", "sitting forward_0003.png", "sitting forward_0004.png"],
    eat: ["chewing_sequence_0001.png", "chewing_sequence_0002.png", "chewing_sequence_0003.png", "chewing_sequence_0004.png"],
    eatHappy: ["chewing_happy_sequence_0001.png", "chewing_happy_sequence_0002.png", "chewing_happy_sequence_0003.png", "chewing_happy_sequence_0004.png"],
    wash: ["shower_sequence_0001.png", "shower_sequence_0002.png", "shower_sequence_0003.png", "shower_sequence_0004.png"],
    washHappy: ["shower_happy_0001.png", "shower_happy_0002.png", "shower_happy_0003.png", "shower_happy_0004.png", "shower_happy_0005.png"]
  },
  egg: {
    reset: ["odeng-egg_0001.png", "odeng-egg_0002.png", "odeng-egg_0003.png", "odeng-egg_0004.png", "odeng-egg_0005.png"]
  }
};

const STORAGE_KEY = "odeng-pet-web-v3";
const ASSET_ROOT = "./public/assets/animations/";
const TREAT_ROOT = "./public/assets/treats/";
const TREAT_FILES = Array.from({ length: 15 }, (_, index) => `dogtreats_${String(index + 1).padStart(4, "0")}.png`);
const BACKGROUNDS = ["meadow", "yard"];
const IMAGE_FRAME_SIZE = 128;
const FRAME_BOUNDS = {
  "merged-frame-0.png": { left: 42, right: 84, bottom: 78, layout: "side" },
  "merged-frame-1.png": { left: 43, right: 85, bottom: 78, layout: "side" },
  "merged-frame-2.png": { left: 42, right: 84, bottom: 77, layout: "side" },
  "merged-frame-3.png": { left: 42, right: 84, bottom: 77, layout: "side" },
  "merged-frame-4.png": { left: 43, right: 85, bottom: 77, layout: "side" },
  "merged-frame-5.png": { left: 42, right: 84, bottom: 77, layout: "side" },
  "merged-frame-6.png": { left: 43, right: 85, bottom: 77, layout: "side" },
  "sitting-frame-0.png": { left: 43, right: 85, bottom: 77, layout: "side" },
  "sitting-frame-1.png": { left: 42, right: 85, bottom: 77, layout: "side" },
  "sitting-frame-2.png": { left: 45, right: 84, bottom: 77, layout: "side" },
  "sitting-frame-3.png": { left: 43, right: 85, bottom: 77, layout: "side" },
  "sitting-frame-4.png": { left: 43, right: 85, bottom: 77, layout: "side" },
  "sitting-frame-5.png": { left: 45, right: 85, bottom: 77, layout: "side" },
  "sitting-wag-0.png": { left: 45, right: 82, bottom: 79, layout: "side" },
  "sitting-wag-1.png": { left: 45, right: 89, bottom: 77, layout: "side" },
  "sitting-wag-2.png": { left: 45, right: 84, bottom: 77, layout: "side" },
  "sitting-wag-3.png": { left: 45, right: 91, bottom: 77, layout: "side" },
  "sitting-wag-4.png": { left: 45, right: 85, bottom: 77, layout: "side" },
  "odeng-sleeping_0001.png": { left: 45, right: 84, bottom: 77, layout: "side" },
  "odeng-sleeping_0002.png": { left: 45, right: 85, bottom: 78, layout: "side" },
  "odeng-sleeping_0003.png": { left: 41, right: 96, bottom: 78, layout: "side" },
  "odeng-sleeping_0004.png": { left: 32, right: 94, bottom: 77, layout: "side" },
  "barking_0001.png": { left: 45, right: 84, bottom: 77, layout: "side" },
  "barking_0002.png": { left: 43, right: 85, bottom: 77, layout: "side" },
  "barking_0003.png": { left: 39, right: 86, bottom: 78, layout: "side" },
  "barking_0004.png": { left: 39, right: 86, bottom: 78, layout: "side" },
  "barking_0005.png": { left: 39, right: 89, bottom: 77, layout: "side" },
  "jump_0001.png": { left: 43, right: 85, bottom: 77, layout: "side" },
  "jump_0002.png": { left: 43, right: 87, bottom: 77, layout: "side" },
  "jump_0003.png": { left: 43, right: 86, bottom: 76, layout: "side" },
  "jump_0004.png": { left: 43, right: 87, bottom: 80, layout: "side" },
  "pooping_0001.png": { left: 43, right: 85, bottom: 77, layout: "side" },
  "pooping_0002.png": { left: 43, right: 89, bottom: 77, layout: "side" },
  "pooping_0003.png": { left: 43, right: 86, bottom: 77, layout: "side" },
  "pooping_0004.png": { left: 43, right: 87, bottom: 77, layout: "side" },
  "pooping_0005.png": { left: 43, right: 89, bottom: 77, layout: "side" },
  "sidesitting-petting-sequence_0001.png": { left: 45, right: 91, bottom: 77, layout: "side" },
  "sidesitting-petting-sequence_0002.png": { left: 40, right: 89, bottom: 77, layout: "side" },
  "sidesitting-petting-sequence_0003.png": { left: 44, right: 91, bottom: 77, layout: "side" },
  "sidesitting-petting-sequence_0004.png": { left: 44, right: 92, bottom: 77, layout: "side" },
  "sidesitting-petting-sequence_0005.png": { left: 45, right: 91, bottom: 77, layout: "side" },
  "sitting-sad-sequence_0001.png": { left: 45, right: 91, bottom: 77, layout: "side" },
  "sitting-sad-sequence_0002.png": { left: 44, right: 88, bottom: 77, layout: "side" },
  "sitting-sad-sequence_0003.png": { left: 43, right: 88, bottom: 77, layout: "side" },
  "sitting-sad-sequence_0004.png": { left: 41, right: 88, bottom: 77, layout: "side" },
  "sitting-sad-sequence_0005.png": { left: 41, right: 88, bottom: 77, layout: "side" },
  "sitting forward_0001.png": { left: 42, right: 84, bottom: 76, layout: "front" },
  "sitting forward_0002.png": { left: 44, right: 84, bottom: 76, layout: "front" },
  "sitting forward_0003.png": { left: 48, right: 79, bottom: 79, layout: "front" },
  "sitting forward_0004.png": { left: 48, right: 83, bottom: 79, layout: "front" }
};
const FRAME_REFERENCE = {
  side: { left: 43, right: 85, bottom: 77 },
  front: { left: 45, right: 83, bottom: 79 },
  egg: { left: 64, right: 64, bottom: 96 }
};

const els = {
  sceneTitle: document.getElementById("scene-title"),
  moodBadge: document.getElementById("mood-badge"),
  bgButton: document.getElementById("bg-button"),
  sprite: document.getElementById("pet-sprite"),
  spriteContainer: document.getElementById("sprite-container"),
  petStage: document.getElementById("pet-stage"),
  groundBand: document.getElementById("ground-band"),
  careBadge: document.getElementById("care-badge"),
  feedRain: document.getElementById("feed-rain"),
  washWater: document.getElementById("wash-water"),
  cleanSweep: document.getElementById("clean-sweep"),
  sleepZzz: document.getElementById("sleep-zzz"),
  poopPiles: document.getElementById("poop-piles"),
  homeActions: document.getElementById("home-actions"),
  feedActions: document.getElementById("feed-actions"),
  washActions: document.getElementById("wash-actions"),
  eggActions: document.getElementById("egg-actions"),
  petButton: document.getElementById("pet-button"),
  napButton: document.getElementById("nap-button"),
  feedButton: document.getElementById("feed-button"),
  washButton: document.getElementById("wash-button"),
  serveButton: document.getElementById("serve-button"),
  washStartButton: document.getElementById("wash-start-button"),
  backFromFeed: document.getElementById("back-from-feed"),
  backFromWash: document.getElementById("back-from-wash"),
  screenBezel: document.querySelector(".screen-bezel"),
  meters: {
    hunger: document.getElementById("meter-hunger"),
    sleep: document.getElementById("meter-sleep"),
    love: document.getElementById("meter-love"),
    health: document.getElementById("meter-health")
  }
};

const clamp = (value) => Math.max(RULES.needBounds.min, Math.min(RULES.needBounds.max, value));

function createDefaultState() {
  const now = Date.now();
  return {
    version: 2,
    scene: "home",
    form: "adult",
    backgroundTheme: "meadow",
    poopCount: 0,
    eggTapCount: 0,
    forcedMoodUntil: 0,
    needs: { hunger: 86, sleep: 80, love: 82, poop: 12, health: 96 },
    poopPiles: [],
    lastPoopAt: now,
    stageX: 0,
    nappingUntil: 0,
    direction: "right",
    lastUpdatedAt: now,
    rescueStartedAt: null,
    lastInteractionAt: now
  };
}

let state = loadState();
let frameTimer = null;
let ambientLoopId = 0;
let treatSpawner = null;
let isBusy = false;
let lastBehaviorType = "walk";
let hasBootedHomeLoop = false;
let shouldCenterHomeOnNextBoot = true;
let renderedStageX = 0;
let pendingBootWalk = true;
let homePosture = "sit";
let barkChainCount = 0;
let currentFrameName = SEQUENCES.home.sit[SEQUENCES.home.sit.length - 1];
let currentFrameOffsetX = 0;
let currentFrameOffsetY = 0;

state.stageX = 0;
state.direction = "right";
state.lastInteractionAt = Date.now();
state.nappingUntil = 0;
renderedStageX = 0;
saveState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createDefaultState();
    const parsed = JSON.parse(raw);
    return {
      ...createDefaultState(),
      ...parsed,
      needs: { ...createDefaultState().needs, ...(parsed.needs || {}) }
    };
  } catch {
    return createDefaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function markInteraction({ wake = true } = {}) {
  state.lastInteractionAt = Date.now();
  if (wake) {
    state.nappingUntil = 0;
    els.petStage.classList.remove("sleeping");
    els.sleepZzz.classList.add("hidden");
  }
}

function asset(fileName) {
  return `${ASSET_ROOT}${encodeURIComponent(fileName)}`;
}

function treatAsset(fileName) {
  return `${TREAT_ROOT}${encodeURIComponent(fileName)}`;
}

function updateNeedsFromElapsed() {
  const now = Date.now();
  const elapsedHours = Math.max(0, (now - state.lastUpdatedAt) / 36e5);
  if (!elapsedHours) return;

  state.needs.hunger = clamp(state.needs.hunger + RULES.decayPerHour.hunger * elapsedHours);
  state.needs.sleep = clamp(state.needs.sleep + RULES.decayPerHour.sleep * elapsedHours);
  state.needs.love = clamp(state.needs.love + RULES.decayPerHour.love * elapsedHours);
  state.needs.poop = clamp(state.needs.poop + RULES.decayPerHour.poop * elapsedHours);
  const pilePenalty = (state.poopPiles?.length || 0) >= 4 ? elapsedHours * ((state.poopPiles.length || 0) >= 8 ? 3.2 : 1.2) : 0;
  const neglectPenalty = isCritical() ? elapsedHours * 1.5 : 0;
  state.needs.health = clamp(state.needs.health - pilePenalty - neglectPenalty);
  if (!state.lastPoopAt) {
    state.lastPoopAt = now;
  }
  const poopCycleMs = RULES.timing.poopCycleHours * 36e5;
  const duePoops = Math.floor(Math.max(0, now - state.lastPoopAt) / poopCycleMs);
  if (duePoops > 0 && state.form !== "egg") {
    for (let i = 0; i < duePoops; i += 1) {
      state.poopCount = (state.poopCount || 0) + 1;
      state.needs.poop = clamp(state.needs.poop + 10);
      state.poopPiles = [...(state.poopPiles || []), {
        x: 10 + Math.random() * 74,
        scale: 0.82 + Math.random() * 0.48
      }].slice(-12);
    }
    state.lastPoopAt += duePoops * poopCycleMs;
  }
  state.lastUpdatedAt = now;

  const critical = isCritical();
  if (critical && !state.rescueStartedAt) {
    state.rescueStartedAt = now;
  } else if (!critical) {
    state.rescueStartedAt = null;
  }

  if (state.rescueStartedAt) {
    const rescueHours = (now - state.rescueStartedAt) / 36e5;
    if (rescueHours >= RULES.rescue.criticalWindowHours) {
      state.form = "egg";
      state.scene = "egg";
    }
  }
}

function isCritical() {
  return (
    state.needs.hunger <= RULES.thresholds.critical.hunger ||
    state.needs.sleep <= RULES.thresholds.critical.sleep ||
    state.needs.love <= RULES.thresholds.critical.love ||
    state.needs.poop >= RULES.thresholds.critical.poop ||
    state.needs.health <= 24 ||
    (state.poopPiles?.length || 0) >= 8
  );
}

function isNeedy() {
  return (
    state.needs.hunger <= RULES.thresholds.needy.hunger ||
    state.needs.sleep <= RULES.thresholds.needy.sleep ||
    state.needs.love <= RULES.thresholds.needy.love ||
    state.needs.poop >= RULES.thresholds.needy.poop ||
    (state.poopPiles?.length || 0) >= 4 ||
    state.needs.health <= 56
  );
}

function applyAction(action) {
  if (action === "feed" && state.needs.hunger >= 90) {
    state.needs.health = clamp(state.needs.health - 2);
    state.needs.love = clamp(state.needs.love - 4);
    state.forcedMoodUntil = Date.now() + 6000;
    saveState();
    return false;
  }

  if (action === "wash" && state.needs.poop <= 12 && (state.poopPiles?.length || 0) === 0) {
    state.needs.health = clamp(state.needs.health - 2);
    state.needs.love = clamp(state.needs.love - 3);
    state.forcedMoodUntil = Date.now() + 6000;
    saveState();
    return false;
  }

  const deltas = RULES.actions[action];
  Object.entries(deltas).forEach(([key, value]) => {
    state.needs[key] = clamp(state.needs[key] + value);
  });
  if (action === "wash") {
    state.poopPiles = [];
    state.needs.poop = 8;
    state.needs.health = clamp(state.needs.health + 6);
  }
  state.lastInteractionAt = Date.now();
  if (!isCritical()) {
    state.rescueStartedAt = null;
  }
  saveState();
  return true;
}

function currentMood() {
  if (state.form === "egg") return "egg";
  if (state.forcedMoodUntil && Date.now() < state.forcedMoodUntil) return "upset";
  if (isCritical()) return "critical";
  if (state.needs.sleep <= 32) return "sleepy";
  if (state.needs.hunger <= 32) return "hungry";
  if (state.needs.poop >= 68 || (state.poopPiles?.length || 0) >= 4) return "dirty";
  if (state.needs.love <= 32) return "lonely";
  if (isNeedy()) return "needy";
  return "calm";
}

function moodLabel(mood) {
  switch (mood) {
    case "critical": return "SOS";
    case "sleepy": return "SLEEPY";
    case "hungry": return "HUNGRY";
    case "dirty": return "DIRTY";
    case "lonely": return "LONELY";
    case "needy": return "NEEDY";
    case "upset": return "UPSET";
    case "egg": return "EGG";
    default: return "CALM";
  }
}

function setMeter(name, value, invert = false) {
  const percent = invert ? 100 - value : value;
  els.meters[name].style.width = `${percent}%`;
}

function syncStatsUi() {
  const mood = currentMood();
  els.moodBadge.textContent = moodLabel(mood);
  setMeter("hunger", state.needs.hunger);
  setMeter("sleep", state.needs.sleep);
  setMeter("love", state.needs.love);
  setMeter("health", state.needs.health);
  setGroundTheme();
  renderPoopPiles();
}

function setGroundTheme() {
  const theme = state.backgroundTheme || "meadow";
  els.groundBand.className = `ground-band ${theme}`;
  els.bgButton.title = theme === "meadow" ? "Meadow background" : "Yard background";
  els.washButton.textContent = (state.poopPiles?.length || 0) > 0 ? "Clean" : "Wash";
  els.washStartButton.textContent = (state.poopPiles?.length || 0) > 0 ? "Wash + Clean" : "Start Wash";
}

function setBackgroundTheme(theme) {
  state.backgroundTheme = theme;
  saveState();
  syncStatsUi();
}

function cycleBackgroundTheme() {
  const current = state.backgroundTheme || "meadow";
  const next = BACKGROUNDS[(BACKGROUNDS.indexOf(current) + 1) % BACKGROUNDS.length];
  setBackgroundTheme(next);
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function shouldMirrorForDirection(direction = state.direction) {
  return direction === "right";
}

function weightedChoice(options) {
  const total = options.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  for (const item of options) {
    roll -= item.weight;
    if (roll <= 0) return item;
  }
  return options[options.length - 1];
}

function stageBounds() {
  const bezelWidth = els.screenBezel?.clientWidth || 248;
  const frame = FRAME_BOUNDS[currentFrameName] || FRAME_REFERENCE.side;
  const layout = frame.layout || (els.petStage.dataset.layout === "front" ? "front" : "side");
  const renderedWidth = layout === "front" ? 258 : layout === "egg" ? 196 : 276;
  const scale = renderedWidth / IMAGE_FRAME_SIZE;
  const half = bezelWidth / 2;
  const padding = 8;
  const leftExtent = (IMAGE_FRAME_SIZE / 2 - frame.left) * scale;
  const rightExtent = (frame.right - IMAGE_FRAME_SIZE / 2) * scale;
  return {
    min: Math.ceil(-(half - padding - leftExtent)),
    max: Math.floor(half - padding - rightExtent)
  };
}

function clampSpriteWithinBezel(margin = 6) {
  if (!els.screenBezel || !els.sprite || !els.petStage) return;
  const bezelRect = els.screenBezel.getBoundingClientRect();
  const spriteRect = els.sprite.getBoundingClientRect();
  let correction = 0;
  if (spriteRect.left < bezelRect.left + margin) {
    correction = bezelRect.left + margin - spriteRect.left;
  } else if (spriteRect.right > bezelRect.right - margin) {
    correction = bezelRect.right - margin - spriteRect.right;
  }
  if (!correction) return;
  renderedStageX += correction;
  state.stageX = renderedStageX;
  els.petStage.style.transform = `translateX(calc(-50% + ${renderedStageX}px))`;
}

function setStagePosition(value, reason = "hold") {
  const bounds = stageBounds();
  const clamped = Math.max(bounds.min, Math.min(bounds.max, value));
  const next =
    reason === "walk" || reason === "boot"
      ? clamped
      : Math.abs(clamped - renderedStageX) <= 8
        ? clamped
        : renderedStageX;
  renderedStageX = next;
  state.stageX = next;
  els.petStage.style.transform = `translateX(calc(-50% + ${next}px))`;
  clampSpriteWithinBezel();
}

function applyStagePosition(reason = "hold") {
  setStagePosition(typeof state.stageX === "number" ? state.stageX : renderedStageX, reason);
}

function anchorCurrentSpot() {
  applyStagePosition("hold");
  saveState();
}

function clearMovementClasses() {
  els.petStage.classList.remove("shake");
}

function clearEffects() {
  clearInterval(treatSpawner);
  treatSpawner = null;
  els.feedRain.innerHTML = "";
  els.feedRain.classList.add("hidden");
  els.washWater.classList.add("hidden");
  els.cleanSweep.classList.add("hidden");
  els.cleanSweep.classList.remove("active");
  els.sleepZzz.classList.add("hidden");
  els.petStage.classList.remove("sleeping");
}

function setPoseAlignment(pose = "walk") {
  const map = {
    walk: ["50%", "50%"],
    sit: ["50%", "50%"],
    wag: ["50%", "50%"],
    sleep: ["44%", "58%"],
    bark: ["50%", "50%"],
    jump: ["50%", "50%"],
    petting: ["50%", "50%"],
    sad: ["50%", "50%"],
    poop: ["50%", "50%"],
    front: ["50%", "55%"],
    egg: ["50%", "55%"]
  };
  const [x, y] = map[pose] || map.walk;
  els.sprite.style.setProperty("--pose-x", x);
  els.sprite.style.setProperty("--pose-y", y);
}

function applyFrameAlignment(fileName, layout = "side", faceLeft = false) {
  currentFrameName = fileName;
  const frame = FRAME_BOUNDS[fileName] || FRAME_REFERENCE[layout] || FRAME_REFERENCE.side;
  const reference = FRAME_REFERENCE[frame.layout || layout] || FRAME_REFERENCE.side;
  const renderedWidth = (frame.layout || layout) === "front" ? 258 : (frame.layout || layout) === "egg" ? 196 : 276;
  const scale = renderedWidth / IMAGE_FRAME_SIZE;
  const xOffset = ((reference.left - frame.left) * scale) * (faceLeft ? -1 : 1);
  const yOffset = (reference.bottom - frame.bottom) * scale;
  currentFrameOffsetX = xOffset;
  currentFrameOffsetY = yOffset;
  els.sprite.style.setProperty("--frame-offset-x", `${xOffset.toFixed(2)}px`);
  els.sprite.style.setProperty("--frame-offset-y", `${yOffset.toFixed(2)}px`);
}

function renderPoopPiles() {
  els.poopPiles.innerHTML = "";
  for (const pile of state.poopPiles || []) {
    const node = document.createElement("div");
    node.className = "poop-pile";
    node.style.left = `${pile.x}%`;
    node.style.transform = `scale(${pile.scale || 1})`;
    els.poopPiles.appendChild(node);
  }
}

function stopCurrentAnimation() {
  clearInterval(frameTimer);
  frameTimer = null;
}

function playSequence(frames, options = {}) {
  stopCurrentAnimation();
  const { loop = true, fps = 5, faceLeft = false, onComplete, layout = null } = options;
  let index = 0;
  const interval = 1000 / fps;

  const renderFrame = () => {
    if (layout) {
      els.petStage.dataset.layout = layout;
    }
    const fileName = frames[index];
    applyFrameAlignment(fileName, layout || "side", faceLeft);
    els.sprite.src = asset(frames[index]);
    els.sprite.classList.toggle("face-left", faceLeft);
  };

  renderFrame();

  frameTimer = window.setInterval(() => {
    index += 1;
    if (index >= frames.length) {
      if (!loop) {
        stopCurrentAnimation();
        if (onComplete) onComplete();
        return;
      }
      index = 0;
    }
    renderFrame();
  }, interval);
}

function holdPose(fileName, options = {}) {
  stopCurrentAnimation();
  const { faceLeft = false, layout = "front", pose = layout === "front" ? "front" : "walk" } = options;
  els.petStage.dataset.layout = layout;
  setPoseAlignment(pose);
  els.sprite.classList.toggle("face-left", layout === "front" ? false : faceLeft);
  applyFrameAlignment(fileName, layout, layout === "front" ? false : faceLeft);
  els.sprite.src = asset(fileName);
}

function holdSittingPose() {
  holdPose(SEQUENCES.home.sit[SEQUENCES.home.sit.length - 1], {
    layout: "side",
    faceLeft: shouldMirrorForDirection(),
    pose: "sit"
  });
}

function holdStandingPose() {
  holdPose(SEQUENCES.home.sit[0], {
    layout: "side",
    faceLeft: shouldMirrorForDirection(),
    pose: "walk"
  });
}

function holdFrontSittingPose() {
  holdPose(SEQUENCES.care.seated[SEQUENCES.care.seated.length - 1], {
    layout: "front",
    pose: "front"
  });
}

function showSleepingPose() {
  clearEffects();
  const preservedX = renderedStageX;
  const priorSpriteRect = els.sprite.getBoundingClientRect();
  holdPose(SEQUENCES.home.sleep[SEQUENCES.home.sleep.length - 1], {
    layout: "side",
    faceLeft: shouldMirrorForDirection(),
    pose: "sleep"
  });
  renderedStageX = preservedX;
  state.stageX = preservedX;
  els.petStage.style.transform = `translateX(calc(-50% + ${preservedX}px))`;
  els.petStage.classList.add("sleeping");
  els.sleepZzz.classList.remove("hidden");
  window.requestAnimationFrame(() => {
    const bezelRect = els.screenBezel.getBoundingClientRect();
    const spriteRect = els.sprite.getBoundingClientRect();
    const priorCenter = (priorSpriteRect.left + priorSpriteRect.right) / 2;
    const nextCenter = (spriteRect.left + spriteRect.right) / 2;
    let correction = priorCenter - nextCenter;
    let correctedLeft = spriteRect.left + correction;
    let correctedRight = spriteRect.right + correction;
    if (correctedLeft < bezelRect.left + 6) {
      correction += (bezelRect.left + 6) - correctedLeft;
      correctedLeft = bezelRect.left + 6;
      correctedRight = spriteRect.right + correction;
    }
    if (correctedRight > bezelRect.right - 6) {
      correction += (bezelRect.right - 6) - correctedRight;
    }
    if (correction) {
      els.sprite.style.setProperty("--frame-offset-x", `${(currentFrameOffsetX + correction).toFixed(2)}px`);
    }
  });
}

function playOnce(frames, options = {}) {
  return new Promise((resolve) => {
    playSequence(frames, {
      ...options,
      loop: false,
      onComplete: resolve
    });
  });
}

function renderHomeBehavior({ frames, fps = 5, layout = "side", bob = false, pacing = false, loop = true, facing = null }) {
  els.petStage.classList.remove("sleeping");
  els.sleepZzz.classList.add("hidden");
  els.petStage.dataset.layout = layout;
  els.spriteContainer.classList.toggle("bob", bob);
  clearMovementClasses();
  anchorCurrentSpot();

  const faceLeft = facing == null ? shouldMirrorForDirection() : facing === "right";
  setPoseAlignment(
    fps === 7 && frames === SEQUENCES.home.walk ? "walk" :
    frames === SEQUENCES.home.sit ? "sit" :
    frames === SEQUENCES.home.sitWag ? "wag" :
    frames === SEQUENCES.home.sleep ? "sleep" :
    frames === SEQUENCES.home.bark ? "bark" :
    frames === SEQUENCES.home.jump ? "jump" :
    frames === SEQUENCES.home.petting ? "petting" :
    frames === SEQUENCES.home.sad ? "sad" :
    frames === SEQUENCES.home.poop ? "poop" :
    layout === "front" ? "front" : "walk"
  );
  playSequence(frames, { fps, loop, faceLeft: layout === "front" ? false : faceLeft });
}

function renderWalkFrame(frameIndex) {
  els.petStage.classList.remove("sleeping");
  els.sleepZzz.classList.add("hidden");
  els.petStage.dataset.layout = "side";
  els.spriteContainer.classList.add("bob");
  clearMovementClasses();
  setPoseAlignment("walk");
  els.sprite.classList.toggle("face-left", shouldMirrorForDirection());
  const fileName = SEQUENCES.home.walk[frameIndex % SEQUENCES.home.walk.length];
  applyFrameAlignment(fileName, "side", shouldMirrorForDirection());
  els.sprite.src = asset(fileName);
}

function isInactiveSleepMode() {
  return Date.now() - (state.lastInteractionAt || 0) >= 10 * 60 * 1000;
}

function isNapWindow() {
  return (state.nappingUntil || 0) > Date.now();
}

async function walkWithSteps(distancePx) {
  const bounds = stageBounds();
  if ((state.direction === "left" && (state.stageX || 0) <= bounds.min + 4) ||
      (state.direction === "right" && (state.stageX || 0) >= bounds.max - 4)) {
    await turnInPlace();
    return;
  }
  stopCurrentAnimation();
  const animationFps = 7;
  const frameDuration = 1000 / animationFps;
  const speedPerMs = 4 / frameDuration;
  const directionSign = state.direction === "left" ? -1 : 1;
  const start = renderedStageX || 0;
  const target = Math.max(bounds.min, Math.min(bounds.max, start + directionSign * distancePx));
  const startedAt = performance.now();
  let lastAt = startedAt;
  let frameIndex = 0;
  renderWalkFrame(frameIndex);
  while (true) {
    const now = performance.now();
    const elapsed = Math.max(0, now - lastAt);
    lastAt = now;
    const before = renderedStageX || 0;
    const remaining = target - before;
    if ((directionSign > 0 && remaining <= 0) || (directionSign < 0 && remaining >= 0)) {
      break;
    }
    const moveBy = Math.max(1, elapsed * speedPerMs) * directionSign;
    const next =
      Math.abs(remaining) <= Math.abs(moveBy)
        ? target
        : before + moveBy;
    frameIndex = Math.floor((now - startedAt) / frameDuration);
    setStagePosition(next, "walk");
    renderWalkFrame(frameIndex);
    saveState();
    const after = renderedStageX || 0;
    if (Math.abs(after - before) < 0.5) {
      break;
    }
    if (next === target) {
      break;
    }
    await sleep(16);
  }
  els.spriteContainer.classList.remove("bob");
  holdStandingPose();
  anchorCurrentSpot();
}

async function leapInPlace() {
  anchorCurrentSpot();
  renderHomeBehavior({ frames: SEQUENCES.home.jump, fps: 7, loop: false });
  await sleep(720);
  anchorCurrentSpot();
}

function nearLeftEdge() {
  return (state.stageX || 0) <= stageBounds().min + 10;
}

function nearRightEdge() {
  return (state.stageX || 0) >= stageBounds().max - 10;
}

async function turnInPlace() {
  if (homePosture === "walk") {
    await enterSitState();
  }
  state.direction = state.direction === "left" ? "right" : "left";
  anchorCurrentSpot();
  if (homePosture === "sit") {
    holdSittingPose();
  }
  homePosture = "sit";
  lastBehaviorType = "sit";
  await sleep(220);
  anchorCurrentSpot();
}

async function transitionFromSitIfNeeded() {
  if (!["sit", "wag", "nap", "sad", "poop", "petting", "front"].includes(lastBehaviorType) && homePosture !== "sit" && homePosture !== "front") {
    return;
  }
  if (lastBehaviorType === "nap") {
    await playOnce([...SEQUENCES.home.sleep].reverse(), {
      fps: 5,
      faceLeft: shouldMirrorForDirection()
    });
    return;
  }
  if (homePosture === "front") {
    holdSittingPose();
    await sleep(120);
  }
  await playOnce([...SEQUENCES.home.sit].reverse(), {
    fps: 6,
    faceLeft: shouldMirrorForDirection()
  });
}

async function enterSitState() {
  await playOnce(SEQUENCES.home.sit, {
    fps: 4,
    faceLeft: shouldMirrorForDirection()
  });
  holdSittingPose();
  homePosture = "sit";
  lastBehaviorType = "sit";
  barkChainCount = 0;
}

async function barkAtCurrentSpot() {
  if (homePosture === "front") {
    holdSittingPose();
    homePosture = "sit";
    await sleep(120);
  }
  renderHomeBehavior({ frames: SEQUENCES.home.bark, fps: 7, loop: false });
  lastBehaviorType = "bark";
  barkChainCount += 1;
  await sleep(760);
  anchorCurrentSpot();
}

async function leapFromCurrentSpot() {
  await leapInPlace();
  lastBehaviorType = "jump";
  barkChainCount = 0;
  if (homePosture === "sit" || homePosture === "front") {
    holdSittingPose();
    homePosture = "sit";
  }
}

async function holdFrontSitState() {
  await playOnce(SEQUENCES.care.seated, { fps: 5, layout: "front" });
  holdFrontSittingPose();
  homePosture = "front";
  lastBehaviorType = "front";
  barkChainCount = 0;
}

function showSceneUi() {
  const scene = state.scene;
  els.homeActions.classList.toggle("hidden", scene !== "home");
  els.feedActions.classList.toggle("hidden", scene !== "feed");
  els.washActions.classList.toggle("hidden", scene !== "wash");
  els.eggActions.classList.toggle("hidden", scene !== "egg");

  if (scene === "home") {
    els.sceneTitle.textContent = "Home Room";
    els.careBadge.classList.add("hidden");
  } else if (scene === "feed") {
    els.sceneTitle.textContent = "Feeding";
    els.careBadge.classList.remove("hidden");
    els.careBadge.textContent = "FEED";
  } else if (scene === "wash") {
    els.sceneTitle.textContent = "Washing";
    els.careBadge.classList.remove("hidden");
    els.careBadge.textContent = "WASH";
  } else {
    els.sceneTitle.textContent = "Egg Reset";
    els.careBadge.classList.remove("hidden");
    els.careBadge.textContent = `TAP ${state.eggTapCount || 0}/100`;
  }
}

function renderScene(scene = state.scene) {
  showSceneUi();
  syncStatsUi();
  clearEffects();

  if (scene === "home" && typeof state.stageX !== "number") {
    state.stageX = 0;
  }

  if (scene === "home") {
    startAmbientLoop();
  } else if (scene === "feed") {
    stopAmbientLoop();
    clearMovementClasses();
    els.spriteContainer.classList.remove("bob");
    els.sprite.classList.remove("face-left");
    holdPose(SEQUENCES.care.seated[SEQUENCES.care.seated.length - 1], { layout: "front" });
  } else if (scene === "wash") {
    stopAmbientLoop();
    clearMovementClasses();
    els.spriteContainer.classList.remove("bob");
    els.sprite.classList.remove("face-left");
    holdPose(SEQUENCES.care.seated[SEQUENCES.care.seated.length - 1], { layout: "front" });
  } else {
    stopAmbientLoop();
    els.petStage.dataset.layout = "egg";
    clearMovementClasses();
    els.spriteContainer.classList.remove("bob");
    els.sprite.classList.remove("face-left");
    playSequence(SEQUENCES.egg.reset, { fps: 4, loop: true });
  }
  applyStagePosition();
}

function stopAmbientLoop() {
  ambientLoopId += 1;
  clearMovementClasses();
  stopCurrentAnimation();
}

function loopStillValid(loopId) {
  return loopId === ambientLoopId && state.scene === "home" && state.form !== "egg" && !isBusy;
}

async function runAmbientLoop(loopId) {
  while (loopStillValid(loopId)) {
    syncStatsUi();
    const mood = currentMood();
    const sleepingByIdle = isInactiveSleepMode() || isNapWindow();

    if (!hasBootedHomeLoop) {
      hasBootedHomeLoop = true;
      if (shouldCenterHomeOnNextBoot || typeof state.stageX !== "number") {
        setStagePosition(0, "boot");
        state.direction = "right";
        shouldCenterHomeOnNextBoot = false;
      }
      holdSittingPose();
      homePosture = "sit";
      lastBehaviorType = "sit";
      barkChainCount = 0;
      anchorCurrentSpot();
      await sleep(1400);
      if (!loopStillValid(loopId)) return;
      continue;
    }

    if (pendingBootWalk) {
      pendingBootWalk = false;
      await transitionFromSitIfNeeded();
      if (!loopStillValid(loopId)) return;
      homePosture = "walk";
      await walkWithSteps(26);
      if (!loopStillValid(loopId)) return;
      lastBehaviorType = "walk";
      barkChainCount = 0;
      await sleep(260);
      if (!loopStillValid(loopId)) return;
      continue;
    }

    if (mood === "critical" || mood === "hungry" || mood === "dirty" || mood === "lonely" || mood === "upset") {
      renderHomeBehavior({ frames: SEQUENCES.home.sad, fps: 5, loop: false });
      homePosture = "sit";
      lastBehaviorType = "sad";
      await sleep(1800);
      if (!loopStillValid(loopId)) return;
      holdSittingPose();
      anchorCurrentSpot();
      continue;
    }

    if (sleepingByIdle || isNapWindow()) {
      showSleepingPose();
      homePosture = "sleep";
      lastBehaviorType = "nap";
      await sleep(3200 + Math.random() * 2200);
      if (!loopStillValid(loopId)) return;
      anchorCurrentSpot();
      continue;
    }

    if (homePosture === "walk") {
      const atFacingEdge = (state.direction === "left" && nearLeftEdge()) || (state.direction === "right" && nearRightEdge());
      if (atFacingEdge) {
        await turnInPlace();
        if (!loopStillValid(loopId)) return;
        lastBehaviorType = "turn";
        barkChainCount = 0;
        await sleep(180);
        if (!loopStillValid(loopId)) return;
        continue;
      }

      const options = [
        { type: "walk", weight: 40 },
        { type: "sit", weight: 30 },
        { type: "turn", weight: 8 },
        { type: "bark", weight: barkChainCount < 2 ? 5 : 0 },
        { type: "jump", weight: 7 }
      ];
      if (state.needs.poop >= 62) options.push({ type: "poop", weight: 3 });
      const behavior = weightedChoice(options.filter((item) => item.weight > 0));

      if (behavior.type === "walk") {
        await walkWithSteps(18 + Math.random() * 16);
        if (!loopStillValid(loopId)) return;
        lastBehaviorType = "walk";
        barkChainCount = 0;
        continue;
      }
      if (behavior.type === "sit") {
        await enterSitState();
        if (!loopStillValid(loopId)) return;
        await sleep(160);
        if (!loopStillValid(loopId)) return;
        continue;
      }
      if (behavior.type === "turn") {
        await turnInPlace();
        if (!loopStillValid(loopId)) return;
        lastBehaviorType = "turn";
        barkChainCount = 0;
        await sleep(180);
        if (!loopStillValid(loopId)) return;
        continue;
      }
      if (behavior.type === "bark") {
        await barkAtCurrentSpot();
        if (!loopStillValid(loopId)) return;
        await sleep(160);
        if (!loopStillValid(loopId)) return;
        continue;
      }
      if (behavior.type === "jump") {
        await leapFromCurrentSpot();
        if (!loopStillValid(loopId)) return;
        homePosture = "walk";
        await sleep(140);
        if (!loopStillValid(loopId)) return;
        continue;
      }
      if (behavior.type === "poop") {
        renderHomeBehavior({ frames: SEQUENCES.home.poop, fps: 6, loop: false });
        lastBehaviorType = "poop";
        homePosture = "sit";
        barkChainCount = 0;
        state.poopCount = (state.poopCount || 0) + 1;
        state.needs.poop = clamp(state.needs.poop + 12);
        state.lastPoopAt = Date.now();
        state.poopPiles = [...(state.poopPiles || []), {
          x: 10 + Math.random() * 74,
          scale: 0.85 + Math.random() * 0.5
        }].slice(-12);
        saveState();
        await sleep(1100);
        if (!loopStillValid(loopId)) return;
        holdSittingPose();
        anchorCurrentSpot();
        continue;
      }
    }

    if (homePosture === "sit") {
      const options = [
        { type: "walk", weight: 40 },
        { type: "wag", weight: 30 },
        { type: "bark", weight: barkChainCount < 2 ? 8 : 0 },
        { type: "front", weight: 12 },
        { type: "jump", weight: 10 }
      ];
      const behavior = weightedChoice(options.filter((item) => item.weight > 0));

      if (behavior.type === "walk") {
        await transitionFromSitIfNeeded();
        if (!loopStillValid(loopId)) return;
        homePosture = "walk";
        await walkWithSteps(18 + Math.random() * 16);
        if (!loopStillValid(loopId)) return;
        lastBehaviorType = "walk";
        barkChainCount = 0;
        continue;
      }
      if (behavior.type === "wag") {
        await playOnce([
          ...SEQUENCES.home.sitWag,
          SEQUENCES.home.sitWag[3],
          SEQUENCES.home.sitWag[4],
          SEQUENCES.home.sitWag[3],
          SEQUENCES.home.sitWag[4]
        ], { fps: 4, faceLeft: shouldMirrorForDirection() });
        lastBehaviorType = "wag";
        barkChainCount = 0;
        await sleep(220);
        if (!loopStillValid(loopId)) return;
        holdSittingPose();
        anchorCurrentSpot();
        continue;
      }
      if (behavior.type === "bark") {
        await barkAtCurrentSpot();
        if (!loopStillValid(loopId)) return;
        holdSittingPose();
        homePosture = "sit";
        await sleep(150);
        if (!loopStillValid(loopId)) return;
        continue;
      }
      if (behavior.type === "front") {
        await holdFrontSitState();
        if (!loopStillValid(loopId)) return;
        await sleep(520);
        if (!loopStillValid(loopId)) return;
        continue;
      }
      if (behavior.type === "jump") {
        await leapFromCurrentSpot();
        if (!loopStillValid(loopId)) return;
        await sleep(140);
        if (!loopStillValid(loopId)) return;
        continue;
      }
    }

    if (homePosture === "front") {
      await sleep(520);
      if (!loopStillValid(loopId)) return;
      holdSittingPose();
      homePosture = "sit";
      lastBehaviorType = "sit";
      anchorCurrentSpot();
      continue;
    }

    await sleep(180);
  }
}

function startAmbientLoop() {
  stopAmbientLoop();
  if (state.scene !== "home" || state.form === "egg" || isBusy) return;
  const loopId = ambientLoopId;
  runAmbientLoop(loopId);
}

function startTreatRain() {
  clearEffects();
  els.feedRain.classList.remove("hidden");
  const rainRect = els.feedRain.getBoundingClientRect();
  const groundRect = els.groundBand.getBoundingClientRect();
  const fallDistance = Math.max(330, Math.round(groundRect.bottom - rainRect.top - 26));
  const plans = Array.from({ length: 6 }, (_, i) => ({
    delay: i * 150,
    file: TREAT_FILES[Math.floor(Math.random() * TREAT_FILES.length)],
    size: 42 + Math.floor(Math.random() * 18),
    left: Math.random() * 84,
    duration: 1.45 + Math.random() * 0.55
  }));

  for (const plan of plans) {
    window.setTimeout(() => {
      const img = document.createElement("img");
      img.src = treatAsset(plan.file);
      img.style.left = `${plan.left}%`;
      img.style.width = `${plan.size}px`;
      img.style.height = `${plan.size}px`;
      img.style.setProperty("--fall-duration", `${plan.duration}s`);
      img.style.setProperty("--fall-distance", `${fallDistance}px`);
      els.feedRain.appendChild(img);
      window.setTimeout(() => img.remove(), plan.duration * 1000 + 700);
    }, plan.delay);
  }

  return Math.max(...plans.map((plan) => plan.delay + plan.duration * 1000 + 700));
}

function startWashEffect() {
  clearEffects();
  els.washWater.classList.remove("hidden");
}

function setCareBadgeMessage(message) {
  els.careBadge.classList.remove("hidden");
  els.careBadge.textContent = message;
}

function runCleanSweep() {
  els.cleanSweep.classList.remove("hidden");
  els.cleanSweep.classList.remove("active");
  void els.cleanSweep.offsetWidth;
  els.cleanSweep.classList.add("active");
  window.setTimeout(() => {
    els.cleanSweep.classList.remove("active");
    els.cleanSweep.classList.add("hidden");
  }, 950);
}

async function playCareFlow(kind) {
  if (isBusy || state.form === "egg") return;
  isBusy = true;
  stopAmbientLoop();
  state.scene = kind;
  renderScene(kind);

  if (kind === "feed") {
    const rainDuration = startTreatRain();
    const accepted = applyAction("feed");
    if (accepted) {
      playSequence(SEQUENCES.care.eat, { fps: 6, loop: true });
      await sleep(rainDuration + 500);
      stopCurrentAnimation();
      clearEffects();
      await playOnce(SEQUENCES.care.eatHappy, { fps: 6 });
      await sleep(420);
    } else {
      setCareBadgeMessage("FULL");
      await sleep(rainDuration);
      clearEffects();
    }
  } else {
    startWashEffect();
    await playOnce(SEQUENCES.care.wash, { fps: 6 });
    await playOnce(SEQUENCES.care.wash, { fps: 6 });
    await playOnce([
      SEQUENCES.care.wash[2],
      SEQUENCES.care.wash[3],
      SEQUENCES.care.wash[2],
      SEQUENCES.care.wash[3]
    ], { fps: 6 });
    const accepted = applyAction("wash");
    if (accepted) {
      clearEffects();
      runCleanSweep();
      await sleep(260);
      await playOnce(SEQUENCES.care.washHappy, { fps: 6 });
      await playOnce([
        SEQUENCES.care.washHappy[3],
        SEQUENCES.care.washHappy[4],
        SEQUENCES.care.washHappy[3],
        SEQUENCES.care.washHappy[4]
      ], { fps: 5 });
      await sleep(420);
    } else {
      setCareBadgeMessage("TOO CLEAN");
      await sleep(1100);
      clearEffects();
    }
  }

  isBusy = false;
  state.scene = "home";
  renderScene("home");
}

async function enterCareScene(kind) {
  if (isBusy || state.form === "egg") return;
  isBusy = true;
  stopAmbientLoop();
  clearEffects();
  markInteraction();

  if (state.scene === "home") {
    if (!["sit", "wag", "petting", "sad", "nap"].includes(lastBehaviorType)) {
      renderHomeBehavior({ frames: SEQUENCES.home.sit, fps: 5, loop: false });
      lastBehaviorType = "sit";
      await sleep(700);
    }
    await playOnce(SEQUENCES.care.seated, { fps: 5, layout: "front" });
  }

  state.scene = kind;
  hasBootedHomeLoop = false;
  pendingBootWalk = false;
  homePosture = "front";
  saveState();
  renderScene(kind);
  isBusy = false;
}

async function petOdeng() {
  if (isBusy || state.scene !== "home" || state.form === "egg") return;
  const priorPosture = homePosture;
  isBusy = true;
  stopAmbientLoop();
  clearEffects();
  markInteraction();
  applyAction("pet");
  if (priorPosture === "front") {
    holdSittingPose();
    homePosture = "sit";
    await sleep(120);
  }
  renderHomeBehavior({ frames: SEQUENCES.home.petting, fps: 7, loop: false });
  lastBehaviorType = "petting";
  await sleep(950);
  if (priorPosture === "front") {
    holdFrontSittingPose();
    homePosture = "front";
  } else if (priorPosture === "sit") {
    holdSittingPose();
    homePosture = "sit";
  } else {
    homePosture = "walk";
  }
  isBusy = false;
  renderScene("home");
}

async function napOdeng() {
  if (isBusy || state.scene !== "home" || state.form === "egg") return;
  isBusy = true;
  stopAmbientLoop();
  clearEffects();
  markInteraction({ wake: false });
  applyAction("nap");
  state.nappingUntil = Date.now() + 2.5 * 60 * 1000;
  anchorCurrentSpot();
  await playOnce(SEQUENCES.home.sleep, { fps: 3, faceLeft: shouldMirrorForDirection() });
  showSleepingPose();
  homePosture = "sleep";
  lastBehaviorType = "nap";
  await sleep(3200);
  isBusy = false;
  renderScene("home");
}

function hatchAgain() {
  stopAmbientLoop();
  state = createDefaultState();
  renderedStageX = 0;
  hasBootedHomeLoop = false;
  shouldCenterHomeOnNextBoot = true;
  pendingBootWalk = true;
  homePosture = "sit";
  barkChainCount = 0;
  renderScene("home");
}

els.petButton.addEventListener("click", petOdeng);
els.napButton.addEventListener("click", napOdeng);
els.feedButton.addEventListener("click", () => {
  if (isBusy || state.form === "egg") return;
  markInteraction();
  enterCareScene("feed");
});
els.washButton.addEventListener("click", () => {
  if (isBusy || state.form === "egg") return;
  markInteraction();
  enterCareScene("wash");
});
els.bgButton.addEventListener("click", cycleBackgroundTheme);
els.serveButton.addEventListener("click", () => { playCareFlow("feed"); });
els.washStartButton.addEventListener("click", () => { playCareFlow("wash"); });
els.backFromFeed.addEventListener("click", () => {
  markInteraction();
  state.scene = "home";
  hasBootedHomeLoop = false;
  pendingBootWalk = false;
  homePosture = "sit";
  saveState();
  renderScene("home");
});
els.backFromWash.addEventListener("click", () => {
  markInteraction();
  state.scene = "home";
  hasBootedHomeLoop = false;
  pendingBootWalk = false;
  homePosture = "sit";
  saveState();
  renderScene("home");
});
els.petStage.addEventListener("click", () => {
  if (state.scene !== "egg") return;
  state.eggTapCount = (state.eggTapCount || 0) + 1;
  if (state.eggTapCount >= 100) {
    hatchAgain();
    return;
  }
  showSceneUi();
  saveState();
});

window.setInterval(() => {
  if (isBusy) return;
  updateNeedsFromElapsed();
  syncStatsUi();
  saveState();
  if (state.form === "egg" && state.scene !== "egg") {
    state.scene = "egg";
    renderScene("egg");
  }
}, RULES.timing.uiTickMs);

renderScene(state.scene);
