import { flags } from '../../assets/data/flags';
const FlagsComponent = ({ location }) => {
  const flagSrc = flags.filter((flag) => {
    if (flag.country === location) {
      return flag;
    }
  });

  return (
    <img
      src={flagSrc[0].path}
      alt={location}
      style={{
        border: '1px solid black',
        margin: '2px',
        display: 'flex',
        width: 'auto',
        height: '32px',
      }}
    />
  );
};

export default FlagsComponent;
