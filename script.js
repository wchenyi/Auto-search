document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchIcon = document.getElementById("search-icon");
    const engines = {
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

    function performSearch() {
        const query = searchInput.value;
        if (query.trim() !== "") {
            window.open(selectedEngine + encodeURIComponent(query), '_blank');
        }
    }

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    searchIcon.addEventListener("click", () => {
        performSearch();
    });

    // 默认选择Baidu
    document.getElementById("baidu").classList.add("selected");
    selectedEngine = engines.baidu;
});
