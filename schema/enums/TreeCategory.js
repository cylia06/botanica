import graphql from 'graphql';
const { GraphQLEnumType } = graphql;

export default new GraphQLEnumType({
  name: 'treeCategory',
  description: 'The possible types of trees.',
  values: {
    EVERGREEN: {
      value: 'evergreen',
    },
    DECIDUOUS: {
      value: 'deciduous',
    }
  },
});
