const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { ServiceRange } = require('../../models');

router.get('/:providerId', withAuth, async (req, res) => {
    try {
        const serviceRangeData = await ServiceRange.findOne(
            { 
                where: { service_provider_id: req.params.providerId }
            }
        );

        if (!serviceRangeData) {
            res.status(404).json({ message: "No service range data found"} );
            return;
        }
        
        res.status(200).json(serviceRangeData.get({ plain: true }));

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/:providerId', withAuth, async (req, res) => {
    try {
        const serviceRangeData = await ServiceRange.create(
            { 
                service_provider_id: providerId,
                range_miles: req.body.range_miles
            }
        );
        res.status(200).json(serviceRangeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:providerId', withAuth, async (req, res) => {
    try {
        const serviceRangeData = await ServiceRange.update(
            {
                range_miles: req.body.range_miles
            },
            {
                where: {
                    service_provider_id: providerId
                }
            }   
        );
        res.status(200).json(serviceRangeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:providerId', withAuth, async (req, res) => {
    try {
        const serviceRangeData = await ServiceRange.destroy(
            {
                where: {
                    service_provider_id: provierId
                }
            }
        );
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;