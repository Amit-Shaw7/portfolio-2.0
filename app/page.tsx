import Container from '@/components/Container'
import Wrapper from '@/components/Wrapper'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import FeaturedProjects from '@/sections/FeaturedProjects'
import Skills from '@/sections/Skills'
import OtherProjects from '@/sections/OtherProjects'
import WorkExperience from '@/sections/WorkExperience'

export default function Home() {
  return (
    <main className="w-full">
      <Container>
        <Wrapper>
          <Hero />
          <About />
          <Skills />
          <FeaturedProjects />
          <OtherProjects />
          <WorkExperience />
        </Wrapper>
      </Container>
    </main>
  )
}
