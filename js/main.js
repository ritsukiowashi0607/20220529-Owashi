// 問題①

// 以下のような重複値を含む配列arrayの中から、重複値を除く配列を作成して下さい。
// ​const array = [2, 4, 7, 5, 4, 3, 8];
// 条件としては以下の4つが挙げられます。
// filterを利用する
// indexOfを利用する
// 返り値を使用する
// 結果をコンソールに出力する

// 問題②

// 2020年と2021年がうるう年かどうかを判定するコードを記述してください。
// 条件としては以下の5つが挙げられます。
// if文を使用する
// leapYearという関数を使用する
// 引数に西暦を渡す
// 返り値を使用する
// 結果はコンソールに出力する
// ※うるう年は以下のように定義されます。
// 西暦が4で割り切れるかつ100で割り切れない
// 西暦が400で割り切れる

// ルール

// 以下の2つのルールをしっかりと守ってください。
// テストに関する質問はできません
// テストが完了いたしましたらGithubのURLをStageeeのコーチチャットへお送りください


// 問題1
const array = [2, 4, 7, 5, 4, 3, 8];
const b = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});

console.log(b)


// 問題2
function LeapYear(year){
  if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let checkYear = 2020;
if(LeapYear(checkYear)){
  console.log(checkYear + '年はうるう年です');
}else{
  console.log(checkYear + '年はうるう年ではありません');
}



  
  


