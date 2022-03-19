import "./SingleCategoryPost.scss";

interface ISingleCategoryPostProps {
  categoryName: string;
}

const SingleCategoryPost: React.FC<ISingleCategoryPostProps> = (props) => {
  const { categoryName, children } = props;
  return (
    <div className="single-category-post">
      <p className="single-category-post__name-wrapper">
        <span className="single-category-post__name">{categoryName} </span>
      </p>
      {children && children}
    </div>
  );
};

export default SingleCategoryPost;
