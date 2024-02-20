const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    const role = req.user.role;
    if (allowedRoles.includes(role)) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  };
};

module.exports = roleMiddleware;
