console.log('14 - Values');
console.log('************** PRACTICE *********************');
console.log('01 - Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:');
function values({...obj}) {
    return Object.values(obj)
}

// Ejemplo:
console.log(values({ id: 31, duration: 310, name: 'long video', format: 'mp4' })); // [31, 310, 'long video', 'mp4']

console.log('************** PRACTICE *********************')
console.log('02: Challenge - Evita añadir las propiedades heredadas en caso de ser instancia de una clase:');

// Ejemplo:
const objPerson = {
    name: 'Silvio Fernández',
    job: 'musician',
};

function values2(objPerson) {
    console.log(Object.values(objPerson))
};

function Person(name, job) {
    this.name = name;
    this.job = job;
}

Person.prototype.work = function() {
    console.log("I'm a musician, I'm an artist");
};

const john = new Person('Johny', 'singer');
values2(john); // ['John', 'singer')]; en vez de ['John'; function() { console.log("I'm a musician, I'm an artist"); }]