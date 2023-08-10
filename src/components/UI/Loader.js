import { Icon } from "@iconify/react"


const Loader = () => {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <Icon
                icon="eos-icons:bubble-loading"
                className="text-2xl mx-auto mt-20"
            />
        </div>
    )
}

export default Loader