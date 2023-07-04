import { useEffect } from 'react'
import { useForm } from '../01-useState/hooks/useForm';

export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
        username: '',
        email: '',
        password: '',
    });

    // const {username, email, password} = formState;

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
            <h1>Formulario con custom hook</h1>
            <hr/>
            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>
            <input type="email" className="form-control mt-2" placeholder="prueba@prueba.com" name="email" value={email} onChange={onInputChange}/>
            <input type="password" className="form-control mt-2" placeholder="Contraseña" name="password" value={password} onChange={onInputChange}/>

            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}
