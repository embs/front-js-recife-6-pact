describe('Pact', () => {
  const provider = new Pact({...}) // provedor do serviço (mock)
  const frontJS = new FrontJS()    // nossa app de front-end

  before(() => ...)                // configurar interação

  describe('GET /users/123', () => {
    it('returns the user representation', async () => {
      // exercício e verificação
    });
  });

  afterEach(() => provider.verify()) // verificação

  after(() => provider.finalize())   // teardown
});
