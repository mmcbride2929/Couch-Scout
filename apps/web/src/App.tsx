import { QueryClient, QueryClientProvider } from 'react-query'
import PlayerListContainer from './components/PlayerListContainer/PlayerListContainer'
import { Provider } from 'react-redux'
import store from './app/store'
import RosterListContainer from './components/RosterListContainer/RosterListContainer'
import FunctionalityBar from './components/FunctionalityBar/FunctionalityBar'
import './styles/app.scss'
import './styles/Global.scss'
import { useState } from 'react'
import PlayerHeader from './components/PlayerHeader/PlayerHeader'
import RosterHeader from './components/RosterHeader/RosterHeader'
const queryClient = new QueryClient()

const App = () => {
  const [displayAvailablePlayers, setDisplayAvailablePlayers] =
    useState<boolean>(true)

  const handleClick = () => {
    setDisplayAvailablePlayers(!displayAvailablePlayers)
  }

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          {displayAvailablePlayers ? (
            <div className="page-content-container">
              <div className="functionality">
                <PlayerHeader />
                <FunctionalityBar handleClick={handleClick} />
              </div>
              <div className="list-container">
                <PlayerListContainer />
              </div>
            </div>
          ) : (
            <div className="page-content-container">
              <div className="functionality">
                <RosterHeader />
                <FunctionalityBar handleClick={handleClick} />
              </div>
              <div className="list-container">
                <RosterListContainer />
              </div>
            </div>
          )}
        </div>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
