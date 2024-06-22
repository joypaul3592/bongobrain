'use client'
import 'aos/dist/aos.css';
import Home from './components/Pages/homePage/Home';
import ReactLenis from '@studio-freight/react-lenis';

export default function page() {
  return (
    <ReactLenis root="html" options={{ lerp: 0.1, duration: 1.5 }}>
      <Home />
    </ReactLenis>
  )
}

