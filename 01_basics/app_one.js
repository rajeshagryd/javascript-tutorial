const readlile = require("readline")
const fs = require('fs')
const http = require("http");
const url = require("url")
const replaceHtml = require('./Module/replace_html')
const events = require('events')

const user = require("./Module/user")

/* 
    =================Reading Input and Writing Out=========== 

    const r1 = readlile.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r1.question("What is your name: ", (name) => {
        console.log("My name is ", name);
        r1.close(); // Whenever interface will be close, it will emit the close() event. 
    })
    //If we want to listen the close() event
    r1.on('close', () => {
        console.log("interface closed");
        process.exit(0);
    })
*/
/*
    let input = fs.readFileSync("./file/input.txt", 'utf-8')
    // console.log(input);
    let content = `Write Data from input file: ${input} \n`
    fs.writeFileSync("./file/output.txt", content)
*/

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'))


    // Solution 1: Using read and write files
    const html = fs.readFileSync("./index.html", 'utf-8')
    const productHtml =fs.readFileSync("./template/products.html", 'utf-8')
    const productJson = JSON.parse(fs.readFileSync("./data/product.json", 'utf-8'))

    // Create HTTP Server
    const server = http.createServer((request, response) => {
        let { query, pathname: path } = url.parse(request.url, true)
        if(path === "/" || path.toLocaleLowerCase() === '/home'){
            response.writeHead(200, {
                'Content-Type': 'text/html',
                'my-Header' : 'Rajesh Kumar'
            });
            response.end(html.replace('{{%CONTENT%}}', 'This is HOME Page'));
        } else if (path.toLocaleLowerCase() === '/contact'){
            response.end(html.replace('{{%CONTENT%}}', 'This is CONTACT Page'));
        } else if(path.toLocaleLowerCase() === '/product'){
            if(!query.id){
                let productArray = productJson.products.data.items.map((prod) => {
                    return replaceHtml(productHtml, prod)
                });
                response.writeHead(200, {'Content-Type':'text/html'})
                response.end(html.replace('{{%CONTENT%}}', productArray.join(',')))
            } else{
                response.end("the product id is "+ query.id)
            }
        } else {
            response.statusCode = 404;
            response.end(html.replace('{{%CONTENT%}}', 'This is 404 Page'));
            
        }
    })
    server.listen(8080, '127.0.0.1', () => {
        console.log("Server is running on port 8000");
    })

    // let myEmitter = new events.EventEmitter(); // This also created in user module and import here
    let myEmitter = new user()


    myEmitter.on('myEmitted', (id, name) => {
        console.log(`User ${name} created an id ${id}`);
    } )

    myEmitter.on('myEmitted', (id, name) => {
        console.log(`User ${name} Added an id ${id}`);
    })

    myEmitter.emit('myEmitted', 101, 'Rajesh')              

/*
    // Soluton 2: Using Readable and writable stream Method
    server.on('request', (req, res) => {
        // Readable and Writable Stream
        let readStream = fs.createReadStream('./file/input.txt', 'utf-8')

        readStream.on('open',() => {
            console.log("File opened") 
        })

        readStream.on('data', (chunks) => {
            res.write(chunks)
        })

        readStream.on('error', (error) => {
            res.end(error.message)
        })

        readStream.on('end', () => {
            console.log('There will be no more data coming')
            res.end();
        })
    })
*/

// Solution 3: Using Pipe Method

    server.on('request', (req, res) => {
        let readStream = fs.createReadStream('./file/input.txt', 'utf-8')
        readStream.pipe(res)
    })
    const a = '100';
    // convert number of sting into numeric 
    console.log(a*1, typeof(a*1));
    console.log(+a, typeof(+a));
    console.log(Number(a), typeof(Number(a)));
    console.log(parseInt(a));