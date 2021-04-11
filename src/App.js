import photoDrHouse from './assets/img/drhouse';
import photoEverybody from './assets/img/everybody.jpg';
import photoCheck from './assets/img/check.png';
import photoComment from './assets/img/comment.png';
import photoLike from './assets/img/likes.png';
import photoRepost from './assets/img/retvit.png';
import photoShare from './assets/img/give.png';
import photoHouse from './assets/img/dr_house.jpg';
import './App.css';
import Posts from './component/Posts';

const posts = [
  {
    id: 234234,
    postName: "Doctor House",
    photo:  photoDrHouse,
    photoCheck: photoCheck,
    nickname: "best_doctor",
    text: "Everybody lies..",
    contentPhoto: photoEverybody,
    time: "25 april",
    photoComment: photoComment,
    photoLike: photoLike,
    photoRepost: photoRepost,
    photoShare: photoShare,
    comment: 348,
    like: 967,
    retvit: 98
  },
  {
    id: 234235,
    postName: "Doctor House",
    photo:  photoDrHouse,
    photoCheck: photoCheck,
    nickname: "best_doctor",
    text: "You can't always get everything you want, but if you try, it turns out that sometimes you can.",
    contentPhoto: photoHouse,
    time: "09 april",
    photoComment: photoComment,
    photoLike: photoLike,
    photoRepost: photoRepost,
    photoShare: photoShare,
    comment: 568,
    like: 67,
    retvit: 23
  }
]

function App() {
  return (
    <div className="App">
      {posts.map(post => <Posts {...post} key={post.id}/>)}
    </div>
  );
}

export default App;
