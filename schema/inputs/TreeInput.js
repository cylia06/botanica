import graphql from 'graphql';
import treeCategory from '../enums/TreeCategory.js';
const { GraphQLInputObjectType, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLBoolean} = graphql;


export default new GraphQLInputObjectType({
  name: 'TreeInput',
  fields: {
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
  },
});
