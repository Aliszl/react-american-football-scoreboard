//TODO: STEP 1 - Import the useState hook.

import React, {useState}from "react";

// import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";

// import useState from "react";
function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
const [lionsScore, setLionsScore] = useState(0);
const [tigersScore, setTigersScore] = useState(0);

// const [timeleft, setTimeLeft]= useState(60);

  return (
    
  

    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00.03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => setLionsScore(lionsScore+7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal"onClick = {() => setLionsScore(lionsScore+14)}>Home Field Goal</button>
          <button className="homeButtons__fieldGoal"onClick = {() => setLionsScore(lionsScore-7)}>remove Home Touchdown</button>
          <button className="homeButtons__fieldGoal"onClick = {() => setLionsScore(lionsScore-14)}>remove Home Field goal</button>
          <button className="homeButtons__reset" onClick={() => setLionsScore(0)} >Lions Reset</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"onClick = {() => setTigersScore(tigersScore+7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"onClick = {() => setTigersScore(tigersScore+14)}>Away Field Goal</button>
          <button className="awayButtons__fieldGoal"onClick = {() => setTigersScore(tigersScore-7)}>remove away Touchdown</button>
          <button className="awayButtons__touchdown"onClick = {() => setTigersScore(tigersScore-14)}>remove away field goal</button>
          <button className="awayButtons__reset" onClick={() => setTigersScore(0)} >Tigers Reset</button>
        </div>
       
        

        
      </section>
    </div>
  );
}

export default App;


// const Timer = ({ seconds }) => {
//   // initialize timeLeft with the seconds prop
//   const [timeLeft, setTimeLeft] = useState(seconds);

//   useEffect(() => {
//     // exit early when we reach 0
//     if (!timeLeft) return;

//     // save intervalId to clear the interval when the
//     // component re-renders
//     const intervalId = setInterval(() => {
//       setTimeLeft(timeLeft - 1);
//     }, 1000);

//     // clear interval on re-render to avoid memory leaks
//     return () => clearInterval(intervalId);
//     // add timeLeft as a dependency to re-rerun the effect
//     // when we update it
//   }, [timeLeft]);

//   return (
//     <div>
//       <h1>{timeLeft}</h1>
//     </div>
//   );
// };
// onClick= "setTimeout('alert('first quarter over?')', 1000)" >{timeleft}
