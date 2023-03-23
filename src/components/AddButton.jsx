import React from "react";
import {HiOutlinePlus} from "react-icons/hi";

const AddButton = () => {
  return (
    <div className="homepage__action">
      <button className="action" type="button" title="tambah">
        <HiOutlinePlus />
      </button>
    </div>
  );
};

export default AddButton;
