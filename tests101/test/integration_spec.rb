describe 'Sign in' do
  context 'with valid credentials' do
    it 'shows welcome message' do
      user = create(:user)

      post '/sign_in', params: user.credentials

      expect(page).to have_content "Welcome, #{user.name}!"
    end
  end
end
