import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { currentWeatherReducer } from './weatherreducer';

const configWeather = {
  key: 'weather',
  storage, 
  whitelist: ['weather'] //Luu nhung State can luu tu Reducer vao LocalStorage
}

const rootReducer = combineReducers({
  currentWeather: persistReducer(configWeather ,currentWeatherReducer)
});
export default rootReducer;