const http = require("http");
const [path,fs] = [require("path"),require("fs")];


const server = http.createServer(function(req,res){
    // res.writeHead(200,{
    //     "content-type":"text/html"
    // });


   
   

    // fs.createReadStream(path.join(__dirname,"./index.html")).pipe(res);

}).listen(3000,()=>{
    console.log("running...")
});


server.on("request",(req,res)=>{
   
    fs.readFile(path.join(__dirname,"./index.html"),"utf8",(err,data)=>{
        // res.setHeader('Content-Type', 'text/html');
        res.write(data)
        res.end();
    })

})


