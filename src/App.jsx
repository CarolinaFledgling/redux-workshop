
import "./App.css";
import IceCreamView from "./features/icecream/IceCreamView";
import UserView from "./features/users/UserView";
import CakeView from "./features/cake/CakeView";

function App() {


  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
 
    </div>
  );
}

export default App;
