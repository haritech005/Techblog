import React from 'react'
import { useParams } from 'react-router-dom'
import contentData from './Data'

const Contents = () => {

  const {id} = useParams()

  

  const article = contentData[id]; // 1 => content 2 => content 

  if(!article){
   return <h3>Data is Not found</h3>
  }

  return (
    <>
     <div className="contenttitle">
      <p className="articles">Blog Articles</p>
      <h1 className="blogContent">{article.title}</h1>
      <p className='articledate'>{article.date}</p>
      
    </div>
    
    <div className='contentMain'>
    <p className='initialcontent'>{article.initialContent}</p>
    <h1 className="mainTitle">{article.mainTitle}</h1>
    <p className="maincontent">{article.mainContent}</p>
    </div>
    </>
  )
}

export default Contents