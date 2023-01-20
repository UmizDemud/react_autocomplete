import React, {useState} from 'react';
import { Dropdown } from './components/Dropdown';
import { peopleFromServer } from './data/people';

export const App: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState('Carolus Haverbeke');
  const [state, setState] = React.useState({
    records: [
      {
        _id: 'enterPerson_mainPage',
        words: peopleFromServer.map(person => person.name)
      }
    ]
  })

  const {_id, words} = state.records[0];

  const data = peopleFromServer
    .find(person => person.name === selectedPerson)


  return (
    <main className="section">
      <h1 className="title">
        {`${data?.name} (${data?.born} = ${data?.died})`}
      </h1>

      <Dropdown
        _id={_id}
        words={words}
        placeholder={'Enter search'}
        delay={400}
        save={(name: string) => {setSelectedPerson(name)}}
      />

    </main>
  );
};
