import React, { useRef } from "react";
import Title from "../title";
import Search from "./search"
import Table from "./table";
import "./index.scss";

function Account(props) {
  const tableForm = useRef(null);
  return (
    <>
      <Title title={props.title} />
      <Search refreshData={() => tableForm.current.refreshAPI()}/>
      <Table ref={tableForm} />
    </>
  );
}

export default Account;
