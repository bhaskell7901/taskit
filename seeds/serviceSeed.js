const { Service } = require('../models');

const serviceData = [
    {
        service_name: 'Yard Work',
        description: 'General maintenance around the house including: mowing lawns, raking leavings, trimming, etc.'
    },
    {
        service_name: 'Landscaping',
        description: 'Upgrade your yard with new plants, retaining walls, new yard contours, etc.'
    },
    {
        service_name: 'House Cleaing',
        description: 'Dusting, cleaning, vacuuming, tidying up, your home.'
    }
];

const seedService = () => Service.bulkCreate(serviceData);

module.exports = seedService;