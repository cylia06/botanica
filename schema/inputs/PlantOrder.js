import graphql from 'graphql';
import OrderDirection from '../enums/OrderDirection.js';
import PlantOrderField from '../enums/PlantOrderField.js';
const { GraphQLInputObjectType } = graphql;

export default new GraphQLInputObjectType({
  name: 'PlantOrder',
  fields: {
    direction: {
      type: OrderDirection,
    },
    field: {
      type: PlantOrderField,
    },
  },
});
