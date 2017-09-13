
if( planetName === "Pluto"){
 return weight * planets[0][1];
} else if(planetName === "Neptune"){
 return weight * planets[1][1];
} else if(planetName === "Uranus"){
 return weight * planets[2][1];
} else if(planetName === "Saturn"){
 return weight * planets[3][1];
} else if(planetName === "Jupiter"){
 return weight * planets[4][1];
} else if(planetName === "Mars"){
 return weight * planets[5][1];
} else if(planetName === "Moon"){
 return weight * planets[6][1];
} else if(planetName === "Earth"){
 return weight * planets[7][1];
} else if(planetName === "Venus"){
 return weight * planets[8][1];
} else if(planetName === "Mercury"){
 return weight * planets[9][1];
} else if(planetName === "Sun"){
 return weight * planets[10][1];
} else{return "no planet selected"}