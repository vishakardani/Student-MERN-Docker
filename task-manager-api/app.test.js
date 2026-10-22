const request = require('supertest');
const app = require('./server'); // Make sure this points to your exported Express app in server.js

test('GET /tasks returns 200 or access control check', async () => {
  const res = await request(app).get('/tasks');
  // Expecting either 200 (success) or 401 (unauthorized) depending on your auth setup
  expect([200, 401]).toContain(res.statusCode);
});