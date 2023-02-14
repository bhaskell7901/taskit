const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Service } = require('../../models');

router.get('/', withAuth, async (req, res) => {
    try {
        const services = await Service.findAll();
        res.json(services);
    } catch (error) {
        res.status(500).json({error});
    }
}
);

router.get('/:id', withAuth, async (req, res) => {
    try {
        const serviceData = await Service.findByPk(req.params.id);
        res.json(serviceData);
    } catch (error) {
        res.status(500).json({error})
    }
}
);

router.post('/', withAuth, async (req, res) => {
    try {
        const createdService = await Service.create(
            {
                service_name: req.body.service_name,
                description: req.body.description  
            }
        );
        res.json(createdService);
    }
    catch (error) {
        res.status(500).json({error})
    }
}
);

router.put('/:id', withAuth, async (req, res) => {
    try {
        const serviceData = await Service.update(
            {
                service_name: req.body.service_name,
                description: req.body.description
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.json(updatedService);
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.delete('/api/services/:id', withAuth, async (req, res) => {
    try {
        await Service.destroy(
            {
                where:{
                    id: req.params.id
                }
            }
        );
    res.json(
        {
            sucess: true
        }
    );
    } catch(error) {
        res.status(500).json({error});
    }
});

module.exports = router;