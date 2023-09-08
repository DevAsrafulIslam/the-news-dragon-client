import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <div className="text-center mt-5">
        <h3>Terms And Condition</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
          fugiat? Veniam ab impedit consequuntur eius error dolor iure doloribus
          quibusdam amet. Asperiores repellendus harum accusamus, delectus
          maxime eos velit ullam.{" "}
          <Link className="text-primary " to="/register">
            register
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Terms;
