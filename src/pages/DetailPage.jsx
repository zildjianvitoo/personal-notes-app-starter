import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";

import { getNote } from "../utils/local-data";

function DetailPageWrapper() {
  const { id } = useParams();

  return <DetailPage id={Number(id)} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id) || "",
    };
  }

  render() {
    if (this.state.note === null) {
      return <p>Tidak ada catatan</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}

export default DetailPageWrapper;
