import { heroes,type Hero,type Owner } from '../../data/heroes.data';


const getHeroByDIId = (id: number): Hero | undefined => {

    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    return hero;
}


console.log(getHeroByDIId(2));


export const getHeroByOwner=(owner:Owner):Hero[]|undefined=>{
    const hero = heroes.filter((hero) => {
        return hero.owner === owner;
    });

    return hero;
}