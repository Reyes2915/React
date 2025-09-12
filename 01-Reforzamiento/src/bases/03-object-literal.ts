interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address;
}

interface Address {
    postalCode: number;
    city: string; 
}
    


const person = {
  firstName: "Reyes",
  lastName: "Delgado",
  age: '22',
  address:{
    postalCode: 12345,
    city: "CDMX",
  }
};

const otherPerson =  {
  ...person,};



  const spiderman:Person= {
        firstName: "Peter",
        lastName: "Parker",
        age: 30,
        address: {
            postalCode: 12345,
            city: "New York",
        }
    }


  /* otherPerson.firstName = "Juan";
  otherPerson.lastName = "Perez";
  otherPerson.age = 30; */
console.log({ person, otherPerson });