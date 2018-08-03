var mysql = require("mysql");
var inquirer = require("inquirer");

var allItems = [];
var connection = mysql.createConnection({
 host: "localhost",

 
 port: 3306,
 user: "root",

 password: "gwbootcamp",
 database: "bamazon"
});

connection.connect(function(err) {
   if (err) throw err;
   console.log("connected as id " + connection.threadId);
   Items();
 });

 function ReturnStock(id)
 {
   for (var i = 0; i < allItems.length; i++){
       if(allItems[i].id == id)
       {
         return allItems[i].stock_quantity;
       }
   }

 }

 function Items() {
   connection.query("SELECT * FROM products", function (err, res) {
     if (err) { console.error(err); }
     displayProducts(res);
   });
 }

 function displayProducts(products){
   allItems = products;
     console.log('Products');
     for (var i = 0; i < products.length; i++){
       console.log(
           "Product ID: " + products[i].id +
           " | Product: " + products[i].product_name +
           " | Department: " + products[i].department_name +
           " | Price: " + products[i].price +
           " | Quantity available:  " + products[i].stock_quantity
         );

     }
     id();
 };

 function id(){
    inquirer.prompt([

   {
     name: "id",
     type: "input",
     message: "What is the ID of the item you would like to purchase?"
   },
   {
     name: "checkQuan",
     type: "input",
     message: "How many of that item would you like?"
   }
 ]).then(function(inquirerResponse) {

   var stock_quantity = ReturnStock(inquirerResponse.id);

   console.log("inventory left: " + stock_quantity);

   if(parseInt(stock_quantity) < parseInt(inquirerResponse.checkQuan))
   {
     console.log("Sorry we have less quantity");
   }
   else{
     console.log("Awesome we have enough inventory");
   }

 }
 )
}