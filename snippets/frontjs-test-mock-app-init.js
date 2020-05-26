const provider = new Pact({
  consumer: 'FrontJS',
  provider: 'BequeRb',
  port: 3000,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  logLevel: 'INFO',
})
const frontJS = new FrontJS()
