import graphql from 'graphql';
import treeType from '../types/Tree.js';
import herbType from '../types/Herb.js';
import shrubType from '../types/Shrub.js';

const {
GraphQLInterfaceType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLInt
} = graphql;

const plantInterface = new GraphQLInterfaceType({
  name: 'plant',
  resolveType: (obj) => {
      if (obj.category) {
        return treeType;
      }
      if (obj.heat_level) {
        return herbType;
      }
      return shrubType;
  },
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
      }
  }),
});

export default plantInterface;
