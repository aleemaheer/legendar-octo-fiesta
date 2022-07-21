const fs = require('fs');

fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    data = JSON.parse(data);
    let targetId = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === 1) {
            targetId = i;
            break;
        }
    }
    console.log(targetId);

    for (let key of data) {
        for (let index in data) {
            if (key[index] === 2) {
                console.log("Target " + key[index]);
                break;
            }
            console.log("Second loop " + key[index]);
        }
        console.log("First loop" + key);
    }
})