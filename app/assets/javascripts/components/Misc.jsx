// Misc overrides and utility functions

var directionArray = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest', 'up', 'down']
var newsArray = [{type: 'misc', msg: 'Welcome to MudCraft!'}];

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
};

function timeStamp() {
		var stampString = ('(' + timeString(false) + ') - ');
		return stampString;
};

function timeString(ampm) {
		var d = new Date();
		var timestamp = "";
		if (d.getHours() > 12) {
			timestamp += (d.getHours() - 12).toString();
		} else { timestamp += d.getHours().toString() }
		timestamp += ":";
		timestamp += d.getMinutes().pad(2).toString();
		timestamp += ":";
		timestamp += d.getSeconds().pad(2).toString();
		if (ampm) {
			if (d.getHours() > 12) { 
				timestamp += "pm"
			} else { timestamp += "am" };
		}
		return ( timestamp );
};

function	isADirection(command) {
	yes_it_is = false;
	directionArray.map(function (direction, i) {
		if (command == direction) { yes_it_is = true }
	});
	return ( yes_it_is );
};
	
function makeExitArray(result) {
	var exits = []
	if (result.n > 0) { exits.push({ name: "north", path: "/rooms/" + result.n + ".json" }) }
	if (result.ne > 0) { exits.push({ name: "northeast", path: "/rooms/" + result.ne + ".json" }) }
	if (result.e > 0) { exits.push({ name: "east", path: "/rooms/" + result.e + ".json" }) }
	if (result.se > 0) { exits.push({ name: "southeast", path: "/rooms/" + result.se + ".json" }) }
	if (result.s > 0) { exits.push({ name: "south", path: "/rooms/" + result.s + ".json" }) }
	if (result.sw > 0) { exits.push({ name: "southwest", path: "/rooms/" + result.sw + ".json" }) }
	if (result.w > 0) { exits.push({ name: "west", path: "/rooms/" + result.w + ".json" }) }
	if (result.nw > 0) { exits.push({ name: "northwest", path: "/rooms/" + result.nw + ".json" }) }
	if (result.u > 0) { exits.push({ name: "up", path: "/rooms/" + result.u + ".json" }) }
	if (result.d > 0) { exits.push({ name: "down", path: "/rooms/" + result.d + ".json" }) }
	return ( exits );
};

function convertShorthandMovements(command) {
	if ((command == "n") || (command == "north")) { return ( 'north' ) };
	if ((command == "ne") || (command == "northeast")) { return ( 'northeast' ) };
	if ((command == "e") || (command == "east")) { return ( 'east' ) };
	if ((command == "se") || (command == "southeast")) { return ( 'southeast' ) };
	if ((command == "s") || (command == "south")) { return ( 'south' ) };
	if ((command == "sw") || (command == "southwest")) { return ( 'southwest' ) };
	if ((command == "w") || (command == "west")) { return ( 'west' ) };
	if ((command == "nw") || (command == "northwest")) { return ( 'northwest' ) };
	if ((command == "u") || (command == "up")) { return ( 'up' ) };
	if ((command == "d") || (command == "down")) { return ( 'down' ) };
	return ( command )
};

function generateNewRoom() {
		var formData = 
			{
 				"room":
  			{
   				"name": "Test Room",
   				"description": "Super sick!",
   				"u": "1"
  			}
			}
		console.log(formData)
    $.ajax({
      data: formData,
      url: "/rooms.json",
      type: "POST",
      dataType: "json"
    });
};

