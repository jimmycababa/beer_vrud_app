import { Table, message, Popconfirm } from "antd";
import React from "react";
import AddBeerModal from "./AddBeerModal";

class Beers extends React.Component {
columns = [
    //   columns is an array that represents the skeleton of the table.
    //  the antd table needs to receive the metadata information about your table structure (rows and columns) as an array
    {
      title: "Brand",
    //   title receieves the name of the column
      dataIndex: "brand",
    // dataIndex is how it'll be known within React Components
      key: "brand",
    //   key is the unique identifier
    },
    {
        title: "Style",
        dataIndex: "style",
        key: "style",
      },
      {
        title: "Country",
        dataIndex: "country",
        key: "country",
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
      },
    {
      title: "",
      key: "action",
    //   with the action key, we need to specify the link of action to trigger with the user wants to delete an item
      render: (_text, record) => (
        <Popconfirm title="Are you sure to delete this beer?" onConfirm={() => this.deleteBeer(record.id)} okText="Yes" cancelText="No">
          <a href="#" type="danger">
            Delete{" "}
          </a>
        </Popconfirm>
        // Popconfirm is a simple and compact confirmation dialog of an action. Part of antd
        // it facilitates the job of prompting users to confirm an action before it happens
      ),
    },
  ];

  state = {
    beers: [],
}

componentDidMount(){
    this.loadBeers()
}

loadBeers = () => {
    const url = "api/v1/beers/index";
    fetch(url) 
    // requesting the /index endpoint asynchronously and then checks if the response status equals OK
      .then((data) => {
        if (data.ok) {
            // if it is OK, we return the data as JSON, otherwise throw an error
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then((data) => {
        //   the we iterate over the array of results to compose our own beer object and add to the state's beers array (at the top of this page)
        data.forEach((beer) => {
          const newEl = {
            key: beer.id,
            id: beer.id,
            brand: beer.brand,
            style: beer.style,
            country: beer.country,
            quantity: beer.quantity,
          };
  
          this.setState((prevState) => ({
            beers: [...prevState.beers, newEl],
          }));
        });
      })
    //   if anything went wrong during the process, the catch block will capture the exception and alert a message
      .catch((err) => message.error("Error: " + err));
  };

  reloadBeers = () => {
    this.setState({ beers: [] });
    // we are resetting the state's beers array and calling the load function again.
    this.loadBeers();
  };

  deleteBeer = (id) => {
    const url = `api/v1/beers/${id}`;
  
    fetch(url, {
      method: "delete",
    })
      .then((data) => {
        if (data.ok) {
          this.reloadBeers();
        //   the reloadBeers function will re-fetch all the beers from the back-end once again.
          return data.json();
        }
        throw new Error("Network error.");
      })
      .catch((err) => message.error("Error: " + err));
  };

  render() {
    //   this render function will display the two tags we're importing there: the antd's Table component and AddBeerModal
    return (
      <>
        <Table className="table-striped-rows" dataSource={this.state.beers} columns={this.columns} pagination={{ pageSize: 5 }} />
    {/* the dataSource attribute receives the list of beers we've mounted from the back-end */}
    {/* the columns attribute receives the metadata we've already built */}
        {/* <AddBeerModal reloadBeers={this.reloadBeers} /> */}
      </>
    );
  }
}

export default Beers;