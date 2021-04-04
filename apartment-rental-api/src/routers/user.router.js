import express from 'express';

const router = express.Router();

router.route('/users').get();
router.route('/user/:userId').get().put().delete();

export default router;
