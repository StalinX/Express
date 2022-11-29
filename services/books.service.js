const { faker } = require("@faker-js/faker");
const _ = require('underscore')

class BooksService {
  constructor() {
    this.books = [];
    this.generete();
  }
  generete() {
    for (let i = 0; i < 10; i++) {
      this.books.push({
        id: i + 1,
        name: faker.commerce.product(),
        precio: faker.commerce.price(),
      });
    }
  }

  find() {
    return this.books;
  }

  findOne(id) {
    return this.books.find((bk) => bk.id == id);
  }

  created(data) {
    this.books.push(data);
    return {
      message: "Created",
      data: this.books[this.books.length - 1],
    };
  }




  delete(id){
    const index = this.books.findIndex(bk => bk.id == id)
    delete this.books[index];
    this.books = this.books.filter(book => !!book)
    console.log(this.books)
  return {
      message: "deleted",
    }
  }


  update(id, data){
    const {name, precio} = data;
    const index = this.books.findIndex(bk => bk.id == id)
    this.books[index].name = name;
    this.books[index].precio = precio;
    console.log(data)
    return {
      message: 'updated',
      data: name, precio, id
    }
  }
}

module.exports = BooksService;
