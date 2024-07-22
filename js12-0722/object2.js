// 建立物件樣板
// 物件樣板名稱習慣字首為大寫
// 1. 建立物件樣板成員(類比成figma元件概念)
function Sdata(no, name, scoreHtml, scoreCss, scoreJs) {
    // this代表物件本身
    this.sid = no;
    this.sName = name;
    this.html = scoreHtml;
    this.css = scoreCss;
    this.js = scoreJs;
    this.showData = function () {
        console.log(`${this.sid}{號${this.sName}同學, 成績總分${this.html + this.css + this.js}分`);
    };
}
// 2. 建立物件樣板
// 傳值給物件樣板參數
let s1 = new Sdata("s001", "王小明", 100, 100, 100);
// 呼叫物件樣板中的方法
s1.showData();

let s2 = new Sdata("s002", "陳小美", 25, 54, 68);
s2.showData();

let s3 = new Sdata("s003", "老王", 28, 44, 60);
s3.showData();

// 計算全班各科總分
// 方法一:直接使用s1,s2,s3的成員
// console.log(`html班級總分: ${s1.html + s2.html + s3.html}`);
// console.log(`css班級總分: ${s1.css + s2.css + s3.css}`);
// console.log(`js班級總分: ${s1.js + s2.js + s3.js}`);

console.log("--陣列物件--");

// 方法二:陣列物件
// 宣告陣列
let arrObj = [s1, s2, s3];
// console.log(arrObj);
let totHtml = 0,
    totCss = 0,
    totJs = 0;
for (let i = 0; i < arrObj.length; i++) {
    totHtml += arrObj[i].html;
    totCss += arrObj[i].css;
    totJs += arrObj[i].js;
}
console.log("Html總分: " + totHtml);
console.log("Css總分: " + totCss);
console.log("Js總分: " + totJs);
