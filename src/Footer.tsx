import { useParams } from "react-router-dom";

const Footer = () => {
  const { userId } = useParams();
  return <div>{userId}</div>;
};

export default Footer;
