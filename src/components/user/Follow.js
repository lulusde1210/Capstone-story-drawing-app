import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom'

const Follow = ({ user }) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="w-full max-w-md px-2 py-5 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg text-sm font-medium leading-5 text-gray-700',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                            )
                        }
                    >
                        Following
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-1.5 text-sm font-medium leading-5 text-gray-700',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                            )
                        }
                    >
                        Followers
                    </Tab>
                </Tab.List>

                <Tab.Panels className="mt-2">
                    <Tab.Panel className='flex flex-col gap-3 rounded-xl p-3'>
                        {user?.following?.map((person) => (
                            <Link key={person.id} to={`/users/${person.id}`}>
                                <div className='flex justify-start items-center gap-3'>
                                    <img src={person.image} alt='profile' className='h-10 w-10 object-cover rounded-full hover:cursor-pointer' />
                                    <span>{person.username}</span>
                                </div>
                            </Link>
                        ))}
                    </Tab.Panel>
                    <Tab.Panel className='flex flex-col gap-3 rounded-xl p-3'>
                        {user?.followers?.map((person) => (
                            <Link key={person.id} to={`/users/${person.id}`}>
                                <div key={person.id} className='flex justify-start items-center gap-3'>
                                    <img src={person.image} alt='profile' className='h-10 w-10 object-cover rounded-full hover:cursor-pointer' />
                                    <span>{person.username}</span>
                                </div>
                            </Link>
                        ))}
                    </Tab.Panel>
                </Tab.Panels>

            </Tab.Group>
        </div >
    )
}


export default Follow;
