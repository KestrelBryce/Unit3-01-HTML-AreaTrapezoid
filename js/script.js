  /* This function calculates the area of a trapezoid. 
*/

function Calculate_area() {
  // input
  let Side_a = parseInt( (document.getElementById('Side-a-here').value));
  let Side_b = parseInt( (document.getElementById('Side-b-here').value));
  let Height = parseInt((document.getElementById('Height-here').value));
  
  // naming constants and stuff
  const Half_rate = 0.5;
  
  let Trapezoid_area = (Side_a + Side_b) * 0.5 * Height;
  // remember to use .toFixed(2) to round to two decimal places
  
  // output for area
  document.getElementById('Trapezoid-results').innerHTML = "Your    area rounded to the nearest hundreth is " +            Trapezoid_area.toFixed(2) + "cm."


 // document.getElementById('Trapezoid-results').innerHTML = "Your    area rounded to the nearest hundreth is " +            Trapezoid_area.toFixed(2) + "cm."

  
}