const { JobStatusName } = require('../models');

const jobStatusNameData = [
    {
        status_name: 'New'
    },
    {
        status_name: 'Pending - Accept'
    },
    {
        status_name: 'Accepted'
    },
    {
        status_name: 'Completed'
    },
    {
        status_name: 'Rejected'
    }
];

const seedJobStatusName = () => JobStatusName.bulkCreate(jobStatusNameData);

module.exports = seedJobStatusName;