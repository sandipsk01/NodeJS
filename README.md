Node.js is an open-source, cross-platform JavaScript runtime environment. 

Best Practices while using MVC pattern:-
    -Seperation of concerns
    -DRY (Don't Repeat Yourself)
    -Using Middlewares
    -Modularize
    -Naming Conventions
    -Security Implementation

In RESTful API, the flow of request starts from the client to the server. The Server thn directs the request to the appropriate route. The route invokes the appropriate controller function. Which may interact with the model to fetch or manipulate data. The controller then sends a response back to client.
    
    Client -> Server -> Route -> Controller -> Model -> Controller -> Client