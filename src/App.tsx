import "./styles.css";
import { UserCard } from "./components/UserCars"
import axios from "axios";
import { User } from "./types/api/user";

const user = {
id: 1,
name: "mari",
email: "1212@aaa.com",
address: "ADDRESS"
}

export default function App() {
  const [UserProfile, setuserProfiles] = useState<Array<UserProfile>>([]);

const onClickFetchUser = () => {
axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res) => {});
const data = res.data.map((user) => ({
id: user.id,
name: `S{user.}`
}))
});
};
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <UserCard user={user} />
    </div>
  );
}
