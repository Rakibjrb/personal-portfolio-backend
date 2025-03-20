const sendresponse = (res: any, status: number, data: any) => {
  if (status === 200) {
    res.status(status).send({
      status,
      message: 'data found',
      data,
    });
  } else if (status === 201) {
    res.status(status).send({
      status,
      message: 'success',
      data,
    });
  } else {
    res.status(status).send({
      status,
      message: 'no data found',
      data,
    });
  }
};

export { sendresponse };
