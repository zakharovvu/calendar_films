import React from "react"
import { mounts2 } from "./date"
import {Link} from "react-router-dom"

const Datapages = ({ lang, date, data, isVis, textDate}) => {
    let strDate = `${textDate.slice(-2)} ${mounts2[lang][date.getMonth()]} ${date.getFullYear()}`
    return (
      isVis 
      ? (
        <div className="content">
          <div className="card__data">{strDate}</div><hr />
          {data.map(el => {
            return (
              <div key={el.id} className="card">
                <section className="card__section">
                  <img 
                    className="card__image" 
                    alt={el.name} 
                    src={el.show.image === null ? '' : el.show.image.medium} 
                  />
                  <div>
                    <div>{el.show.name}</div>
                    <div className="card__premiered" >{el.show.premiered.slice(0, 4)}</div>
                    <Link className="card__detail--color" to={`/detail/${el.show.id}`} >Подробней...</Link>
                  </div>
                </section>
              </div>)
          })}
        </div>
        )
      :
        <div>Loading...</div>
    )
}

export default Datapages