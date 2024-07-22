// 建立一個家法運算函式add()
// 當呼叫函式的「參數值個數」與「參數個數」不一定相同時
// 可以使用「其餘參數」寫法
// 語法為三個連續小數點 => ... =>參數資料會形成一個陣列
function add(...number) {
    let tot = 0;
    // 處理加法運算
    // 使用迴圈取得參數的資料
    console.log(number);
    // 一般迴圈寫法
    // for (let i = 0; i < number.length; i++) {
    //     tot += number[i];
    // }

    // 使用for-of寫法
    for (let num of number) {
        tot = tot + num;
    }
    // 回傳結果出去
    return tot;
}
console.log(add());
console.log(add(5));
console.log(add(5, 3));
console.log(add(5, 3, 5));
console.log(add(5, 3, 5, 3));
