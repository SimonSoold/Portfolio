import {useState, useEffect, useRef} from "react"
import { motion } from 'framer-motion'
import ImageScroll from '../components/ImageScroll'
import ScrollPositionWrapper from "../components/ScrollPosition"

const wordAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
        delay: i * 0.05,
        duration: 0.3,
        },
    }),
}
const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1
      }
    }
}
const paragraphVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
}
const AnimateWords = ({ children, start }: { children: string, start: boolean }) => {
    return (
        <>
            {children.split(" ").map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block mr-1"
                    variants={wordAnimation}
                    initial="hidden"
                    animate={start ? "visible" : "hidden"}
                    custom={i}
                >
                    {word}
                </motion.span>
            ))}
        </>
    );
};

interface contentItem {
    text: string,
    element?: string,
    className?: string,
    animate?: string
}
const AnimatedContent = ({totalDelay, paragraphGap, wordDelay, item}:{totalDelay:number,paragraphGap:number, wordDelay:number, item:contentItem}) => {
    const wordCount = item.text.split(" ").length;
    const paragraphDelay = totalDelay;
    totalDelay += wordCount * wordDelay + paragraphGap;
    const [start, setStart] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => setStart(true), paragraphDelay * 1000);
      return () => clearTimeout(timer);
    }, []);
    return (
        <motion.div
            className={`${item.element === 'h2' ? 'text-3xl font-bold' : item.className?.includes("text") ? `` : 'text-base'} ${item.className || ''}`}
            variants={paragraphVariants}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: paragraphDelay, duration: 0.6 }}
        >
            {
                item?.animate === "words"
                ?
                <AnimateWords start={start}>
                    {
                        item.text
                    }
                </AnimateWords>
                :
                item.text
            }
        </motion.div>
    )
}
const About = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const content = [
        { 
            text: "In a realm where code weaves the fabric of reality...", 
            element: "h2",
            animate: "words"
        },
        {
            text: "There lives a fullstack developer—not just any coder, but a digital sorcerer fluent in HTML incantations, JavaScript spells, and backend rituals whispered in the tongues of Node and Python. With a flick of their stylus and the chant of npm install, they summon entire applications from the void.",
            animate: "words",
            className:"mb-2 sm:w-ful md:max-w-2/3"
        },
        {
            text: "When others debug, they divinate. Databases bend to their will, APIs flow like enchanted rivers, and frontend interfaces sparkle with intuitive brilliance. One moment they're forging serverless functions in the fires of AWS, the next—they're breathing life into pixel-perfect UI with React and Tailwind, as if painting with light itself. Then it happens.",
            className: "w-2/3 md:max-w-2/4 mb-2",
            animate: "words"
        },
        {
            text: "With a tap on the enter key and a murmur of deploy, a fantastic something bursts into being. A portal opens—a vibrant, interactive experience no one's seen before. It sings, it dances, it solves real problems and tells a story. It is not just an app. It is magic made manifest. Because when this developer builds, reality blurs—and imagination becomes code.",
            className:"mb-4 mb-2 sm:w-ful md:max-w-2/3"
        },
        { 
            text: "Fullstack Wizardry", 
            element: "h2",
            className:"mb-2 mb-2 sm:w-ful md:max-w-2/3"
        },
        { text: "(Now with 100% More Caffeine)", className:"martian text-xl" },
        {
            text: "Meet the fullstack developer: part coder, part caffeinated wizard. They yell at bugs like they're casting out demons and summon entire web apps while forgetting what day it is. Frontend? Backend? They do it all—while muttering spells like \"just one more feature.\"",
            className: "sm:w-ful md:max-w-2/3"
        },
        {
            text: "And when they finally hit deploy, it's not just code—it's a fantastic something that somehow works… maybe even in production.",
            className:"mb-4 sm:w-ful md:max-w-2/3"
        }
    ]
    let totalDelay = 0;
    const wordDelay = 0.07;
    const paragraphGap = 0.6;
    return (
            <div
                className="h-full flex flex-col items-center"
            >
                <ScrollPositionWrapper containerRef={containerRef}>
                    <motion.div 
                        ref={containerRef}
                        className="text-black text-base w-full overflow-y-auto scrollbar-hidden sm:pr-8"
                        initial="hidden"
                        animate="visible"
                        variants={container}
                    >
                        {
                            content.splice(0,2).map((item, index) => <AnimatedContent key={index} item={item} totalDelay={totalDelay} paragraphGap={paragraphGap} wordDelay={wordDelay}></AnimatedContent>)
                        }
                        <motion.div
                            variants={paragraphVariants}
                            transition={{ delay: 4, duration: 2 }}
                        >
                            {
                                content.splice(0,content.length).map((item, index) => {
                                    if (item.element === "h2") {
                                        let className='text-3xl font-bold' + item.className || ''
                                        return <h2 key={index} className={className}>{item.text}</h2>
                                    } else {
                                        let className=item.className || "text-base"
                                        return <p key={index} className={className}>{item.text}</p>
                                    }
                                })
                            }
                        </motion.div>
                    </motion.div>
                </ScrollPositionWrapper>
                <ImageScroll 
                    paths={[
                        "_SIM0285.jpg",
                        "_SIM9539.jpg",
                        "_SIM0122.jpg",
                        "_SIM9639.jpg"
                    ]}
                    />
            </div>
    )
}
export default About