import { teamLogos } from '../../assets/data/teamLogos';

const TeamLogos = ({ team }) => {
  const teamLogo = teamLogos.filter((logo) => {
    if (logo.team === team) {
      return logo;
    }
    return false;
  });

  return (
    <img
      aria-busy="true"
      src={teamLogo[0].path}
      alt={team}
      style={{
        width: '100%',
        height: '42px',
      }}
    />
  );
};

export default TeamLogos;
