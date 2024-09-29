import React from 'react'
import PropTypes from 'prop-types';
// import image1 from '../../assets/img1.jpeg'

const HeroCard = (props) => {
  return (
    <>
    <div className="blogimg">
      <a href=""> <img src={props.img} alt="BlogImage" /> </a>
        <p className="article">Blog Articles</p>
        <h4 className="blogheader">{props.header}</h4>
        <p className="content">{props.content}</p>
    </div>


    </>
  )
}

export default HeroCard

HeroCard.propTypes = {
    header: PropTypes.string.isRequired, 
    content : PropTypes.string.isRequired, 
    img : PropTypes.string.isRequired, 
}