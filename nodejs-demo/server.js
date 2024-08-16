/*
    1. import express
    2. import cors & add to express
    3. create http routes
    4. start the server
*/
import express from 'express';
import cors from 'cors';
import {save, findAll} from './employee-crud.js';
let app = express();
app.use(cors()); // adding cors to the express object
app.use(express.json()); // json parser: converts JSON to Javascript, if request body has JSON

// post method that access request body 
app.post('/employees', async (request, response) => {
    // reading the request body
    let body = request.body;
    try {
        let [result,fields] = await save(body);
        response.status(201).json({"message":`Stored id ${result.insertId}`});
    } catch(err) {
        response.status(400).json({"err":"Store failed, something went wrong"});
    }
    //response.status(200).json([{"1":body},{"2":body}]);
});

// http routes : app.get(url, callbackFn(req, res))
app.get('/employees', (request, response) => {
    //response.status(200).json({"message":"Hello Guest"});
});
app.get('/employees/:id', (request, response) => {
    let id = request.params.id; // id will be in string format by default
    response.status(200).json({"message":"Hello "+id});
});
// start the server
app.listen(8888, () => console.log("Server running in 8888, plz restart when you change code"));
