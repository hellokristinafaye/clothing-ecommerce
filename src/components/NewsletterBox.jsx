import React from 'react'

const NewsletterBox = () => {
  return (
      <div className="text-center" > 
          <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
          <p className="text-gray-400 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <form className="">
              <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 outline-none" />
          </form>
    </div >
  )
}

export default NewsletterBox