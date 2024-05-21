const quotes = [
    "Be yourself; everyone else is already taken.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "No one can make you feel inferior without your consent.",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
    "Life isn't about finding yourself. Life is about creating yourself."
];

function getRandom(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);

};

require("dotenv").config();
const http = require("http");
const port = process.env.Port || 8080; 
const host = process.env.Host || 'localhost';

const server = http.createServer((req, res) => {
    let min = 0;
    let max = quotes.length;
    let num = getRandom(min, max);
    
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.end(process.env.Message);
    res.end(quotes[num]);
});

server.listen(port, host, () => {
    console.log('Server online');
})
