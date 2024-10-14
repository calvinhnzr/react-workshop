import { useEffect } from "react"

const Card = (props) => {
  return (
    <li>
      <figure>
        <img
          src={"./assets/images/" + props.item.teaserImg}
          alt={props.item.teaserImg}
        />
        <figcaption>
          <h3>{props.item.title}</h3>
          <address>{props.item.author}</address>
          <ul className="tag-list">
            {props.item.tags.keywords.map((tag) => {
              return <li>{tag}</li>
            })}
          </ul>
        </figcaption>
      </figure>
    </li>
  )
}
export default Card
