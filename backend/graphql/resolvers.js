import User from '../models/user'
import mongoose from 'mongoose'

export const resolvers = {
    Query: {
      Greeting () {
        return `Hello World`
      },
      async Users () {
        return User.find({})
      },
      async User (_, data) {
        return User.findOne({_id: data.id})
        .then(user => {
          return user
        })
        .catch(error => console.log(error))
      },
      async Login (_, data) {
        console.log(data)
        let pass = data.LoginInput.password
        return User.findOne({email: data.LoginInput.email})
        .then(user => {
          console.log(pass)
          user.login = user.validatePassword(pass.toString())
          return user
        })
      }
    },
    Mutation: {
      async createUser (__, input) {
        return User.create({
          first:input.UserInput.first,
          last:input.UserInput.last,
          email:input.UserInput.email,
        })
        .then(user => {
          user.setPassword(input.UserInput.password)
          return user.save()
        })
        .catch(err => {
          console.log('----error----')
          console.error(err)
        })
      }
    }
  }