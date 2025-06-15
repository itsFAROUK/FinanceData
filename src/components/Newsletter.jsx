const Newsletter = () => {
  return (
    <section className="w-full py-16 px-4 text-white">
      <div className="grid max-w-[1240px] mx-auto lg:grid-cols-3">

        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Want tips & tricks to optimize your flow?</h2>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        <div className="my-4">

          <form action="" className="flex items-center justify-between w-full flex-col sm:flex-row">
            <input type="email" name="email" placeholder="Enter Email" aria-label="Email input box" className="p-3 w-full rounded-md bg-white text-black"/>
            <button type="submit" className="w-[200px] my-6 ml-4 py-3 rounded-md bg-[#00df9a] font-medium text-black">Notify Me</button>
          </form>

          <p>We care about the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy</span></p>

        </div>
        
      </div>
    </section>
  )
}

export default Newsletter