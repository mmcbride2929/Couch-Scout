import { QueryClient, QueryClientProvider } from 'react-query'
import PlayerListContainer from './components/PlayerListContainer/PlayerListContainer'
import { Provider } from 'react-redux'
import store from './app/store'
import RosterListContainer from './components/RosterListContainer/RosterListContainer'
import ButtonsInterface from './components/ButtonsInterface/ButtonsInterface'

const queryClient = new QueryClient()

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <PlayerListContainer />
          -=-=-=-=-=-=-=-=-=-==-
          <RosterListContainer />
          -=-=-=-=-=-=-=-=-=-==-
          <ButtonsInterface />
        </div>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
