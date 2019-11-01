/** Log {msg}. */
const message = (req, res, msg) => {
  console.log(Date().split(' (')[0]);
  console.log(msg);
};

/** Log an error {msg} and send to client. */
const error = (req, res, msg, code = 400) => {
  const err = {
    error: msg,
    code,
  };

  message(req, res, err);

  res.status(err.code)
    .send(err);
};

export default {
  error,
  message,
};
