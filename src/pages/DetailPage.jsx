import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import PropTypes from "prop-types";
import { getNote } from "../utils/local-data";

const DetailPageWrapper = () => {
  const { id } = useParams();

  return <DetailPage id={id} />;
};

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    if (this.state.note === null) {
      return <p>Tidak ada catatan</p>;
    }

    return (
      <section className="detail-page">
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
