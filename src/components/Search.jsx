import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Search() {
  <Form className="d-flex">
    <Form.Control
      type="text"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      // value={searchTerm}
      // onChange={handleChange}
    />
    <Button variant="outline-success">Найти</Button>
  </Form>;
}
