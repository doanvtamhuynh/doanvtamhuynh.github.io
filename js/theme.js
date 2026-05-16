(function () {
  var storageKey = "portfolio-theme";
  var savedTheme = localStorage.getItem(storageKey);
  var theme = savedTheme || "dark";
  var root = document.documentElement;

  function applyTheme(nextTheme) {
    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem(storageKey, nextTheme);

    var toggles = document.querySelectorAll("[data-theme-toggle]");
    toggles.forEach(function (toggle) {
      var isDark = nextTheme === "dark";
      toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      toggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
      toggle.innerHTML = isDark
        ? '<i class="fa-solid fa-sun" aria-hidden="true"></i><span class="sr-only">Light mode</span>'
        : '<i class="fa-solid fa-moon" aria-hidden="true"></i><span class="sr-only">Dark mode</span>';
    });
  }

  applyTheme(theme);

  document.addEventListener("click", function (event) {
    var toggle = event.target.closest("[data-theme-toggle]");
    if (!toggle) return;

    var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
})();
