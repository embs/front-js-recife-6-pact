class FrontJS {
  async getUser() {
    return axios.get('http://localhost:3000/users/123')
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.error(error);
      })
  }
}
