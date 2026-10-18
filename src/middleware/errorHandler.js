
module.exports = (err, req, res, next) => {
    if (res.headersSent) return next(err);
  
    if (err.name === "ValidationError" || err.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid task data",
        errors: err.name === "ValidationError"
          ? Object.values(err.errors).map((e) => e.message)
          : undefined,
      });
    }
  
    console.error(err.message);
  
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  };

  