// import { Datas } from "./Datas"
// const Datas=require('./Datas')
// const http=require("http")
// const details=JSON.stringify(Datas)

// const app=http.createServer((req,res)=>{
//     if(req.url==='/home')
//     {
//         res.write("Node.js is an open-source and cross-platform JavaScript runtime environment, It is used to run JavaScript code outside a web browser, and is particularly suited for data-intensive applications due to its asynchronous, event-driven model. Node.js is often used to build server-side web applications, real-time applications, and command-line tools.")
//         res.write('Here is a list of some of the benefits of using Node.js:It is fast and efficient.It is scalable.It is easy to learn and use.It has a large and active community.')
//         res.end(); 
//     }
//     else if(req.url==='/posts' && req.method=='GET')
//     {
//         // res.write("<h6>home page posts</h6>")
//         res.write(details)
//         res.end(); 
//     }
//     else if(req.url==='/second')
//     {
//         res.write("<table border='1px'><tr><td>second page</td></tr><tr><td>second page</td></tr><tr><td>second page</td></tr></table>")
//         res.end(); 
//     }
//     else{
//         res.write("404 Page not Found!");
// //         res.end();
//     }
   
// })

//     app.listen(3000,()=>{
//         try{
//         console.log("server is running on port no :3000")
//         }
//         catch(err){
//             console.log("error",err)
//         }
    

// })
const express = require("express");
const apps = express();
const BlogRouter = require("./BlogRouter");
apps.use("/api/main",BlogRouter); //middleware
apps.get("/", (req, res) => {
    res.send("This is my Home Page");  //.send has both -> .write and .end
})

apps.post("/post/data", (req, res) => {
    res.send("Posting... Data");
})
apps.listen(4500, () => {
    try {
        console.log("This is running on Port 4500");
    }
    catch (err) {
        console.log("Error Occurred", err);
    }
})