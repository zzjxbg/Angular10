var mysql = require('mysql'); 
const express = require('express');
var bodyParser = require('body-parser');   //body解析
var cors = require('cors'); 
const url = require('url');
const qs = require('qs');


// 这个核心模块，能够帮我们解析 URL地址，从而拿到  pathname  query 
const urlModule = require('url')

const app = express();

function getParams(req){
    //判断是什么请求
    var query={};
    if(req.method.toLocaleLowerCase()=='post') {
        query = req.body;
    } else {
        const urlJson = url.parse(req.url);
        query = qs.parse(urlJson.query);
    }
    return query;
}

app.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }))

.use(function (req, res, next) {
    //跨域处理
    res.setHeader('Access-Control-Allow-Origin', '*');  //允许任何源
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');  
    res.setHeader('Access-Control-Allow-Headers', '*');   //允许任何类型
    // res.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});  
    next();  //next 方法就是一个递归调用
});

// app.use(cors());
 
// 基于 Node 实现 JSONP 请求 ,原生
// https://www.jianshu.com/p/70a79315d6da

//jsonp
app.get('/getscript',function(req,res){
    console.log('ooopp heelo');
    var data = {
        name: 'alice',
        age: 18,
        gender: '女孩子'
      }
    // res.end 发送给 客户端， 客户端去把 这个 字符串，当作JS代码去解析执行
    res.jsonp(data)
})

app.post('/api/login',(req,res)=>{
    var queryres =  getParams(req);
    // name:laney
    // password:123456
    if(queryres.name=='laney' && queryres.password=='123456'){
        res.json({
            statusCode:200,
            token:'1234567890',
            data:'登陆成功！'
            
        })
    } else {
        res.json({
            token:'1234567890',
            statusCode:304,
            data:'用户名或密码错误！'
            
        })
    }
})
app.post('/api/info',(req,res) => {
    var queryres =  getParams(req);
    console.log(queryres)
    var data={
                "code": "200",
                "msg": "success",
                "result": [{
                    "id":1,
                    "name": "laney",
                    "content": "test01"
                },
                {
                    "id":2,
                    "name": "ben",
                    "content": "test02"
                },
                {
                    "id":3,
                    "name": "lili",
                    "content": "test03"
                }]
            }

    res.json({
        statusCode:200,
        result:data.result,
        tag:1 
    })
})
app.post('/api/msg',(req,res) => {
    var queryres =  getParams(req);
    console.log('pppp');
    console.log(queryres);
    var data={
                "code": "200",
                "msg": "success",
                 "result": [{
                        "id":1,
                        "name": "qian",
                        "content": "test01"
                    },
                    {
                        "id":2,
                        "name": "song",
                        "content": "test02"
                    },
                    {
                        "id":3,
                        "name": "ming",
                        "content": "test03"
                }]
             }
    res.json({
        statusCode:200,
        result:data.result,
        kind:2 
        
    })
})

app.post('/api/hello',(req,res) => {
    var data={
                "code": "200",
                "msg": "success",
                "result": [{
                    "id":10,
                    "name": "laney",
                    "content": "hello world"
                }]
         };
    res.json({
        statusCode:200,
        result:data.result 
    })
})
app.get('/api/school',(req,res) => {
    var data={
                "code": "200",
                "msg": "success",
                "result": [{
                    "id":10,
                    "name": "laney",
                    "content": "hello world"
                }]
         };
    res.json({
        statusCode:200,
        result:data.result 
    })
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
