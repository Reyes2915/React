const person={
    name:'Tony',
    age:45,
    key:'Ironman',
}

const {name:ironmanName,age:ironmanAge,key}=person;


console.log({ironmanName,ironmanAge,key});


interface Hero{
    name:string;
    age:number;
    key:string;
    rank?:string;
}


const useContext=({name,age,key,rank}:Hero)=>{
    return{
        keyName:key,
        user:{
            name,
            age
        },
        rank
    }
}


const {keyName,rank,
    user
    //user:{name,age}

}=useContext(person);

const {name,age}=user;

console.log({keyName,rank,name,age});

