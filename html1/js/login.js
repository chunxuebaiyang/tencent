var n = sessionStorage.getItem("uname")
        //console.log(name)
        //console.log(pic)
if(n){
    var html = "你好,"+n
    html=`<a href='javascript:;' class='denglu'>${html}<button onclick="down()">退出登录</button></a>`
    var welcome = document.querySelector(".lastlogin")
    console.log(welcome)
    welcome.innerHTML = html;
}
function down(){
    sessionStorage.removeItem("uname")
    location.href="index.html"
}