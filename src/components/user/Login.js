import InputField from "../UI/InputField"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
            <div className="w-full bg-red-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form className="flex flex-col space-y-4 md:space-y-6" action="#">
                        <div>
                            <InputField
                                type="email"
                                label="Your Email"
                                value={null}
                                setValue={null}
                            />
                        </div>
                        <div>
                            <InputField
                                type="password"
                                label="Your Password"
                                value={null}
                                setValue={null}
                            />
                        </div>
                        <button type="submit" className="self-center btn-primary">Sign In</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login