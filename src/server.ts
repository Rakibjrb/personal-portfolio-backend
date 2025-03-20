import { app } from './app';

const main = () => {
  try {
    app.listen(5000, () => {
      console.log(`server listen on : http://localhost:${5000}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
