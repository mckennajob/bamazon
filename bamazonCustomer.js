var inquirer = require("inquirer");
var mysql = require("mysql");
var easytable = require("easy-table");


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bamazon'
});

//
var displayData = () => {


  connection.query('SELECT * FROM products', function (error, results, fields) {
    if (error) throw error;// check for erro
    // console.log(results);

    var t = new easytable

    // results
    // [{product: "", dep}, {}, {}]
    results.forEach(function(obj) {
      t.cell('Item Number', obj.item_id)
      t.cell('Product Name', obj.product_name)
      t.cell('Product Department', obj.department_name)
      t.cell('Product Price', obj.price)
      t.cell('Product Quantity', obj.stock_quantity)
      t.newRow()
    })

    console.log(t.toString());

    // askQuestions();
    purchaseQ();

  });
}

displayData();




//   product_name VARCHAR(30) NOT NULL ,
// department_name VARCHAR(30) ,
//   price INTEGER(10),
//   stock_quantity INTEGER (100),

var purchaseQ = () => {

  inquirer.prompt ([
    {
      name: "itemId",
      type: "input",
      message: "Which Item ID would you like to purchase?"
      // 7
    },
    {
      name: "quantity",
      type: "input",
      message: "How many items would you like to purchase?"
      // 2
    }

  ]).then(answers => {

    var {
      itemId,
      quantity
    } = answers;

    var qs = "SELECT stock_quantity, price FROM products WHERE item_id = ?"
    // var valAns = `VALUES ('${itemId}', '${quantity}')`;



    connection.query (qs , [itemId],function (err, result){
      // TODO
      // Search by ID
      // Check if we have enough quantity
      // Else Not insuffient quantity

      if(err){
        console.log("Error: ", err);
      } else{

         console.log("Inquirer: It's a  ", typeof quantity);
          console.log("SQL: It's a  ", typeof result[0].price);
          if(parseInt(quantity) > result[0].stock_quantity){
              // Check for insufficient
              console.log("Not enough, ");
          } else{
            // We have enough

            var totalPrice = parseInt(quantity) * result[0].price;

            var remainingQuantity = result[0].stock_quantity - parseInt(quantity);

            connection.query(`UPDATE products SET stock_quantity = '${remainingQuantity}' WHERE item_id = '${itemId}'`, function(err, results) {
              if (err) {
                console.log("oh shit theres an error!");
              }else {
                console.log("The quantity has been updated!");
                displayData();
              }
            })


            console.log("Total Cost: ", totalPrice);
            console.log("Remaining Items: ", remainingQuantity);



          }

      }


    });

  })


}





// var askQuestions = () => {
//
//   inquirer.prompt([
//     {
//       name: "product",
//       type: "input",
//       message: "Please tell me your product's name."
//     },
//     {
//       name: "department",
//       type: "input",
//       message: "Please tell me your product's department."
//     },
//     {
//       name: "price",
//       type: "input",
//       message: "Please tell me your product's price."
//     },
//     {
//       name: "quantity",
//       type: "input",
//       message: "Please tell me your product's quantity."
//     }
//
//   ]).then(answers => {
//     // answers.
//     // var answers = {
//     // product: 'paper',
//     // department: 'office ',
//     // price: '5',
//     // quantity: '10'
//     // }
//
//
//     // Destructuring
//     // String Template
//     var {
//       product,
//       department,
//       price,
//       quantity
//     } = answers;
//
//
//     // console.group()
//     //   console.log("Product: ", product);
//     //   console.log("Department: ", department);
//     //   console.log("Price: ", price);
//     //   console.log("Quantity: ", quantity);
//     // console.groupdEnd();
//
//
//     // connection.connect(function(err) {
//     //   if (err) throw err;
//     // console.log("Connected!");
//
//
//     var sql = "INSERT INTO products (product_name, department_name, price, stock_quantity)";
//     var values = `VALUES ('${product}', '${department}', '${price}', '${quantity}')`;
//     connection.query(sql + values, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//
//       connection.end();
//       displayData();
//       // });
//     });
//
//     console.log(answers);
//   });
// }
