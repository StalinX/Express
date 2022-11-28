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
  return {
      message: "deleted",
    }
  }

  update(id, data){
    //const {name, precio} = req.body;
    if(data.name && data.precio){
      _.each(books, (books, i)=>{
        if(this.books.id == id){
          //this.books.name = name;
          this.books.precio = precio;
        }
      });
      res.json(books);
    }
  }
}

module.exports = BooksService;
