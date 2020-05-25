const { Pact } = require('@pact-foundation/pact')
const FrontJS = require('./../src/frontjs.js')

const assert = require('assert');
const path = require('path')

describe('Pact', function() {
  const provider = new Pact({
    consumer: 'FrontJS',
    provider: 'BequeRb',
    port: 3000,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    logLevel: 'INFO',
  })
  const frontJS = new FrontJS()

  before(() =>
    provider
      .setup()
      .then(() =>
        provider.addInteraction({
          state: 'User 123 does exist',
          uponReceiving: 'a request for user 123',
          withRequest: {
            method: 'GET',
            path: '/users/123',
            headers: { Accept: 'application/json' },
          },
          willRespondWith: {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
            body: {
              name: 'Mary'
            },
          },
        })
      )
  )

  describe('GET /users/123', function() {
    it('returns the user representation', function() {
      assert.equal(frontJS.getUser(), { name: 'Mary' });
    });
  });

  afterEach(() => provider.verify())

  after(() => provider.finalize())
});
