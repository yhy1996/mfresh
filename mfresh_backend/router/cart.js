/*
包含“购物车”相关的所有路由
*/
const express=require('express');
let router=express.Router();
module.exports=router;

/*
*向购物车中添加商品
* GET  /cart/detail/add
*请求参数：
  uid-用户ID，必需
  pid-产品ID，必需
*输出结果：
* {"code":1,"msg":"succ", "productCount":1}
* 或
* {"code":400}
*/
router.get('/detail/add',(req,res)=>{
    //读取请求数据
    //返回响应消息
    let result={code:400};
    res.json(result);
});

/*
*根据购物车详情记录编号删除该购买记录
* GET  /cart/detail/delete
*请求参数：
  did-详情记录编号
*输出结果：
* {"code":1,"msg":"succ"}
* 或
* {"code":400}
*/
router.get('/detail/delete',(req,res)=>{
    //读取请求数据
    //返回响应消息
    let result={code:400};
    res.json(result);
});

/*
*查询指定用户的购物车内容
* GET  /cart/detail/5
*请求参数：
  uid-用户ID，必需
*输出结果：
  {
    "uid": 1,
    "products":[
      {"pid":1,"title1":"xxx","pic":"xxx","price":1599.00,"count":3},
      {"pid":3,"title1":"xxx","pic":"xxx","price":1599.00,"count":3},
      ...
      {"pid":5,"title1":"xxx","pic":"xxx","price":1599.00,"count":3}
    ]
  }
*/
router.get('/detail/select',(req,res)=>{
    //读取请求数据
    let n=req.params.uid;
    //输出响应消息
    let result={
        uid:n,
        products:[]
    };
    res.json(result);
});

/*
*根据购物车详情记录编号修改该商品购买数量
* GET  /cart/detail/update
*请求参数：
  did-详情记录编号
  pid-商品编号
  count-更新后的购买数量
*输出结果：
* {"code":1,"msg":"succ"}
* 或
* {"code":400}
*/
router.get('/detail/update',(req,res)=>{
    //读取请求数据
    //返回响应消息
    let result={code:400};
    res.json(result);
});




