import { useEffect, useState, RefObject } from "react";
import { ScrollContext } from "./context/ScrollContext";
import { useContext } from "react";
interface ScrollPositionWrapperProps {
    containerRef?:RefObject<HTMLDivElement | null>,
    children: any
}
export const ScrollPositionWrapper = ({containerRef, children}:ScrollPositionWrapperProps) => {
    if (!containerRef) children
    const scrollState = useContext(ScrollContext)
    const [scrollPosition, setScrollPosition] = useState<{ top: number }>({ top: 0 });
    useEffect(() => {
        const container = containerRef?.current || null;
        if (!container) return;
        
        const handleScroll = () => {
            if (!container) return;
            // Get current scroll position
            const currentTop = container.scrollTop;
            setScrollPosition({ top: currentTop });
        };
        container.addEventListener("scroll", handleScroll);
        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);
  
    const scrollMargin = (containerRef?.current?.scrollHeight || 0) - (containerRef?.current?.clientHeight || 0)
    // Check if scroll is at top or bottom
    const isNearTop = 100 < scrollMargin - scrollPosition.top
    const isNearBottom = 100 > scrollMargin - scrollPosition.top
    useEffect(() => {
        scrollState?.setIsNear({isNearBottom,isNearTop})
    }, [isNearBottom, isNearTop])
    return (
        children
    )
}