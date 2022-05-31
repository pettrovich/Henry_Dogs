const axios = require("axios");
const URL = 'https://api.thedogapi.com/v1/breeds';
const {API_KEY} = process.env;

function getURL(name) {
//     if (name) return `${URL}/search?q=${name}&api_key=${API_KEY}`;
    return `${URL}?api_key=${API_KEY}`;
}

async function getDogList(breedName) {
    const apiURL = await axios.get(getURL(breedName));
    const apiList = apiURL.data.map(breed => {
        const id = breed.id;
        const name = breed.name;
    //     const image = breed.reference_image_id;
        const image = breed.image.url;
        const weight = breed.weight.metric + " kg";
        const height = breed.height.metric + " cm";
        const lifespan = breed.life_span;
        const temperament = breed.temperament;
        const temperaments = temperament ? temperament.split(", ") : [];
        return {id,
                name,
                image,
                weight,
                height,
                lifespan,
                temperaments}
    });
    return apiList;
}

async function getAllDogs(res) {
    let dogList = await getDogList();
    return  res.json(dogList.map(breed => {
        const {name,image,temperaments,weight} = breed;
        return {name,image,temperaments,weight};
    }));
}

async function getDogsByName(name,res) {
    let dogList = await getDogList(name);
    dogList = dogList.filter(breed => breed.name.toLowerCase().includes(name.toLowerCase()));
    if (dogList.length > 0) return res.json(dogList.map(breed => {
            const {name,image,temperaments,weight} = breed;
            return {name,image,temperaments,weight};
        }));
    return res.send("No se encontraron perros con el nombre buscado.")
}

async function getDogsById(id,res) {
    let dogList = await getDogList();
    dogList = dogList.filter(dog => dog.id == id);
    if (dogList.length > 0) return res.json(dogList.map(breed => {
            const {name,image,temperaments,weight,height,lifespan} = breed;
            return {name,image,temperaments,weight,height,lifespan};
        }));
    return res.send("No se encontraron perros con el id buscado.")
}

module.exports={getAllDogs,getDogsByName,getDogsById};