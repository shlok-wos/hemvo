import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import staticDataReducer from '../reducers/staticData.reducer';
import { config } from '@/config';

const store = configureStore({
   reducer: {
      staticData: staticDataReducer,
   },
   devTools: config.APP_TYPE !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export hooks for easy usage in components
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;