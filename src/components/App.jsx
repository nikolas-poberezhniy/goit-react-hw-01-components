import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import user from '../data/user.json'
import stats from '../data/statistic.json'
  
  
export const App = () => {
  
  return (
    <>
      <Profile user={user} />  
      <Statistics stats={stats} title='Upload stats'/>
    </>
  );
};
