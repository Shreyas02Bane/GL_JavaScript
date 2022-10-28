/*Write a program to create an object of a book having different properties like ‘name’ , ’authors’ , ’publication year’ and ‘publisher’.

Add a property called ‘change name’ as a function to change the name of the current book object.
Add a property called ‘addAuthors’ as a function to the book object to add more authors to this current book object
*/

var book = {
    name: 'Hagu Life',
    author: ['Hagrya'],
    publicationYear: '2015',
    publisher: 'Bane Publishes',
    changeName: function(newName){
        this.name = newName;
    },
    addAuthors: function(author){
        this.author[author.length] = author;
    }
}

book.changeName('Guuu Life');

book.addAuthors('Krish Krish');

console.log(book);