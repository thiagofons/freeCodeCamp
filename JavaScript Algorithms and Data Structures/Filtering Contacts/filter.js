// Setup
const contacts = [
	{
	firstName: "Akira",
	lastName: "Laine",
	number: "0543236543",
	likes: ["Pizza", "Coding", "Brownie Points"],
	},
	{
	firstName: "Harry",
	lastName: "Potter",
	number: "0994372684",
	likes: ["Hogwarts", "Magic", "Hagrid"],
	},
	{
	firstName: "Sherlock",
	lastName: "Holmes",
	number: "0487345643",
	likes: ["Intriguing Cases", "Violin"],
	},
	{
	firstName: "Kristian",
	lastName: "Vos",
	number: "unknown",
	likes: ["JavaScript", "Gaming", "Foxes"],
	},
];

function lookUpProfile(name, prop) {
	let checkName = false;
	let checkProp = false;

	for(let i = 0; i < contacts.length; i++) {
		let contact = contacts[i];

		if(contact.firstName == name) {
			checkName = true;

			if(contact.hasOwnProperty(prop)){
				checkProp = true;
				console.log("Achou a propriedade");
			}
				
		}
		if(!checkName)
			return "No such contact";
		if(!checkProp)
			return "No such property";
		if(checkName && checkProp)
			return contact[prop];
	}
	
}

const test = lookUpProfile("Sherlock", "likes");

console.log(test);