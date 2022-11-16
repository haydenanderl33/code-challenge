import React, { useEffect, useState } from "react";
import { List, ListItem } from "@mui/material";
import { ListItemDrawer } from "../ListItemDrawer";

export function CustomList() {
  const [data, setData] = useState([]);
  
  let dataArr = [
    {
      name: "item 1",
      viewed: false,
      description: "item desciption",
      status: ["new", "complete", "in progress", "on hold", "achieved"],
    },
    {
      name: "item 2",
      viewed: false,
      description: "item desciption",
      status: ["new", "complete", "in progress", "on hold", "achieved"],
    },
    {
      name: "item 3",
      viewed: false,
      description: "item desciption 1",
      status: ["new", "complete", "in progress", "on hold", "achieved"],
    },
    {
      name: "item 4",
      viewed: false,
      description: "item desciption 1",
      status: ["new", "complete", "in progress", "on hold", "achieved"],
    },
    {
      name: "item 5",
      viewed: false,
      description: "item desciption 1",
      status: ["new", "complete", "in progress", "on hold", "achieved"],
    },
  ];


  const getData = () => {
    setTimeout(() => {
      setData([...dataArr])
    }, 2000);
  };

  
  useEffect(() => {
    getData()
  });

  return (
    <div>
      <List style={{marginTop: '70px'}}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <ListItem key={index}>{item.name}</ListItem>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </List>
      <ListItemDrawer />
    </div>
  );
}
