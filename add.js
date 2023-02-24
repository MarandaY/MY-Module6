// Array with a push and merging method
const series = ["Metal Gear Solid 2", "Mega Man X", "Final Fantasy 7", "LoZ: The Wind Waker"];
const indie = ["Stardew Valley", "Henry Stickmin"];
indie.push("OMORI");

const games = series.concat(indie);

let text = "<ul>";
games.forEach(gameList);
text += "</ul>";

document.getElementById("info").innerHTML = `Here's a list of some of my favorite games, both mainstream and indie: <br> ${text}`;

function gameList(value) {
    text += "<li>" + value + "</li>";
  } 

//console log of the combined array
console.log(games);

// Object with a this method to call for the information
const drawing = {
    name: "X",
    armor: "Shadow Armor",
    game: "Mega Man X6",
    releasedOn: "Playstation"
}

drawing.info = function() {
    return `This is a drawing of ${this.name} in his ${this.armor} that he gains in the game ${this.game}.`;
  };

document.getElementById("drawing").innerHTML =
"Here's a basic description of my drawing's subject: " + "<br>" + drawing.info(); 