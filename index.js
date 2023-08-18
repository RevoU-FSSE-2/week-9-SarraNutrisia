require("dotenv").config();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;

const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: "root",
    password: "7SGb4iEFRZs4nogFJe3a",
    database: "railway",
    port: 6689,
});

console.log(process.env.MYSQLHOST);

db.connect((err) =>{
    if(err){
        console.log('Error connecting to the DB' + err);
        return;
    }

    console.log('connected')
});

app.use(bodyParser.json());

app.get("/user", (req, res) => {
    const userId = req.params.id;
    const sql = 'select * from tb_user';

    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error("Error getting user information:", err);
            res.status(500).send("Error getting user information");
            return;
        }
        const user = result;
        res.json(user);
    });
});

app.get("/transactions", (req, res) => {
    const userId = req.params.id;
    const sql = 'select * from tb_transaction';

    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error("Error getting user information:", err);
            res.status(500).send("Error getting user information");
            return;
        }
        const user = result;
        res.json(user);
    });
});

// This functions below to add a transaction 
app.post("/transactions", (req, res) => {

    const { user_id, type, amount } = req.body;
    const sql = "INSERT INTO tb_transaction (user_id, type, amount) VALUES (?,?,?)";

    db.query(sql, [user_id, type, amount], (err, result) => {
        if (err) {
            console.error("Error adding transaction:", err);
            res.status(500).send("Error adding transaction");
            return;
        }
        res.json({ id: result.insertId });
    });
});

// This function below to get user information with balance and total expense
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    const sql = `
    SELECT a.id, a.name, a.address,
    SUM(CASE WHEN b.type = 'expense' THEN b.amount ELSE 0 END) AS expense,
    SUM(CASE WHEN b.type = 'income' THEN b.amount ELSE 0 END) AS total_income
    FROM tb_user as a
    LEFT JOIN tb_transaction as b ON a.id = b.user_id
    WHERE a.id = ?
`;

db.query(sql, [userId], (err, result) => {
    if (err) {
        console.error("Error getting user information:", err);
        res.status(500).send("Error getting user information");
        return;
    }
    const user = result[0];
    const balance = user.total_income - user.expense;
    user.balance = balance;
    delete user.total_income;
    res.json(user);
    });   
});

// This functions below to update transaction
app.put("/transactions/:id", (req, res) => {
    const id = +req.params.id;
    const { type, amount, user_id } = req.body;
    const sql = "UPDATE tb_transaction SET type = ?, amount = ?, user_id = ? WHERE id = ?";
    db.query(sql, [type, amount, user_id, id], (err, result) => {
        if (err) {
            console.error("Error updating transaction:", err);
            res.status(500).send("Error updating transaction");
            return;
        }
        res.json( { id });
    });
});

app.delete("/transactions/:id", (req, res) => {
    const id = +req.params.id;
    const sql = "DELETE FROM tb_transaction WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Error deleting transaction:", err);
            res.status(500).send("Error deleting transaction");
            return;
        }
        res.json({ id: id });
    });
});

app.listen(port, () => {
    console.log('Server running in ' + port);
}); 