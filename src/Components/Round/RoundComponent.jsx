import { useParams } from 'react-router-dom';
import './RoundComponent.css';

const RoundComponent = () => {
  const params = useParams();

  return <div>RoundComponent/ params {params.location}</div>;
};

export default RoundComponent;
