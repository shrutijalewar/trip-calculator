var prompt = require ("sync-prompt"). prompt;

/* prompt question*/

var dist = prompt('What is the total trip distance in miles? ');
dist = parseInt(dist);
var costPERgal = prompt('What is the cost of gas per Gal? ');
costPERgal = parseFloat(costPERgal);
var vol = prompt("What is the volume of your gas tank in Gal? ");
vol = parseInt(vol);
var mpg = prompt("What is your MPG rating? ");
mpg = parseInt(mpg);
var speed = prompt("What would be your average speed (in MPH)? ");
speed = parseInt(speed);
var type = prompt("What would be your vehicle type? car/truck ");

//true mpg calculation
var overspeed = speed - 55;
 overspeed = speed - 55;
var carmpg = mpg - overspeed;
var truckmpg = mpg - 3*overspeed;
var truempg;

if(type === 'car' && speed > 55){ truempg = carmpg };
if(type === 'car' && speed >= 55){ truempg = mpg };

if(type === 'truck' && speed > 55){ truempg = truckmpg };
if(type === 'truck' && speed >= 55){ truempg = mpg };
// mpg= mpg-delta
// mpg -= delta

if(truempg > 10) {truempg = truempg}else{truempg =10};

var totalfuel;
totalfuel = dist/truempg;
var tripcost;
tripcost = costPERgal * totalfuel;
var numberOFstops;
numberOFstops = totalfuel/vol;
numberOFstops = parseInt(numberOFstops)
console.log("You are driving " + dist + " miles, it will cost $" 
    + tripcost + "and you will need" + Math.ceil(numberOFstops) + "stops to fill tank" );

//Math.ceil()for going one up
//Math.floot() for going one down






