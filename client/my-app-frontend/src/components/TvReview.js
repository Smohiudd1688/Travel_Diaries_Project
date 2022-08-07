import React from "react";

function TvReview({rating, review, name, id, onHandleDelete}) {

    return(
        <div className="review">
            <p>{"★".repeat(rating)}</p>
            <p>{review}</p>
            <p>-<em>{name}</em></p>
            <button onClick={() => onHandleDelete(id)} className="reviewButton">Delete Review</button>
            <button className="reviewButton">Update Review</button>
            <br></br><br></br><br></br><br></br>
        </div>
    );
}

export default TvReview;