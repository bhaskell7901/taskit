const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Profile } = require('../../models/profile');

router.get('/api/profiles/:id', withAuth, async (req, res) => {
    try {
        const profile = await Profile.findByPk(req.params.id);
        res.json(profile);
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.post('/api/profiles', withAuth, async (req, res) => {
    try {
        const profile = await Profile.create({
            user_id: req.body.user_id,
            location_id: req.body.location_id,
            view_type: req.body.view_type,
            bio: req.body.bio
        });
    res.json(profile);
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.put('/api/profiles/:id', withAuth, async (req, res) => {
    try {
        await Profile.update({
            user_id: req.body.user_id,
            location_id: req.body.location_id,
            view_type: req.body.view_type,
            bio: req.body.bio
        }, 
        {
        where: { id: req.params.id }
        });
        const profile = await Profile.findByPk(req.params.id);
    res.json(profile);
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.delete('/api/profiles/:id', withAuth, async (req, res) => {
    try {
        await Profile.destroy({
        where: { id: req.params.id }
        });
    res.json({ success: true });
        } catch (error) {
            res.status(500).json({ error });
        }
});

module.exports = router;