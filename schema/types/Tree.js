import graphql from 'graphql';
import plantInterface from '../interfaces/Plant.js';
import treeCategory from '../enums/TreeCategory.js';

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
  name: 'tree',
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
    category: {
      type: treeCategory,
    }
  }),
});
