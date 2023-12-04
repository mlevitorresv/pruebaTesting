class Persona{

    constructor(name,surname,age, DNI){
        this.name = name
        this.surname = surname
        this.age = age
        this.DNI = DNI
    }

    identify(){
        return `${this.name} ${this.surname} ${this.DNI}`
    }

    validName(){
        if(this.name == ''){
            return false;
        }else{
            return true;
        }
    }

    validAge(){
        if(typeof(this.age) === 'number'){
            return true;
        }else{
            return false;
        }
    }
}

module.exports = Persona;