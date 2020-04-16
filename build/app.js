/*
 Google Apps Scritサーバーサイドのアプリケーションを記述する
 exportは禁止
*/

function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

function recieveSpreadsheet() {
  // GAS環境時
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  console.log(ss.getSheets()[0].getSheetName());
  return;
}