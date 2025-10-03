import { Link } from "react-router-dom";
import "./Card.css";

export const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3>Interests</h3>
      <div id="interests">
        {props.interests.map((interest, index) => {
          return <p key={index}>{interest}</p>;
        })}
      </div>
      <div id="buttons">
        {props.buttons.map((btn, index) => {
          return (
            <a key={index} href={btn.url}>
              <button>{btn.title}</button>
            </a>
          );
        })}
      </div>
      <Link to={`/update/${props.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};
