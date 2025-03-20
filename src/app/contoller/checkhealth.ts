const checkhealth = (req: any, res: any) => {
  res.send({
    status: 200,
    message: 'Server working fine',
    working: true,
  });
};

const handle_errors = (err: any, req: any, res: any, next: any) => {
  res.status(err.status || 500).send({
    working: false,
    message: `${err.error}` || 'internal server error',
    status: err.status || 500,
    error: err.errors,
  });
};

const invalid_routes = (req: any, res: any, next: any) => {
  const error = new Error(`Route not found : ${req.originalUrl}`);
  next({
    error,
    status: 404,
  });
};

export { checkhealth, handle_errors, invalid_routes };
