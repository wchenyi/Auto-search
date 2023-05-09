document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const engines = {
        baidu: "https://www.baidu.com/s?
        baidu: "https://www.baidu.com/s?wd=",
        bing: "https://www.bing.com/search?q=",
        google: "https://www.google.com/search?q="
    };

    let selectedEngine = engines.google;

    const buttons = document.querySelectorAll(".option");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
            selectedEngine = engines[button.id];
        });
    });

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const query = searchInput.value;
            if (query.trim() !== "") {
                window.location.href = selectedEngine + encodeURIComponent(query);
            }
        }
    });

    // 默认选择Google
    document.getElementById("google").classList.add("selected");
});
