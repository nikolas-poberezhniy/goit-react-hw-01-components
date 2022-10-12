import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friends/Friends";
import { Transactions } from "./transactions/Transactions";
import user from '../data/user.json'
import stats from '../data/statistic.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
  
export const App = () => {
  
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats}  title='Upload stats' />
      <FriendList friendsArr={friends} />
      <Transactions transactions={ transactions} />
    </>
  );
};
