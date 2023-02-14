const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { JobOffer, Service, User } = require('../../models');

router.get('/', withAuth, async (req, res) => {
    try {
        const jobOfferData = JobOffer.findAll(
            {
                include: [{ model: User }]
            }
        );

        if (!jobOfferData) {
            res.status(404).json({ message: "No job offer data found" });
            return;
        }

        const jobOffers = jobOfferData.map( (jobOffer) => jobOffer.get({ plain: true }));
        res.status(200).json(jobOffers);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:userId', withAuth, async (req, res) => {
    try {
        const jobOfferData = JobOffer.findAll(
            {
                include: [{ model: Service }, { model: User }]
            },
            {
                where: { user_id: userId }
            }
        );

        if (!jobOfferData) {
            res.status(404).json({ message: "No user found with that id" });
            return;
        }

        const jobOffers = jobOfferData.map((jobOffer) => { jobOffer.get({ plain: true })});
        res.status(200).json(jobOffers);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/:userId', withAuth, async (req, res) => {
    try {
        const jobOfferData = await JobOffer.create(
            {
                user_id: req.params.userId,
                service_id: req.body.service_id,
                description: req.body.description,
                offer_price: req.body.offer_price
            }
        );
        res.status(200).json(jobOfferData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:jobOfferId', withAuth, async (req, res) => {
    try {
        const jobOfferData = await JobOffer.update(
            {
                service_id: req.body.service_id,
                description: req.body.description,
                offer_price: req.body.offer_price
            },
            {
                where: {
                    user_id: req.params.jobOfferId,
                }
            }
        );
        res.status(200).json(jobOfferData.get({ plan: true }));
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:jobOfferId', withAuth, async (req, res) => {
    try {
        const jobOfferData = await JobOffer.destroy(
            {
                where: {
                    id: jobOfferId
                }
            }
        );
        res.status(200).json(jobOfferData.get({ plan: true }));
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;