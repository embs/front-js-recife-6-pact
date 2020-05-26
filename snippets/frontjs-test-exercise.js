describe('GET /users/123', () => {
  it('returns the user representation', async () => {
    let user = await frontJS.getUser()

    assert.deepEqual(user, { name: 'Mary' })
  })
})
