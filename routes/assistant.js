const router = require('express').Router();
const { z } = require('zod');
const { answer } = require('../aiAssistant');
const { validate } = require('../middleware/validate');

router.post(
  '/query',
  validate(z.object({ query: z.string().min(2).max(1000) })),
  (req, res) => {
    res.json({
      answer: answer(req.body.query),
      source: 'prototype knowledge base'
    });
  }
);

module.exports = router;
