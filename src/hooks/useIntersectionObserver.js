import { useEffect,useState } from "react";

const useIntersectionObserver = (ref, threshold) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const intersectionObserver = new IntersectionObserver(
        ([entry]) => {

          setIntersecting(entry?.isIntersecting ?? false);
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
    }, [ref, threshold])

    return isIntersecting

}

export default useIntersectionObserver