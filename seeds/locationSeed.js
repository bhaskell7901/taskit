const { Location } = require('../models');

const locationData = [
    {
        user_id: 1,
        address: '257 Wheeler Ave',
        city: 'San Francico',
        state: 'CA',
        zip: 94133,
        lat: 37.7749,
        long: 122.4194
    },
    {
        user_id: 1,
        address: '415 Mission Street',
        city: 'San Francico',
        state: 'CA',
        zip: 94133,
        lat: 37.7749,
        long: 122.4194
    },
    {
        user_id: 1,
        address: '215 Potrero St',
        city: 'San Francico',
        state: 'CA',
        zip: 94133,
        lat: 37.7749,
        long: 122.4194
    },
    {
        user_id: 2,
        address: '621 Harrison Street',
        city: 'San Francico',
        state: 'CA',
        zip: 94133,
        lat: 37.7749,
        long: 122.4194
    },
    {
        user_id: 1,
        address: '4 Embarcadero Street',
        city: 'San Francico',
        state: 'CA',
        zip: 94133,
        lat: 37.7749,
        long: 122.4194
    }
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;