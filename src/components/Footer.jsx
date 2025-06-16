import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='grid items-center gap-8 max-w-[1240px] mx-auto py-16 px-4 lg:grid-cols-3 text-gray-300'>
      <div>
        <h2 className="m-4 text-3xl font-bold text-[#00df9a]">React.</h2>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis. Officia repellat vitae sunt consectetur quibusdam nulla odio id ad. Reprehenderit ut maiores distinctio in. Optio quaerat impedit eum iusto?
        </p>
        <div className="flex justify-between my-6 lg:w-[75%]">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
        <div className="flex justify-between mt-6 lg:col-span-2">
          <div>
            <h3 className="font-medium text-gray-400">Solutions</h3>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-400">Support</h3>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-400">Company</h3>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-400">Legal</h3>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Plicy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default Footer