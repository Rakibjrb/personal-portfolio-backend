const sendresponse = (res: any, status: number, data: any) => {
  res.status(status).send({
    status,
    message: 'data found',
    data,
  });
};

export { sendresponse };
