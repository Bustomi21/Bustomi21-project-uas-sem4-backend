const express = require('express')
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://dbbustomi:8qjehE9HQTMdMx4E@atlascluster.cgjkww6.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'dbbustomi';
const app = express()
const port = process.env.PORT || 5000

app.get('/', async(req, res) => {

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('tb_web');
  const data = await collection.find({}).toArray();
res.json({data})

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})