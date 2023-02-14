const { User } = require('../models');

const userData = [
    {
        id: 1,
        first_name: 'Larry',
        last_name: 'Frietz',
        email: 'larry@gmail.com',
        password: 'password',
        view_preference: 'provider'        
    },
    {
        id: 2,
        first_name: 'Georgina',
        last_name: 'Frietz',
        email: 'georgina@gmail.com',
        password: 'password',
        view_preference: 'customer'        
    },
    {
        id: 3,
        first_name: 'Amelia',
        last_name: 'Henning',
        email: 'amelia@gmail.com',
        password: 'password',
        view_preference: 'provider'        
    },
    {
        id: 4,
        first_name: 'Frank',
        last_name: 'Sinatra',
        email: 'frank@gmail.com',
        password: 'password',
        view_preference: 'customer'        
    },
    {
        id: 5,
        first_name: 'George',
        last_name: 'Heinz',
        email: 'george@gmail.com',
        password: 'password',
        view_preference: 'provider'        
    },
    {
        id: 6,
        first_name: 'Jimmy',
        last_name: 'Kimmel',
        email: 'jimmy@gmail.com',
        password: 'password',
        view_preference: 'customer'        
    },
    {
        id: 7,
        first_name: 'Suzy',
        last_name: 'Harrison',
        email: 'suzy@gmail.com',
        password: 'password',
        view_preference: 'provider'        
    },
    {
        id: 8,
        first_name: 'Charlie',
        last_name: 'Chapman',
        email: 'charlie@gmail.com',
        password: 'password',
        view_preference: 'customer'        
    }
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
});

module.exports = seedUser;