import { Provider } from "react-redux";
import store from "./store";
import Parent from "./components/Parent";
import Child from "./components/Child";
const App=()=>{
  return (
    <Provider store={store}>
  <div className="container">
    <Child />
  </div>
  </Provider>
  )
}
export default App;