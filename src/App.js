import "./App.scss";

import { Switch, Route, Link, useHistory } from "react-router-dom";
import Cats from "./components/Catslist";
import Favorite from "./components/Favorite";

const Navigation = () => {
  return (
    <ul id="GNB">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/favorite">Favorite</Link>
      </li>
    </ul>
  );
};

function URLFallback(){
  const history = useHistory()
  return(
    <div>
      존재하지 않는 페이지 입니다
      <br />

      <button onClick={()=>{
        history.push("/")
      }}>
        Home
      </button>
    </div>
  )
}

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Cats} />
        <Route exact path="/favorite" component={Favorite} />
        <Route component={URLFallback}/>
      </Switch>
    </>
  );
}

export default App;
