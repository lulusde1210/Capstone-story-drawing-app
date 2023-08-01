import Input from "../UI/Input"
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/form-hook"
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../util/validators"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false)

    useEffect(() => {
        if (auth.isLogin) {
            navigate('/')
        }
    }, [navigate, auth.isLogin])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login());
        navigate('/')
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
            <div className="w-full bg-red-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:space-y-6" >
                        <div>
                            <Input
                                id="email"
                                element="input"
                                type="email"
                                label="Your Email"
                                validators={[VALIDATOR_EMAIL()]}
                                placeholder='123@email.com'
                                errorText="Please enter a valid email"
                                onInput={inputHandler}
                                defaultValue=''
                                valid=''
                            />
                        </div>
                        <div>
                            <Input
                                id="password"
                                element="input"
                                type="password"
                                label="Your Password"
                                placeholder='******'
                                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
                                errorText="Please enter a valid password with a minimun lenght of 6."
                                onInput={inputHandler}
                                defaultValue=''
                                valid=''
                            />
                        </div>
                        <button
                            type="submit"
                            className={formState.isValid ? 'btn-secondary' : 'btn-disabled'}
                            disabled={!formState.isValid}
                        >
                            Log In
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login