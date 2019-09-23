function myFunction() {
  
  //年月を取得する
  var Month = String(Utilities.formatDate(new Date(), "JST", "yyyyMM"));

  //コピーするファイルの名前を作成
  var copy_file_name  = Month; // 自由な文字列で入力    
  
  //コピーするファイルを保存するディレクトリ作成
  var copy_dir = DriveApp.getFolderById("1TIcb5rWED1Uo8zJFvN2E8PrY6Teh9gXU"); // コピ―したファイルを保存するフォルダIDを取得＆入力

  //コピーするデータのオブジェクトを取得
  var moto_dat = DriveApp.getFileById("1ETB6QZf-_67MzX7WvJPfVsi5tCKq2h5s3fTWKjd7yyM"); // コピー元のファイルIDを取得＆入力  
  
  //指定したディレクトリ（copy_dir）にファイルをコピー
  var newfile = moto_dat.makeCopy(copy_file_name, copy_dir);   

  //コピーしたファイルをすぐに使いたい場合はIDを取得すると良い
  var id_copy_file = newfile.getId();
  Logger.log(id_copy_file);
  
  //シートネームをINDEXシートにリネームする
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // 書出シートの作成（temp_listのコピー作成）
  var spreadsheet = SpreadsheetApp.openById(id_copy_file);
  spreadsheet.renameActiveSheet("Index");
  
}
