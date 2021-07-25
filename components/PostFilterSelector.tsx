const PostFilterSelector = ({ setPostFilter }) => {
  return (
    <div className="container">
      <a
        className="btn"
        onClick={() => {
          setPostFilter(null);
        }}
      >
        #All
      </a>
      <a
        className="btn"
        onClick={() => {
          setPostFilter("Daily");
        }}
      >
        #Daily
      </a>
      <a
        className="btn"
        onClick={() => {
          setPostFilter("Code");
        }}
      >
        #Code
      </a>
      <a
        className="btn"
        onClick={() => {
          setPostFilter("Design");
        }}
      >
        #Design
      </a>
      <a
        className="btn"
        onClick={() => {
          setPostFilter("Projects");
        }}
      >
        #Projects
      </a>
    </div>
  );
};

export default PostFilterSelector;
