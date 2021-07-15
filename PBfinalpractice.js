//!!! For PB Final Assessment
//?  For PB Final Assessment
//* For PB Final Assessment






console.log("<<<<<<<<<<<< Object.Entries properties >>>>>>>>>>>");
//* Preparing objects for an API

const book = {
    title: "My Antonia",
    author: "Willa Cather",
    pages: 234,
    publisher: "Penguin Classics",
    description: "A book that Edward enjoyed."
};

const book2 = {
    title: "Grapes of Wrath",
    author: "John Steinbeck",
    pages: 570,
    publisher: "Penguin Classics",
    description: "A book about the Dust Bowl migration."
};


// console.log(Object.entries(book));

// console.log(Object.keys(book));

// console.log(Object.values(book));

const filterObjectProperties = (obj, properties) =>
    Object.fromEntries(Object.entries(obj).filter(m => properties.includes(m[0])));


console.log(filterObjectProperties(book, ['title', 'author', 'age', 'description']));

//console.log(filterObjectProperties(book, ['author', 'age', 'pages']));

//console.log(filterObjectProperties(book2, ['author', 'title', 'description']));


const prepareObjectForApi = (obj, properties) => {
    // Object.fromEntries(Object.entries(obj).filter(m => properties.includes(m[0])));
    const returnObj = {};
    properties.forEach((prop) => {
        if (obj.hasOwnProperty(prop)) {
            returnObj[prop] = obj[prop];
        } else {
            returnObj[prop] = '';
        }
    });
    return returnObj
}

console.log(prepareObjectForApi(book2, ['author', 'title']));

console.log("<<<<<<<<<<<< Build Grid >>>>>>>>>>>");

//build grid
// buildGrid(5, '-')
// --> []
// need to build an array


const buildGrid = (num, char) => {
    const returnARR = [];
    for (let i = 1; i <= num; i += 1) {
        returnARR.push([char.repeat(num)]);
    }
    return returnARR
};

console.log(buildGrid(5, '-'));

console.log("<<<<<<<<<<<< SWAP ARRAYS >>>>>>>>>>>");
//arrays to arrays
//input: [['jim', 'smith',], ['bob','thompson']];



const swapArrays = nameArray => {
    return nameArray.map(m => m.reverse());

}
console.log(swapArrays([['Jack', 'Johnson'], ['Sam', 'Smart']]));

// now with extraneous inputs
//input: [['jim', 'smith', 55], ['bob','thompson', 45]];

const swapArrays2 = nameArray => {
    return nameArray.map((m => {
        const returnArray = [];
        returnArray.push(m[1]);
        returnArray.push(m[0]);
        returnArray.push(m[2]);
        return returnArray;
    }))
}

console.log(swapArrays2([['Jack', 'Johnson', 55], ['Sam', 'Smart', 45]]));


console.log("<<<<<<<<<<<< camelCase  >>>>>>>>>>>");

// array of strings to array of strings.  
//input ['first-name', 'last-name']
//output [firstName, lastName]

const convertToCamelCase = terms => {
    return terms.map(m => {
        if (m.trim() === '') {
            return m;
        } else {
            const parts = m.split('-');
            return parts[0] + parts[1][0].toUpperCase() + parts[1].slice(1);
        }
    })
}

console.log(convertToCamelCase(['first-name']));


console.log("<<<<<<<<<<<< iterate through objects to perform operations  >>>>>>>>>>>");

// iterate though objects and perform calculations
// get tht total number pages and total price of the books
// INPUT:
const books = [

    {
        title: "My Antonia",
        author: "Willa Cather",
        pages: 234,
        publisher: "Penguin Classics",
        description: "A book that Edward enjoyed.",
        price: 18.88,
    },
    {
        title: "Grapes of Wrath",
        author: "John Steinbeck",
        pages: 570,
        publisher: "Penguin Classics",
        description: "A book about the Dust Bowl migration.",
        price: 12.58,
    },
    {
        title: "The Red Pony",
        author: "John Steinbeck",
        pages: 120,
        publisher: "Penguin Classics",
        description: "Not just for horse lovers.",
        price: 6.50,
    }

]

//OUTPUT:  [numberOfPages, totalPrice]

//? Why are there 2 returns here? 
const calculatePagesOfBooks = arrBooks => {
    return arrBooks.reduce((acc, book) => {
        return acc + book.pages;
    }, 0);

}

console.log(calculatePagesOfBooks(books));

const calculatePagesAndPriceOfBooks = arrBooks => {
    return arrBooks.reduce((acc, book) => {
        acc[0] += book.pages;
        acc[1] += book.price;
        return acc;
    }, [0, 0]);

}
console.log(calculatePagesAndPriceOfBooks(books));


// reduce to object 
// create a function that takes an array of book objects and produces and object that offers a discount if customenr buys all books. 

// INPUT: books
// OUTPUT: 


//title: "Weekly Special"
// books: "title1,title2,..."
//normalPrice: 760,
//discountPrice: 684


const createDiscountGroup = (arrBooks, title) => {
    return arrBooks.reduce((acc, book, index, arr) => {
        acc.books += book + ', ';
        acc.normalPrice += book.price;
        if (index == arr.length - 1) {
            acc.books = acc.books.substring(0, acc.books.length - 2);
            acc.discountPrice = acc.normalPrice * .9;
        }
        return acc;
    }, { title, books: "", normalPrice: 0 });
}



console.log(createDiscountGroup(books, "Weekly special"));

console.log("<<<<<<<<<<<< password / code  >>>>>>>>>>>");
// valiate code
// must be 7 numbers and only numbers
// no doubles
// INPUT: '8273498'
//O OUTPUT: boolean

const validateCode = code => {
    let rb = true;

    //must be 7
    if (code.length !== 7) return false;

    //only numbers
    if (!code.split('').every(m => '0123456789'.includes(m))) return false;
    return rb;
}

console.log(validateCode('182679303756743'));
console.log(validateCode('1826793'));
console.log(validateCode('1826Ef4'));
