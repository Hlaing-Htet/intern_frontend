import { userDataType } from "./type";

const Footer = ({
  userObject,
  sum,
}: {
  userObject: userDataType;
  sum: (num: number) => number;
}) => {
  const sumOf3 = sum(3);
  return (
    <footer className=" bg-slate-400">
      <div>footer {userObject.name}</div>
      <div>
        {userObject.tech.map((item) => (
          <div key={item}>
            {item}
            {sumOf3}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
