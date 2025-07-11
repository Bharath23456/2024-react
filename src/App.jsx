import { Provider } from "react-redux";
import Parent from "./components/Parent";
import store from "./store";
// import Login from "./components/Login";
// import Navigation from "./components/Navigation";
// import Table from "./components/Table";
const App=()=>{
  // return <div className="container">
  // <Navigation />
  // <Login />
  // </div>
  return(
    <Provider store={store}>
      <Parent />
      
    </Provider>
  )
}
export default App;