function validate(schema) {
  return (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
      return next();
    }
    const r = schema.safeParse(req.body);
    if (!r.success) {
      return res.status(400).json({
        error: 'ValidationError',
        details: r.error.flatten()
      });
    }
    req.body = r.data;
    next();
  };
}

module.exports = { validate };
