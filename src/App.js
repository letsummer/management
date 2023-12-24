import logo from './logo.svg';
import Customer from "./components/Customer";
// import './App.css';

const customer = [
  {
  'id': 1,
  'img': 'https://picsum.photos/64',
  'name': '홍길동',
  'birth': '961222',
  'gender': '남자',
  'job': '대학생'
  },
  {
  'id': 2,
  'img': 'https://picsum.photos/64',
  'name': '나동빈',
  'birth': '961222',
  'gender': '남자',
  'job': '강사'
  },
  {
  'id': 3,
  'img': 'https://picsum.photos/64',
  'name': '김산타',
  'birth': '231224',
  'gender': '여자',
  'job': '산타'
  },
];

function App() {
  return (
    <div className="App">
      {customer.map(c=>
      <Customer
        id={c.id}
        name={c.name}
        img={c.img}
        birth={c.birth}
        gender={c.gender}
        job={c.job}
      />)}
    </div>
  );
}




export default App;
