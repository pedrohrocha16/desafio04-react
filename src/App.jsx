import './App.css'
import UserDetails from './components/UserDetails'

function App() {

  const pessoas = [
    {id:1, name:"Pedro", age:17, job:"estudante"},
    {id:2, name:"Adrielle", age:18, job:"professora"},
    {id:3, name:"Sophia", age:5, job:"não possui - criança"},
    {id:4, name:"Maria", age:25, job:"educadora"},
    {id:5, name:"Alice", age:45, job:"professora"},
    {id:6, name:"Dalva", age:83, job:"aposentada"}
  ]

  return (
    <div>
      <h1>Desafio 04</h1>
      {pessoas.map((pessoa) => (
        <UserDetails
          name={pessoa.name}
          age={pessoa.age}
          job={pessoa.job}
        />
      ))}
    </div>
  )
}

export default App
