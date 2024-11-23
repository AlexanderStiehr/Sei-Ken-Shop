const productos = [
    {
        id: "1",
        name: "Bokken",
        stock: 10,
        price: 50,
        description: "Bokken de madera de eucalipto",
        img: "./public/pictures/bokken.jpg",
        category: "bukis",
    },
    {
        id: "2",
        name: "Jo",
        stock: 18,
        price: 150,
        description: "Jo de madera de roble",
        img: "./public/pictures/jo.jpg",
        category: "bukis",
    },
    {
        id: "3",
        name: "Tanto",
        stock: 50,
        price: 5000,
        description: "Tanto de madera de pino",
        img: "./public/pictures/tanto.jpg",
        category: "bukis",
    },
    {
        id: "4",
        name: "Keikogi",
        stock: 550,
        price: 55000,
        description: "Keikogi compuesto por chaqueta y pantalon de algodón",
        img: "./public/pictures/keikogi.png",
        category: "ropa",
    },
    {
        id: "5",
        name: "Hakama",
        stock: 550,
        price: 55000,
        description: "Hakama de algodón",
        img: "./public/pictures/hakama.jpg",
        category: "ropa",
    },
];

export const getProducts = () => {
    let error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject("Hubo un error, intente mas tarde");
            } else {
                resolve(productos);
            }
        }, 3000);
    });
};

export const getOneProduct = (id) => {
    let error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                let product = productos.find((item) => item.id === id);
                resolve(product);
            } else {
                reject("No hay data");
            }
        }, 3000);
    });
};
