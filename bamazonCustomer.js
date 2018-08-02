var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "gwbootcamp",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    Items();
  });

  function Items() {
    connection.query("SELECT * FROM products", function (err, res) {
      if (err) { console.error(err); }
      displayProducts(res);
    });
  }

  function displayProducts(products){
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
  };

  inquirer.prompt([

    {
      type: "input",
      name: "id",
      message: "What is the ID of the item you would like to purchase?"
    },
  ])
