const indexAction = (req, res) => {
  const redirect = `${req.baseUrl}/list`;
  res.redirect(301, redirect);
};

const listAction = (req, res) => {
  const data = { items: ['list'] };

  res.send(data);
};

const viewAction = (req, res) => {
  const data = { id: req.params.id };

  res.send(data);
};

export default {
  indexAction,
  listAction,
  viewAction,
};
