import graphql from 'graphql';
const { GraphQLEnumType } = graphql;

export default new GraphQLEnumType({
  name: 'PlantOrderField',
  description: 'The possible field for ordering plants.',
  values: {
    NAME: {
      value: 'name',
    },
    ID: {
      value: 'id',
    },
  },
});
