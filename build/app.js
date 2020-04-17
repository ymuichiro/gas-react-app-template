/*
 Google Apps Scritサーバーサイドのアプリケーションを記述する
 exportは禁止
*/

function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

function recieveSpreadsheet() {
  // GAS環境時
  console.log("spreadsheet");
  return;
}