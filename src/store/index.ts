import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

function configureStore() {
  const logger = createLogger({});

  const middlewares: any = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  return createStore(reducers, compose(applyMiddleware(...middlewares)));
}

export default configureStore();
