import React from 'react'

function CauseHouse() {
  return (
    <>
    <div className="p-div">
    <div className='div round-full'>Nonprofit Marketing Agency</div>
    <h1>Build the house your <span>mission</span> grows in.</h1>
    <p>Websites, fundraising systems, CRM, analytics, and campaign infrastructure — designed to work as one for growing mission-driven teams.</p>

      <button className='down-one rounded-full inline-flex h-14  min-h-[44px] items-center justify-center rounded-[var(--radius-pill)]   text-center text-label text-[var(--bg)] shadow-[4px_4px_0_0_rgba(29,43,31,0.35)] transition-[transform,box-shadow] hover:bg-[color-mix(in_srgb,var(--text)_92%,var(--bg))] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]' >Work with Us</button>
      <button className=' rounded-full inline-flex h-14  min-h-[44px] items-center justify-center rounded-[var(--radius-pill)]   text-center text-label text-[var(--bg)] shadow-[4px_4px_0_0_rgba(29,43,31,0.35)] transition-[transform,box-shadow] hover:bg-[color-mix(in_srgb,var(--text)_92%,var(--bg))] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]' >EXPLORE SERVICES</button>

    </div>
      <img className='Pic' src="https://img.magnific.com/free-vector/house-home-building-cartoon-vector-icon-illustration-building-landmark-icon-isolated-flat_138676-15023.jpg" alt="no" />
    </>
  )
}

export default CauseHouse;