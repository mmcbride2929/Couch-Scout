import { QueryClient, QueryClientProvider } from 'react-query'
import PlayerListContainer from './components/PlayerListContainer/PlayerListContainer'
import { Provider } from 'react-redux'
import store from './app/store'
import RosterListContainer from './components/RosterListContainer/RosterListContainer'
import ButtonsInterface from './components/ButtonsInterface/ButtonsInterface'
import Nav from './components/Nav/Nav'
import PlayerTotal from './components/PlayerTotal/PlayerTotal'
import './styles/app.scss'
import './styles/Global.scss'
import FilterBySelect from './components/FilterBySelect/FilterBySelect'

const queryClient = new QueryClient()

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Nav />
          <body className="body">
            <PlayerTotal />
            <FilterBySelect />
            <PlayerListContainer />
            -=-=-=-=-=-=-=-=-=-==-
            <RosterListContainer />
            -=-=-=-=-=-=-=-=-=-==-
          </body>
        </div>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
