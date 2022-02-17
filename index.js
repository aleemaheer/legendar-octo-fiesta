/**
 * This file will read the json files from public/data/
 * Then this will write the data in the a one json file
 * And sends the whole json data in the api
 */

const path = require('path');
const fs = require('fs');
// Reading a json file
const read_directory_path = path.join(__dirname, 'public', 'data');
const files = fs.readdirSync(read_directory_path);
const profiles = files.map((file) => {
    const data = JSON.parse(
      fs.readFileSync(`${path.join(__dirname, 'public', 'data', file)}`, 'utf8'),
    )
    return {
      name: file.split(',')[0],
      ...data,
    }
  })
// generate list file
const output = profiles.map((profile) => ({
    name: profile.name,
    gender: profile.gender,
    age: profile.age
}))
//fs.writeFileSync(writeDirectoryPath, JSON.stringify(output))
const writeDirectoryPath = path.join(__dirname, 'public', 'list.json');
console.log(output);
fs.writeFileSync(writeDirectoryPath, JSON.stringify(output));

// RESTFUL API

const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(output));
})

app.listen(8000, () => console.log("Server is running on 8000."))