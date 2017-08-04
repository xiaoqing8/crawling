/**
 * Created by Xiaoqing on 04/08/2017.
 */
/** a file to analize a code html  */
/** 我们用cheerio来分析在curl.js中抓取出来的网页的html代码*/

const cheerio = require("cheerio");
const server = require("./curl");

//the site we will analize
//此处定义要分析的网站的网址
var url = "http://v.163.com/special/opencourse/englishs1.html";
//var url = "http://www.google.fr/?gws_rd=ssl"

server.download(url, function(data) {
    if (data) {
        console.log(data);

        var $ = cheerio.load(data);

        $("a.downbtn").each(function(i, e) {
            console.log($(e).attr("href"));
        });

        console.log("done");
    } else {
        console.log("error");
    }
});