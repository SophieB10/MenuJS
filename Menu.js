const prompt = require('prompt-sync')();
const menu =  require('./menu.json');
var correctOrder = 'n';
var idList = [];
menu.forEach(Dishes =>{
    idList.push(String(Dishes.id))
});

while(correctOrder != 'y'){
    var gerechtId = '';
    var orderList = [];

    while(gerechtId != 'done'){
        console.log('');
        console.log("id Dish Price");
        menu.forEach(Dishes => {
            console.log(Dishes.id +" " + Dishes.Dish + " " + Dishes.Price)
        });
        console.log('');
        gerechtId = prompt("Input the dish id you would like to add to your order, type 'done' if your order is complete ");
        console.log('');
        if(!idList.includes(gerechtId) && gerechtId != 'done'){
            console.log("The id you entered is not existent");
            console.log('');
        }else if(idList.includes(gerechtId)){
            orderList.push(gerechtId);
        }
        
    }
    console.log("Your order is: ");
    console.log('');
    console.log("Count id Dish Price");
    var DistinctList = Array.from(new Set(orderList));

    DistinctList.forEach(uniqueId =>{
        var Counter= 0;
        for (orderId of orderList){
            if(orderId ==  uniqueId){
                Counter++;
            }
        }
        var dishPrice = menu[idList.indexOf(uniqueId)].Price*Counter; 
        console.log(Counter + ' ' + uniqueId + ' ' + menu[idList.indexOf(uniqueId)].Dish+ ' ' + dishPrice.toFixed(2))
    });
    console.log('');

    correctOrder = prompt("Is your order correct y/n ");
    while(correctOrder != 'y' && correctOrder != 'n'){
        correctOrder = prompt("Is your order correct y/n ");
    }
}

var totalPrice = 0.00;
orderList.forEach(ids =>{
    totalPrice = totalPrice + menu[idList.indexOf(ids)].Price
});
totalPrice = totalPrice.toFixed(2);
console.log("Your total amount is " + totalPrice);


