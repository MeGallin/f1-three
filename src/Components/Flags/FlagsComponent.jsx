import { flags } from '../../assets/data/flags';
const FlagsComponent = ({ location }) => {
  const flagSrc = flags.filter((flag) => {
    if (flag.country === location) {
      return flag;
    }
    return false;
  });

  return (
    <img
      aria-busy="true"
      src={flagSrc[0]?.path}
      alt={location}
      style={{
        border: '1px solid black',
        margin: '2px',
        height: '32px',
      }}
    />
  );
};

export default FlagsComponent;
