const { Profile } = require('../models');

const profileData = [
    {
        user_id: 1,
        location_id: 1,
        view_type: 'provider',
        bio: '10 years experience in landscaping with many satisfied customers.'
    },{
        user_id: 1,
        location_id: 2,
        view_type: 'customer',
        bio: 'I have many landscaping tasks that need to be completed.  I am looking for a team of lanscapers to fix my yard.'
    },
    {
        user_id: 2,
        location_id: 3,
        view_type: 'customer',
        bio: 'I am looking for a house cleaner to vacuum, clean and dust my house.'
    },
    {
        user_id: 3,
        location_id: 4,
        view_type: 'customer',
        bio: 'I am looking for someone to mow my lawn, need it done asap.'
    },
    {
        user_id: 4,
        location_id: 5,
        view_type: 'provider',
        bio: '5 years experience in yard work.  Let me help you with your yard work.'
    },
];

const seedProfile = () => Profile.bulkCreate(profileData);

module.exports = seedProfile;