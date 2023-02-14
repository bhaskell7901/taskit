const seedUser = require('./userSeed');
const seedJobStatusName = require('./jobStatusNameSeed');
const seedService = require('./serviceSeed');
const seedServiceRange = require('./serviceRange');
const seedLocation = require('./locationSeed');
const seedProfile = require('./profileSeed');
const seedJobOffer = require('./jobOfferSeed');
const seedJob = require('./jobSeed');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');


    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');
    
    await seedJobStatusName();
    console.log('\n----- JOB STATUE NAMES SEEDED -----\n');

    await seedService();
    console.log('\n----- SERVICES SEEDED -----\n');

    await seedServiceRange();
    console.log('\n----- SERVICE RANGES SEEDED -----\n');

    await seedLocation();
    console.log('\n----- LOCATIONS SEEDED -----\n');

    await seedProfile();
    console.log('\n----- PROFILES SEEDED -----\n');

    await seedJobOffer();
    console.log('\n----- JOB OFFERS SEEDED -----\n');

    await seedJob();
    console.log('\n----- JOBS SEEDED -----\n');

    process.exit(0);
};

seedAll();
