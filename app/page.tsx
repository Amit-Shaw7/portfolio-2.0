import Container from '@/components/Container'
import Wrapper from '@/components/Wrapper'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import Skills from '@/sections/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full">
      <Container>
        <Wrapper>
          <Hero />
          <About />
          <Skills />
        </Wrapper>
      </Container>
    </main>
  )
}
