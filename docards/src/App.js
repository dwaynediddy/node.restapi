import Axios from 'axios'

const getCards = () => {
  Axios.get('http://localhost:3000/doCards')
  .then((response) => {
    console.log(response)
  })
}

function App() {
  return (
    <div className="App">
      hello
      <button
      className="cards"
      onClick={getCards}>
        CLick here
      </button>
    </div>
  );
}

export default App;
