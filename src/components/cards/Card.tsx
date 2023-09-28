import './Card.css'



const Card =()=>{

    return (
<div className="blog_post">
  <div className="img_pod">
    <img alt=""/>
  </div>
  <div className="container_copy">
    <h3>12 January 2019</h3>
    <h1>CSS Positioning</h1>
    <p>The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</p>
    <a className="btn_primary" href='#' target="_blank">Read More</a>
  </div>
  
</div>
    )
}


export default Card;
