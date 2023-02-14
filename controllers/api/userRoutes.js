const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User } = require('../../models');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll();
        if (!userData) {
            res.status(404).json({ message: "No user data" });
            return;
        }

        const users = userData.map( (user) => user.get({ plain: true }));
        res.status(200).json(users);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);

        if (!userData) {
            res.status(404).json({ message: "No user found with that id" });
            return;
        }

        res.status(200).json(userData.get({ plain: true }) );

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const userData = await User.create(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                view_preference: req.body.view_preference
            }
        );
        res.status(200).json(userData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.update(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                view_preference: req.body.view_preference
            },
            {
                where: {
                    id: req.params.id,
                }
            }
        );
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;