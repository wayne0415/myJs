// 取得文字方塊的內容
let newList = document.querySelector("#txt1");

// 取得按鈕
let myBtn = document.querySelector("#btn");
myBtn.addEventListener("click", () => {
    // 取得文字方塊
    let newList = document.querySelector("#txt1");

    // 1.建立新節點 => li
    let newElm = document.createElement("li");
    // 2.建立文字節點 => 文字方塊的內容
    let newText = document.createTextNode(newList.value);
    // 3.將文字節點加入到新節點
    newElm.appendChild(newText);
    // 4.取得要加入新節點的位置
    let newPosition = document.querySelector("ul");
    // 5.將新節點加入到ul元素的最後一個子節點
    newPosition.appendChild(newElm);
});
