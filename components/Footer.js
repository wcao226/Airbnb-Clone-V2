import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Weston Cao</p>
            <p>Forums</p>
            <p>UI</p>
            <p>UX</p>
            <p>Weston Cao HQ</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Weston Cao</p>
            <p>Fake Website</p>
            <p>Tutorial</p>
            <p>Fun</p>
            <p>Hire</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Contact Us</p>
            <p>weston.cao7@gmail.com</p>
            <p>Github</p>
            <p>LinkedIn</p>
            <p>Portfolio</p>
        </div>
    </div>
  )
}

export default Footer;