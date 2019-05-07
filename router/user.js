const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//1.用户登录
router.post("/login",(req,res)=>{
    var $uid=req.body.uid
    var $upwd=req.body.upwd
    console.log($uid,$upwd)
    if(!$uid){
        res.send("用户名不存在")
        return;
    }
    if(!$upwd){
        res.send("密码不存在")
        return;
    }
    pool.query("select * from tx_user where uid=? and upwd=?",[$uid,$upwd],(err,result)=>{
        console.log(result)
        if(err){throw err}
        if(result.length>0){
            res.send({msg:"登录成功",data:result})
        }else{
            res.send("登录失败")
        }
    })
})

//2.child
router.get('/query',(req,res)=>{
	//得到uid
	var $cid=req.query.cid;
	if(!$cid){
		res.send("0");
		return;
	}
	var sql="select * from tx_child where cid=?";
	pool.query(sql,[$cid],(err,result)=>{
		if(err)  throw err;
		if(result.length>0){
			res.send(result[0]);
		}else{
			res.send("1");
		}
	});
});
//3.team
router.get('/list',(req,res)=>{
    console.log(1)
	var sql="select * from tx_team ";
	pool.query(sql,(err,result)=>{
		if(err)  throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("1");
		}
	});
});
//4.lunbo
router.get('/char',(req,res)=>{
	var sql="select * from tx_list";
	pool.query(sql,(err,result)=>{
		if(err)  throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("1");
		}
	});
});

module.exports=router;