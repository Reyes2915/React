function saludar(nombre:string):string{
    return `Hola ${nombre}`;
}

const saludarFlecha=(nombre:string):string=>`Hola ${nombre}`;



const message=saludar('Reyes');
const messageFlecha=saludarFlecha('Delgado');

console.log({message});


interface User{
    uid:string;
    username:string;
}


function getUser():User{
    return {
        uid:'ABC123',
        username:'Reyes1502'
    }
}

const getUserFlecha=()=> ({
        uid:'ABC123',
        username:'Reyes1502'
})

const user=getUser();
console.log(user);


const user2=getUserFlecha()
console.log(user2);


const myNumbers:number[]=[1,2,3,4,5];


myNumbers.forEach(element => {
    console.log(element)
});




