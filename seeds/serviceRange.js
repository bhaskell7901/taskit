const { ServiceRange } = require('../models');

const serviceRangeData = [
    {
        service_provider_id: 1,
        range_miles: 9.5
    },
    {
        service_provider_id: 2,
        range_miles: 12
    },
    {
        service_provider_id: 3,
        range_miles: 5
    }
];

const seedServiceRange = () => ServiceRange.bulkCreate(serviceRangeData);

module.exports = seedServiceRange;