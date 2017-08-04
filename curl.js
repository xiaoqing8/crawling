/**
 * Created by Xiaoqing on 04/08/2017.
 */
/** 一段可以下载任意一个网站的内容的js代码*/
/** a file to download the content of any website */
var http = require("http");

// Utility function that downloads a URL and invokes
// callback with the data.
function download(url, callback) {
    http.get(url, function(res) {
        var data = "";
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on("end", function() {
            callback(data);
        });
    }).on("error", function() {
        callback(null);
    });
}

exports.download = download;