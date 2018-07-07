const { GraphQLServer } = require('graphql-yoga')

const countryList = [
  {
    name: "Italy",
    population: 10
  },
  {
    name: "France",
    population: 20
  },
  {
    name: "England",
    population: 30
  },
  {
    name: "Germany",
    population: 40
  }
]

const typeDefs = `
 type Query {
    countries(min: Int, max: Int): [String!]!
  }
`

const resolvers = {
  Query: {
    countries: (_, { min, max }) => countryList
      .filter(country => country.population > min && country.population < max)
      .map(country => country.name),
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))