import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { teamsAction } from '../../Store/Actions/TeamsActions';
import { randomId } from '../../Utils/RandomId';

//Temp Data
import { teams } from '../../Utils/TempData/Teams';
import TeamLogos from '../TeamLogos/TeamLogos';

const TeamsComponent = () => {
  const dispatch = useDispatch();
  // const teams = useSelector((state) => state.teams);
  const { loading, error, teams: teamsData } = teams;
  useEffect(() => {
    //Dispatch Action
    // if (!teamsData) {
    //   dispatch(teamsAction());
    // }
  }, [dispatch]);

  return (
    <>
      <fieldset className="fieldSet">
        <legend>Constructors</legend>
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">STANDINGS</th>
              <th scope="col">DRIVERS</th>
              <th scope="col">PTS</th>
            </tr>
          </thead>
          <tbody>
            {teamsData?.map((team) => (
              <tr key={randomId(8)}>
                <td>
                  <TeamLogos team={team?.teamName} />
                  <div>MODAL</div>
                </td>
                <td>
                  <div>
                    {team?.drivers[0].firstname} {''}{' '}
                    {team?.drivers[0].lastname}
                  </div>
                  <div>
                    {team?.drivers[1].firstname} {''}{' '}
                    {team?.drivers[1].lastname}
                  </div>
                </td>
                <td>{team?.points.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </fieldset>
    </>
  );
};

export default TeamsComponent;
