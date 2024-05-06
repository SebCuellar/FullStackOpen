const Filter = ({filter, NewFilter}) => {
  return(
    <div>
      <h3>Filter</h3>
      <div>Look for a contact: <input value={filter} onChange={NewFilter}/></div>
    </div>)
}

const AddContact = ({values, actions}) => {
  return(  
    <form>
      <h3>Add a New Contact</h3>
      <div>Name: <input value={values[0]} onChange={actions[0]} /></div>
      <br />
      <div>Number: <input value={values[1]} onChange={actions[1]} /></div>
      <br />
      <div><button onClick={actions[2]}>Add Contact</button></div>
    </form>)
}

const Contacts = ({personsToShow}) => {
  return(
    <div>
      <h2>Contacts</h2>
      <ul>
        {personsToShow.map(person => <li key={person.name}>{person.name} - {person.number}</li>)}
      </ul>
    </div>
  )
}

const Phonebook = ({filter, NewFilter, values, actions, personsToShow}) => {
  return(
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} NewFilter={NewFilter} />
      <AddContact values={values} actions={actions}/>
      <Contacts personsToShow={personsToShow}/>
    </div>)
}

export default Phonebook