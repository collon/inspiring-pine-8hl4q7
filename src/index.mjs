import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;

/*
let val1 = "aa";
console.log(val1);

let val2 = "bb";
console.log(val2);

const val3 = {
  name: "test",
  age: 21,
};

val3.name = "tomo";
console.log(val3.name);


const val5 = ["dog","cat"];
val5.push("bird")
console.log(val5);

*/
/*
const name = "じゃけぇ";
const age = "31";

const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
console.log(message1);

const message2 = `私の名前は、${name}です。`;
console.log(message2);

const func1 = function func1(str) {
  return str;
};

console.log(func1(func1("func1です")));

//アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

//１つしかない引数はかっこを省略できる
const func3 = (str) => {
  return str;
};
console.log(func3("func3です"));

//波カッコも省略できる
const func4 = (str) => str;
console.log(func4("func4です"));

//アロー関数
const func5 = (num1, num2) => num1 + num2;
console.log(func5(1, 4));
*/
/**
 * 分割代入
 */
/*
const myprofile = {
  name1: "a",
  age1: 12,
};

const message3 = `私の名前は${myprofile.name1}です。年齢は${myprofile.age1}です。`;
console.log(message3);

const{name1,age1}=myprofile;
const message4 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message4);

const myprofile = ["じゃけぇ", 31];
const message5 = `私の名前は${myprofile[0]}です。年齢は${myprofile[1]}です。`;
console.log(message5);

const [name, age] = myprofile;
const message6 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message6);

const sayhello = name => (console.log(`こんにちは!${name}さん`));
sayhello("tomo");

const name = "to";
const age = 12;

const myprofile1 = { name: name, age: age };
const myprofile2 = { name, age };

console.log(myprofile1);
console.log(myprofile2);

/**
 * スプレッド構文
 */

/*
//配列
const arr1 = [1, 2];
//console.log(...arr1);

const sf = (n1, n2) => console.log(n1 + n2);
sf(arr1[0], arr1[1]);
//sf(...arr1);
sf(...arr1);

const sf2 = (s1) => (document.getElementById("msg1").innerHTML = `${s1}`);
sf2("he");

const sf3 = (n1, n2) =>
  (document.getElementById("msg2").innerHTML = `${n1}+${n2}`);
sf3(...arr1);

*/
/*
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(arr2);
console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピー
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

//すぷれっと構文を用いないと、値参照ではなく、ポインタ参照になってしまうので注意

*/

/**
 * mapやfilterを用いた配列の処理
 */

//const nameArr = ["田中", "山田", "じゃけぇ"];
//for(let index= 0;index<nameArr.length;index++){
//    console.log(nameArr[index]);
//}
/*
nameArr.map((name) => {
  return name;
});

const nameArr2 = nameArr.map((name) => {
  return name;
});

console.log(nameArr2);

nameArr.map((name) => console.log(name));

*/
/*
const numArr = [1, 2, 3, 4, 5];

//奇数の取り出し
const newnumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newnumArr);

*/

//const nameArr = ["田中", "山田", "じゃけぇ"];
//nameArr.map((name, i) => console.log(`${i + 1}番目は${name}です。`));

/*
const nameArr = ["田中", "山田", "じゃけぇ"];
const newnameArr = nameArr.map((name) => {
  if (name === "じゃけぇ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newnameArr);
*/

/**
 * 三項演算子
 */
//ある条件？条件がtrueの場合；条件がfalseの場合
//if elseを短く書く

//const val1 = 1 === 1 ? "true" : "false";
//console.log(val1);

/**
 * 数値型の判定
 */
/*
const num = "1300";
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);
*/

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};

console.log(checkSum(60, 50));
