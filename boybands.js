var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = bands.length;

// Keep track of which band we're on in the loop
var currentBand = 0;

// Keep track of which veggie we're on in the loop
var currentVeggie = 0;

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boybandz");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

bandElement.innerHTML += '<div>' + bands[loopTracker] + '</div>';
currentBand++;
console.log(currentBand);
veggieElement.innerHTML += '<div>' + vegetables[loopTracker] + '</div>';
currentVeggie++;
console.log(currentVeggie);
}








// vegetables + bands.innerhtml += '<div>' + bands+' '+ vegetables + '</div>';
// console.log(bands);
// console.log(vegetables);