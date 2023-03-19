import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TeamsComponent.css';
import { teamAction, teamsAction } from '../../Store/Actions/TeamsActions';
import { randomId } from '../../Utils/RandomId';

//Temp Data
import { teams, team } from '../../Utils/TempData/Teams';
import ModalComponent from '../Modal/ModalComponent';
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

  const handleTeamDetails = (e, team) => {
    const teamApiParam = team.slice(0, team.indexOf(' ')).toLowerCase();
    //Action for team details
    // dispatch(teamAction(teamApiParam));
    e.stopPropagation();
  };

  // const team = useSelector((state) => state.team);
  const { loading: teamLoading, error: teamError, teamDetails } = team;

  return (
    <>
      <fieldset className="fieldSet">
        <legend>Constructors</legend>
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">TEAM</th>
              <th scope="col">DRIVERS</th>
              <th scope="col">PTS</th>
            </tr>
          </thead>
          <tbody>
            {teamsData?.map((team) => (
              <tr key={randomId(8)}>
                <td>
                  <TeamLogos team={team?.teamName} />
                  <div onClick={(e) => handleTeamDetails(e, team?.teamName)}>
                    <ModalComponent
                      closeButtonTitle="Close"
                      openButtonTitle={`Read more about team ${team?.teamName}`}
                      title="TEAM DETAILS"
                      content={
                        <div className="team-modal-content-wrapper">
                          <TeamLogos team={team?.teamName} />

                          <p>Base: {teamDetails?.base} </p>

                          <div className="modal-content-wrapper">
                            <h6>TECHNICAL</h6>
                            <p>Power Unit: {teamDetails?.powerUnit}</p>
                            <p>Chassis: {teamDetails?.chassis}</p>
                            <p>Team Chief: {teamDetails?.teamChief}</p>
                            <p>
                              Technical Chief: {teamDetails?.technicalChief}
                            </p>
                          </div>

                          <div className="modal-content-wrapper">
                            <h6>STATS</h6>
                            <p>Fastest Laps: {teamDetails?.fastestLaps}</p>
                            <p>
                              First Team Entry: {teamDetails?.firstTeamEntry}
                            </p>
                            <p>
                              Highest Race Finish:{' '}
                              {teamDetails?.highestRaceFinish}
                            </p>
                            <p>Points: {teamDetails?.points}</p>
                            <p>Pole Positions: {teamDetails?.polePositions}</p>
                            <p>Rank: {teamDetails?.rank}</p>
                            <p>
                              World Championships:{' '}
                              {teamDetails?.worldChampionships}
                            </p>
                          </div>

                          <div className="modal-content-wrapper">
                            <h6>Current Drivers</h6>
                            <p>
                              {teamDetails?.drivers[0].firstname}{' '}
                              {teamDetails?.drivers[0].lastname}
                            </p>
                            <p>
                              {teamDetails?.drivers[1].firstname}{' '}
                              {teamDetails?.drivers[1].lastname}
                            </p>
                          </div>
                        </div>
                      }
                    />
                  </div>
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
