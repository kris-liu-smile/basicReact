import { Provider } from 'react-redux'
import store from './store'
import BasicRoute from 'router'

const App = () => (
    <Provider store={store}>
        <BasicRoute />
    </Provider>
);

export default App;