// 初始化變數
const filterButtons = document.querySelectorAll(".filter");
const filterItems = document.querySelectorAll("#filterList ul li");

// 點擊按鈕後進行篩選
filterButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        // 移除所有按鈕的 active 狀態
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // 為當前點擊的按鈕添加 active 狀態
        button.classList.add("active");

        const filterClass = button.classList[1]; // 獲取按鈕的第二個類別，如 'cats', 'food'

        // 根據篩選條件顯示或隱藏對應的圖片
        filterItems.forEach((item) => {
            if (filterClass === "allItem") {
                item.style.display = "block"; // 顯示全部
            } else if (item.classList.contains(filterClass)) {
                item.style.display = "block"; // 顯示符合篩選條件的
            } else {
                item.style.display = "none"; // 隱藏其他項目
            }
        });
    });
});

// 頁面載入時，顯示全部圖片
document.querySelector(".allItem").click();
