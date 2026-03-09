import { Provider } from 'react-redux'
import './App.css'
import AddComp from './components/AddComp'
import { store } from './store'
import ViewComp from './components/ViewComp'

function App() {
  return (
    <Provider store={store}>
      <>
      <h1>Redux Todo App</h1>
      <AddComp/>
      <ViewComp/>
      </>
    </Provider>
  )
}

export default App
