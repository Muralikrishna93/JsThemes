let themeSelector = document.getElementById("themeSelector");

themeSelector.addEventListener("change", () => {
    let selectedTheme = themeSelector.value;

    document.body.classList.remove("light", "dark", "bisque");
    document.body.classList.add(selectedTheme);

    console.log("Theme changed to:", selectedTheme);
});
