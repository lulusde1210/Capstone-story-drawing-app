import { Icon } from '@iconify/react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { fabric } from 'fabric';
import ToolButton from '../UI/ToolButton';
import Tabs from '../UI/Tabs';
import { Tab } from '@headlessui/react'

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images
};

const animalStickers = importAll(require.context('/public/stickers/animals', false, /\.(png|jpe?g|svg)$/));
const foodStickers = importAll(require.context('/public/stickers/food', false, /\.(png|jpe?g|svg)$/));
const lifeStickers = importAll(require.context('/public/stickers/life', false, /\.(png|jpe?g|svg)$/));

const categories = {
    Animals: animalStickers,
    Food: foodStickers,
    Life: lifeStickers,
};

const Stickers = ({ canvas }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => { setIsOpen(false) };
    const openModal = () => { setIsOpen(true) };

    const handleClickSticker = (url) => {
        fabric.Image.fromURL(url, img => {
            canvas.add(img);
            canvas.renderAll();
        }, {
            crossOrigin: 'Anonymous',
            scaleX: 0.3,
            scaleY: 0.3,
            originX: 'center',
            originY: 'center',
            left: canvas.getCenter().left,
            top: canvas.getCenter().top,
        })
        setIsOpen(false)
        canvas.isDrawingMode = false;
    };


    const tabContent = (
        Object.values(categories).map((stickers, idx) => (
            <Tab.Panel key={idx} className='flex flex-wrap gap-3'>
                {Object.keys(stickers).map((stickerName, index) => (
                    <img
                        className='hover:scale-110'
                        onClick={() => handleClickSticker(stickers[stickerName])}
                        key={index}
                        width='70px'
                        src={stickers[stickerName]}
                        alt={stickerName} />
                ))}
            </Tab.Panel>
        ))
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
                        <div className="flex min-h-full items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform rounded-xl bg-white p-5 py-0 transition-all">
                                    <div>
                                        <Tabs categories={categories} tabContent={tabContent} />
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