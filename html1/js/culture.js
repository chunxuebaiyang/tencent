$(window).load(function(){
    // 获取菜单列表
    let list_arr=document.querySelector(".sub_sidebar_list").children;
    // 获取内容列表
    let con_arr=document.querySelectorAll(".culture_item");
    console.log(con_arr,list_arr);
    // 定时器，目标高度,下一步位置
    let time=null;
    let target=0;
    let n=0;

    for (let i=0;i<list_arr.length;i++){
        // 绑定对应下标
        list_arr[i].h=i;
        // 绑定每个菜单单击事件
        list_arr[i].onclick=function(){
            target=con_arr[this.h].offsetTop-80;
            clearInterval(time);
            time=setInterval(function(){
                // 判断方向
                let speed=(target-n)/50;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);
                // 下一步的位置
                n+=speed;
                // 移动
                window.scrollTo(0,n);
                if (n == target){
                    clearInterval(time);
                }
            },3);
        }
    }
})


window.onscroll=function(){
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    //服务部分
    console.log(t)
    if(t>200){
        sub_list(-1)
    }
    if(t>600){
        sub_list(44)
    } 
    if(t>1500){
        sub_list(89)
    }
    if(t>2000){
        sub_list(134)
    }
                   
}
function sub_list(a){
    let c=document.querySelector(`#curr${a}`)
    let d=document.querySelector(`#curr${-1}`)
    let b=a+'px'
    cover.style.top=`${b}`;
    d.style.color="#666"
    curr44.style.color="#666"
    curr89.style.color="#666"
    curr134.style.color="#666"
    c.style.color="#0052d9"
}