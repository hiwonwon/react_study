import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// Custom Hook
export function useTheme() {
  return useContext(ThemeContext);
}
