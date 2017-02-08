//***********JavaScript Basics Section*************

// var orderId = "ORD-9001";
// console.log(orderId);

//Undefined:
// var orderId;
// console.log(orderId);

// orderId = 9001;
// console.log(orderId);

// 'use strict';   //Use strict = ES5 ~ does not allow js to create global variables.
// orderId = 9001;
// console.log(orderId);

// var orderId = 9001;  //"9001"  //"string"
// console.log(typeof orderId);

//boolean:
// var isActive = true;
// console.log(typeof isActive);

// var order = {
//   orderId: 9001,
//   isActive: true
// };
// console.log(typeof order);
// //object

// var cancelledOrders = [9001, 9002, 9003];
// console.log(typeof cancelledOrders);
// //object

// var order = null;
// console.log(typeof order);
// //object

// function cancelOrder(orderId) {

// };
// console.log(typeof cancelOrder);


//FUNCTIONS

// function printOrder() {
//   console.log('print Order');
// }
// printOrder();

// function printOrder(orderId) {
//   console.log('Printing order: ' + orderId);
// }
// printOrder('9002');

// function printOrder(orderId) {
//   console.log('Printing the order: ' + orderId);
// }
// printOrder('7465');

// printOrder('9082');  //Calling a function before it is defined.

// function printOrder(orderId) {
//   console.log('Printing order: ' + orderId);
// }

// function calcTotalPrice(quanity, price){
//   console.log('Total price: ' + (quanity*price));
// }
// calcTotalPrice(5, 9.00);

// function calcTotalPrice(quanity, price, currency){
//   console.log(currency);
// }
// calcTotalPrice(2, 4.00);

// function calcTotalPrice (quanity, price){
//   return quanity * price;
// }
// var totalPrice = calcTotalPrice(2, 4.00);
// console.log(totalPrice);

// function calcTotalPrice(quanity, price) {
//   return quanity * price;
// }

// var totalPrice = calcTotalPrice(2,4.00);
// console.log(totalPrice);

// totalPrice = calcTotalPrice(3, 3.00);
// console.log(totalPrice);

// function getOrder() {
// //If a funciton does not return a value, js will throw underfined.  Usually.
// };
//  var order = getOrder();
//  console.log(order);

// var activateOrder = function(){
//   console.log('Order activated');
// }
// console.log(typeof activateOrder);

//Funciton Expression

// var activateOrder = function(){
//   console.log("Order activated 7");
// };
// activateOrder();

//IF & SWITCH Statements

// var total = 99.99;
// var freeShipping = false;

// if (total >= 100.00){
//   freeShipping = true;
// }else{
//   freeShipping = false;
// }
// console.log(freeShipping);

// var total = 99.99;
// var freeShipping;
// var savings;

// if (total >= 100.00){
//   freeShipping = true;
//   savings = 29.99;
// } else {
//   freeShipping = false;
//   savings = 0;
// }
// console.log(savings);

// var orderType = 'personal';
// var shipMethod;

// if(orderType == 'business'){
//   shipMethod = 'FedEx';
// } else if (orderType == 'personal') {
//   shipMethod = 'UPS Ground';
// } else {
//   shipMethod = 'USPS';
// }

// console.log(shipMethod);

// var orderType = 'business';
// var shipMethod;

// switch (orderType){
//   case 'business':
//   shipMethod = "FedEx";
//   break;

//   case 'personal':
//   shipMethod = "UPS Ground";
//   break;

//   default: 
//   shipMethod = 'USPS';
// }
// console.log(shipMethod);

// var orderType = 'unknown';
// var shipMethod;
// switch (orderType){
//   case 'business':
//   case 'personal':
//   shipMethod = 'UPS Ground';
//   break;

//   default:
//   shipMethod = 'USPS';
// }
// console.log(shipMethod);

// var orderTotal = 100;
// var discount;

// switch(true){
//   case orderTotal >= 50 && orderTotal < 75:
//   discount = 10;
//   break;

//   case orderTotal >= 75 && orderTotal < 100:
//   discount = 20;
//   break;

//   case orderTotal >= 100:
//   discount = 30;
//   break;

//   default:
//   discount = 0;
// }
// console.log(discount);

// WHILE AND DO WHILE
// var lineItemCount = 6;
// var currentItem = 0;
// while (currentItem < lineItemCount){
//   console.log("item: " + currentItem);
//   currentItem++;
// }

// var lineItemCount = 6;
// var currentItem = 0;
// while(currentItem < lineItemCount){
//   console.log("item: " + currentItem++);
// }

// var lineItemCount = 3;
// var currentItem = 0;
// do{
//   console.log("itme: " + currentItem);
//   currentItem++;
// } while (currentItem < lineItemCount);

// var lineItemCount = 8;
// for ( var i = 0; i < lineItemCount; i++)
//   console.log(i);

// var lineItemCount = 5;
// for(var i = 0; i < lineItemCount; i++){
//   console.log(i);
//   if(i == 3)
//     break;
// }

// var lineItemCount = 5;
// for (var i = 0; i < lineItemCount; i++){
//   if(i == 1)
//     continue;
//   console.log(i);
// }

// var lineItemCount = 5;

// outerLoop:
// for (var i = 0; i < lineItemCount; i++){
//   for (var j = 0; j < 3; j++){
//     if(j == 1)
//       continue outerLoop;
//   }
//   console.log(i);
// }

// var lineItem = {
//   product: "Widget 1",
//   quanity: 4,
//   price: 9.50
// };

// // for (var field in lineItem)
// // console.log(field);
// for (var field in lineItem)
//   console.log(field + " : " + lineItem[field]);

//***************Variables, Types, and Scope*********************

//Hoisting

// var total = price * quanity;
// var price = 3.00;
// var quanity = 5;
// console.log(total);

// showProduct();  Hoising ~ Avoid it.  
//If function is assigned to a variable it will not work. 

// var showProduct = function () {
//   console.log('Showing a Product');
// }
// showProduct();

// showProduct();
// function showProduct () {
//   console.log('Showing a Product, yo');
// }

// var quanity = 2;
// var price = 0.99;
// console.log(quanity * price);

// var price = "0.99";
// console.log(typeof price);

//STRINGS

// console.log("Hello " + "World!");
//Escape double quotes.
// console.log("The order is \"In Progress\"");

// var productType = 'Hardware in dis isle';
// console.log(productType.length);

// var productType = "  Hardware  ";
// console.log('[' + productType.trim() + ']');

// var productType = 'Hardware';
// console.log(productType.toUpperCase());
// console.log(productType.toLowerCase());

//Boolean Values

// var isSpecial = true;
// if (isSpecial){
//   console.log("It's true!");
// } else {
//   console.log("Nope!");
// }

// console.log(Boolean(0));

// var value = 99.99;
// console.log(typeof !!value);

// var value = "no value";
// console.log(!!value);

//UNDEFINED AND NULL

// var productId = null;
// console.log(typeof productId);

// console.log(typeof null);

// console.log(underfined == null);

// console.log(undefined === null);

//GLOBAL SCOPE ~ NOT IN A FUNCTION

// var productId = "R2D2";

// console.log(productId);
// console.log(window.productId);

// console.log(this === window);

// var description = 'Hardware product';
// function updateProduct () {
//   description = 'update product, yo';
// }

// updateProduct();
// console.log(description);

//FUNCTION SCOPE

// function updateProduct(){
//   var description = "updated product";
//   var updateProductId = function(){
//     console.log(description);
//   }
//   updateProductId();
// }
// updateProduct();

// var description = 'original product';
// function updateProduct(){
//   var updateProductId = function () {
//     console.log(description);
//   }
//   updateProductId();
// }
// updateProduct();

//BLOCK SCOPE

// 'use strict';
// try {
//   throw 123;
// } catch (e){
//   console.log(e);
// }

//*********OPERATORS***************

//Addition

// var total = 5 + 3;
// console.log(total);

// var total = 5.1 + 3.3;
// console.log(total);

// var total = 5.1 + 3.3;
// console.log(total.toFixed(2));

// var id = "PRD" + 2000;
// console.log(id);

// var id = 2000 + undefined;
// console.log(id);

// var id = 2000 + null;
// console.log(id);

//SUBTRACTION

// var total = 30 - 20;
// console.log(total);

// var total = 9*3;
// console.log(total);

//Unary Operators

// var level = 5;
// ++level;
// console.log(level);

// var level = 5;
// level++;
// console.log(level);

//BOOLEAN OPERATORS

// var value = !true;
// console.log(value);

// var value = 199;
// console.log(value);

// var value =!"";
// console.log(value);

// var value = !"A";
// console.log(value);

// var value = !new Object();
// console.log(value);

// var value = !NaN;
// console.log(value);

// var value = !!false;
// console.log(value);

// //!! converts value to it's boolean value.

// var value = true && true;
// var value = false && true;
// var value = false && false;
// console.log(value);

// var obj = {
//   calc: "Logical AND"
// };
// var value = obj && 99;
// console.log(value);

//obj && retruns the value.

// var obj = {
//   calc: "Logical AND"
// };
// var value = obj && 0;
// console.log(value);

// var obj = {
//   calc: "Logical AND"
// };
// var value = obj && obj;
// console.log(value);

// var obj = {
//   calc: "Logical AND"
// };
// var value = true && obj;
// console.log(value);

// var value = null && 99;
// console.log(value);

// // var value = "Z" && undefined;
// // var value = "Z" && NaN
// // var value = false && productId;
// var productId = 5;
// var value = false && ++productId;
// // console.log(productId);
// var value = true || true;
// var value = true || false;
// var value = false || true;

// var obj = {
//   calc: "Logical OR"
// };
// var value = obj || 99;

// var defaultSettings = {
//   who: 'default'
// };
// var userSettings = {
//   who: 'user'
// };
// var value = userSettings || defaultSettings;

// var defaultSettings = {
//   who: 'default'
// };
// var userSettings;
// var value = userSettings || defaultSettings;

// console.log(value);

//EQUALITY OPERATORS

// if(true == 1){
//   console.log('true');
// } else {
//   console.log('false');
// }

// if(true == 2){
//   console.log('true');
// } else {
//   console.log('false');
// }

// if(false == 0){
//   console.log('true');
// } else {
//   console.log('false');
// }

// if(42 == '42'){
//   console.log('true');
// } else {
//   console.log('false');
// }

// var obj = {
//   valueOf: function(){return 42;}
// }; 
// if (42 == obj){
//   console.log('true');
// } 
// else {
//   console.log('false');
// }

// var obj = {
//   name: "Trigger"
// };
// var obj2 = {
//   name: "Trigger"
// };
// if (obj == obj2){
//   console.log('true');
// } else {
//   console.log('false');
// }

// var obj = {
//   name: "Trigger"
// };
// var obj2 = obj;
// if(obj == obj2){
//   console.log('true');
// } else {
//   console.log('false');
// }

// if(null == undefined){
//   console.log('true');
// } else {
//   console.log('false');
// }

// if (undefined == 0){
//   console.log('true');
// } else {
//   console.log('false');
// }

// if(null == 0){
//   console.log('true');
// } else {
//   console.log('false');
// }

// if (42 != 'forty-two'){
//   console.log('true');
// } else {
//   console.log('false');
// }

// if (55 === "55"){
//   console.log('true');
// } else {
//   console.log('false');
// }

//MISC OPERATORS:

//Compound assignment.
// var total = 6;
// total += 4;
// console.log(total);

// var total = 6;
// total *= 4;
// console.log(total);

// var total = 1;
// total <<= 2;
// console.log(total);

// var total = 6;
// total *= 4 + 1;
// console.log(total);

// var total = 99, tax = 9;
// console.log(total);
// console.log(tax);

// var total = (99, 88, 44);
// console.log(total);

// var total = [99, 88, 44];
// console.log(total);

//************ARRAYS AND REFERENCE TYPES*************

//Reference Types

// var o = {
//   name: "Jill"
// };
// console.log(o);

// var blog = {
//   name: "Ski Utah"
// };
// // console.log(blog.name);
// var updateBlog = blog;
// console.log(updateBlog.name);

// var blog = {
//   name: "Ski Utah"
// };
// var updateBlog = blog;
// blog.name = "Rocky Mtn Skiing";
// console.log(updateBlog.name);

// var blog = {
//   name: "Ski Utah"
// };
// var updateBlog = blog;
// updateBlog.name = "Rocy Mtn Skiing";
// console.log(blog.name);

// var blog = {
//   name: "Ski Utah"
// };
// function changeBlogName(localBlog){
//   localBlog.name = "no name";
// }
// changeBlogName(blog);
// console.log(blog.name);

// var a1 = [1, 2, 3];
// var a2 = a1;
// a1[0] = 99;
// console.log(a2[0]);

//ARRAYs

// var entries = new Array ("Trains", "Planes", "Automobiles");
// var entries = ['1', '2', '3'];
// var entries = ['Trains', 'Planes', 'Automobiles'];
// console.log(entries[2]);

// var entries = new Array(5);
// var entries = [];
// var entries = [,,,];
// var entries = ["Planes", "Trains"];
// entries.length = 1;
// var entries = ["P", "T", "A"];
// entries[42] = "Cars";
// // console.log(entries.length[1]);
// console.log(entries[42]);

// var entries = ["P", "T", "A"];
// entries[42] = "C";
// console.log(entries[42]);
// console.log(entries.length);

// var entries = ["Planes", "Trains", "Automobiles"];
// entries[entries.length] = "Bicycles";
// console.log(entries.length);

// var entries = ["Planes", "Trains", "Automobiles"];
// console.log(entries.toString());

// var ratings = [5,2,4];
// console.log(ratings.valueOf());

// var ratings = [5,2,4];
// console.log(ratings.join('|'));

// var wang = [1,2,3,4,5,6];
// console.log(wang.join('***weird***'));

// var ratings = [];
// ratings.push(5);
// ratings.push(2,4);
// console.log(ratings.length);
// console.log(ratings.pop());
// ratings.pop();
// console.log(ratings.length);
// var firstRating = ratings.shift();
// console.log(firstRating);
// var newCount = ratings.unshift(3);
// console.log(ratings[0]);
// console.log(newCount);

// var ratings = [1,2,3];
// var newRatings = ratings.concat([4,5,6],7,8);
// console.log(newRatings.length);

// var ratings = [1,2,3,4];
// var newRatings = ratings.slice(1,3);
// console.log(newRatings.toString());

// var ratings = [1,2,3,4];
// var newRatings = ratings.slice(-2);
// console.log(newRatings.toString());

// var ratings = [1,2,3,4];
// ratings.splice(1,2);
// console.log(ratings.toString());

// var ratings = [1,2,3,4];
// var removedRating = ratings.splice(0,1);
// console.log(removedRating.toString());

// var ratings = [1,2,3,4];
// ratings.splice(2,0,99);
// console.log(ratings.toString());

// var ratings = [1,2,3,4];
// ratings.splice(2,0,99,100,101);
// console.log(ratings.toString());

// var ratings = [1,2,3,4];
// ratings.splice(2,1,99);
// console.log(ratings.toString());

// var ratings = [1,2,3,4];
// ratings.slice(2,1,99,100,101);
// console.log(ratings.toString());

// var ratings = [1,2,3,4];
// ratings.reverse();
// console.log(ratings.toString());

// var ratings = [4,1,3,2];
// ratings.sort();
// console.log(ratings.toString());

// var ratings = [4,1,3,2,10];
// ratings.sort();
// console.log(ratings.toString());

// var ratings = [4,1,3,2,10];
// ratings.sort(function(value1, value2){
//   return value1 - value2;
// });
// console.log(ratings.toString());

// var ratings = [1,2,3,4,5,4,3,2,1];
// // console.log(ratings.indexOf(3));
// // console.log(ratings.indexOf('3'));
// // console.log(ratings.indexOf(66));
// console.log(ratings.lastIndexOf(1));

//DATE FUNDAMENTALS

// var dt = new Date();
// console.log(dt);

// var dt = new Date(0);
// console.log(dt);

// var dt = new Date('2/13/2015');
// var dt = new Date("Hi Mom");
// var dt = Date.UTC(2000,0);
// var dt = new Date(Date.UTC(2000,0));
// var dt = Date.now();
// var dt = new Date();

// console.log(dt.toString());

// var dt = new Date();
// console.log(dt.getFullYear());  

// var dt = new Date();
// dt.setFullYear(2025);
// console.log(dt.getFullYear());

//REGULAR EXPRESSIONS:

// var blogText = "Sam I Am";
// var pattern = /.m/g;
// // var result = pattern.exec(blogText);
// // console.log(result[0]);
// // console.log(result.index);
// // console.log(result.input);
// // result = pattern.exec(blogText);
// // console.log(result.index);
// // var result = pattern.exec(blogText);
// // while (result){
// //   console.log(result.index);
// //   result = pattern.exec(blogText);
// // }
// var result = blogText.match(pattern);
// console.log(result);

//******OBJECTS, JSON, PROTOTYPES****************

//Simple Objects and JSON

// var project = new Object();
// project.name = 'Project Master';
// project.securityLevel = 15;
// project.updateDueDate = function(){
//   return true;
// }
// console.log(project.updateDueDate());
// console.log(project.updateDueDate()); 
// console.log(project['number']);
// var field = 'securityLevel';
// console.log(project[field]);

// var project = {};
// project.name = 'Project Phoenix';
// console.log(project.name);

// var project = {
//   name: 'Project Phoenix',
//   securityLevel: 15,
//   updateDueDate: function(){
//     return true;
//   },
//   team: ['iguanaboy', 'cactusgirl', 'Buffy']
// };
// // console.log(project.updateDueDate());
// // console.log(project.name);
// console.log(project.team[2]);

// var project = {
//   tasks: [
//   {
//     taskName: 'first'
//   },
//   {
//     taskName: 'second'
//   }]
// };
// console.log(project.tasks[1].taskName);

//UNDERSTANDING PROTOTYPES
//Every JS Object has a prototype property.
//However, we don't always have access to it.
//The prototype property is simply an object.

//Working with Prototypes

// var project = {
//   name: 'Project Phoenix'
// };
// console.log(project.foo());
// console.log(project.toString());
// console.log(typeof Object.prototype);
// console.log(typeof Object.prototype.toString);
// console.log(project.prototype);
// console.log(typeof project.__proto__);
// console.log(project.__proto__ === Object);
// console.log(project.__proto__ === Object.prototype);

//Object.create() and Prototypes

// var project = {
//   securityLevel: 2
// };
// var secretProject = Object.create(project);
// console.log(secretProject.securityLevel);
// console.log(typeof secretProject.toString);
// var secretProject = Object.create(project);
// console.log(secretProject.__proto__ === Object.prototype); 
// console.log(secretProject.__proto__.__proto__ === Object.prototype);

//Object.defineProperty()

// var task = {};
// Object.defineProperty(task, 'text', {
//   value: 'Get this job done!'
// });
// console.log(task.text);

// 'use strict';
// var task = {};
// Object.defineProperty(task, 'text', {
//   value: "Get this job done!",
//   configurable: true
// });
// // task.text = task.text + '...NOW!!!!';
// // console.log(task.text);
// // for (var property in task){
// //   console.log(property);
// // }
// Object.defineProperty(task, 'text', {
//   value: 'Done!'
// });
// console.log(task.text);

// 'use strict';
// var task = {
//   _dueDate: '1/15/16'
// };
// Object.defineProperty(task, 'dueDate', {
//   get: function(){
//     return this._dueDate;
//   },
//   set: function(newValue){
//     this._dueDate = newValue;
//   }
// });
// task.dueDate = '2/2/16';
// console.log(task.dueDate);

// 'use strict';
// var task = {};
// Object.defineProperties(task, {
//   'text': {
//     value: 'New Task'
//   },
//   'dueDate': {
//     value: '1/15/16'
//   }
// });
// console.log(task.text + ' Due: ' + task.dueDate);

// 'use strict';
// var task = {};
// Object.defineProperties(task, {
//   'text': {
//     value: 'New Task'
//   }
// });
// var descriptor = Object.getOwnPropertyDescriptor(task, 'text');
// console.log(descriptor);

//MISC OBJECT FUNCTIONS
//Nothing to show.

//**************FUNCTIONS*******************

//Naming Function Expresssions

// var hireEmployee = function myHireEmployeeFn (name){
//  throw("ERROR");
// };
// // hireEmployee('JJ');
// var action = hireEmployee;
// action('JJ');

//CONSTRUCTOR FUNCTIONS:

// console.log(typeof Object);

//Cunstroctor functions always begin with a cap letter

// var Employee = function(name){
//   this.name = name;
// };
// var newEmployee = new Employee('JJ');
// console.log(typeof newEmployee);
// console.log(newEmployee.name);

// var Employee = function (name, boss){
//   this.name = name;
//   this.boss = boss;
// };
// var newEmployee = new Employee('JJ', 'JD Hogg');
// console.log(newEmployee.boss);

// var Employee = function (name){
//   this.name = name;
// };
// var e1 = new Employee('JJ');
// var e2 = new Employee('JV');
// console.log(e1 === e2);

// var Employee = function(name){
//   this.name = name;
// };
// Employee.prototype.giveRaise = function(){

// };
// var e1 = new Employee('JJ');
// var e2 = new Employee('Jv');

// var Employee = function (name) {
//   this.name = name;
//   this.salary = 50000;
// };
// Employee.prototype.giveRaise = function(raise){
//   this.salary += raise;
// };
// var e1 = new Employee('JJ');
// var e2 = new Employee('JV');
// e1.giveRaise(100000);
// console.log(e1.name + ' ' + e1.salary);
// console.log(e2.name + " " + e2.salary);

//THE THIS KEYWORD

// console.log(typeof this);
// console.log(this === window);

// var name = "Jeff";
// console.log(this.name);

// var employee = {
//   name: 'Jeff',
//   updateSalary: function(){
//     console.log(this);
//   }
// };
// employee.updateSalary();

// var employee = {
//   name: 'Jeff',
//   updateSalary: function(){
//     var fn = function(){
//       console.log(this);
//     };
//     fn();
//   }
// };
// employee.updateSalary();

// var Address = function(line1){
//   this.line1 = line1;
// };
// Address.prototype.updateZipCode = function(){
//   console.log(this);
// };
// var addr = new Address('123 State St.');
// addr.updateZipCode();

//CALLING FUNCTIONS with THIS

// var updateZipCode = function(){
//   console.log(this);
// };
// updateZipCode.call({});

// var updateZipCode = function(){
//   console.log(this);
// };
// updateZipCode.call({zip: '37122'});

// var updateZipCode = function(){
//   console.log(this);  
// };
// var zipCode = {
//   zip: '37122'
// };
// updateZipCode.call(zipCode);

// var updateZipCode = function(newZip, country){
//   console.log(newZip + ' ' + country);
// };
// var zipCode = {
//   zip: '90000'
// };
// updateZipCode.call(zipCode, '37122', 'usa');

// var updateZipCode = function (newZip, country){
//   console.log(newZip + ' ' + country);
// };
// var zipCode = {
//   zip: '898989'
// };
// updateZipCode.apply(zipCode, ['22222', 'Canada']);

//CLOSURES:  Functions that persist.  Inclues funcitons and all the variables.

// var salaryUpdater = function(salary){
//   var currentSalary = salary;
//   var generator = function(){
//     currentSalary += 10000;
//     return currentSalary;
//   };
//   return generator;
// };
// var updateFn = salaryUpdater(50000);
// updateFn();
// console.log(updateFn());

//IFFE:

// (function(){

//   var employeeName = "Jill";
// // console.log(employeeName);

// })();
// // console.log(employeeName);
// //Does not run in the global scope.

// var app = {};
// (function(ns){
//   ns.name = 'None';
// })(app);
// console.log(app.name);

//RECUSRSION  Functions ability to call itself.

//PROGRAMMING th BOM and DOM

// if(confirm("Delete EVERYTHING?!")){
//   console.log("You asked for it!");
// } else {
//   console.log("Maybe next time...");
// }

// var result = prompt("What is your name?");
// console.log(result);

//LOCATIONS OBJECT  Looks at the browsers url

// console.log(location.port);
// location.assign("Http://www.pluralsight.com");

//DOCUMENT BASICS

// var element = document.getElementById('article1');
// var element = document.getElementsByTagName('p');
// var elements = document.getElementsByClassName('special');
// console.log(elements);

// var a = document.getElementById('article1');
// console.log(a.getAttribute('class'));
// a.setAttribute('class', 'dynamic-style');
// console.log(a.childNodes);
// console.log(a.getAttribute('class'));

//QUERY SELECTORS:

// var elements = document.querySelectorAll  ('.special');
// console.log(elements);

//*********EVENT HANDLERS*****************

//Events:

//User Interface Events:  load, unload, abort, error, select, resize, scroll, mouse events, click, mouse enter

//Handeling Events:

// function submitForm(){
//   console.log('in submitForm');
// };

// function submitForm(element){
//   console.log(element.id);
// }

// function submitForm(element, event){
//   console.log(event.type);  
// };

// var button = document.getElementById('submit1');
// button.onclick = function(){
//   console.log("Button Clicked");
// }

// var button = document.getElementById('submit1');
// button.onclick = function(){
//   console.log("Dis one clicked!");
// }
// button.onclick = null;

//HANDELING EVENTS!!!!

// var button = document.getElementById('submit1');
// button.addEventListener('click', function(){
//   console.log('Button Clicked!*!*!*!*!*!*');
// });

// var button = document.getElementById('submit1');
// button.addEventListener('click', function(){
//   alert("Yo momma!");
// });

// var button = document.getElementById('submit1');
// // button.addEventListener('click', function(){
// //   console.log("Basic!");
// // });
// // button.addEventListener('click', function(){
// //   console.log("Another Listener Funciton");
// // });

// var submitHandler = function formSubmitHandler(){
//   console.log('in formSubmitHandler()');
// };
// button.addEventListener('click', submitHandler);
// button.removeEventListener('click', submitHandler); 

//EVENT BUBBLING:

// var div1 = document.getElementById('div1');
// var div2 = document.getElementById('div2');
// var clickHandler = function divClickHandler(event){
//   console.log(this.id);
//   event.stopPropagation();
//   // event.preventDefault();
// };
// div1.addEventListener('click', clickHandler, true);
// div2.addEventListener('click', clickHandler, true);
//When false ~ the clicked id gets first dibs.  If false ~ the parent div gets a shot.

//*********BUILT-IN OBJECTS AND FUNCITONS*************

//Global Functions ~ Access anywhere in JS

// var value = parseInt('C000', 16);
// var value = parseFloat('1239e-1');
// var value = isFinite(42); 
// var value = 
// isNaN(9/0);
// isFinite(9/0); 
// console.log(value);

// var path = "\\start\\+";
// console.log(encodeURI(path));

// var globalVar = 'foo';
// var code = 'console.log(globalVar);'
// eval(code);

//MATH

// var value = 
// Math.PI;
// Math.abs(-42);
// Math.ceil(11.1);
// Math.floor(11.9);
// Math.trunc(42.12);
// Math.max(-12, 0, 12, "88");
// Math.min(-12, 0, 12, "88");
// Math.pow(2,3);
// Math.random();
// Math.sqrt(8);
// console.log(value);

//STRINGS

// var value = 
// 'My String';
// console.log(value.concat(' lives'));
// console.log(value.endsWith('ing '));
// console.log(value.indexOf('M'));
// console.log(value.indexOf('Z'));
// console.log(value.lastIndexOf('S'));
// console.log(value.slice(5));
// console.log(value.slice(5,8));
// console.log(value.slice(-3));
// console.log(value.split(' ').length);
// console.log(value.substr(0,4));
// console.log(value.substring(5,6));
// console.log(value.substr(5,6));


//ARGUMENTS

// var validateValues = function(){
//   console.log(arguments[0]);
// };
// validateValues(1,true,"Settings");

// var validateValues = function(){
//   arguments[0] = 9;
//   console.log(arguments[0]);
// };
// validateValues(1,true,"Settings");

//***********MISC JS TOPICS*****************

//ERROR HANDELING

// try {
//   throw new Error('Customer Error');
// } catch (e) {
//   console.log(e.name + " - " + e.message);
// } finally {
//   console.log("Finally done.");
// };
//Finally block executes no matter what.

// try {
//   var i = 42;
// } catch (e) {
//   console.log(e.name + " - " + e.message);
// } finally {
//   console.log("Finally done!")
// };

// try {
//   throw new RangeError("Range Error");
// } catch(e) {
//   if (e.instanceof RangeError){
//     console.log(e.name);
//   }
// };

//PROMISES + OBSERVABLES
//GO TO THE WEBSITES LISTED 

//JSLINT AND JSHINT
// var MyClass = function(){
//   'use strict';
//   this.id = 9;
// };
// var c = new MyClass();
// console.log(c.id);

//MODULAR JS

//SYSTEMJS/SYSTEMJS ~ Universal module loader.  Take the corse.  