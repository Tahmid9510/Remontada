//01. Solve Me First
var solveMeFirst = function(a, b) {
 	return a+b;
 };

//console.log(solveMeFirst(9,4));

var multiply = function(a, b) {
 	return a*b;
 };
//console.log(multiply(9,4));

//03. Even or Odd
var evenOrOdd = function(number) {
 	if(number%2==0){
		return "even"
	}
	else{return "odd";}
 };
 //console.log(evenOrOdd(10001));

 //04. Return Negative
var makeNegative = function(number) {
 	if(number<0){
		return number;
	}
	else{
		return 0-number;
	}
 };
 //console.log(makeNegative(-5))

//05. Opposite Number

var opposite = function(number) {
return 0-number;
 };
// console.log(opposite(500))
//06. Simple Array Sum
var simpleArraySum = function(ar) {
 	let size=ar.length;
	let sum=0;
	for (let i=0; i<size;i++){
		sum=ar[i]+sum;
	}
	return sum;
 };
 //console.log(simpleArraySum([2,3,4,6]))

 //07. sleepIn
var sleepIn = function(weekday, vacation) {
 	if (weekday==false || vacation==true){
		return true;
	}
	else{
		return false;
	}
 };
 //console.log(sleepIn(false,true))
//08. monkeyTrouble
var monkeyTrouble = function(aSmile, bSmile) {
 	if(aSmile==bSmile){
		return true;
	}
	else{
		return false;
	}
 };
 //console.log(monkeyTrouble(false,false))

 //09. sumDouble
var sumDouble = function(a, b) {
 	if(a==b){
		return (a+b)*2;
	}
	else{
		return a+b;
	}
 };
 //console.log(sumDouble(2,3))
//10. diff21

var diff21 = function(n) {
 	if (n>21){
		return (n-21)*2
	}
	else{
		diff = Math.abs(n-21);
		return diff;

	}
 };
 //console.log(diff21(11))
