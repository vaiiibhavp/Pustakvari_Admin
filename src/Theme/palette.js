import { alpha } from "@mui/material/styles";
import { colorCodes } from "../Helper/Constant";

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const PRIMARY = {
  lighter: "#ffd3b3",
  light: "#fe974d",
  main: "#fe6b01",
  dark: "#cb5601",
  darker: "#331500",
  forgot:"#0034EB",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#c8b6e1",
  light: "#7f56b9",
  main: "#480d9b",
  dark: "#3a0a7c",
  darker: "#16042e",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#f6a16152",
  light: "#FF824A",
  main: "#F48A3A", // Set the main color to F48A3A
  dark: "#B56428",
  darker: "#c36e2e",
  contrastText: GREY[800],
};

const SUCCESS = {
  lighter: "#86b1fb5e",
  light: "#7B82F7",
  main: "#357df9", // Set the main color to 5666F7
  dark: "#3743B7",
  darker: "#2558ae",
  contrastText: "#fff",
};

const WARNING = {
  lighter: "#E8CBFF",
  light: "#D2A2FF",
  main: "#925ACC", // Set the main color to 925ACC
  dark: "#60387A",
  darker: "#381C4B",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const palette = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,

  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
