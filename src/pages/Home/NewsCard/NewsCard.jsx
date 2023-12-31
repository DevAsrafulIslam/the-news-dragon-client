import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
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
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex text-muted">
        <div className="flex-grow-1 d-flex align-items-center gap-3">
          <Rating
            style={{ maxWidth: 150 }}
            value={Math.round(rating?.number || 0)}
            onChange
          />
          <span>{rating?.number}</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <FaEye></FaEye>
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
