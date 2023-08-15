import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className="w-screen bg-white bg-opacity-30 backdrop-blur p-3 ">
            <div className="flex flex-col gap-3 sm:flex-row justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center text-teal-600">
                    <p className="mx-auto mt-2 max-w-md text-center leading-relaxed text-gray-500">
                        Copyright © 2023. Lu Sun
                    </p>
                </div>
                <div className="flex justify-center gap-6 h-10">
                    <a href='https://www.linkedin.com/in/lu-sun-a69048170/'>
                        <Icon className='icon-small' icon="mdi:linkedin" />
                    </a>
                    <a href="mailto: lulusun1210@gmail.com">
                        <Icon className='icon-small' icon="ic:outline-email" />
                    </a>
                </div>
            </div>
        </footer >
    )
}

export default Footer