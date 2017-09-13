// Write your JavaScript code here!
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];
// We're going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.
// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement``document.getElementById` `.appendChild`
planets.forEach(myFunction);
function myFunction(planet) {
  var el = document.createElement("option");
  var select = document.getElementById("planets");
  var opt = planet[0];
  el.textContent = opt;
  el.value = planet[0];
  select.appendChild(el);
}
function handleClickEvent(e) {
  // 3. Create a variable called userWeight and assign the value of the user's weight.
  var userWeight = document.getElementById('user-weight').value;
  // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  var planetName = document.getElementById('planets').options[document.getElementById('planets').selectedIndex].text;
  var planetMultiplier = planets[document.getElementById('planets').selectedIndex][1];
  
  // 5. Create a variable called result and assign the value of the new calculated weight.
  var result = userWeight * planetMultiplier;
  // 6. Write code to display the message shown in the screenshot.
  //*"If you were on Earth, you would weigh 150lbs!"
  document.getElementById('output').innerText = "If you were on " + planetName + ", you would weigh " + result + "lbs!";
}
// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)