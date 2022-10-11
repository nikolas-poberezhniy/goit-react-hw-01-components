import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { FriendList } from "./friends/friends";
import { Transactions } from "./transactions/transactions";
import user from '../data/user.json'
import stats from '../data/statistic.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
  
export const App = () => {
  
  return (
    <>
      <Profile user={user} />  
      <Statistics stats={stats} title='Upload stats' />
      <FriendList friendsArr={friends} />
      <Transactions transactions={ transactions} />
    </>
  );
};
