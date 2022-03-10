import { BrowserRouter, Route, Switch } from "react-router-dom";
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import React from 'react';
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" > 
            <DayList />
          </Route>
          <Route path="/day/:day"> 
          {/* 저기 path에 있는 위치에 <Day/>를 표시하겠다는 뜻
           이때 url의 :/day부분은 저기 day 컴포넌트에서 useparams 로 받을수있음 */}
            <Day />
          </Route>
          {/* 앞에있는 조건이 모두 만족되지 않으면, 아래문이 실행됨. 
          에러페이지는 따로 별도 path 지정하지않음.
          절대 아래의 에러 Route가 위로가면안됨. 그럼 그것만실행되고 말음*/}
          <Route exact path="/create_word">
            <CreateWord />
          </Route>
          <Route exact path="/create_day">
            <CreateDay/>
          </Route>
          <Route>
            <EmptyPage/>
          </Route>
        </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;
