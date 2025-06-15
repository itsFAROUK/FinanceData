import { ReactTyped } from "react-typed";

const Hero = () => {

  return (
    <section className="grid place-content-center w-[90%] max-w-[800px] min-h-[100svh] mt-[-96px] mx-auto text-center text-white">

      <p className="py-2  font-bold text-[#00df9a]">GROWING WITH DATA ANALYTICS</p>

      <h2 className="text-4xl font-bold sm:text-6xl md:text-7xl md:py-6">Grow with data.</h2>

      <div className="flex justify-center items-center gap-2">
        <p className="py-4 text-xl font-bold sm:text-4xl md:text-5xl">Fast, flexible financing for</p>
        <ReactTyped className="text-xl font-bold md:text-5xl sm:text-4xl md:pl-4"
          strings={['BTB', 'BTC', 'SASS']} 
          typeSpeed={120}
          backSpeed={140}
          loop/>
      </div>

      <p className="text-xl font-bold text-gray-500 md:text-2xl">Monitor your data analytics to increase for BTB, BTC, &SASS platforms.</p>
      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>

    </section>
  )
}

export default Hero