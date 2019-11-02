const res = {
  redirect: jest.fn(() => res),
  send: jest.fn(() => res),
  status: jest.fn(() => res),
};

export default res;
