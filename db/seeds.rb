# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Room.create(x: 0, y: 0, z: 0, name: "Salt Lake City", description: "Salt Lake City, often shortened to Salt Lake or SLC, is the capital and the most populous city in the U.S. state of Utah. With an estimated population of 191,180 in 2013,[2] the city lies at the core of the Salt Lake City metropolitan area, which has a total population of 1,153,340 (2014 estimate).", 
	e: 3, w: 2, n: 6, s: 7, ne: 11)
Room.create(x: -1, y: 0, z: 0, name: "West Valley", description: "West Valley City is a city in Salt Lake County and a suburb of Salt Lake City in the U.S. state of Utah. The population was 129,480 at the 2010 census,[3] making it the second-largest city in Utah. The city incorporated in 1980 from a large, quickly growing unincorporated area, which was variously known as Granger, Hunter, Chesterfield, and Redwood.", 
	e: 1)
Room.create(x: 1, y: 0, z: 0, name: "Sugarhouse", description: "Sugar House is home to two shopping centers that collectively feature various retailers such as Shopko, Toys \"R\" Us, bookseller Barnes & Noble, clothing retailer Old Navy, Whole Foods Market, Bed Bath & Beyond, Petco, several fast food and family restaurants, and a 10-screen Cinemark cinema.", 
	w: 1, e: 4)
Room.create(x: 2, y: 0, z: 0, name: "I-80 East", description: "Driving....", 
	e: 5, w: 3)
Room.create(x: 3, y: 0, z: 0, name: "Rock Springs, ID", description: "Rock Springs is a city in Sweetwater County, Wyoming, United States. The population was 23,036 at the 2010 census. Rock Springs is the principal city of the Rock Springs micropolitan statistical area, which has a population of 37,975.", 
	w: 4, n: 10)
Room.create(x: 0, y: 1, z: 0, name: "Ogden", description: "Ogden /ˈɒɡdɛn/ is a city and the county seat of Weber County,[4] Utah, United States, approximately 10 miles (16 km) east of the Great Salt Lake and 40 miles (64 km) north of Salt Lake City. The population was 82,825 according to the 2010 Census.[5] The city served as a major railway hub through much of its history,[6] and still handles a great deal of freight rail traffic which makes it a convenient location for manufacturing and commerce.", 
	s: 1)
Room.create(x: 0, y: -1, z: 0, name: "Orem", description: "Orem is a city in Utah County, Utah, United States, in the north-central part of the state. It is adjacent to Provo, Lindon, and Vineyard and is about 45 miles (72 km) south of Salt Lake City. Orem is one of the principal cities of the Provo-Orem, Utah Metropolitan Statistical Area, which includes all of Utah and Juab counties.", 
	n: 1, s: 8)
Room.create(x: 0, y: -2, z: 0, name: "Provo", description: "Provo /ˈproʊvoʊ/ is the third-largest city in the US state of Utah, located 43 miles (69 km) south of Salt Lake City along the Wasatch Front. Provo is the largest city and county seat of Utah County. It lies between the cities of Orem to the north and Springville to the south.", 
	n: 7, s: 9)
Room.create(x: 0, y: -3, z: 0, name: "St. George", description: "Saint George (Greek: Γεώργιος Georgios; Latin: Georgius; AD 275–281 to 23 April 303), according to legend, was a soldier in the Roman army who later became venerated as a Christian martyr. His parents were Christians of Greek background;[3] his father Gerontius was a Roman army official from Cappadocia and his mother Polychronia was a Christian from Lydda in the Roman province of Syria Palaestina (Palestine).", 
	n: 8)
Room.create(x: 3, y: 1, z: 0, name: "Montana", description: "Montana Listeni/mɒnˈtænə/ is a state in the Western United States. The state's name is derived from the Spanish word montaña (mountain). Montana has several nicknames, although none official,[5] including \"Big Sky Country\" and \"The Treasure State\", and slogans that include \"Land of the Shining Mountains\" and more recently \"The Last Best Place\".[6] Montana is ranked 4th in size, but 44th in population and 48th in population density of the 50 United States.", 
	s: 5)
Room.create(x: 1, y: 1, z: 0, name: "Park City", description: "Park City is a city in Summit County, Utah, United States. It is considered to be part of the Wasatch Back. The city is 32 miles (51 km) southeast of downtown Salt Lake City and 19.88 miles (31.99 km) from Salt Lake City's east edge of Sugar House along Interstate 80. The population was 7,558 at the 2010 census.", 
	sw: 1)

Blueprint.create(map_zone: 1, data_type: "name", data_position: 1, data_value: "Urban")
Blueprint.create(map_zone: 1, data_type: "name", data_position: 1, data_value: "City")
Blueprint.create(map_zone: 1, data_type: "name", data_position: 1, data_value: "Industrial")
Blueprint.create(map_zone: 1, data_type: "name", data_position: 2, data_value: "Street")
Blueprint.create(map_zone: 1, data_type: "name", data_position: 2, data_value: "Parking Lot")
Blueprint.create(map_zone: 1, data_type: "name", data_position: 2, data_value: "Sidewalk")
Blueprint.create(map_zone: 1, data_type: "description", data_position: 1, data_value: "This city is built entirely out of a single description!")
Blueprint.create(map_zone: 1, data_type: "description", data_position: 1, data_value: "This city seems to have randomly selected descriptions! I think they are just one position.")
Blueprint.create(map_zone: 1, data_type: "description", data_position: 2, data_value: "Just kidding, it's got two parts.. ")
Blueprint.create(map_zone: 1, data_type: "description", data_position: 2, data_value: "Haha ok maybe not. It seems to have two parts! Thats nice, this is very furutistic!")
Blueprint.create(map_zone: 2, data_type: "name", data_position: 1, data_value: "Beautiful")
Blueprint.create(map_zone: 2, data_type: "name", data_position: 1, data_value: "Wide Open")
Blueprint.create(map_zone: 2, data_type: "name", data_position: 1, data_value: "Very Tropical")
Blueprint.create(map_zone: 2, data_type: "name", data_position: 2, data_value: "Forest")
Blueprint.create(map_zone: 2, data_type: "name", data_position: 2, data_value: "Grass Field")
Blueprint.create(map_zone: 2, data_type: "name", data_position: 2, data_value: "Pasture")
Blueprint.create(map_zone: 2, data_type: "description", data_position: 1, data_value: "The sky is blue, and the grass is green!")
Blueprint.create(map_zone: 2, data_type: "description", data_position: 1, data_value: "Wow, what a landscape! You can see for miles!")
Blueprint.create(map_zone: 2, data_type: "description", data_position: 2, data_value: "A bird flies past you and lands on a tree nearby. It starts to sing a song. Amazing!")
Blueprint.create(map_zone: 2, data_type: "description", data_position: 2, data_value: "You feel like frolicking through the fields and picking flowers. It's beautiful out here!")
