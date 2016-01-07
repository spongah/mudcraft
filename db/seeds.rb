# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#1
Room.create(x: 0, y: 0, z: 0, name: "North Plaza", description: "You are in the north end of the plaza. Everyone is busy and rushing somewhere. The Guild is north, Arena to the east, and you see a large Temple to the west!", 
	n: 8, ne: 9, e: 4, s: 2, w: 3)

#2
Room.create(x: 0, y: -1, z: 0, name: "South Plaza", description: "This is the south end of the placa. There are people fire-dancing here and selling crystals. To the west is the Armor shop, south is the Magic shop, and Weapons are to the east. You see a great sand desert to the southwest.", 
	n: 1, s: 6, sw: 14, w: 5, e: 7)

#3
Room.create(x: -1, y: 0, z: 0, name: "Temple", description: "You are in the temple. This is a holy place of solitude and refuge. There are names of people written everywhere inside, and the shapes are very detailed, beautiful, and soothing. There are two other people here meditating in silence.", 
	e: 1)

#4
Room.create(x: 1, y: 0, z: 0, name: "Arena", description: "You are in the arena! Prepare to fight! There are 4 different doors where enemies may enter from once the gong has been rung!", 
	w: 1, d: 13)

#5
Room.create(x: -1, y: -1, z: 0, name: "Armor Shop", description: "You are in the armor shop. The blacksmith is forging a new piece of armor on the anvil. It is hot in here!", 
	e: 2)

#6
Room.create(x: 0, y: -2, z: 0, name: "Magic Shop", description: "This is the magic shop. It smells mysteriously like moth balls in here. You dont see anyone, but you sense there is someone in the room with you. There are scrolls and wands on the east wall, and potions on the west.", 
	n: 2)

#7
Room.create(x: 1, y: -1, z: 0, name: "Weapons Shop", description: "You are in the weapons shop! The swordsmith greets you with open arms and offers you a beer. He continues to work as he talks to you about his favorite thing: weapons!", 
	w: 2)

#8
Room.create(x: 0, y: 1, z: 0, name: "Guild", description: "This is the guild. There are ninjas training to the left, and archers training to the right. You feel inspired to level up as you eye the punching bag in front of you.", 
	s: 1, n: 10, d: 12)

#9
Room.create(x: 1, y: 1, z: 0, name: "Inn", description: "This is the inn. It's cozy in here. There is a fire in the fire place and the smell of fresh cookies coming from the kitchen. \"Have a seat!\" says the bartender as you walk in.", 
	sw: 1, u: 9)

#10
Room.create(x: 0, y: 2, z: 0, name: "Dock", description: "You are on the dock. The sea has dried up, but the dock remains. There is an old harpoon stuck in a tree here.", 
	s: 8)

#11
Room.create(x: 1, y: 1, z: 1, name: "Private Room", description: "You are in the private room above the inn. It's very quiet in here.", 
	d: 9)

#12
Room.create(x: 0, y: 1, z: -1, name: "Vault", description: "You enter the vault beneath the guild! This is where you can store your money and most prized inventory items, for a fee of course!", 
	u: 8)

#13
Room.create(x: 1, y: 0, z: -1, name: "Dungeon Entrance", description: "This is the entrance to the dungeon. You tremble with the thoughts of others who have attempted to explore this god-forsaken catacomb.", 
	u: 4)

#14
Room.create(x: -1, y: -2, z: 0, name: "Desert Entrance", description: "You are at the desert entrance. The desert seems to have receeded since this became the desert entrance because there is still probably 9 more rooms before entering the desert.. Wierd!", 
	ne: 2)



Blueprint.create(map_zone: 1, data_type: "name", data_position: 1, data_value: "Cobblestone")
Blueprint.create(map_zone: 1, data_type: "name", data_position: 1, data_value: "Dirt")
Blueprint.create(map_zone: 1, data_type: "name", data_position: 1, data_value: "Busy")
Blueprint.create(map_zone: 1, data_type: "name", data_position: 2, data_value: "Street")
Blueprint.create(map_zone: 1, data_type: "name", data_position: 2, data_value: "Parking Lot")
Blueprint.create(map_zone: 1, data_type: "name", data_position: 2, data_value: "Sidewalk")
Blueprint.create(map_zone: 1, data_type: "description", data_position: 1, data_value: "You are walking through a bustling medievel city. ")
Blueprint.create(map_zone: 1, data_type: "description", data_position: 1, data_value: "This is a major urban area full of creativity and innovative energy!")
Blueprint.create(map_zone: 1, data_type: "description", data_position: 2, data_value: "There are street performers, vendors, and the smell of baked bread everywhere!")
Blueprint.create(map_zone: 1, data_type: "description", data_position: 2, data_value: "Someone bumps into you and quicky said \"I'm sorry!\" before shuffling off...")


Blueprint.create(map_zone: 2, data_type: "name", data_position: 1, data_value: "Mysterious")
Blueprint.create(map_zone: 2, data_type: "name", data_position: 2, data_value: "Forest")
Blueprint.create(map_zone: 2, data_type: "description", data_position: 1, data_value: "You are in a foggy, spooky forest. There are ferns and pine trees, and it smells of mushrooms and moss. You realize there are spiders EVERYWHERE!")

Blueprint.create(map_zone: 3, data_type: "name", data_position: 1, data_value: "Dense")
Blueprint.create(map_zone: 3, data_type: "name", data_position: 2, data_value: "Jungle")
Blueprint.create(map_zone: 3, data_type: "description", data_position: 1, data_value: "This is a dense jungle. There are snakes, alligators, dragonflies, and most of all MUD!")

Blueprint.create(map_zone: 4, data_type: "name", data_position: 1, data_value: "Sandy")
Blueprint.create(map_zone: 4, data_type: "name", data_position: 2, data_value: "Desert")
Blueprint.create(map_zone: 4, data_type: "description", data_position: 1, data_value: "You are thirsty! There is sand everywhere and the sun is scorching you. The wind is blowing hard from the west with no smell of water.")

Blueprint.create(map_zone: 5, data_type: "name", data_position: 1, data_value: "Zone")
Blueprint.create(map_zone: 5, data_type: "name", data_position: 2, data_value: "Five")
Blueprint.create(map_zone: 5, data_type: "description", data_position: 1, data_value: "This is a blank zone.")

Blueprint.create(map_zone: 6, data_type: "name", data_position: 1, data_value: "Zone")
Blueprint.create(map_zone: 6, data_type: "name", data_position: 2, data_value: "Six")
Blueprint.create(map_zone: 6, data_type: "description", data_position: 1, data_value: "Sterile zone. Nothing is here.")

Blueprint.create(map_zone: 7, data_type: "name", data_position: 1, data_value: "Windy")
Blueprint.create(map_zone: 7, data_type: "name", data_position: 2, data_value: "Lake")
Blueprint.create(map_zone: 7, data_type: "description", data_position: 1, data_value: "You are floating out on a windy lake! The waves are lapping at your face as you tread water.")


Blueprint.create(map_zone: 8, data_type: "name", data_position: 1, data_value: "Temple")
Blueprint.create(map_zone: 8, data_type: "name", data_position: 2, data_value: "Ruins")
Blueprint.create(map_zone: 8, data_type: "description", data_position: 1, data_value: "You are at some old, overgrown, temple ruins. They look to be mayan or maybe martian! Whoa..")


Blueprint.create(map_zone: 9, data_type: "name", data_position: 1, data_value: "Overgrown")
Blueprint.create(map_zone: 9, data_type: "name", data_position: 2, data_value: "Courtyard")
Blueprint.create(map_zone: 9, data_type: "description", data_position: 1, data_value: "You are in the overgrown, ancient temple courtyard in front of the Temple Ruins. This place has a wierd energy. o.O")


Blueprint.create(map_zone: 10, data_type: "name", data_position: 1, data_value: "Ancient")
Blueprint.create(map_zone: 10, data_type: "name", data_position: 2, data_value: "Pathway")
Blueprint.create(map_zone: 10, data_type: "description", data_position: 1, data_value: "This is an ancient pathway that is no longer used. The bushes are growing so high that its hard to make out in some spots, but its clear this used to be a busy travel route.")





