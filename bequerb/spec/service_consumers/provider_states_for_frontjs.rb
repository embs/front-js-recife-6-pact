Pact.provider_states_for 'FrontJS' do
  provider_state 'User 123 does exist' do
    set_up do
      # User.create(id: 123, name: 'Mary')
    end

    tear_down do
      # User.destroy_all
    end
  end
end
