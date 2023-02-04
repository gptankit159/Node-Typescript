import http from 'http';

http
    .createServer((req,res)=>{
        res.end("hello, Ankit , What's up!")
    })
    .listen(5002,()=> console.log("listening to 5001."))
