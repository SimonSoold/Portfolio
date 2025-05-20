import { useEffect, useState } from "react";
export interface ProjectItem {
    name: string;
    stack: string[];
    path: string;
    background?: string;
    font?: string;
    color?: string;
    hover?: string;
}
const Project = ({name, stack, background, font, path, color, hover}:ProjectItem) => {
    const [numberOfColums, setNuberOfColumns] = useState<number>(3)
    useEffect(() => {
        const currentNumber = window.innerWidth > 400 ? 4 : 3
        setNuberOfColumns(currentNumber)
        const handleResize = () => {
            const currentNumber = window.innerWidth > 400 ? 4 : 3
            setNuberOfColumns(currentNumber)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div 
            className="w-full flex flex-col justify-center items-center bg-black text-white pt-8 pb-8 mb-2 last:mb-0"
        >
            <div
                className="sm:size-64 md:size-96 bg-white rounded-lg flex justify-center items-center"
                style={{background}}
            >
                <a href={path} className={`text-${color || "black"} hover:text-${hover || "white"} text-3xl ${font} transition-colors duration-200`}>{name}</a>
            </div>
            <p
                className="sm:w-64 md:w-96 text-lg"

            >
                {name}
            </p>
            <div 
                className={`sm:w-64 md:w-96 grid grid-cols-${numberOfColums} gap-2 justify-self-end direction-rtl`}
            >
                {
                    stack.map((tech:string, index:any) => {
                        return (
                            <div 
                                key={index} 
                                className={`h-8 rounded-lg bg-white text-black flex justify-center items-center order-${stack.length - index}`}                            
                            >                            
                                <p
                                    className="text-xs text-center"
                                >
                                    {tech}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Project