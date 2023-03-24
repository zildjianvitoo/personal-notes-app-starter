import React from "react";
import NotesList from "../components/NotesList";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/local-data";
import PropTypes from "prop-types";

const ArchiveWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");
  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword });
  };

  return (
    <Archive defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
};

class Archive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const archived = this.state.notes
      .filter((note) => {
        return note.archived === true;
      })
      .filter((noteArchived) => {
        return noteArchived.title
          .toLowerCase()
          .includes(this.state.keyword.toLowerCase());
      });

    return (
      <section className="search-bar">
        <h2>Catatan yang diarsip</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NotesList notes={archived} />
      </section>
    );
  }
}

Archive.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchiveWrapper;
