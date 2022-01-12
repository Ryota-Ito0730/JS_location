'use strict';
// URL値確認と別ページに渡す
let url = location.href      //URL全体
location.protocol  //URLのプロトコル
location.host      //URLのホスト名(ポート番号含む)
location.hostname  //URLのホスト名
location.port      //URLのポート番号
location.pathname  //URLのパス部分
location.search    //URLのクエリ文字列
location.hash      //URLのアンカー部分

// 仕込み用の値を定義する(表示中URL末尾に追記する)
const val_01 = 'Berlin';
const val_02 = 'Iceland';

// 表示中のページURLを取得しhtmlにテキストとして表示する
const get_url_js = document.getElementsByClassName('get_url_js')[0];
get_url_js.innerText = url;

// const addedValueUrl = url + '?' + val_01;
// console.log(addedValueUrl);