import { Provider } from "react-redux";
import store from "./store";
import Parent from "./components/Parent";
const App=()=>{
  return (
    <Provider store={store}>
  <div className="container">
    <Parent />
  </div>
  </Provider>
  )
}
export default App;