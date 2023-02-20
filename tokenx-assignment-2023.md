# Token X 
## Assignment-FEB 2023

**Backend Developer**

### Requirements
- Our Tokenx's BD needs to present a new product prototype to the customer. So, the developer team to implement a small bookstore online about cryptocurrency and tokenization books. The store should have features like a general bookstore such as registering, logging in, and viewing book detail. Also, the user can buy the book through a non-custodial wallet on the blockchain.

### Backlogs

1. Please design microservice architecture on AWS cloud for book store management application. Then export the architecture diagram in PNG/PDF format and upload it to your GitHub repository.
2. Please implement a microservice by using typescript/javascript to complete the system above to support basic functionality of the bookstore. You can also use any javascript framework to implement the microservice.
   - As an user, I would like to register a new user 
        - the user can register their account by providing their email and password. The password must be encrypted before storing in the database.
        - the password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.
   - As an user, I would like to login to the system
        - the user can login to the system by providing their email and password. The password must be encrypted before comparing with the password in the database.
    - As an user, I would like to view the list of books in the bookstore
        - the user can view the list of books in the bookstore. The list of books should be sorted by the book's name.
   -  As an user, I can buy view the book detail
        - the user can select the book and view the book detail such as book name, author, price, and description.
    - As an user, I can buy the book
        - the user can buy the book by providing their wallet address and the amount of the book they want to buy. The user can buy the book by using non-custodial wallet on blockchain (EVM).
    - As an user, I can view the list of my purchased books
        - the user can view the list of their purchased books. The list of books should be sorted by the book's name.
3. Please write a simple unit test for the microservices above.

**Bonus** : If you have time, you can implement the following features
- As an user, I can search the book on search bar
  - the user can search the book by providing the book's name or author's name.
- As an user, I will see the nofication when I buy the book
  - the user will see the notification when they buy the book successfully.
- As an user, I can still buy the book when the system is down.

#### Hint : If you not familiar with store on blockchain, Please find the kitty.
#### Hint2 : You not need to use mainnet. You can use testnet.