$ npm test

> front-js-recife-6-pact@1.0.0 test
> mocha

[2020-05-25T21:04:53.253Z]  INFO: pact-node@10.9.4/30896 on crow:
    Creating Pact Server with options: 
    {"consumer":"FrontJS","provider":"BequeRb",...}

[2020-05-25T21:04:54.332Z]  INFO: pact@9.11.0/30896 on crow:
    Setting up Pact with Consumer "FrontJS" and Provider "BequeRb"
        using mock service on Port: "3000"
    GET /users/123
      ✓ returns the user representation
[2020-05-25T21:04:54.388Z]  INFO: pact@9.11.0/30896 on crow: Pact File Written
[2020-05-25T21:04:54.389Z]  INFO: pact-node@10.9.4/30896 on crow: Removing Pact process with PID: 30907                                                                                       
[2020-05-25T21:04:54.392Z]  INFO: pact-node@10.9.4/30896 on crow:
    Deleting Pact Server with options: 
    {"consumer":"FrontJS","provider":"BequeRb",...}

  1 passing (1s)
