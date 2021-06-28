import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Table } from "reactstrap";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("api/reviews")
      .then((response) => response.json())
      .then((data) => this.setState({ reviews: data, isLoading: false }));
  }
  removeReview = async (id) => {
    await fetch(`api/review/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("Remove review done!");
    let updateReviews = [...this.state.reviews].filter((i) => i._id !== id);
    this.setState({ reviews: updateReviews });
  };
  render() {
    const { reviews, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ....</p>;
    }
    const reviewList = reviews.map((review) => {
      return (
        <tr key={review._id}>
          <td>{review.name}</td>
          <td>{review.item}</td>
          <td>{review.content}</td>
          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="primary"
                tag={Link}
                to={"/review/" + review._id}
              >
                Edit
              </Button>
              <Button
                size="sm"
                color="danger"
                onClick={() => this.removeReview(review._id)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <Container fluid>
        <div className="float-right">
            <Button
              color="success"
              className="my-4"
              tag={Link}
              to="/review/new"
            >
              Add Inventory
            </Button>
          </div>
          <h3>Review List</h3>
          <Table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Review Item</th>
                <th>Review Content</th>
              </tr>
            </thead>
            <tbody>{reviewList}</tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Reviews;
