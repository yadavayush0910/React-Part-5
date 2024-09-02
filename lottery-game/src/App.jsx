import './App.css';
import { sum } from './helper';
import Lottery from './Lottery';
import Title from './Title';
function App() {
  let winCondition=(ticket)=>{
    return sum(ticket)===15;
  }
  return (
    <>
    <Title/>
      <Lottery n={3} winningSum={15} winCondition={winCondition} />
    </>
  );
}

export default App;
