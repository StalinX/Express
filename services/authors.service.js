const { faker } = require("@faker-js/faker");

class AuthorsService  {
  constructor() {
    this.authors = [];
    this.generete();
  }
  generete() {
    for (let i = 0; i < 10; i++) {
      this.authors.push({
        id: i + 1,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        company: faker.company.name(),
      });
    }
  }

  find() {
    return this.authors;
  }

  findOne(id) {
    return this.authors.find((bk) => bk.id == id);
  }

  created(data) {
    this.authors.push(data);
    return {
      message: "Created",
      data: this.authors[this.authors.length - 1],
    };
  }

  delete(id){
    const index = this.authors.findIndex(bk => bk.id == id)
    delete this.authors[index];
    this.authors = this.authors.filter(author => !!author)
    console.log(this.authors)
  return {
      message: "deleted",
    }
  }

  update(id, data){
    const {name, lastName, company} = data;
    const index = this.authors.findIndex(bk => bk.id == id)
    this.authors[index].name = name;
    this.authors[index].lastName = lastName;
    this.authors[index].company = company;
    console.log(data)
    return {
      message: 'updated',
      data: name, lastName, company, id
    }
  }
}

module.exports = AuthorsService;
