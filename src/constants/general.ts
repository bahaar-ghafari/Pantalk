// Define a set of colors for the teams
export const teamColors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F033FF",
  "#FFC300",
]; // Ensure you have enough colors for the teams
export const totalTimersDuration = 10;
export const stylesSizes = {
  xs: "5rem",
  sm: "9rem",
  md: "8rem",
  lg: "16rem",
  xlg: "18rem",
};
export const gradient = `linear-gradient(to right, #FF5733, #33FF57, #3357ff9e, #F033FF, #FFC300);`;
export enum GameStatus {
  start = 'Start',
  startPause = 'StartPause',
  gaming = 'Gaming',
  pause = 'Pause',
  end = 'End',
}