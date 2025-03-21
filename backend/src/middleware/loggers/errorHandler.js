import { logEvents } from './logger.js';

const errorHandler = (err, req, res) => {
  logEvents(
    `${err?.name}: ${err?.message}\t${req?.method}\t${req?.url}\t${req?.headers?.origin}`,
    'errors.log'
  );
  console.log(err.stack);

  console.log(res);
  const status = res?.statusCode ? res?.statusCode : 500; // server error
  res?.status(status);
  res?.json({ message: err.message });
  console.log(derp);
};

export default errorHandler;
