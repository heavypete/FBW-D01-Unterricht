console.log(this);
const title = 'Page 1';
const pages = true;
const sep = () => console.log('-'.repeat(30));
sep();

const obj = {
	"ksdjf skjf sdkfj sdkfjs dfksdjf skdfj sdkfjs df": 'testing',
	1312312313123123: 33434
}

for (const [key, value] of Object.entries(obj)) {
	console.log(key, value);
}


const test333 = () => {
	console.log(`${this}`);
}

const book = {
	title: "Sapiens",
	pages: 323,
	displayBook: function () {
		return `${this.title} with ${this.pages} pages`;
	},
	displayTitle() {
		return this.title;
	},
	displayBook2: () => {
		console.log(this);
		return `${this.title} with ${this.pages} pages`;
	}
}

console.log(book.displayBook());
console.log(book.displayTitle());
console.log(book.displayBook2());

function displayTitle2(book) {
	return book.title;
}

const books


console.log(displayTitle2(book));