import { useParams } from 'react-router-dom';
import RaceResultComponent from '../RaceResult/RaceResultComponent';

import './RoundComponent.css';

const RoundComponent = () => {
  const params = useParams();

  //Note: api requires: location, date and session number

  return (
    <div>
      <RaceResultComponent />

      <div>
        Practice Session Results -requires round {params.location} and YEAR and
        SESSION (number){' '}
      </div>
      <div>Qualifying Results-requires round {params.location} and YEAR</div>
      <div>Starting Grid-requires round {params.location} and YEAR</div>
      <div>Pitstop Summary-requires round {params.location} and YEAR</div>
      <div>Fastest Laps Result-requires round {params.location} and YEAR</div>
    </div>
  );
};

export default RoundComponent;
