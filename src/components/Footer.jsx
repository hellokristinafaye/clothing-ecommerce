import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
      <div>Footer
          
          <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_fr] gap-14 my-10 mt-40 text-sm">
              
              <div className="">
                  <img src={assets.logo} alt="" className="mb-5 w-32" />
                  <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi deserunt fugiat excepturi aperiam, sint ab, ex minus aliquid illum provident, officiis dolores voluptatibus repudiandae iusto! Neque accusamus ipsa eos molestiae.</p>
              </div>
              
              <div className="">
                  <p className="text-xl font-medium mb-5">COMPANY</p>
              </div>

          </div>
    </div>
  )
}

export default Footer