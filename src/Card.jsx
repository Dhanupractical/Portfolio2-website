import React from "react";

const Card = (props) => {
  return (
    <>
  
      <div className="col-md-4 col-12 mx-auto hovercards">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              {props.content}
            </p>
            {/* <NavLink to={props.link} className="btn btn-primary ">
              GitHub Code
            </NavLink> */}
            <a href={props.link} className="btn btn-primary"> GitHub Code </a>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Card;
