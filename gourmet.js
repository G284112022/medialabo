let data ;
let genre =0;
let omise = [];
let ob=0;
let obleng=0;
let count = 0;//何回実行したか２以上なら処理に影響はなくなる
//let rm = document.querySelector('ul#shoping');

//コンソール部分
let b=document.querySelector('button#btn'); //ボタンを押した？
b.addEventListener('click', showSelectResult); //ボタンを押したら起こすこと
//指定したジャンルを調べる
function showSelectResult() {
  let s = document.querySelector('select#janru');
  let idx = s.selectedIndex;  // idx 番目の option が選択された
 
console.log(idx);
//rm.remove();

  //let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
  if(idx<10){
    genre = 'G00'+idx; 
  }
  else{
    genre = 'G0'+idx;
  }
  if(count!=0){
    Tbremove();
  }
 
  sendRequest();


  

  
  //オブジェクトを配列omiseに入れる。
  
  

       // os の idx 番目の要素
  /*
  console.log(data.results.shop[0].name);//０個目のshopのnameを出力している。
  console.log('選択された ' + idx + ' 番目の option の情報:');
  console.log('  value=' + o.getAttribute('value'));  // id 属性を表示
  console.log('  textContent='+o.textContent);
  */
  //何を指定したかを見てそれに応じた情報を出す。
  //ボタンを押したら一回消す。-
  

//     let sho = document.querySelector('ul#shoping'); 
//     let x = idx-1;
//    // for(let v of data.results.shop){
//       let li = document.createElement('li');
//       let li2 = document.createElement('li');
//         li.textContent = data.results.shop[x].name;
        
//         sho.insertAdjacentElement('beforeend',li);
//         li2.textContent = data.results.shop[x].genre.catch;
//         sho.insertAdjacentElement('beforeend',li2);
//   } 
}
  



//let gcode = document.querySelectorAll()
//入力ちゅう//"genre"code=ジャンルコード






// 通信を開始する処理
function sendRequest() {
    // URL を設定
    
    let strat = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/';
    let end = '.json';
    let url = strat+genre+end;
    console.log(url);
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
     data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');

  //アジャックスの中でないとエラーを吐く
    ob=Object.keys(data.results.shop); 
    obleng=ob.length;
   for(let j=0; j<obleng;j++){

    omise[j]=data.results.shop[j];//omise関数の中にdataのshopがある
    console.log(omise[j]);
   } 
   
   count=count+1;
   let mark = document.querySelector('p#mark');
   let div = document.createElement('div');
   div.id='All';
   //div要素をp要素に挿入
   mark.insertAdjacentElement('beforeend',div);
   if(obleng==0){
    div.textContent ='近くにこのジャンルのお店はありません。'
   }
   for(let All=0;All<obleng;All++){
    console.log(All);



    //let div = document.querySelector('div#All');
    let oj;
    //console.log(oj);
     oj = document.createElement('table');
     let tableid='oj'+All;//ここでidの数値を決めている。
     oj.id=tableid;//ここでidを指定している
    
     //見出しを作っている。
     if(All==0){
      var tbth = document.createElement("tr");
      oj.insertAdjacentElement('beforeend',tbth);
      var th = document.createElement("th");
      var th2 = document.createElement("th");
      var th3 = document.createElement("th");
      var th4 = document.createElement("th");
      var th5 = document.createElement("th");
      var th6 = document.createElement("th");
      th.textContent = "店名";
      tbth.insertAdjacentElement('beforeend',th);
      th2.textContent = "予算";
      tbth.insertAdjacentElement('beforeend',th2);
      th3.textContent = "アクセス";
      tbth.insertAdjacentElement('beforeend',th3);
      th4.textContent = "キャッチコピー";
      tbth.insertAdjacentElement('beforeend',th4);
      th5.textContent = "営業日時";
      tbth.insertAdjacentElement('beforeend',th5);
      th6.textContent = "ジャンル";
      tbth.insertAdjacentElement('beforeend',th6);
    }

     var tbtr = document.createElement("tr");//tdを入れるtrを生成
     oj.insertAdjacentElement('beforeend',tbtr);
    
    

     var name = document.createElement("td");
     name.id='name';
     tbtr.insertAdjacentElement('beforeend',name);
    
     let tr = document.querySelector('tr#name');//trはテーブルの内容
     name.textContent = data.results.shop[All].name//nameをid(name)のtrに書き込んでる 
//thも入れていくようにする。あとtrにもidをつけて何を入れるかの指標にすること。id指定で入れるものを決められる。
     var budget = document.createElement("td");
     budget.id='budget';
     tbtr.insertAdjacentElement('beforeend',budget);
      tr = document.querySelector('tr#budget');
     budget.textContent = data.results.shop[All].budget.name;

     var access = document.createElement("td");
     access.id = 'access';
     tbtr.insertAdjacentElement('beforeend',access);
     div.insertAdjacentElement('beforeend',oj);
      tr = document.querySelector('tr#access');
     access.textContent = data.results.shop[All].access;

     var catch1 = document.createElement("td");
     catch1.id='catch';
     tbtr.insertAdjacentElement('beforeend',catch1);
      tr = document.querySelector('tr#catch');
      catch1.textContent = data.results.shop[All].catch;

      var open = document.createElement("td");
      open.id='open';
     tbtr.insertAdjacentElement('beforeend',open);
      tr = document.querySelector('tr#open');
      open.textContent = data.results.shop[All].open;

      var genrename = document.createElement("td");
      genrename.id='genrename';
     tbtr.insertAdjacentElement('beforeend',genrename	);
      tr = document.querySelector('tr#open');
      genrename.textContent = data.results.shop[All].genre.name;



  }
 

  /* for(let tablenunber=1;tablenunber<obleng;tablenunber++){

    var table = document.createElement("table");
    table.id="oj";//ここを変数にできればいくつも作れる？

    var headers= ["name","access","budget.name"];
    for(var i = 0; i<headers.length;i++){
      var th = document.createElement("th");
      th.id = headers[i];
      

      var tr = document.createElement("tr");
      table.appendChild(tr);
    }
   */
   
}
//ここまでアジャックス。


//削除するコマンド
function Tbremove(){

  let rmdiv = document.querySelector('div#All');

  let rmtables = document.getElementsByName('table');

  for(let d = rmtables.length-1;d>=0;d++){
    let rmtable=rmtables[d];

  

    let rmtrs = rmtable.getElementsByTagName('tr');
    
    

    for(let i = rmtrs.length-1;i >=0; i--){
      let rmtr = rmtrs[i];

      let rmths = rmtr.getElementsByTagName('th');
      for(let rmj = rmths.length -1; rmj >= 0; rmj--){
        let rmth = rmths[rmj];
        rmth.parentNode.removeChild(rmth);//thを削除
      }

      let rmtds = rmtable.getElementsByTagName('td');
      for(let rmj = rmtds.length -1;rmj >=0; rmj--){
        let rmtd = rmtds[rmj];
        rmtd.parentNode.removeChild(rmtd);

       
      }

    
      rmtr.parentNode.removeChild(rmtr);
    }
    rmtable.parentNode.removeChild(rmtable);
  }
  rmdiv.parentNode.removeChild(rmdiv);
  
}