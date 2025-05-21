import { useEffect, useState } from "react"
interface ImageScrollProps {
    paths: string[]
}
const ImageScroll = ({paths}:ImageScrollProps) => {
    const [numberOfDivs, setNumberOfDivs] = useState<number>(0)
    useEffect(() => {
        const currentNumber = window.innerWidth >= 1024 ? 10-paths.length : 0
        setNumberOfDivs(currentNumber)
        const handleResize = () => {
            const currentNumber = window.innerWidth >= 1024 ? 10-paths.length : 0
            setNumberOfDivs(currentNumber)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    return (
        <div className="md:pt-2 self-start imageGrid sm:w-full md:max-w-96 overflow-x-auto scrollbar-hidden space-x-2 flex items-end lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-1">
            {
                paths.map((path, index) => <img className="sm:size-2/3 md:size-full max-h-full rounded-xl" key={index} src={path}/>)
            }
            {
                Array.from({ length: numberOfDivs }, (_, i) => {
                    if (i % 4 === 0) {
                        return (
                            <div key={i} className="bg-gray-200 p-4 box-border sm:size-2/3 md:size-full rounded-xl">
                            </div>
                        )
                    }
                    if (i % 2 === 0) {
                        return (
                            <div key={i} className="bg-black p-4 box-border sm:size-2/3 md:size-full rounded-xl">
                            </div>
                        )
                    }
                    if (i % 3 === 0) {
                        return (
                            <div key={i} className="bg-red-600 p-4 box-border sm:size-2/3 md:size-full rounded-xl">
                            </div>
                        )
                    }
                    if (i % 5 === 0) {
                        return (
                            <div key={i} className="bg-blue-600 p-4 box-border sm:size-2/3 md:size-full rounded-xl">
                            </div>
                        )
                    }
                    return (
                        <div key={i} className="bg-white border p-4 box-border sm:size-2/3 md:size-full rounded-xl">
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ImageScroll