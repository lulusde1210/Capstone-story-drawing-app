import { useRef, useState, useEffect } from "react";

const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}


const ImageUpload = ({ id, onInput, errorText }) => {
    const imgRef = useRef();
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState(false);
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result)
        };
        fileReader.readAsDataURL(file);

    }, [file])


    const handlePickImage = async (e) => {
        let pickedFile;
        let fileIsValid = isValid;
        let base64;
        if (e.target.files && e.target.files.length === 1) {
            pickedFile = e.target.files[0];
            base64 = await convertToBase64(pickedFile)
            setFile(pickedFile);
            setIsValid(true)
            fileIsValid = true;
        } else {
            setIsValid(false)
        }
        onInput(id, base64, fileIsValid);
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
                {previewUrl && <img src={previewUrl} alt='profile-priview' className="h-40 w-40 object-cover rounded-full" />}
            </div>

            {!previewUrl && <p>Pick your profile image</p>}
            {!isValid && <p>{errorText}</p>}
        </div>

    )
}

export default ImageUpload