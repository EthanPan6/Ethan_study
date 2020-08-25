"use strict";

function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object  

  var reader = new FileReader(); //这是核心,读取操作就是由它完成.

  reader.readAsText(new Blob(files)); //读取文件的内容,也可以读取文件的URL

  reader.onload = function () {
    //当读取完成后回调这个函数,然后此时文件的内容存储到了result中,直接操作即可
    console.log(this.result);
  }; //usage:


  readTextFile("../Data/a.json", function (text) {
    var data = JSON.parse(text);
    console.log(data);
  });
}