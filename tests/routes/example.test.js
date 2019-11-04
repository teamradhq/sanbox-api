import request from 'supertest';
import app from '@/server';

const base = '/example';
const auth = {
  key: 'foo',
  secret: 'bar',
};

describe(base, () => {
  it('should redirect index to list', async () => {
    const res = await request(app).post(base).send(auth);
    
    expect(res.statusCode).toEqual(301);
    expect(res.headers.location).toEqual(`${base}/list`);
  });

  // it(`${base}/list should return results`, async () => {
  //   const res = await request(app).post(`${base}/list`).send(auth);

  //   expect(res.statusCode).toBe(200);
  //   expect(res.body.items.length).toBe(1);
  // });

  // it(`${base}/view/1 should return data matching id`, async () => {
  //   const res = await request(app).post(`${base}/view/1`).send(auth);

  //   expect(res.statusCode).toBe(200);
  //   expect(res.body.id).toBe('1');
  // });
});
