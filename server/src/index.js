const { GraphQLServer } = require("graphql-yoga");
const psql = require('./psqlAdapter').psql;

const typeDefs = `
  type Query {
    countries(min: Int, max: Int): [String!]!
  }
`

const resolvers = {
  Query: {
    countries: (_, { min, max }) => {
      const countriesQuery = `select name from country where population > ${min} and population < ${max};`
      return psql.manyOrNone(countriesQuery)
        .then(data => data.map(country => country.name))
    }
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))