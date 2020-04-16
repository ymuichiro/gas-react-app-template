/*
 Google Apps Scritサーバーサイドのアプリケーションを記述する
 本ScriptのみTSでは型Errorが生じる為、JSとする
*/

/** クライアント開発時、App Script固有の検証が出来ない為、debugModeをtrueとする */
const debugMode = false;

/** Spreadsheetのシート名を取得する */
export function callSpreadsheet() {
  // クライアント開発時
  if (debugMode) return;
  // GAS環境時
  google.script.run.withSuccessHandler(function () {
    console.log("success");
  }).recieveSpreadsheet();
}