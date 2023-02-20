import { useEffect, useState } from "react";

export const useScrollIndicator = (count: number, carouselRef: { current: any; }) => {
    const [scrollProgress, setScrollProgress] = useState(0)
  
    useEffect(() => {
      if (!carouselRef.current) return
  
      const element = carouselRef.current
  
      const scrollListener = () => {
        const windowScroll = element.scrollLeft
        const totalWidth = element.scrollWidth - element.clientWidth
  
        if (windowScroll === 0) setScrollProgress(0)
        if (windowScroll > totalWidth) setScrollProgress(100)
        return setScrollProgress((windowScroll / totalWidth) * 100)
      }
  
      element.addEventListener('scroll', scrollListener, { passive: true })
      return () => element.removeEventListener('scroll', scrollListener)
    }, [carouselRef])
  
    const activeDot = Math.floor((scrollProgress * count) / 110)
    return activeDot+1;
  }