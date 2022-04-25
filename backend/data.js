import bcrypt from 'bcryptjs';
const data = {

    users: [
        {
            name: 'Andres',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: 'Juan',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false
        },
    ],

    products: [
        {
            //_id: '1',
            name: 'Guitarra acustica clasica',
            slug: 'guitarra-clasica',
            category: 'cuerdas',
            image: './images/guitarra-clasica.jpg',
            price: 680000,
            countInStock: 1,
            brand: 'Yamaha',
            rating: 4,
            numReviews: 10,
            description: 'guitarra clasica marca yamaha en cedro cuerdas nilon',
        },
        {
            //_id: '2',
            name: 'Piano',
            slug: 'piano-de-cola',
            category: 'cuerdas',
            image: './images/piano-de-cola.jpg',
            price: 42000000,
            countInStock: 5,
            brand: 'Yamaha',
            rating: 4.5,
            numReviews: 10,
            description: 'piano de cola marca yamaha',
        },
        {
            //_id: '3',
            name: 'Flauta Traversa',
            slug: 'flauta-traversa',
            category: 'viento',
            image: './images/flauta-traversa.jpg',
            price: 834900,
            countInStock: 10,
            brand: 'Yamaha',
            rating: 4.5,
            numReviews: 10,
            description: 'flauta traversa marca Tom Grasso',
        },
        {
            //_id: '4',
            name: 'Bateria Acustica',
            slug: 'bateria-acustica',
            category: 'acustico',
            image: './images/bateria-acustica.jpg',
            price: 834900,
            countInStock: 10,
            brand: 'Yamaha',
            rating: 4.5,
            numReviews: 10,
            description: 'bateria acustica marca yamaha',
        },
    ],
}

export default data