import getHerosections from '@/actions/get-hero-section'
import getProducts from '@/actions/get-products'
import HeroSection from '@/components/home/hero-section'
import Section2 from '@/components/home/home-section-2'
import Section3 from '@/components/home/home-section-3'
import ScrollText from '@/components/home/home-section-4'
import Section5 from '@/components/home/home-section-5'
import Section6 from '@/components/home/home-section-6'


export const revalidate = 0;

const Home = async () => {

  const products = await getProducts({ isFeatured: true })
  const herosection = await getHerosections("95b371f7-6a5a-4826-b5df-c06e7580ac75")

  return (
    <div className='flex flex-col space-y-16'>
      <HeroSection data={herosection} />
      <Section2 />
      <Section3 />
      {/* <ScrollText /> */}
      <Section5 />
      <Section6 data={products} />
    </div>
  )
}

export default Home;
