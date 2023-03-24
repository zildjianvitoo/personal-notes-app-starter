import React from "react";
import {HiOutlinePlus} from "react-icons/hi";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <div className="homepage__action">
      <Link to="notes/new">
        <button className="action" type="button" title="tambah">
          <HiOutlinePlus />
        </button>
      </Link>
    </div>
  );
};

export default AddButton;
