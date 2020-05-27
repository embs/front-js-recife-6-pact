# spec/service_consumers/provider_states_for_frontjs.rb
Pact.provider_states_for 'FrontJS' do
  provider_state 'Mary has the ID 123' do
    set_up do
      under_rb_mock = Pact.consumer_world.consumer_contract_builders.first
      under_rb_mock.given('Mary has the ID 123')
                   .upon_receiving('GET /users/123')
                   .with(method: :get, path: '/users/123')
                   .will_respond_with(status: 200, body: { name: 'Mary' })
    end

    tear_down do
      # Talvez: garantir que a interação aconteceu.
    end
  end
end
