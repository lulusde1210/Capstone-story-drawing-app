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

const Input = ({ element, id, type, placeholder, rows, label, errorText, validators, onInput }) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false,
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
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        ) : (
            <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id={id}
                rows={rows || 3}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        );

    return (
        <div>
            <label
                className="block text-sm mb-2 font-medium text-gray-900 dark:text-white"
                htmlFor={id}>
                {label}
            </label>
            {content}
            {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
        </div>
    );
};

export default Input;
