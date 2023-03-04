import { useEffect,useState } from "react";

const useIntersectionObserver = (
    ref: React.MutableRefObject<Element | null>,
	threshold: number
    
    ) => {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
        if (!ref) return;
      const intersectionObserver = new IntersectionObserver(
        ([entry]) => {
                setIntersecting(entry.isIntersecting ?? false)
        },
            {
                rootMargin: "0px",
        threshold,
            }
        );
        const currentRef = ref.current;
        if(currentRef) {
            intersectionObserver.observe(currentRef)
        }
        return () => {
            if(currentRef) {
                intersectionObserver.unobserve(currentRef)
            }
        }
    }, [ref])

    return isIntersecting

}

export default useIntersectionObserver