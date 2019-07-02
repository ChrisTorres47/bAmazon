var inquirer = require("inquirer");
var mysql = require("mysql");
var Table = require("cli-table");
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
displaytable();
});
 function displaytable(){
    connection.query("SELECT * FROM products", function(err, data){
        if (err) throw err;
        var table = new Table({
            head: ['ID','Product Name', 'Department', 'Price', 'Quantity'],
            colWidths: [10,25,25,10,14]
        })
        for(var i = 0; i <data.length; i++){
            table.push([
                data[i].id, data[i].product_name, data[i].department_name, data[i].price, data[i].stock_quantity
            ])
            
        }
        console.log(table.toString());
        start();
})
}

function start(){
    connection.query("SELECT * FROM products", function(err,res){
        if (err) throw err;

        inquirer.prompt([{
            type: "input",
            message: "What is the ID of the item you would like to buy?",
            name: "ItemOfPurchase"
        },{ 
            type: "number",
            message: "How many units would you like to buy?",
            name: "UnitsBought"
        }])
        .then(function(answer){
            if(res[parseInt(answer.ItemOfPurchase) - 1].stock_quantity > answer.UnitsBought){
              var newStock =  (parseInt(res[parseInt(answer.ItemOfPurchase) - 1].stock_quantity)) - (parseInt(answer.UnitsBought))
                newStock
                displaytable();
            }else{
                console.log("Not enough quantity")
            }
            // var correctid = parseInt(answer.ItemOfPurchase) - 1
            // console.log(res[correctid].stock_quantity)
        // if(answer.UnitsBought.stock_quantity > 0){
                
        // start();
        // } else{
        // console.log("There is not enough stock of this product for that purchase")
        // }
    })
    })
}


// inquirer.prompt([{
//     type: "number",
//     message: "How many units would you like to buy?",
//     name: "UnitsBought"
// }])