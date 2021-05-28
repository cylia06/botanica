import graphql from 'graphql';
const { GraphQLInputObjectType, GraphQLInt, GraphQLFloat } = graphql;

export default new GraphQLInputObjectType({
  name: 'HeightFilter',
  fields: {
    min: {
      type: GraphQLFloat,
    },
    max: {
      type: GraphQLFloat,
    },
  },
});
