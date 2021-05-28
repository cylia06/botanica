import graphql from 'graphql';
import plantInterface from '../interfaces/Plant.js';

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID,
  GraphQLString,
} = graphql;

export default new GraphQLObjectType({
  name: 'herb',
  interfaces: () => ([plantInterface]),
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    color: {
      type: GraphQLString,
    },
    max_height: {
      type: GraphQLFloat,
    },
    plant_url: {
      type: GraphQLString,
    },
    is_indoor: {
      type: GraphQLBoolean,
    },
    lifespan: {
      type: GraphQLInt,
    },
    heat_level: {
      type: GraphQLInt,
    },
    calories: {
      type: GraphQLInt,
    }
  }),
});
