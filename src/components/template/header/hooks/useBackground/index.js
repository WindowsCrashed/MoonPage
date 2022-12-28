import { useState } from "react"

export default function useBackground() {
    const [hasBackground, setHasBackground] = useState(false)
    
    const applyBackground = () => 
        window.scrollY < (window.innerHeight - 200)
            ? setHasBackground(false) : setHasBackground(true)

    window.addEventListener('scroll', applyBackground)

    return hasBackground ? 'background' : ''
}