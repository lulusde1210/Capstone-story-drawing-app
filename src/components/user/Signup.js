import { Link } from "react-router-dom";
import Input from "../UI/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../util/validators"
import { useForm } from "../../hooks/form-hook";
import axios from 'axios';

const Signup = () => {
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

    console.log(formState)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const body = {
            username: formState.inputs.username.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
        }

        try {
            const response = await axios.post('http://localhost:5000/api/users/signup', body);
            console.log(response)
            const responseData = await response.data;
            console.log("responseData", responseData)
        } catch (err) {
            console.log(err)
        }
    }

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

                        <button
                            type="submit"
                            className={formState.isValid ? 'btn-secondary' : 'btn-disabled'}
                            disabled={!formState.isValid}
                        >
                            Sign Up
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?
                            <Link
                                to='/login'
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Signup;