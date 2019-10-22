export const typeDefs = `
  type User {
    id: ID
    first: String
    last: String
    email: String
  }

  type UserLogin {
    id: ID
    first: String
    last: String
    email: String
    login: Boolean
  }

  input UserInput {
    id: ID
    first: String
    last: String
    email: String
    password: String
  }

  input LoginInput {
    email: String!
    password: String!
  }


  type Query {
    Users: [User]
    User(id: ID): User
    Login(LoginInput: LoginInput!): UserLogin
    Greeting: String
  }

  type Mutation {
    createUser(UserInput:UserInput): User
  }
`