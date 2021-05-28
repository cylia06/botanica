const continents =  [
  {
    id: 1,
    name: 'North America'
  },
  {
    id: 2,
    name: 'South America'
  },
  {
    id: 3,
    name: 'Europe'
  },
  {
    id: 4,
    name: 'Africa'
  },
  {
    id: 5,
    name: 'Asia'
  },
  {
    id: 6,
    name: 'Antarctica'
  },
  {
    id: 7,
    name: 'Oceania'
  }
]

const regions = [
  {
      id: 1,
      name: 'Caribbean',
      climate: 'tropical',
      id_continent: 1
  },
  {
      id: 2,
      name: 'Central America',
      climate: 'tropical',
      id_continent: 1
  },
  {
      id: 3,
      name: 'Mexico',
      climate: 'dry',
      id_continent: 1
  },
  {
      id: 4,
      name: 'Canada',
      climate: 'polar',
      id_continent: 1
  },
  {
      id: 5,
      name: 'United States',
      climate: 'temperate',
      id_continent: 1
  },
  {
      id: 6,
      name: 'Andean states',
      climate: 'temperate',
      id_continent: 2
  },
  {
      id: 7,
      name: 'Caribbean South America',
      climate: 'tropical',
      id_continent: 2
  },
  {
      id: 8,
      name: 'Eastern South America',
      climate: 'tropical',
      id_continent: 2
  },
  {
      id: 9,
      name: 'Southern Cone',
      climate: 'temperate',
      id_continent: 2
  },
  {
      id: 10,
      name: 'Northern Europe',
      climate: 'polar',
      id_continent: 3
  },
  {
      id: 11,
      name: 'Eastern Europe',
      climate: 'temperate',
      id_continent: 3
  },
  {
      id: 12,
      name: 'Southern Europe',
      climate: 'temperate',
      id_continent: 3
  },
  {
      id: 13,
      name: 'Western Europe',
      climate: 'temperate',
      id_continent: 3
  },
  {
      id: 14,
      name: 'North Africa',
      climate: 'temperate',
      id_continent: 4
  },
  {
      id: 16,
      name: 'South Africa',
      climate: 'temperate',
      id_continent: 4
  },
  {
      id: 17,
      name: 'East Africa',
      climate: 'tropical',
      id_continent: 4
  },
  {
      id: 18,
      name: 'West Africa',
      climate: 'tropical',
      id_continent: 4
  },
  {
      id: 19,
      name: 'Central Africa',
      climate: 'tropical',
      id_continent: 4
  },
  {
      id: 20,
      name: 'Central Asia',
      climate: 'temperate',
      id_continent: 5
  },
  {
      id: 21,
      name: 'East Asia',
      climate: 'tropical',
      id_continent: 5
  },
  {
      id: 22,
      name: 'South Asia',
      climate: 'tropical',
      id_continent: 5
  },
  {
      id: 23,
      name: 'Southeast Asia',
      climate: 'tropical',
      id_continent: 5
  },
  {
      id: 24,
      name: 'Western Asia',
      climate: 'dry',
      id_continent: 5
  },
  {
      id: 25,
      name: 'East Antarctica',
      climate: 'polar',
      id_continent: 6
  },
  {
      id: 26,
      name: 'West Antarctica',
      climate: 'polar',
      id_continent: 6
  },
  {
      id: 27,
      name: 'Australia',
      climate: 'dry',
      id_continent: 7
  },
  {
      id: 28,
      name: 'Melanesia',
      climate: 'tropical',
      id_continent: 7
  },
  {
      id: 29,
      name: 'Micronesia',
      climate: 'tropical',
      id_continent: 7
  },
  {
      id: 30,
      name: 'Polynesia',
      climate: 'tropical',
      id_continent: 7
  }
]

const trees = [
  {
    id: 1,
    name: 'Devil’s Walkingstick',
    max_height: 10,
    color: 'green',
    plant_url: 'https://www.thegardenwebsite.com/uploads/8/4/5/5/84557242/editor/aralia-spinosa-devil-s-walking-stick-hoyt-arboretum-oct-4.jpg',
    is_indoor: false,
    lifespan: 20,
    category: 'evergreen'
  },
  {
    id: 2,
    name: 'Monkey Puzzle tree',
    max_height: 40,
    color: 'green',
    plant_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Monkey_Puzzle_tree_%28Araucaria_Araucana%29_on_Penryn_Campus%2C_Cornwall_01.jpg',
    is_indoor: false,
    lifespan: 15,
    category: 'deciduous'
  },
  {
    id: 3,
    name: 'Baobab',
    max_height: 23,
    color: 'brown',
    plant_url: 'https://cdn.britannica.com/48/156348-050-21339735/Baobab-tree-Kenya.jpg',
    is_indoor: false,
    lifespan: 2000,
    category: 'evergreen'
  },
  {
    id: 4,
    name: 'Silver birch',
    max_height: 20,
    color: 'silver',
    plant_url: 'https://previews.123rf.com/images/cmspic/cmspic1105/cmspic110500015/9646433-a-group-of-silver-birch-trees.jpg',
    is_indoor: false,
    lifespan: 15,
    category: 'deciduous'
  },
  {
    id: 5,
    name: 'Rainbow Eucalyptus',
    max_height: 30,
    color: 'multicolored',
    plant_url: 'https://www.americanforests.org/wp-content/uploads/2015/10/Rainbow-Eucalyptus.jpg',
    is_indoor: false,
    lifespan: 25,
    category: 'evergreen'
  },
  {
    id: 6,
    name: 'Moreton Bay fig',
    max_height: 14,
    color: 'purple',
    plant_url: 'https://www.americanforests.org/wp-content/uploads/2015/10/Moreton-Bay-Fig.jpg',
    is_indoor: false,
    lifespan: 7,
    category: 'deciduous'
  }
]

const herbs = [
  {
    id: 1,
    name: "basil",
    max_height: 0.4,
    color: "green",
    plant_url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Basil-Basilico-Ocimum_basilicum-albahaca.jpg?uselang=fr",
    is_indoor: true,
    lifespan: 1,
    heat_level: 0,
    calories: 29
  },
  {
    id: 2,
    name: "mint",
    max_height: 0.3,
    color: "green",
    plant_url: "https://www.thespruce.com/thmb/WRLcRXJHpLiQAxLAOuyAPMyzekg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/growing-mint-1402628-closeup-d55f829e9b4d487d942a2edec4343eab.jpg",
    is_indoor: true,
    lifespan: 1,
    heat_level: 0,
    calories: 51
  }
]

const shrubs = [
  {
    id: 1,
    name: 'Chinese Money Plant',
    max_height: 0.5,
    color: 'green',
    plant_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557177323-pilea-peperomioides-money-plant-in-the-pot-single-royalty-free-image-917778022-1557177295.jpg?crop=1.00xw:0.668xh;0,0.269xh&resize=768:*',
    is_indoor: true,
    lifespan: 2,
    shrub_type: 'annual',
    is_carnivorous: false
  },
  {
    id: 2,
    name: 'Yucca',
    max_height: 1.5,
    color: 'green',
    plant_url: 'https://johnlewis.scene7.com/is/image/JohnLewis/238542306?$rsp-pdp-port-640$',
    is_indoor: false,
    lifespan: 7,
    shrub_type: 'perennial',
    is_carnivorous: false
  }
]

const treesInRegions = [
  {
    tree_id: 1,
    region_id: 4
  },
  {
    tree_id: 1,
    region_id: 5
  },
  {
    tree_id: 2,
    region_id: 22
  },
  {
    tree_id: 3,
    region_id: 18
  },
  {
    tree_id: 4,
    region_id: 12
  },
  {
    tree_id: 5,
    region_id: 27
  },
  {
    tree_id: 6,
    region_id: 2
  }
]

const plants = [
  {
    id: 1,
    tree_id: 1,
    shrub_id: null,
    herb_id: null
  },
  {
    id: 2,
    tree_id: 2,
    shrub_id: null,
    herb_id: null
  },
  {
    id: 3,
    tree_id: 3,
    shrub_id: null,
    herb_id: null
  },
  {
    id: 4,
    tree_id: 4,
    shrub_id: null,
    herb_id: null
  },
  {
    id: 5,
    tree_id: 5,
    shrub_id: null,
    herb_id: null
  },
  {
    id: 6,
    tree_id: 6,
    shrub_id: null,
    herb_id: null
  },
  {
    id: 7,
    tree_id: null,
    shrub_id: 1,
    herb_id: null
  },
  {
    id: 8,
    tree_id: null,
    shrub_id: 2,
    herb_id: null
  },
  {
    id: 9,
    tree_id: null,
    shrub_id: null,
    herb_id: 1
  },
  {
    id: 10,
    tree_id: null,
    shrub_id: null,
    herb_id: 2
  }
]

export default async (supabase) => {
  await supabase.from('tree').upsert(trees);
  await supabase.from('continent').upsert(continents);
  await supabase.from('region').upsert(regions);
  await supabase.from('tree_found_in_region').upsert(treesInRegions);
  await supabase.from('herb').upsert(herbs);
  await supabase.from('shrub').upsert(shrubs);
  await supabase.from('plant').upsert(plants);
};

  console.log('Database populated !\n');
