import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Fran',
        email: 'fran@prueba.com',
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    useEffect(() => {
        // console.log('Se llama al useEffect');
    }, []);

    useEffect(() => {
        // console.log('Cambia el formState');
    }, [formState]);

    useEffect(() => {
        // console.log('Cambia el email');
    }, [email]);

    return (
        <>
            <h1>Formulario simple</h1>
            <hr/>
            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>
            <input type="email" className="form-control mt-2" placeholder="prueba@prueba.com" name="email" value={email} onChange={onInputChange}/>
        
            {
                (username === 'Fran') && <Message />
            }

        </>
    )
}
