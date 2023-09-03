import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaRegBookmark,
  FaRegEye,
  FaRegStar,
  FaRegStarHalf,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <Card>
      <Card.Header>
        <div className="d-flex align-items-center">
          <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
          <div className="ps-2 flex-grow-1 ">
            <p className="mb-0">{author?.name}</p>
            <p>
              <small>
                {moment(author?.published_date).format("yyyy-MM-D")}
              </small>
            </p>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt className="ms-3"></FaShareAlt>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Image src={image_url} fluid />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link to={`/home/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          ></Rating>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaRegEye></FaRegEye>
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
