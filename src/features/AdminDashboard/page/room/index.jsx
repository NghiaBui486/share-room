import React from "react";
import Title from "../../components/title";
import Search from "./search"
import Table from "./table";
import "./index.scss";

function room(props) {
  return (
    <>
      <Title title={props.title} />
      <Search />
      <Table />
    </>
  );
}

export default room;
