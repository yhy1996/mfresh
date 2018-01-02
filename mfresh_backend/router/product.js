/*
包含“商品”相关的所有路由
*/
const express=require('express');
let router=express.Router();
module.exports=router;

/*
*根据产品ID返回产品详情
* GET  /product/detail
*请求参数：
  pid-产品ID，必需
*输出结果：
  {
    "pid": 1,
    "title1":"xxx",
    ...
  }
*/
router.get('detail',(req,res)=>{
    //读取请求数据
    let p=req.params.pid;
    //输出响应消息
    let result={
        pid:p,
        title:''
    };
    res.json(result);
});

/*
*分页获取产品信息
* GET  /product/select
*请求参数：
  pageNum-需显示的页号；默认为1
  type-可选，默认为1
*输出结果：
  {
    totalRecord: 37,
    pageSize: 6,
    pageCount: 7,
    pageNum: 1,
    type: 1,
    data: [{},{} ... {}]
*/
router.get('/:pageNum',(req,res)=>{
    //读取请求数据
    let n=req.params.pageNum;
    //输出响应消息
    let pager={
        pageNum:n
    };
    res.json(pager);
});
















