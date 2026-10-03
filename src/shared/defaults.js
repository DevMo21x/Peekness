/**
 * Peek — setting defaults, the one copy.
 *
 * A classic script rather than a module, because content scripts can't import:
 * the manifest loads it ahead of peek-host.js, the options page with a
 * <script> tag, and the module service worker with a side-effect import. Each
 * reads it back off globalThis.
 */
globalThis.__PEEK__ = globalThis.__PEEK__ || {};

globalThis.__PEEK__.DEFAULTS = {
  enabled: true,
  onPinnedTabs: true, // Arc's canonical trigger
  everyLink: false, // a plain click peeks on every tab, pinned or not
  modifier: "shift", // 'shift' | 'alt' | 'none' — peek any link
  peekNewTabLinks: true, // target=_blank / window.open from eligible tabs
  prefetch: true, // warm the document on pointerdown
  allowlist: [], // extra hosts treated like a pinned tab
  blocklist: [], // hosts that never peek automatically, from either end
  holdToPeek: true, // press and hold a link to peek it
  holdDelay: 450, // ms of stillness before a press counts as a hold
  reducedEffects: false, // drop backdrop blur on weak GPUs
  dismissOnSwipe: true,
  swipeOpposite: "promote", // 'promote' | 'off' — the gesture reversed
  swipeDirection: "right", // 'right' | 'left' — which way you swipe, and go
  naturalScrolling: true, // does a rightward swipe report a negative deltaX?
  swipeSensitivity: 1, // 0.5 deliberate … 2 twitchy
  splitMode: "sidePanel", // 'sidePanel' | 'window'
};
