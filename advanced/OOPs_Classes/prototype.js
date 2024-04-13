const myHerosArr = ['Thor', 'Spiderman']

const userObj = {
    name: 'John Doe',
    age: 30,
    heroes: function () {
        console.log(`my name is ${this.name}`);
    }
}

Object.prototype.rajesh = function () {
    console.log('Rajesh is here');
}

Array.prototype.superHeros = function () {
    console.log('All Superheros are here');
}
// userObj.heroes();
userObj.rajesh()
// userObj.superHeros() // Note: Obj does not get prototype function because of superHeros() function injects only in Array
myHerosArr.superHeros()

const myName = "Rajesh"
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True lenght is ${this.trim().length}`);
}
'Songara'.trueLength()
myName.trueLength()



const member = {
    getUserDetail: function(){
        return this.name
    },
    getAge: function () {
        return new Date().getFullYear() - this.year
    }
}

const student = {
    name: "Rajesh",
    year : 2000,
    // getAge : member.getAge
}

student.__proto__ = member
console.log(student.getUserDetail())
console.log(student.getAge())

