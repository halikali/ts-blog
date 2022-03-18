import "./Ads.scss";

interface IAdProps {
  type: "box" | "large";
}

const Ad: React.FC<IAdProps> = (props) => {
  const { type } = props;
  return (
    <div className={`ad ad--${type}`}>
      Sample Ad <br />
      {type === "box" ? "350 x 250" : "728 x 90"}
    </div>
  );
};

export default Ad;
