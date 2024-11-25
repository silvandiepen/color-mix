import { computed, reactive } from 'vue';
import { colors } from '../data/colors';

interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  light: string;
  dark: string;
}

interface Colors {
  [key: string]: string;
}

const theme: Theme = reactive({
  primary: 'blue',
  secondary: 'green',
  accent: 'yellow',
  light: 'white',
  dark: 'black',
});

const state = reactive({
  colorMode: 'light',
  contrastMode: 'normal',
  colors: { ...colors } as Colors,
});

export const useColor = () => {
  const setColorMode = (mode: 'dark' | 'light') => {
    state.colorMode = mode;
  };

  const setContrastMode = (mode: 'high' | 'normal') => {
    state.contrastMode = mode;
  };

  const changeColor = (key: keyof Colors, value: string) => {
    state.colors[key] = value;
  };

  return {
    colors: computed(() => state.colors),
    changeColor,
    theme,
    setColorMode,
    setContrastMode,
    colorMode: computed(() => state.colorMode),
    contrastMode: computed(() => state.contrastMode),
  };
};
