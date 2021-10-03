let normalPerson={
    name:'komolika',
    salary:20000,
    getName:function(){
        console.log(this.name);
    },
    bill:function(amount)
    {
        this.salary=this.salary-amount;
        return this.salary;
    },

};

// let res=normalPerson.bill(3000);
// console.log(res);
// console.log(normalPerson.salary);

let heroPerson={
    name:'asr',
    salary:70000,
};
let friendlyPerson={
    name:'gopi',
    salary:30000,
};

// const heroBill=normalPerson.bill.bind(heroPerson);
// console.log(heroBill);
// console.log(heroBill(20000));

// const friendBill=normalPerson.bill.bind(friendlyPerson);
// let res=friendBill(2000);
// console.log(res);

const heroBill=normalPerson.bill.call(heroPerson,20000);
console.log(heroBill);
const friendBill=normalPerson.bill.apply(friendlyPerson,[2000]);
console.log(friendBill);