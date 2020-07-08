/*
 Google Apps Scritサーバーサイドのアプリケーションを記述する
 exportは禁止
*/

function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

function recieveSpreadsheet() {
  console.log("spreadsheet");
  return;
}

// Exportはしないが、--isolateModule対策として記述
export { }