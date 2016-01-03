# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Room.create(name: "Salt Lake City", description: "Salt Lake City, often shortened to Salt Lake or SLC, is the capital and the most populous city in the U.S. state of Utah. With an estimated population of 191,180 in 2013,[2] the city lies at the core of the Salt Lake City metropolitan area, which has a total population of 1,153,340 (2014 estimate).", 
	e: 3, w: 2, n: 6, s: 7, ne: 11)
Room.create(name: "West Valley", description: "West Valley City is a city in Salt Lake County and a suburb of Salt Lake City in the U.S. state of Utah. The population was 129,480 at the 2010 census,[3] making it the second-largest city in Utah. The city incorporated in 1980 from a large, quickly growing unincorporated area, which was variously known as Granger, Hunter, Chesterfield, and Redwood.", 
	e: 1)
Room.create(name: "Sugarhouse", description: "Sugar House is home to two shopping centers that collectively feature various retailers such as Shopko, Toys \"R\" Us, bookseller Barnes & Noble, clothing retailer Old Navy, Whole Foods Market, Bed Bath & Beyond, Petco, several fast food and family restaurants, and a 10-screen Cinemark cinema.", 
	w: 1, e: 4)
Room.create(name: "I-80 East", description: "Driving....", 
	e: 5, w: 3)
Room.create(name: "Rock Springs, ID", description: "Rock Springs is a city in Sweetwater County, Wyoming, United States. The population was 23,036 at the 2010 census. Rock Springs is the principal city of the Rock Springs micropolitan statistical area, which has a population of 37,975.", 
	w: 4, n: 10)
Room.create(name: "Ogden", description: "Ogden /ˈɒɡdɛn/ is a city and the county seat of Weber County,[4] Utah, United States, approximately 10 miles (16 km) east of the Great Salt Lake and 40 miles (64 km) north of Salt Lake City. The population was 82,825 according to the 2010 Census.[5] The city served as a major railway hub through much of its history,[6] and still handles a great deal of freight rail traffic which makes it a convenient location for manufacturing and commerce.", 
	s: 1)
Room.create(name: "Orem", description: "Orem is a city in Utah County, Utah, United States, in the north-central part of the state. It is adjacent to Provo, Lindon, and Vineyard and is about 45 miles (72 km) south of Salt Lake City. Orem is one of the principal cities of the Provo-Orem, Utah Metropolitan Statistical Area, which includes all of Utah and Juab counties.", 
	n: 1, s: 8)
Room.create(name: "Provo", description: "Provo /ˈproʊvoʊ/ is the third-largest city in the US state of Utah, located 43 miles (69 km) south of Salt Lake City along the Wasatch Front. Provo is the largest city and county seat of Utah County. It lies between the cities of Orem to the north and Springville to the south.", 
	n: 7, s: 9)
Room.create(name: "St. George", description: "Saint George (Greek: Γεώργιος Georgios; Latin: Georgius; AD 275–281 to 23 April 303), according to legend, was a soldier in the Roman army who later became venerated as a Christian martyr. His parents were Christians of Greek background;[3] his father Gerontius was a Roman army official from Cappadocia and his mother Polychronia was a Christian from Lydda in the Roman province of Syria Palaestina (Palestine).", 
	n: 8)
Room.create(name: "Montana", description: "Montana Listeni/mɒnˈtænə/ is a state in the Western United States. The state's name is derived from the Spanish word montaña (mountain). Montana has several nicknames, although none official,[5] including \"Big Sky Country\" and \"The Treasure State\", and slogans that include \"Land of the Shining Mountains\" and more recently \"The Last Best Place\".[6] Montana is ranked 4th in size, but 44th in population and 48th in population density of the 50 United States.", 
	s: 5)
Room.create(name: "Park City", description: "Park City is a city in Summit County, Utah, United States. It is considered to be part of the Wasatch Back. The city is 32 miles (51 km) southeast of downtown Salt Lake City and 19.88 miles (31.99 km) from Salt Lake City's east edge of Sugar House along Interstate 80. The population was 7,558 at the 2010 census.", 
	sw: 1)