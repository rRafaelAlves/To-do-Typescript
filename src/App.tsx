import * as C from './App.styles';
import {ReactElement, useState} from 'react';
import {Item} from './types/item';
import ListItem from './components/ListItem';
import { AddArea } from './components/ListItem/AddArea';



function App(): ReactElement {

  const [list, setList] = useState<Array<Item>>([
    {id:1, name: "Comprar café da manhã", done: false},
    {id:2, name: "Alongamento Matinal", done: true}
  ]);

  function addTarefa(event: string): void{
    let newList = [...list];
    newList.push({id: (list.length + 1), name: event, done: false});
    setList(newList);
    
  };

  

  function doneTarefa(doneTarefa: Item): void{
    let newList = [...list];
    newList[doneTarefa.id - 1] = doneTarefa;
    setList(newList)
  };


  return (
    <div>

      <C.Container>
        
        <C.Area>
        <AddArea addTarefa={addTarefa}/>
          <C.Header>Lista de tarefas</C.Header>
        
          {list.map((item, index): ReactElement=> {
            return <ListItem key={index} item={item} doneTarefa={doneTarefa} />
          })}
        </C.Area>
        

      </C.Container>

    </div>

  );
};

export default App;
