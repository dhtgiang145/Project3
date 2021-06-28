import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

class ReviewEdit extends Component {
  emptyReview = {
    name: "",
    item: "",
    content: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyReview,
    };
  }
  async componentDidMount() {
    if (this.props.match.params.id !== "new") {
      const review = await (
        await fetch(`/api/review/${this.props.match.params.id}`)
      ).json();
      this.setState({ item: review });
    }
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name= target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { item } = this.state;

    await fetch("/api/review", {
      method: item._id ? "PUT" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    this.props.history.push("/reviews");
  };
  render() {
    const { item } = this.state;
    const title = (
      <h2 className="mt-3">{item._id ? "Edit Inventory" : "Add Inventory"}</h2>
    );
    return (
      <div>
        <Container>
          {title}
          <Form className="justify-content-center" onSubmit={this.handleSubmit}>
            <FormGroup className="col-6">
              <Label for="name" className="h5 mt-3">
                Customer Name
              </Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={item.name || ""}
                onChange={this.handleChange}
                autoComplete="name"
              ></Input>
            </FormGroup>
            <FormGroup className="col-6" >
              <Label for="item" className="h5 mt-3">
                Item Review
              </Label>
              <Input
                type="text"
                name="item"
                id="item"
                value={item.item || ""}
                onChange={this.handleChange}
                autoComplete="item"
              ></Input>
            </FormGroup>
            <FormGroup className="col-6">
              <Label for="content" className="h5 mt-3">
                Review Content
              </Label>
              <Input
                type="textarea"
                name="content"
                id="content"
                value={item.content || ""}
                onChange={this.handleChange}
                autoComplete="content"
              ></Input>
            </FormGroup>
            <FormGroup className="col-6">
              <Button color="primary" type="submit" className="mt-3">
                Save
              </Button>
              <Button
                color="secondary"
                className="mt-3"
                tag={Link}
                to="/reviews"
              >
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(ReviewEdit);
