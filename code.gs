function httpget(url) {
    let data = UrlFetchApp.fetch(url).getContentText();
    eval(data);
}