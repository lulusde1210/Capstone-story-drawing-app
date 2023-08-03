import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-screen mt-24 bg-orange-50 ">
            <div className="flex justify-between items-center mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex justify-center text-teal-600">
                    WEBSITE LOGO + WEBSITE NAME
                </div>

                <p className="mx-auto mt-2 max-w-md text-center leading-relaxed text-gray-500">
                    Copyright © 2023. Lu Sun
                </p>

                <ul className=" flex justify-center gap-6 md:gap-8">
                    <li>
                        <Link to='/'>
                            <Icon className='icon-small' icon="devicon:github" />
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Icon className='icon-small' icon="mdi:linkedin" />
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Icon className='icon-small' icon="ic:outline-email" />
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Icon className='icon-small' icon="fluent-mdl2:website" />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer >
    )
}

export default Footer