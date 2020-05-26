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
        body: { name: 'Mary' },
      },
    }))
