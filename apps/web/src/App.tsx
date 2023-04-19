import { QueryClient, QueryClientProvider } from 'react-query'
import PlayerListContainer from './components/PlayerListContainer/PlayerListContainer'
import { Provider } from 'react-redux'
import store from './app/store'

const queryClient = new QueryClient()

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <PlayerListContainer />
        </div>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
