var inquirer = require("inquirer");
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id" + connection.threadId)
})

inquirer.prompt([{
    type: "list",
    message: "What is the ID of the item you would like to buy?",
    name: "ItemOfPurchase"
}])

inquirer.prompt([{
    type: "number",
    message: "How many units would you like to buy?",
    name: "UnitsBought"
}])