# spec/service_consumers/pact_helper.rb
require 'pact/provider/rspec'
require './spec/service_consumers/provider_states_for_frontjs.rb'

Pact.service_provider 'BequeRb' do
  honours_pact_with 'FrontJS' do
    pact_uri '../frontjs/pacts/frontjs-bequerb.json'
  end
end
