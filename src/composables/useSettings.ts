import { computed, reactive } from "vue";

const state = reactive({
  showSelect: false,
  showColorInput: false,
  showTheme: false,
  showShades: false,
})


export const useSettings = () => {
  return {
    showSelect: computed({
      get: () => state.showSelect,
      set: (show: boolean) => {
        state.showSelect = show;
      }
    }),
    showColorInput: computed({
      get: () => state.showColorInput,
      set: (show: boolean) => {
        state.showColorInput = show;
      }
    }),
    showTheme: computed({
      get: () => state.showTheme,
      set: (show: boolean) => {
        state.showTheme = show;
      }
    }),
    showShades: computed({
      get: () => state.showShades,
      set: (show: boolean) => {
        state.showShades = show;
      }
    })
  }
}
