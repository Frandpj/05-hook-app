import { act, renderHook } from "@testing-library/react";
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en el useForm', () => {

    const initialForm = {
        name: 'Francisco',
        email: 'francisco@prueba.com',
    }

    test('debe de regresar los valores por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange:expect.any(Function),
            onResetForm: expect.any(Function),
        });
        
    });

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan';

        // montar el hookç
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        // onInputChange() // act, event....
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        // expect, result.current.name === Juan
        expect(result.current.name).toBe('Juan');
        // expect, result.current.formState.name === Juan
        expect(result.current.formState.name).toBe('Juan');

    });
    
    test('debe de resetear el formulario', () => {

        const newValue = 'Juan';

        // montar el hookç
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        // onInputChange() // act, event....
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        // expect, result.current.name === Juan
        expect(result.current.name).toBe(initialForm.name);
        // expect, result.current.formState.name === Juan
        expect(result.current.formState.name).toBe(initialForm.name);

    });
    
});
