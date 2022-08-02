
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/Friendlist';
import Statistics from '../Statistics/Statistics';
import TransactionHistory from '../TransactionHistory/TransactionHistory'


import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

export default function App() {
  return (
    <div><Profile
  userName={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
    /></div>
  );
};
