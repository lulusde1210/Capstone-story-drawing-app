import { Link } from "react-router-dom";
import Input from "../UI/Input";

const Signup = () => {
    const inputHandler = () => {

    }
    return (
        <div className="flex flex-col items-center justify-center w-96 lg:py-0">
            <div className="w-full bg-red-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <form className="flex flex-col space-y-4 md:space-y-6">
                        <div>
                            <Input
                                id="email"
                                element="input"
                                type="email"
                                label="Your Email"
                                validators={[]}
                                errorText="Please entere a valid email"
                                onInput={inputHandler}
                            />
                        </div>
                        <div>
                            <Input
                                id="password"
                                element="input"
                                type="password"
                                label="Your Password"
                                validators={[]}
                                errorText="Please entere your password"
                                onInput={inputHandler}
                            />
                        </div>
                        <div>
                            <Input
                                id="password"
                                element="input"
                                type="password"
                                label="Your Password"
                                validators={[]}
                                errorText="Please confirm your password"
                                onInput={inputHandler}
                            />
                        </div>
                        <button type="submit" className="self-center btn-primary">Sign Up</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Signup;