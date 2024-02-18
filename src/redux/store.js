import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './reducers/registrationReducer'; // Import your reducer

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    // Add more reducers here if needed
  },
});


export default store;
