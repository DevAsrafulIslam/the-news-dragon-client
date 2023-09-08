// import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "./EditorsInsights/EditorsInsights";
import { FaArrowLeft } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, category_id } = news;

  return (
    <div>
      <Card style={{ width: "18rem ,fit-content", margin: "auto" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}e</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">
              <FaArrowLeft style={{ margin: "5px", text: "center" }} />
              Go Back
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsights></EditorsInsights>
    </div>
  );
};

export default News;
