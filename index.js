window.onload = function () {
    var objta = document.getElementById("ta");
    var objOpen = document.getElementById("openbtn");

    objta.innerHTML = 'http://acfun.cn\nhttp://bilibili.com'

    objOpen.addEventListener('click', function () {
        var urls = objta.value.split("\n")

        for (var url of urls) {
            //判断当前行是否是一段网址,是否有http等前缀
            if (/^((https|http|ftp)?:\/\/)[\S]+/.test(url)) {
                window.open(url);
                // console.log('http prefix')
            } else if (/\S+\.\S+$/.test(url)) {
                window.open(`http://${url}`)
                // console.log('no http prefix')
            } else {
                console.log(`not url: ${url}`)
            }
        }
    })
}