import React, { useState } from 'react';

const Tour = ({ id, image, name, price, info, removeTour }) => {
  const [readmore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button
            type="buttons"
            className="info-btn"
            onClick={() => setReadMore(!readmore)}
          >
            {readmore ? 'show less' : 'read more'}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
