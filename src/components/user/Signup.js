import { Link } from "react-router-dom";
import Input from "../UI/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../util/validators"
import { useForm } from "../../hooks/form-hook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useId } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Loader from "../UI/Loader";
import { useSignupMutation } from "../../store/usersApiSlice";
import { setCredentials } from "../../store/authSlice";

const Signup = () => {
    const [formState, inputHandler] = useForm({
        username: {
            value: '',
            isValid: false
        },
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector(state => state.auth);
    const [signup, { isLoading }] = useSignupMutation();

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const username = formState.inputs.username.value
        const email = formState.inputs.email.value
        const password = formState.inputs.password.value

        try {
            const res = await signup({ username, email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate('/')
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-96 lg:py-0">
            <div className="w-full bg-red-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:space-y-6">
                        <div>
                            <Input
                                id="username"
                                element="input"
                                type="text"
                                label="Username"
                                validators={[VALIDATOR_REQUIRE()]}
                                placeholder='Little Picasso'
                                errorText="Please enter a username"
                                onInput={inputHandler}
                                defaultValue=''
                                valid=''
                            />
                        </div>
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
                                errorText="Please enter a valid password with a minimun length of 6 "
                                onInput={inputHandler}
                                defaultValue=''
                                valid=''
                            />
                        </div>
                        {isLoading && <Loader />}
                        <button
                            type="submit"
                            className={formState.isValid ? 'btn-secondary' : 'btn-disabled'}
                            disabled={!formState.isValid}
                        >
                            Register
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?
                            <Link
                                to='/login'
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Log In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Signup;