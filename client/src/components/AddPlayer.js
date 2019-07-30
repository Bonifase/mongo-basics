import React, { Component } from "react";

class AddPlayer extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="text" class="form-control" id="fname" aria-describedby="emailHelp" placeholder="Enter First name" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Last Name</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="name" />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;
