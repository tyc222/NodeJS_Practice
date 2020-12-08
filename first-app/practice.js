let name = 'Max';
let age = 29;
let hasYes = false;

function giveMeSth(name, age, hasYes) {
    console.log(name + ' ' + age + ' ' + hasYes);
}

// giveMeSth(name, age, hasYes);

const person = {
    name: 'Hi',
    age: 48,
    greet () {
        console.log(this.name + ' ' + this.age);
    }
};

const hobbies = ['Sports', 'Cooking'];

hobbies.map()