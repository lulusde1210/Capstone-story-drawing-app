import { useReducer, useEffect } from 'react';
import { validate } from '../util/validators';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.payload,
                isValid: validate(action.payload, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true,
            }
        default:
            return state;
    }
};


const Input = ({ defaultValue, valid, element, id, type, placeholder, rows, label, errorText, validators, onInput }) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: defaultValue,
        isValid: valid,
        isTouched: false
    });

    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            payload: event.target.value,
            validators: validators
        });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };

    const content =
        element === 'input' ? (
            <input
                className={(!inputState.isValid && inputState.isTouched) ? 'form-input-warning' : 'form-input'}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        ) : (
            <textarea
                className={(!inputState.isValid && inputState.isTouched) ? 'form-input-warning' : 'form-input'}
                id={id}
                rows={rows || 3}
                onChange={changeHandler}
                onBlur={touchHandler}
                placeholder={placeholder}
                value={inputState.value}
            />
        );

    return (
        <div className={!inputState.isValid ? 'form-invalid' : ''}>
            <label
                className='form-label'
                htmlFor={id}>
                {label}
            </label>
            {content}
            {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
        </div>
    );
};

export default Input;
