
const Hello = (props) => {
  
    return (
      <div>
        <p>Hello {props.name} </p>
  
      </div>
    )
  }
  const App = () => {
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Isto"/>
        <Hello name="Kartsa"/>
        <Hello name="Jukka" />
      </div>
    )
  }





export default App
