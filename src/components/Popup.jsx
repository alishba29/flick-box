import React from "react";

const Popup = ({ selected, closePopup }) => {
  return (
    <>
      <div className="popup-backdrop" onClick={closePopup}></div>
      <section className="popup">
        <div className="content">
          <h2>
            {selected.Title} <span>({selected.Year})</span>
          </h2>
          <p className="rating">Rating: {selected.imdbRating}</p>
        </div>
        <div className="plot">
          <img src={selected.Poster} alt="Movie Poster" />
          <p>{selected.Plot}</p>
        </div>
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </section>
    </>
  );
};

export default Popup;
