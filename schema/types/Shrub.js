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
  name: 'shrub',
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
    shrub_type: {
      type: GraphQLString,
    },
    is_carnivorous: {
      type: GraphQLBoolean,
    }
  }),
});
