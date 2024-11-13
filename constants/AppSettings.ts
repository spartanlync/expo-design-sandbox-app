// === GLOBALS - Specified from any .ts/tsx file

// ====== COMPONENT CONFIGURATION

// 21% margin horizontally or vertically, whichever is the most limiting dimentsion
export const APP_COMPONENT_BG_MARGIN_RATIO = 0.40;

// ====== TIRE CONDITIONS / STATUS

export const TIRE_ALERT_OK = 1;
export const TIRE_ALERT_AMBER = 2;
export const TIRE_ALERT_RED = 3;


// ====== Assign values to the global namespace (required by TypeScript)
global.APP_COMPONENT_BG_MARGIN_RATIO = APP_COMPONENT_BG_MARGIN_RATIO;

global.TIRE_ALERT_OK = TIRE_ALERT_OK;
global.TIRE_ALERT_AMBER = TIRE_ALERT_AMBER;
global.TIRE_ALERT_RED = TIRE_ALERT_RED;