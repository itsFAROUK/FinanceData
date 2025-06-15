import Laptop from '../assets/laptop.jpg'

const Hero = () => {

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-[1240] mx-auto md:grid md:grid-cols-2 md:items-center">

        <img src={Laptop} alt="laptop" className='w-[500px] mx-auto my-4' />

        <div>
          <p className="font-bold text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
          <h2 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">Manage Data Analytics Centrally</h2>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis minus distinctio sit quaerat necessitatibus recusandae! Sed blanditiis nobis sapiente impedit ullam iure accusamus, cumque asperiores, sequi amet commodi dolore? Magnam!
          </p>
          <button className="w-[200px] my-6 mx-auto py-3 rounded-md bg-black font-medium text-[#00df9a] md:mx-0 block">Get Started</button>
        </div>
        
      </div>
    </section>
  )
}

export default Hero