import React from 'react'

const HeroBox = (props) => {
  return (
    <>
    <div>
    <p className="article">Blog Articles</p>
    <a href="" className='heroboxlink'><h4 className="blogheader">{props.header}</h4></a>
    <p className="content">{props.content}</p>
    </div>
    </>
  )
}

export default HeroBox