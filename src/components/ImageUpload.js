import { useRef, useState, useEffect } from "react";
import { toast } from 'react-toastify';

const ImageUpload = ({ id, onInput, errorText, defaultImg }) => {
    const imgRef = useRef();
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState(false);
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if (!file) {
            return;
        }
        if (file.size > 0.5 * 1024 * 1024) {
            toast.error('File is too big!')
            return
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result)
        };
        fileReader.readAsDataURL(file);

    }, [file])

    const handlePickImage = async (e) => {
        setFile(e.target.files[0])
        onInput(id, e.target.files[0], true)
    };

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <label htmlFor="profile-img" className='btn-small' >
                Choose Profile
            </label>
            <input
                className='hidden'
                ref={imgRef}
                type='file'
                id='profile-img'
                name='profile-img'
                accept='image/*'
                onChange={handlePickImage}
            />
            <div className="rounded overflow-hidden">
                {!previewUrl && <img src={defaultImg || '/profile.png'} alt='profile-priview' className="h-40 w-40 object-cover rounded-full" />}
                {previewUrl && <img src={previewUrl} alt='profile-priview' className="h-40 w-40 object-cover rounded-full" />}
            </div>
            {!isValid && <p>{errorText}</p>}
        </div>

    )
}

export default ImageUpload