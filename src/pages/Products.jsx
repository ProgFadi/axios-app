import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageProduct from "../components/ProductPage/PageProduct";
import axios from "../utils/axios";

export default class Products extends React.Component {

  render() {
    return (
      <div>
        <PageProduct />
      </div>
    );
  }
}
