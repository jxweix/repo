import React from 'react'
import '../css/google.css'

function Pagegoogle() {
  return (
    <div className='body'>
    
      <>
      <h1>Google</h1>

        <input 
        type='text'
        id='search'
        placeholder='Type here'
        name='s'
        />
        
      </>
      
      <div className='bt'>
        <button>ค้นหาหีใน Google</button>
        <button>ดีใจจัง ฉันหาเจอแล้ว</button>
      </div>

      <p>แสดง Google ใน: English</p>
    </div>
  )
}

export default Pagegoogle