const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "htgrj8r1",
    host: "aleemaheer",
    port: 5432,
    database: "perntodo"
})


async function getData() {
    try {
        const data = await pool.query("SELECT * FROM car;");
        console.table(data.rows);
    } catch (err) {
        console.log(err);
    }
}

async function insertData(description: string) {
    try {
        const data = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);   //pool.query("INSERT INTO car (id, make, model, price) VALUES ($1, $2, $3, $4 RETURNING *", [id, make, model, price]);
        console.log("Successfully Inserted");
    } catch (err) {
        console.log(err);
    }
}

//getData();
insertData("Meow Meow");
//getData();