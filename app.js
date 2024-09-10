var num1 =3;
var num2 =5;
var result = num1 + num2;
document.write('sum of 3 and 5 is 8 <br>');


var  result =num1 - num2;
document.write('sum of 3- 5 is -2<br>');

var result= num1 * num2;
document.write('sum of 3 * 5 is 15 <br>');

var value1 = 5;
var result= ++value1 ;
document.write('Initial Value is 5 <br>');
document.write('Value after increment is 6<br>');

var value2 = 7;
document.write('after addition is 13 <br>');


var result=  --value1 ;
document.write('after decrement value is 12 <br> ');

var num1= 12;
var num2 = 3;
var result= num1 * num2 ;
document.write('The remider is 0 <br>');


var cost = 600;
var buy = 5 ;
var result = 600 * 5 ;
document.write('Total cost to buy 5 tickets to a movie is 3000 PKR <br> <br>');

// table //


const number =parseInt(prompt('enter a number'));
for(let i=1;  i<= 10; i++) {
    document.writeln(number+'*'+i+'='+number*i+'<br>');
}

document.write('<h1>Shopping Cart </h1>');
var price1 = 650;
var price2 = 100;
var item1  = 3 ;
var item2  =7 ;
var  shippingCharges = 100;
var result= 2750;

document.write('price of item 1 is '+ price1 +'<br>');
document.write('Quantity of item 1 is '+ item1+'<br>');
document.write('Price of item 2 is '+ price2 +'<br>');
document.write('Quantity of item 2 is'+ item2 +'<br>');
document.write('Shipping Charges is '+ shippingCharges+ '<br>');
document.write('Total of your item is' + result + '<br>');


document.write('<h1> Mark Sheet</h1>');
var totalMarks = 980;
var obtained = 804;
var percentage = 82.0408163265306 ;

document.write('Total Marks:'+ totalMarks+'<br>');
document.write('Marks Obtained:' + obtained+'<br>');
document.write('Percentage:'+ percentage+'<br>');


document.write('<h1> Currency in PKR </h1>');
var us$ = 104;
var riyal= 28;
var quantityUs =  10;
var quantityRiyal = 25;
console.log(us$ * quantityUs +  riyal *quantityRiyal);
var result =1740;

document.write('Total Currency in PKR:'+ result+ '<br>');


var num1=5;
var num2 =10;
var result= num1 % num2 ;
var  ans= 2;


document.write('<h1> Age Calculater</h1><br>')
var currentYear = 2024;
var birthYear = 1994 ;
var age =29 ;
console.log(currentYear - birthYear);
console.log(age);
document.write('Current year :'+ currentYear +'<br>');
document.write('Birth Year :' + birthYear +'<br>');
document.write('Your age:'+ age +'<br>');


document.write('<h1> GEOMETRIZER </h1>');
var radius = 20;
var circum =3.142;
var area =1256.8 ;
document.write('Radius of circle a:'+ radius+'<br>');
document.write('The Circumferrance is:'+ circum+'<br>');
document.write('The area is:'+ area+ '<br>');

document.write('<h1>THE LIFETIME SUPPLY OF CALCULATER </h1><br>');
var snack = 'chocolate' ;
var curAge = 20;
var maxAge = 65;
var eating = 3;
var result = 150;
console.log(result);
document.write('Favourite snack:' +snack+'<br>');
document.write('Current age:'+curAge+'<br>');
document.write('Estimated Maximum Age:'+maxAge+'<br>');
document.write('Amount of sanck per day:'+eating+'<br>');
document.write('You will need ' +result + snack +'to last you until the ripe old age of' +  maxAge+'<br>');


// Ch....6 to 9 //
document.write('<h1>  Result </h1>');
var a = 10;
document.write('The value of  a is :'+ a +'<br><br>');

//pre increment //
  
document.write('The Value of ++a is:'+(++a)+'<br>');
document.write('Now the value of a is:'+a+'<br><br>');

// post increment //

document.write('The value of a++ is:'+(a++)+'<br>');
document.write('Now the Value of a is:'+a+'<br><br>');

// pre decrement //

document.write('The value of --a is: '+(--a)+'<br>');
document.write('Now the Value of a is:'+a+'<br><br>');

 // post decrement //

 document.write('The value of a-- is:'+(a--)+'<br>');
 document.write('Now the value of a is'+a+'<br><br>');
    
  //solve//
  var a= 2;
  var b = 1;
  var result = --a - --b + ++b + b--;
  document.write('--a is:'+(--a)+'<br>');
  document.write('--a - --b is:'+(--a - --b)+'<br>');
  document.write('--a - --b + ++b is:'+(--a - --b + ++b)+'<br>');
  document.write('reslt is:'+result+'<br>');

  // INPUT //
  var userName = prompt('Enter your name');
  var page  = prompt('Welcome our website');



  //COLUMN//


  var r = prompt('input row');
  var c = prompt('input column');
  for(var i=0 ; i<1; i++){
    document.write('<table>');
    for(var j=0; j<r; j++){
        document.write('<tr>');
        for(var k=0; k<c; k++){
            document.write('<td>','hello world','</td>');
        }
        document.write('<tr>');
    }
    document. write('</table>');
  }