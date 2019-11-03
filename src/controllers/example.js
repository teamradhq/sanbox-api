import store from '@/server/store';

const indexAction = (req, res) => {
  const redirect = `${req.baseUrl}/list`;
  res.redirect(301, redirect);
};

const listAction = (req, res) => {
  const data = {
    items: ['list'],
    users: store.users.items,
    posts: store.posts.items,
    categories: store.categories.items,
  };

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
