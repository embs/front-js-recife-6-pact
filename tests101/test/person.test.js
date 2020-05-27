const Person = require('./../src/person.js')

const assert = require('assert')

describe('Person', () => {
  describe('#greet', () => {
    it('returns welcome message', () => {
      const person = new Person()

      assert.equal(person.greet(), 'Hey there! My name is Mary')
    })
  })
})
