export const useTheme = () => {
  const isDark = ref(false);

  const initializeTheme = () => {
    if (import.meta.client) {
      const savedTheme = localStorage.getItem("theme");
      isDark.value =
        savedTheme === "dark" ||
        (!savedTheme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  };

  const applyTheme = () => {
    if (import.meta.client) {
      document.body.className = `portfolio-body ${isDark.value ? "dark" : "light"}`;
      document.body.style.fontFamily = '"Geist-Regular", sans-serif';
      document.body.style.margin = "0";
      document.body.style.padding = "0";

      if (isDark.value) {
        document.body.style.backgroundColor = "#0a1f0f";
        document.body.style.backgroundImage =
          "radial-gradient(circle at 1px 1px, #05fc70 1px, transparent 0)";
        document.body.style.color = "#ffffff";
      } else {
        document.body.style.backgroundColor = "#f0fdf4";
        document.body.style.backgroundImage =
          "radial-gradient(circle at 1px 1px, #86efac 1px, transparent 0)";
        document.body.style.color = "#1a1a1a";
      }

      document.body.style.backgroundSize = "2rem 2rem";
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";

      localStorage.setItem("theme", isDark.value ? "dark" : "light");
    }
  };

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    applyTheme();
  };

  onMounted(() => {
    initializeTheme();
    applyTheme();
  });

  return {
    isDark: readonly(isDark),
    toggleTheme,
    initializeTheme,
    applyTheme,
  };
};
