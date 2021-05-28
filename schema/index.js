import graphqlM, { GraphQLNonNull } from 'graphql';
import plantInterface from './interfaces/Plant.js';
import viewerType from './types/Viewer.js';
import treeType from './types/Tree.js';
import shrubType from './types/Shrub.js';
import herbType from './types/Herb.js';
import treeCategory from './enums/TreeCategory.js';
import PlantOrder from './inputs/PlantOrder.js';
import TreeInput from './inputs/TreeInput.js';
import HeightFilter from './inputs/HeightFilter.js';
import graphqlRelay from 'graphql-relay';
const { mutationWithClientMutationId } = graphqlRelay;

const { GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLFloat, GraphQLString, GraphQLBoolean, GraphQLInt } = graphqlM;

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    viewer: {
      type: viewerType,
      resolve: (obj, args, { viewer }) => {
        return viewer;
      },
    },
    Trees: {
      type: new GraphQLList(treeType),
      args: {
        orderBy: {
          type: PlantOrder,
          defaultValue: { field: 'name', direction: 'ASC' },
        },
        height: {
          type: HeightFilter,
        },
      },
      resolve: async (_, { orderBy, height }, { supabase }) => {
        const query = supabase.from('tree')
        .select('*')
        .order(orderBy.field, { ascending: orderBy.direction === 'ASC' });

        if (height !== null) {
            const { min, max } = height;
            query.gte('max_height', min).lte('max_height', max);
        }

        const { data, error } = await query;
        if (error) {
          console.error(error);
        }
        return data;
      },
    },
    Plants: {
      type: new GraphQLList(plantInterface),
      args: {
        orderBy: {
          type: PlantOrder,
          defaultValue: { field: 'id', direction: 'ASC' },
        }
      },
      resolve: async (_, { orderBy }, { supabase }) => {
        const query = supabase
        .from('plant')
        .select('tree_id(*),shrub_id(*),herb_id(*)')
        .order(orderBy.field, { ascending: orderBy.direction === 'ASC' });

        const { data, error } = await query;
        if (error) {
          console.error(error);
        }

        return data.map(plant => {
          if (plant.tree_id) {
            return {...plant.tree_id, __typename: 'tree'};
          }
          if (plant.shrub_id) {
            return {...plant.shrub_id, __typename: 'shrub'};
          }
          if (plant.herb_id) {
            return {...plant.herb_id, __typename: 'herb'};
          }
          return null;
        });
      },
    },
    Shrubs: {
      type: new GraphQLList(shrubType),
      args: {
        orderBy: {
          type: PlantOrder,
          defaultValue: { field: 'name', direction: 'ASC' },
        }
      },
      resolve: async (_, { orderBy }, { supabase }) => {
        const query = supabase.from('shrub')
        .select('*')
        .order(orderBy.field, { ascending: orderBy.direction === 'ASC' });
        const { data, error } = await query;
        if (error) {
          console.error(error);
        }
        return data;
      },
    },
    Herbs: {
      type: new GraphQLList(herbType),
      args: {
        orderBy: {
          type: PlantOrder,
          defaultValue: { field: 'name', direction: 'ASC' },
        }
      },
      resolve: async (_, { orderBy }, { supabase }) => {
        const query = supabase.from('herb')
        .select('*')
        .order(orderBy.field, { ascending: orderBy.direction === 'ASC' });
        const { data, error } = await query;
        if (error) {
          console.error(error);
        }
        return data;
      },
    },
  },
});

const addTree = mutationWithClientMutationId({
  name: 'AddTree',
  description: 'Adds a trees to table called Tree',
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    color: {
      type: new GraphQLNonNull(GraphQLString),
    },
    max_height: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    plant_url: {
      type: new GraphQLNonNull(GraphQLString),
    },
    is_indoor: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    lifespan: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    category: {
      type: new GraphQLNonNull(treeCategory),
    }
  },
  outputFields: {
    tree: {
      type: (treeType),
    },
  },
  mutateAndGetPayload: async (input, { supabase }) => {
    console.log(
      'Mutation.addTree : ' + JSON.stringify(input, null, 2)
    );
    const { name, color, max_height, plant_url, is_indoor, lifespan, category } = input;
    const {data:dataPot} = await supabase.from('tree').select('id');

    const query = supabase.from('tree')
      .insert([{id:dataPot.length + 1 ,name: name, color: color, max_height: max_height, plant_url: plant_url, is_indoor: is_indoor, lifespan: lifespan, category: category}]);
      const {data,error} = await query;
      if (error) {
        console.error(error);
      }
      console.log({tree:data[0]});
      return {tree:data[0]}
    },
});

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTree: addTree,
  },
});

export default new GraphQLSchema({ query: queryType, mutation: mutationType, types: [treeType, shrubType, herbType] });
