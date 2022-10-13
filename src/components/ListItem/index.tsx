import { Container } from "./styles";
import {Item} from '../../types/item';
import { ReactElement } from "react";

type Props ={
    item: Item,
    doneTarefa: (Item: Item) => void
};


export default function ListItem({item, doneTarefa}: Props): ReactElement{


    return(
        <Container done={item.done}>
          <input type="checkbox" checked={item.done} onChange={(e)=>doneTarefa({id: item.id, name: item.name, done: e.target.checked})} />
          <label >{item.name}</label>

        </Container>
    );
};