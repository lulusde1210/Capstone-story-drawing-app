import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function MenuDropDown({ handleClickLogout, userInfo }) {

    return (
        <Menu as="div">
            <Menu.Button className="w-full h-full">
                <img src={userInfo.user.image} alt='profile' className='h-10 w-10 object-cover rounded-full  hidden lg:block border-2 border-gray-50' />
                <Icon icon="mdi:menu" className="text-xl lg:hidden" />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute right-3 mt-2 w-56 origin-top-right divide-y
            divide-gray-100 lg:divide-y-0 rounded-md bg-white shadow-lg
            ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <div className="px-1 py-1 lg:hidden">
                        <Link to='/alldrawings'>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={onclick}
                                        className={`${active ? "bg-sky-300 text-white font-bold" : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <Icon icon='ion:images-outline' className="text-xl mr-2" />
                                        All Arts
                                    </button>
                                )}
                            </Menu.Item>
                        </Link>
                        <Link to={`/users/${userInfo.user.id}`}>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={onclick}
                                        className={`${active ? "bg-sky-300 text-white font-bold" : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <Icon icon='fa6-regular:images' className="text-xl mr-2" />
                                        My Gallery
                                    </button>
                                )}
                            </Menu.Item>
                        </Link>
                    </div>
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={handleClickLogout}
                                    className={`${active ? "bg-sky-300 text-white font-bold" : "text-gray-900"
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    <Icon icon='mdi:logout' className="text-xl mr-2" />
                                    Logout
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu >
    );
}
