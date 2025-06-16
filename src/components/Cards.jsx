import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

const Cards = () => {
  return (
    <section className="w-full py-[10rem] px-8 bg-white">
      <div className="grid gap-8 max-w-[1240px] mx-auto md:grid-cols-3">

        <div className="flex flex-col my-8 p-4 w-full rounded-lg shadow-xl hover:scale-105 duration-300">
          <img src={Single} alt="single" className="w-20 mx-auto mt-[-3rem] bg-transparent"/>
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
            <p className="py-2 mx-8 border-b">1 Granted User</p>
            <p className="py-2 mx-8 border-b">Send up to 2 GB</p>
          </div>
          <button className="w-[200px] my-6 mx-auto py-3 rounded-md bg-[#00df9a] font-medium text-black">Start Trial</button>
        </div>
        
        <div className="flex flex-col my-8 p-4 w-full rounded-lg bg-gray-100 shadow-xl hover:scale-105 duration-300 md:my-0">
          <img src={Double} alt="double" className="w-20 mx-auto mt-[-3rem] bg-transparent"/>
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-4xl font-bold text-center">$199</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">700 GB Storage</p>
            <p className="py-2 mx-8 border-b">2 Granted User</p>
            <p className="py-2 mx-8 border-b">Send up to 3 GB</p>
          </div>
          <button className="w-[200px] my-6 mx-auto py-3 rounded-md bg-black font-medium text-[#00df9a]">Start Trial</button>
        </div>

        <div className="flex flex-col my-8 p-4 w-full rounded-lg shadow-xl hover:scale-105 duration-300">
          <img src={Triple} alt="triple" className="w-20 mx-auto mt-[-3rem] bg-transparent"/>
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-4xl font-bold text-center">$249</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">1000 GB Storage</p>
            <p className="py-2 mx-8 border-b">+3 Granted User</p>
            <p className="py-2 mx-8 border-b">Send up to 5 GB</p>
          </div>
          <button className="w-[200px] my-6 mx-auto py-3 rounded-md bg-[#00df9a] font-medium text-black">Start Trial</button>
        </div>

      </div>
    </section>
  )
}

export default Cards