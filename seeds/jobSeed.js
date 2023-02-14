const { Job } = require('../models');

const jobData = [
    {
        service_id: 1,
        service_provider_id: 1,
        customer_id: 4,
        location_id: 3,
        status_id: 3,
        description: 'Lawn mowing and trimming services.  Price per 1/4 acres or less.',
        invoice_amount: 250.00,
        accept: true,
        estimated_completion_date: 1676441588,
        start_date: 1676268788,
        completion_date: null
    },
    {
        service_id: 2,
        service_provider_id: 1,
        customer_id: 6,
        location_id: 4,
        status_id: 3,
        description: 'Backyard touch ups and overhauls.  That is what we are here for.  Price per 1/4 acres or less.',
        invoice_amount: 350.00,
        accept: true,
        estimated_completion_date: 1677132788,
        start_date: null,
        completion_date: null
    },
    {
        service_id: 3,
        service_provider_id: 1,
        customer_id: 8,
        location_id: 5,
        status_id: 4,
        description: 'We house clean and dust for cheap.',
        invoice_amount: 125.00,
        accept: true,
        estimated_completion_date: 1676268788,
        start_date: 1676095988,
        completion_date: 1676182388
    },
    {
        service_id: 1,
        service_provider_id: 1,
        customer_id: 4,
        location_id: 3,
        status_id: 5,
        description: 'Lawn mowing and trimming services.  Price per 1/4 acres or less.',
        invoice_amount: 250.00,
        accept: false,
        estimated_completion_date: null,
        start_date: null,
        completion_date: null
    }
];

const seedJob = () => Job.bulkCreate(jobData);

module.exports = seedJob;