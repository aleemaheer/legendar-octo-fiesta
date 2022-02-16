const path = require('path');
const fs = require('fs');

// Reading a json file
const read_directory_path = path.join(__dirname, 'public', 'data');
const files = fs.readdirSync(read_directory_path);
/*
const data = JSON.parse(
    fs.readFileSync(`${path.join(__dirname, 'public', 'data', file)}`, 'utf-8'),
)
return {
    name: file.split(' : ')[0]
}

*/

const profiles = files.map((file) => {
    const data = JSON.parse(
      fs.readFileSync(`${path.join(__dirname, 'public', 'data', file)}`, 'utf8'),
    )
    return {
      name: file.split(' : ')[0],
      ...data,
    }
  })

// generate list file

const output = profiles.map((profile) => ({
    name: profile.name,
    gender: profile.gender
}))

//fs.writeFileSync(writeDirectoryPath, JSON.stringify(output))

console.log(output);