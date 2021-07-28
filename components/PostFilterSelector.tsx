import style from "../styles/PostFilterSelector.module.scss";

const PostFilterSelector = ({ setPostFilter }) => {
  return (
    <div className={style.postFilterSelector}>
      <div
        className="btn"
        onClick={() => {
          setPostFilter(null);
        }}
      >
        #ALL
      </div>
      <div
        className="btn"
        onClick={() => {
          setPostFilter("Daily");
        }}
      >
        #Daily
      </div>
      <div
        className="btn"
        onClick={() => {
          setPostFilter("Code");
        }}
      >
        #Code
      </div>
      <div
        className="btn"
        onClick={() => {
          setPostFilter("Design");
        }}
      >
        #Design
      </div>
      <div
        className="btn"
        onClick={() => {
          setPostFilter("Projects");
        }}
      >
        #Projects
      </div>
    </div>
  );
};

export default PostFilterSelector;
