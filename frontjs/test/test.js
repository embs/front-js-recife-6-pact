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
          state: 'Mary has the ID 123',
          uponReceiving: 'a request for user with ID 123',
          withRequest: {
            method: 'GET',
            path: '/users/123',
          },
          willRespondWith: {
            status: 200,
            body: {
              name: 'Mary'
            },
          },
        })
      )
  )

  describe('GET /users/123', function() {
    it('returns the user representation', async () => {
      let user = await frontJS.getUser();

      assert.deepEqual(user, { name: 'Mary' });
    });
  });

  afterEach(() => provider.verify())

  after(() => provider.finalize())
});
