# spec/service_consumers/pact_helper.rb
require 'pact/provider/rspec'
require './spec/service_consumers/provider_states_for_frontjs.rb'

Pact.service_provider 'BequeRb' do
  honours_pact_with 'FrontJS' do
    pact_uri '../frontjs/pacts/frontjs-bequerb.json'
  end
end

Pact.service_consumer 'BequeRb' do
  has_pact_with 'UnderRb' do
    mock_service :under_rb do
      port 1234
    end
  end
end
