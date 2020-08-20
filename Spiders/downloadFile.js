var http = require('https');
var fs = require("fs");
var downFlag = false;


/**
 * 下载回调
 */
function getHttpReqCallback(imgSrc, dirName, fileName) {

    var callback = function (res) {
        console.log("request: " + imgSrc + " return status: " + res.statusCode);
        var contentLength = parseInt(res.headers['content-length']);

        var downLength = 0;

        var out = fs.createWriteStream(dirName + "/" + fileName);
        res.on('data', function (chunk) {

            downLength += chunk.length;
            var progress = Math.floor(downLength * 100 / contentLength);
            var str = "下载：" + progress + "%";
            console.log(str);

            //写文件
            out.write(chunk, function () {
                //console.log(chunk.length);

            });

        });
        res.on('end', function () {
            downFlag = false;
            console.log("end downloading " + imgSrc);
            if (isNaN(contentLength)) {
                console.log(imgSrc + " content length error");
                return;
            }
            if (downLength < contentLength) {
                console.log(imgSrc + " download error, try again");
                return;
            }
        });
    };

    return callback;
}

/**
 * 下载开始
 */
function startDownloadTask(imgSrc, dirName, fileName) {
    console.log("start downloading " + imgSrc);
    var req = http.request(imgSrc, getHttpReqCallback(imgSrc, dirName, fileName));
    req.on('error', function (e) {
        console.log("request " + imgSrc + " error, try again");
    });
    req.end();
}

// startDownloadTask('', './custom_path', '22.mp4');
//startDownloadTask('下载地址','本地存储路径','文件名');

let loadUrlArr = [
    "https://files.catbox.moe/95pwb9.mp4", "https://files.catbox.moe/r23nk2.mp4",
    "https://files.catbox.moe/lximrp.mp4", "https://files.catbox.moe/5rew6c.mp4",
    "https://files.catbox.moe/6rz9tw.mp4", "https://files.catbox.moe/v0ybmq.mp4",
    "https://files.catbox.moe/nszfne.mp4", "https://files.catbox.moe/4eut3s.mp4",
    "https://files.catbox.moe/7xscol.mp4", "https://files.catbox.moe/lsrjqi.mp4",
    "https://files.catbox.moe/gztbz8.mp4", "https://files.catbox.moe/rt2xna.mp4",
    "https://files.catbox.moe/ezofy4.mp4", "https://files.catbox.moe/8d6axk.mp4",
    "https://files.catbox.moe/7b84h4.mp4", "https://files.catbox.moe/bhuctj.mp4",
    "https://files.catbox.moe/2nqpo6.mp4", "https://files.catbox.moe/btdfur.mp4",
    "https://files.catbox.moe/fi6sqp.mp4", "https://files.catbox.moe/2txwqd.mp4",
    "https://files.catbox.moe/c7lmst.mp4", "https://files.catbox.moe/6mrrrx.mp4"]
// loadUrlArr.forEach((item, index) => startDownloadTask(item, './custom_path', `${index}.mp4`))


// async function start() {

//     for (let i = 0; i < loadUrlArr.length; i++) {
//         await startDownloadTask(loadUrlArr[i], './custom_path', `${i}.mp4`).then(() => {
//             console.log(loadUrlArr[i])

//         })
//     }
// }
// start()
