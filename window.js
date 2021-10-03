// function add(n1,n2)
// {
//     let res= n1+n2;
//     function double(num)
//     {
//         return num*2;
//     }
//     let total=double(res);
//     return total;
// }

// let sum=add(10,20);
// console.log(sum);

let person={
    name:'babar',
    vet:function()
    {
        console.log(this.name);
        return;
    }
}
console.log(person.vet());
let another={
    name:'love'
}
another.vet=person.vet;
console.log(another.vet());
console.log(this);
