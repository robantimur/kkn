// AR Video Player Configuration
const AR_CONFIG = {
  // Video settings
  video: {
    src: "gigi.mp4",
    width: 4,
    height: 2.25,
    autoplay: true,
    loop: true,
    muted: true,
  },

  // Marker settings
  marker: {
    pattern: "pattern-custom.patt",
    smoothing: {
      enabled: true,
      count: 10,
      tolerance: 0.01,
      threshold: 5,
    },
  },

  // Animation settings
  animation: {
    duration: 800,
    easing: "easeInOutQuad",
    positions: {
      show: { x: 0, y: 0, z: 0 },
      hide: { x: 0, y: 1, z: 0 },
    },
  },

  // Performance settings
  performance: {
    monitorFPS: true,
    lowFPSThreshold: 30,
    enableLogging: true,
  },

  // UI settings
  ui: {
    showLoadingIndicator: true,
    showErrorMessages: true,
    showStatusPanel: true,
    hideUIAfter: 5000, // milliseconds
  },
};

// Export for use in main script
if (typeof module !== "undefined" && module.exports) {
  module.exports = AR_CONFIG;
}
