import { useState } from 'react'
import Phonebook from './components/Phonebook'

const App = () => {
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' , number: 3001234567}])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const NewFilter = (event) => {
    setFilter(event.target.value)
  }

  const NewName = (event) => {
    setNewName(event.target.value)
  }

  const NewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = filter.length != 0
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  const AddPerson = (event) => {
    event.preventDefault() // IMPORTANT
    if (newName === '' | newNumber === '') {
      alert('It is required to fill both fields, please check')
    } else if (persons.findIndex(person => person.name === newName) != -1) {
      alert(`${newName} is already in the list`)
    } else if (persons.findIndex(person => person.number === newNumber) != -1) {
      alert(`${newNumber} is already associated with a person`)
    } else {
      const newPersons = persons.concat({ name: newName, number: newNumber })
      setPersons(newPersons)
    }
  }

  return (
    <Phonebook 
      filter={filter} 
      NewFilter={NewFilter} 
      values={[newName, newNumber]} 
      actions={[NewName, NewNumber, AddPerson]}
      personsToShow={personsToShow}/>
  )
}

export default App