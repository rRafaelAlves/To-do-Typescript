import { useState, KeyboardEvent, ReactElement } from 'react';
import * as C from './style';

type Props = {
    addTarefa: (tarefa: string) => void
};

export const AddArea = ({ addTarefa }: Props): ReactElement => {

    const [inputText, setInputText] = useState<string>('');

    function handleKeyUp(e: KeyboardEvent): void {
        if (e.code === 'Enter' && inputText !== '') {
            addTarefa(inputText);
            setInputText('');
        };
    };


    return (
        <C.Container>

            <div className='image'>➕</div>
            <input type='text'
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            >

            </input>

        </C.Container>
    );
};