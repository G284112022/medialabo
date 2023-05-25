// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);/*kotae最終的な答え
                                            kaisu=予想した回数
                                            b＝ボタンの情報を取得
                                            i=ボタンの内容取得

                                            */
// 入力回数（予想回数）
let kaisu = 0;
let yoso;
let k=document.querySelector('span#kaisu'); 
let an=document.querySelector('span#answer'); 
let re=document.querySelector('p#result'); 
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

/*hantei();
hantei();
hantei();
*/
let b =document.querySelector('#kaitou'); //ボタンと入力欄
b.addEventListener('click',greeting);

function greeting(){
let i = document.querySelector('input[name="yoso"]');
yoso = i.value;

console.log(yoso);//テスト用コンソールに表示後で消す
hantei();
} 

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  
  kaisu=kaisu+1;
k.textContent = kaisu;
an.textContent = yoso; 
  

    if(kaisu>3){
        console.log("答えは"+kotae+"でした"+"すでにゲームは終わっています。");
        re.textContent = '答えは'+kotae+'でした。すでにゲームは終わっています。'; 

    }
    else if(kotae==yoso){
        console.log(kaisu+"回目の予想:"+yoso);
        console.log("答えは"+kotae+"でした."+"すでにゲームは終わっています。");
       
        re.textContent = '正解です。おめでとう！'; 
    }
    else if(yoso>kotae){
        console.log("間違い、答えはもっと小さいですよ");
        re.textContent = '間違い、答えはもっと小さいですよ'; 

    }
    else if(yoso<kotae){
        console.log("間違い、答えはもっと大きいですよ");
        re.textContent = '間違い、答えはもっと大きいですよ'; 

    }
   

//}
   
   
   
        
  
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}