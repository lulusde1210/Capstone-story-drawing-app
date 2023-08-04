import Input from "../UI/Input";
import Loader from "../UI/Loader";
import ImageUpload from "../ImageUpload";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../util/validators"
import { useForm } from "../../hooks/form-hook";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useUpdateUserMutation } from "../../store/usersApiSlice";
import { setCredentials } from "../../store/authSlice";

const EditProfile = () => {
    const { userInfo } = useSelector(state => state.auth);

    const [formState, inputHandler] = useForm({
        username: {
            value: userInfo.user.username,
            isValid: true
        },
        email: {
            value: userInfo.user.email,
            isValid: true
        },
        password: {
            value: '',
            isValid: true
        },
        image: {
            value: userInfo.user.image,
            isValid: true
        }
    }, false)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updateUser, { isLoading }] = useUpdateUserMutation();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const username = formState.inputs.username.value
        const email = formState.inputs.email.value
        const image = formState.inputs.image.value
        const password = formState.inputs.password.value

        try {
            const res = await updateUser({ username, email, password, image }).unwrap();
            dispatch(setCredentials({ ...res }));
            toast.success('Profile Updated Successfull!');
            navigate('/mygallery')
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mx-auto px-10 lg:py-0">
            <div className=" bg-red-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Edit Profile
                    </h1>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:space-y-6">
                        <div className="flex gap-20">
                            <div className="flex flex-col space-y-4 md:space-y-6">
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
                                        defaultValue={userInfo.user.username}
                                        valid={true}
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
                                        defaultValue={userInfo.user.email}
                                        valid={true}
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
                                        defaultValue={userInfo.user.password}
                                        valid={true}
                                    />
                                </div>
                            </div>
                            <div>
                                <ImageUpload id='image' onInput={inputHandler} defaultImg={userInfo.user.image} />
                            </div>
                        </div>
                        {isLoading && <Loader />}
                        <button
                            type="submit"
                            className={formState.isValid ? 'btn-secondary' : 'btn-disabled'}
                            disabled={!formState.isValid}
                        >
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default EditProfile;