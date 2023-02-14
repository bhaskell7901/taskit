const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Job, User } = require('../../models');

router.get('/api/jobs', withAuth, async (req, res) => {
    try {
        const jobs = await Job.findAll({
          include: [
            {
              model: User,
            }
          ],
        });
        req.json(jobs);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/api/jobs/:id', withAuth, async (req, res) => {
    try {
      const job = await Job.findByPk(req.params.id, {
        include: [
          {
            model: User,
          }
        ],
      });
      if (!job) {
        res.status(404).json({message: 'Job not found' });
      }
      res.json(job);
    } catch (error) {
      res.status(500).json({message: error.message });
    }
});

router.post('/api/jobs', withAuth, async (req, res) => {
    try {
      const job = await Job.create(
        {
            job_title: req.body.job_title,
            job_description: req.body.job_description,
            job_status_name_id: req.body.job_status_name_id,
            service_id: req.body.service_id,
            service_provider_id: req.body.service_provider_id,
            customer_id: req.body.customer_id
        }
        );
    res.json(job);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
});

router.put('/api/jobs/:id', withAuth, async (req, res) => {
    try {
      const job = await Job.findByPk(req.params.id, {
        include: [
          {
            model: User,
          }
        ]
      });
      if (!job) {
        res.status(404).json({ message: 'Job not found' });
      }
      await job.update(
        {
            job_title: req.body.job_title,
            job_description: req.body.job_description,
            job_status_name_id: req.body.job_status_name_id,
            service_id: req.body.service_id,
            service_provider_id: req.body.service_provider_id,
            customer_id: req.body.customer_id
        }
    );
      res.json(job);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
});

router.delete('/api/jobs/:id', withAuth, async (req, res) => {
    try {
      const job = await Job.findByPk(req.params.id);
      if (!job) {
        res.status(404).json({ message: 'Job not found' });
      }
      await job.destroy();
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

module.exports = router;