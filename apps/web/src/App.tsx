import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import store from './app/store'
import './styles/app.scss'
import './styles/Global.scss'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Nav from './components/Nav/Nav'
import Error from './pages/Error'
import Footer from './components/Footer/Footer'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet,
} from 'react-router-dom'

const queryClient = new QueryClient()

const Root = () => {
  return (
    <body>
      <Nav />
      <>
        <Outlet />
      </>
      <Footer />
    </body>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index path="/" element={<Home />} />
      <Route path="/:selectedTeam" element={<Dashboard />} />
      <Route path="/*" element={<Error />} />
    </Route>
  )
)

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
