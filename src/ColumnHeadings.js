import React from 'react'

import './ColumnHeadings.css'

const ColumnHeadings = (props) => {
  return (
    <div className='column-headings-row'>
      <div className='column-heading-wrapper-first'>
        <h2 className='count'>#</h2>
      </div>
      <div className='column-heading-wrapper'>
        <h2 className='camper-img'>Photo</h2>
      </div>
      <div className='column-heading-wrapper'>
        <h2 className='camper-name'>Name</h2>
      </div>
      <div className='column-heading-wrapper'>
        <h2 className='recent'>
          <a onClick={props.fetchData} name='recent'>
            30 Days
          </a>
        </h2>
      </div>
      <div className='column-heading-wrapper'>
        <h2 className='all-time'>
          <a onClick={props.fetchData} name='alltime'>
            All Time
          </a>
        </h2>
      </div>
    </div>
  )
}

export default ColumnHeadings
