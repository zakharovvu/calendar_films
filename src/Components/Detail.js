import React from "react"

const Detail = ({data, param}) => {
  const id = param.location.pathname.split('/')[2]
  let obj = data.find(el => el.show.id === parseInt(id))
  
  let arr = Object.entries(obj.show)
  return (
    <div className="detail">
      <img 
        className="detail__img" 
        alt={obj.name} 
        src={obj.show.image === null ? '' : obj.show.image.original} 
      />
  {arr.map(el => {
    return (
      <div key={el[0]}>
        <span style={{color: 'red'}}>{el[0]}: </span>
        <span style={{color: 'black'}}> {typeof(el[1]) === 'object' ? '--' : el[1]}:</span>
      </div>)
  })}
    </div>
  )
}

export default Detail

