describe 'Sign in' do
  context 'with valid credentials' do
    it 'shows welcome message' do
      user = create(:user)

      visit '/sign_in'
      fill_in :email, user.email
      fill_in :password, user.password
      click_on 'Sign in'

      expect(page).to have_content "Welcome, #{user.name}!"
    end
  end
end
