const { JobOffer } = require('../models');

const jobOfferData = [
  {
    user_id: 1,
    service_id: 1,
    description: 'Lawn mowing and trimming services.  Price per 1/4 acres or less.',
    offer_price: 250.00
  },
  {
    user_id: 1,
    service_id: 3,
    description: 'We house clean and dust for cheap.',
    offer_price: 125.00
  },
  {
    user_id: 3,
    service_id: 2,
    description: 'Backyard touch ups and overhauls.  That is what we are here for.  Price per 1/4 acres or less.',
    offer_price: 350.00
  }
];

const seedJobOffer = () => JobOffer.bulkCreate(jobOfferData);

module.exports = seedJobOffer;