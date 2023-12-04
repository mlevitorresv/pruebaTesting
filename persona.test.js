const Persona = require('./persona')


const people = [
    {
        name: "Leví",
        surname: "Torres",
        age: '21',
        DNI: "80342740Ñ",
    },
    {
        name: "",
        surname: "",
        age: 59,
        DNI: "20459723L",
    }
]

const levi = new Persona(people[0].name, people[0].surname, people[0].age, people[0].DNI);
const antonio = new Persona(people[1].name, people[1].surname, people[1].age, people[1].DNI);


test('Una persona tiene que identificarse con Nombre y apellido + DNI', () => {
    expect(levi.identify()).toBe('Leví Torres 80342740Ñ')
})

test('un nombre no puede ser vacío', ()=>{
    expect(antonio.validName()).toBe(false)
})

test('un nombre puede ser no vacío', ()=>{
    expect(levi.validName()).toBe(true)
})


test('una edad no puede ser un string', ()=>{
    expect(levi.validAge()).toBe(false)
})

test('una edad ha de ser un number', ()=>{
    expect(antonio.validAge()).toBe(true)
})