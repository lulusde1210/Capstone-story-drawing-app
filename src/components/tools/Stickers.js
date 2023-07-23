import { Icon } from '@iconify/react';
import ToolButton from '../UI/ToolButton';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fabric } from 'fabric';
import { disableDrawing, addObj } from "../../store/canvasSlice";


const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images
};
const images = importAll(require.context('/public/stickers', false, /\.(png|jpe?g|svg)$/));
const imageNames = Object.keys(images);

const Stickers = () => {
    const canvas = useSelector((state) => state.canvas.canvas);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => { setIsOpen(false) };
    const openModal = () => { setIsOpen(true) };

    const handleClickSticker = (url) => {
        fabric.Image.fromURL(url, img => {
            dispatch(addObj(img))
        }, {
            scaleX: 0.2,
            scaleY: 0.2,
            originX: 'center',
            originY: 'center',
            left: canvas.getCenter().left,
            top: canvas.getCenter().top,
        })
        setIsOpen(false)
        dispatch(disableDrawing())
    };

    const stickersBody = (
        <div className='flex gap-3'>
            {imageNames.map((imageName, index) => (
                <img
                    className='hover:scale-110'
                    onClick={() => handleClickSticker(images[imageName])}
                    key={index}
                    width='50px'
                    src={images[imageName]}
                    alt={imageName} />
            ))}
        </div>
    );

    return (
        <>
            <ToolButton>
                <button onClick={openModal}>
                    <Icon className='icon' icon="fluent-emoji-flat:cat-face" />
                </button>
            </ToolButton>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="mt-2">
                                        {stickersBody}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
};


export default Stickers;