export const useTheme = () => {
  const theme = ref<"light" | "dark" | "system">("system");
  const actualTheme = ref<"light" | "dark">("light");

  const initializeTheme = () => {
    if (import.meta.client) {
      const savedTheme = localStorage.getItem("theme") as
        | "light"
        | "dark"
        | "system";
      if (savedTheme) {
        theme.value = savedTheme;
      }
      updateActualTheme();
    }
  };

  const updateActualTheme = () => {
    if (import.meta.client) {
      if (theme.value === "system") {
        actualTheme.value = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
      } else {
        actualTheme.value = theme.value;
      }

      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(actualTheme.value);
    }
  };

  const setTheme = (newTheme: "light" | "dark" | "system") => {
    theme.value = newTheme;
    if (import.meta.client) {
      localStorage.setItem("theme", newTheme);
      updateActualTheme();
    }
  };

  const toggleTheme = () => {
    const themes: ("light" | "dark" | "system")[] = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme.value);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  if (import.meta.client) {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        if (theme.value === "system") {
          updateActualTheme();
        }
      });
  }

  onMounted(() => {
    initializeTheme();
  });

  return {
    theme: readonly(theme),
    actualTheme: readonly(actualTheme),
    setTheme,
    toggleTheme,
    initializeTheme,
  };
};
