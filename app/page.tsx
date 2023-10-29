import Container from '@/components/Container'
import Wrapper from '@/components/Wrapper'
import Hero from '@/sections/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full">
      <Container>
        <Wrapper>
          <Hero />
        </Wrapper>
      </Container>
    </main>
  )
}
