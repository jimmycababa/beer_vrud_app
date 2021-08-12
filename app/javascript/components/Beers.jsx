import { Table, message, Popconfirm } from "antd";
import React, { useState, useEffect } from "react";
import AddBeerModal from "./AddBeerModal";

// the function call 'Beers' adds state to the component and renders it initialized with the value of an empty array. 
// the two values: beers is the variable that is assigned the initial value of state which is the empty array. the variable 'setBeers' is assigned to a function that will be used to modify the state.
function Beers() {
  const [beers, setBeers] = useState([])
  let columns = [
    //   columns is an array that represents the skeleton of the table. saved as a variable.
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
        <Popconfirm title="Are you sure to delete this beer?" onConfirm={() => deleteBeer(record.id)} okText="Yes" cancelText="No">
          <a href="#" type="danger">
            Delete{" "}
          </a>
        </Popconfirm>
        // Popconfirm is a simple and compact confirmation dialog of an action. Part of antd
        // it facilitates the job of prompting users to confirm an action before it happens
      ),
    },
  ];
  function deleteBeer(id) {
    const url = `api/v1/beers/${id}`;
  
    fetch(url, {
      method: "delete",
    })
      .then((data) => {
        if (data.ok) {
           reloadBeers();
        //   the reloadBeers function will re-fetch all the beers from the back-end once again.
          return data.json();
        }
        throw new Error("Network error.");
      })
      .catch((err) => message.error("Error: " + err));
  };
  
  function reloadBeers(){
    setBeers([])
    // we are resetting the state's beers array and calling the load function again.
    loadBeers();
  };

  function loadBeers() {
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
  // this is an implicit return
          setBeers((prevState) => [...prevState, newEl]);
        });
      })
    //   if anything went wrong during the process, the catch block will capture the exception and alert a message
      .catch((err) => message.error("Error: " + err));
  };
// callback function that we are passing an empty dependency list. it will run when the component mounts the first time. thats the only time we want it to run
  useEffect(() => loadBeers(), []) 

  return (
    <>
      <Table className="table-striped-rows" dataSource={beers} columns={columns} pagination={{ pageSize: 5 }} />
  {/* the dataSource attribute receives the list of beers we've mounted from the back-end */}
  {/* the columns attribute receives the metadata we've already built */}
      <AddBeerModal reloadBeers={reloadBeers} />
    </>
  );
} 





//   state = {
//     beers: [],
//     prices: {
//       lager: NaN,
//     }
//   }
// setState({ prices: { lager: 9.5 }})

// if it was a functional component:
//  const [beers, setBeers] = useState([])
// const [prices, setPrices] = useState({ lager: NaN })
// setBeers([value1, value2])
// setPrices({lager: 9.5, whiskey: 10 })

  
    //   this render function will display the two tags we're importing there: the antd's Table component and AddBeerModal
 
  


export default Beers;