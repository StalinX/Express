const { faker } = require("@faker-js/faker");


class OperationsService {
  constructor() {
    this.operations = [];
    this.generete();
  }
  generete() {
    for (let i = 0; i < 10; i++) {
        this.operations.push({
        id: i + 1,
        offser: faker.address.buildingNumber(),
        operation: faker.date.recent(),
      });
    }
  }

  find() {
    return this.operations;
  }

  findOne(id) {
    return this.operations.find((bk) => bk.id == id);
  }

  created(data) {
    this.operations.push(data);
    return {
      message: "Created",
      data: this.operations[this.operations.length - 1],
    };
  }

  delete(id){
    const index = this.operations.findIndex(bk => bk.id == id)
    delete this.operations[index];
    this.books = this.operations.filter(operation => !!operation)
    console.log(this.operations)
  return {
      message: "deleted",
    }
  }


  update(id, data){
    const {offser, operation} = data;
    const index = this.operations.findIndex(bk => bk.id == id)
    this.operations[index].offser = offser;
    this.operations[index].operation = operation;
    console.log(data)
    return {
      message: 'updated',
      data: offser, operation, id
    }
  }
}

module.exports = OperationsService;
