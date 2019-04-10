import { createStore, combineReducers } from "redux";
//actions
//add country
const addCountry = ({
  id = 0,
  alt = "",
  title = "",
  capital = "",
  src = "",
  coords = [],
  mapId = 0
} = {}) => ({
  type: "ADD_COUNTRY",
  country: {
    id,
    alt,
    title,
    capital,
    src,
    coords,
    mapId
  }
});
//delete country
const removeCountry = ({ id } = {}) => ({
  type: "REMOVE_COUNTRY",
  id
});
//edit country
const editCountry = (id, updates) => ({
  type: "EDIT_COUNTRY",
  id,
  updates
});

//pick map
const pickMap = (currentMap = 0) => ({
  type: "PICK_Map",
  currentMap
});
//add map
const addMap = ({ id = 0, map = "", src = "" } = {}) => ({
  type: "ADD_Map",
  map: {
    id,
    map,
    src
  }
});
//update map
const removeMap = ({ id } = {}) => ({
  type: "REMOVE_MAP",
  id
});
//delete map
const editMap = (id, updates) => ({
  type: "EDIT_MAP",
  id,
  updates
});
//setProgress

const updateProgress = ({ userId = 0, mapId = 0, countryId = 0 } = {}) => ({
  type: "UPDATE_PROGRESS",
  userId,
  mapId,
  countryId
});

const countriesReducerDefaultState = [];
const mapReducerDefaultState = [];
const filterReducerDefaultState = {
  currentMap: 0
};
const gameProgressDefaultState = {
  userId: 0,
  maps: [
    {
      id: 0,
      progress: []
    }
  ]
};

//Reducers
const countriesReducer = (state = countriesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_COUNTRY":
      return [...state, action.country];
    case "REMOVE_COUNTRY":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_COUNTRY":
      return state.map(country => {
        if (country.id !== action.id) return country;
        return {
          ...country,
          ...action.updates
        };
      });
    default:
      return state;
  }
};

const mapReducer = (state = mapReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_MAP":
      return [...state, action.map];
    case "REMOVE_MAP":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_MAP":
      return state.map(map => {
        if (map.id !== action.id) return map;
        return {
          ...map,
          ...action.updates
        };
      });
    default:
      return state;
  }
};

const filtersReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "PICK_MAP":
      return { ...state, currentmap: action.currentmap };
    default:
      return state;
  }
};

const gameProgressReducer = (state = gameProgressDefaultState, action) => {
  switch (action.type) {
    case "UPDATE_PROGRESS":
      const maps = [...state.maps].map(map => {
        if (map.id === action.mapId) {
          map.progress = [...map.progress, action.countryId];
        }
        return map;
      });
      return { userId: action.userId, maps };
    default:
      return state;
  }
};

//store
const store = createStore(
  combineReducers({
    countries: countriesReducer,
    maps: mapReducer,
    filters: filtersReducer,
    gameProgress: gameProgressReducer
  })
);

const getCountriesByMap = (countries, { currentMap }) => {
  return countries.filter(({ mapId }) => mapId === currentMap);
};

store.subscribe(() => {
  const state = store.getState();
  const countriesByMap = getCountriesByMap(state.countries, state.filters);
  console.log(state);
  console.log(countriesByMap);
});

const { map: map1 } = store.dispatch(
  addMap({ id: 0, map: "europa", src: "europa" })
);

const { map: map2 } = store.dispatch(
  addMap({ id: 1, map: "america", src: "america" })
);

const { country: country1 } = store.dispatch(
  addCountry({
    alt: "espana",
    title: "espana",
    capital: "madrid",
    mapId: map1.id
  })
);

const { country: country2 } = store.dispatch(
  addCountry({
    id: 1,
    alt: "francia",
    title: "paris",
    capital: "paris",
    mapId: country1.id
  })
);

store.dispatch(removeCountry(country1));

store.dispatch(editCountry(country2.id, { title: "francia" }));

store.dispatch(removeMap(map2.id));
store.dispatch(editMap(map1.id, { map: "EUROPA" }));
store.dispatch(pickMap(map1.id));

store.dispatch(
  updateProgress({
    userId: 0,
    mapId: 0,
    countryId: 1
  })
);
//
store.dispatch(
  updateProgress({
    userId: 0,
    mapId: 0,
    countryId: 2
  })
);

//here Renzo....

const demoState = {
  countries: [
    {
      id: 0,
      alt: "Espana",
      title: "Espana",
      capital: "madrid",
      src: "madrid",
      coords: [
        {
          coord: "something",
          shape: "poly"
        }
      ],
      mapId: 0
    }
  ],
  maps: [
    {
      id: 0,
      map: "Europa",
      src: "europa"
    }
  ],
  filter: {
    currentmap: 0,
    currentCountry: 0
  },
  gameProgress: {
    userId: 0,
    maps: [
      {
        id: 0,
        progress: []
      }
    ]
  }
};
