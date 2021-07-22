const { template } = require("lodash");

class Book {
    constructor(title, pages, author, publisher) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.publisher = publisher;
    }
    displayInfo() {
        return `BOOK: "${this.title}", by ${this.author}`;
    }
}

const book1 = new Book("Homo Deus", 342, "Harari", "Oxford Pres", "Oxford Press");
console.log(book1.displayInfo());

console.log(book1);


//* ?>?>?>?>?>?>?>>?>?>>?>

class User {
    constructor(name) { // constructor
        this.name = name; // field
    }

    getInfo() { // method
        return `Name: ${this.name}`;
    }
}
const user = new User("Harald");
console.log(user.getInfo());

class Users {
    constructor(users) {
        this.users = users;
    }

    getInfo() {
        return this.users.map(m => m.getInfo());
    }
}

const user1 = new User("Berthold");
const user2 = new User("Angelika");
const user3 = new User("Frederick");

const users = new Users([user1, user2, user3]);
users.getInfo().forEach(m => console.log(m));

//* ?>?>?>?>?>?>?>>?>?>>?>
//* Mankala Game

class Pebble {
    constructor(color, size, opacity) {
        this.color = color;
        this.size = size;
        this.opacity = opacity;
    }
}
class Container {
    constructor(pebbles, board) {

    }
    takePebbles() {
        const tempPebbles = [...this.pebbles];
        this.pebbles = [];
        return handPebbles;
    }
    putPebble(pebble) {
        this.pebbles.push(pebble);
    }
}


class Board {
    constructor(containers) {
        this.containers = containers;

    }
    spreadPebblesForContainer(id) {
        // get container with id
        const pebblesToMove = container.takePebbles();
        // for(let i= id+1; i <= id+pebblesToMove.length; ){
        // this.container(i).putPebble(); 
    }
}

}

class Game {
    constructor(board) {

    }
    prepareGame() {
    }

    startGame() {

    }
}

//*program
const game = new Game()