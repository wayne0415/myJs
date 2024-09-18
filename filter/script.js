document.addEventListener("DOMContentLoaded", function () {
    const teaCategories = document.querySelectorAll(".tea-category");
    const teaItems = document.querySelectorAll(".tea-item");

    teaCategories.forEach((category) => {
        category.addEventListener("click", function () {
            const selectedCategory = category.getAttribute("data-category");

            // 切換活動類別的樣式
            teaCategories.forEach((cat) => cat.classList.remove("active"));
            category.classList.add("active");

            // 遍歷所有茶品，篩選顯示對應類別
            teaItems.forEach((item) => {
                const itemCategory = item.getAttribute("data-category");
                if (itemCategory === selectedCategory) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // 頁面加載時預設顯示所有茶品
    teaCategories[0].click(); // 默認選擇紅茶
});
