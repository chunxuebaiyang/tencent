const express=require("express");
const mysql=require('mysql');
const bodyParser=require('body-parser')
//挂载路由
const userRouter=require('./router/user.js')

//监听端口
var server=express();
server.listen(8088);
//托管文件
server.use(express.static('html1'));

console.log("端口+"+8088)
server.use(bodyParser.urlencoded({
    extended:false
}));

server.use('/user',userRouter)