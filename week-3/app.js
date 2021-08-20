const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.set('view engine', 'pug');
app.use(cookieParser());

// assignment 3: connect to backend API by AJAX
app.use(express.static('public'));

// assignment 1: your first web server
app.get('/', (req, res) => {
    res.render('index');
});

// assignment 2: build backend API for front-end
app.get('/getData', (req, res) => {
    let result;
    if (!req.query.number) {
        result = "<h1>Lack of Parameter</h1>";
    } else {
        if (isNaN(req.query.number)) {
            result = "<h1>Wrong Parameter</h1>";
        } else {
            result = ((1 + Number(req.query.number)) * Number(req.query.number)) / 2;
        }
    }
    res.send(`${result}`);
});

/* assignment 4: HTTP Cookie (advanced optional)
第一步：先寫好 myName.pug => 
如果不存在 username 的 cookie，則出現 form(將data傳到/trackName) 讓人填寫；
如果存在 username 的 cookie，則出現 "Hello , {username}" 的字樣，以及可以清除 cookie 的 button 

第二步：寫 /trackName 的 API =>
讓 form 提交的 data 存到 /trackName，變成 query string 後，再弄到cookie裡面
因為在 /myName 提交 form 之後，url 會被導向 /trackName，所以要再導回 /myName 

第三步：寫 /myName 的 API =>
把第一個步驟寫的 myName.pug render進來

第四步： 寫 /goodbye 的 API =>
當按下清除cookie的按鈕時，會連到 /goodbye 並清除 cookie，再導回原本的頁面 /myName
*/

app.get('/myName', (req, res) => {
    res.render("myName", { name: req.cookies.username })

});

app.get("/trackName", (req, res) => {
    res.cookie("username", req.query.username);
    res.redirect("/myName");
});

app.post("/goodbye", (req, res) => {
    res.clearCookie("username");
    res.redirect("/myName");
  });

app.listen(3000);