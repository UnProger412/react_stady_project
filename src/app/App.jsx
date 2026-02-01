import Router from './routing/Router.jsx'
import TasksPage from "@/pages/TasksPage"
import TaskPage from "@/pages/TaskPage"
import './styles'


const App = () => {
    const routes = {
        '/': TasksPage,
        '/task/:id': TaskPage,
        '*': () => <div>404 Page not found</div>
    }

  return (
      <Router routes={routes} />
  )
}

export default App
