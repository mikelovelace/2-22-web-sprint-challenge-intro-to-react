import React from "react";

function Character(props) {
  const { charData } = props;

  return (
    <>
      {charData.map((res, index) => {
        return (
          <div className="container">
          <div className="name"><h2>{res.name}</h2></div>
          <div className="card" key={index}>
              <div className="column">
                <div className="row"><p><span className="title">Gender: </span>{res.gender}</p></div>
                <div className="row"><p><span className="title">Eye Color: </span>{res.eye_color}</p></div>
                <div className="row"><p><span className="title">Hair Color: </span>{res.hair_color}</p></div>
                <div className="row"><p><span className="title">Height: </span>{res.height}</p></div>
              </div>
              <div className="column">
                <div className="row"><p><span className="title">Birth Year: </span>{res.birth_year}</p></div>
                <div className="row"><p><span className="title">Weight: </span>{res.mass}</p></div>
                <div className="row"><p><span className="title">Skin Color: </span>{res.skin_color}</p></div>
                <div className="row"><p className="films"><span className="title">Films: </span> {res.films.map((film) => {
                  return film + ", "
                })}</p></div>
              </div>
          </div>
          </div>
        );
      })}
      </>
  );
}

export default Character;
