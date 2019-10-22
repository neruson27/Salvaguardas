import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'
import conf from './config'
const {resolvers} = require('./graphql/resolvers')
const {typeDefs} = require('./graphql/schemas')

mongoose.connect(conf.mongodbUrl, conf.mongodbConf)

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start({port: 7777}, () => console.log(`The server is running on http://localhost:7777`))