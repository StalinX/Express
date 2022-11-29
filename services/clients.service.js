const { faker } = require("@faker-js/faker");

class ClientsService {
  constructor() {
    this.clients = [];
    this.generete();
  }
  generete() {
    for (let i = 0; i < 10; i++) {
      this.clients.push({
        id: i + 1,
        book_Id: faker.datatype.uuid(),
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName:faker.name.lastName(),
        month: faker.date.month(),
        
      });
    }
  }

  find() {
    return this.clients;
  }

  findOne(id) {
    return this.clients.find((bk) => bk.id == id);
  }

  created(data) {
    this.clients.push(data);
    return {
      message: "Created",
      data: this.clients[this.clients.length - 1],
    };
  }

  delete(id){
    const index = this.clients.findIndex(bk => bk.id == id)
    delete this.clients[index];
    this.clients = this.clients.filter(client => !!client)
    console.log(this.clients)
  return {
      message: "deleted",
    }
  }


  update(id, data){
    const {book_Id, email, firstName, lastName, month} = data;
    const index = this.clients.findIndex(bk => bk.id == id)
    this.clients[index].book_Id = book_Id;
    this.clients[index].email = email;
    this.clients[index].firstName = firstName;
    this.clients[index].lastName = lastName;
    this.clients[index].month = month;
    console.log(data)
    return {
      message: 'updated',
      data: id, book_Id, email, firstName, lastName, month
    }
  }
}

module.exports = ClientsService;
