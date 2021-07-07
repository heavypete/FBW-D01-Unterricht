const sep = () => console.log('-'.repeat(30));
sep();

// ============================
// POSSIBLE BUT NOT RECOMMENDED
// ============================

const newObj = {
    hello: "World",
	"two word properties": "also work in JavaScript", // avoid
    123: 456 // avoid
};

console.log(newObj["two word properties"])
console.log(newObj[123]);
sep();

// ===========================================
// FUNCTIONS VS. METHODS
// ===========================================

const server = {
	os: "Windows",
	name: 'Zeus',
	cpus: 4,
	network: "main",
	displayCpuInfo: function () { // classic method
		return `${this.name} (${this.os}) has ${this.cpus} CPUs`;
	},
	displayGeneral() { // shorthand method
		return `${this.os} machine on ${this.network}`;
	}
}

console.log(server.displayCpuInfo()); // call method on object
console.log(server.displayGeneral()); // call method on object
sep();

// classic function
function countProperties(obj) {
	const props = Object.keys(obj);
	return props.length;
}

// arrow function
const createFileName = obj => `server-${obj.name}-${obj.os}.txt`.toLowerCase();

// call functions
console.log(`The object has ${countProperties(server)} properties.`);
console.log(createFileName(server));
sep();

// ========================================
// EXAMPLES OF INTERNAL OBJECTS AND METHODS
// ========================================

console.log(Math.max(1, 2, 3)); // object = Math
console.log(Math.min(1, 2, 3)); // methods = min and max
sep();
console.log(server); // shows internals
console.log(Math); // doesn't show internals
