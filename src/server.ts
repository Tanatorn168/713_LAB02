import express, { Request, Response } from 'express'
const app = express()
const port = 3000

app.get('/test', (req, res) => {
    let returnObj = {
        name: 'test',
        age: 20,
        address: 'Thai'
    }
    res.send(returnObj);
})
   
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
