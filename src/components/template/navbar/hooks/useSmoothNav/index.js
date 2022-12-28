export default function useSmoothNav(target) {    
    const handleSmoothNav = e => {
        e.preventDefault()
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' })
        window.history.pushState({ current: target }, undefined, `#${target}`)
    }

    return { handleSmoothNav }
}