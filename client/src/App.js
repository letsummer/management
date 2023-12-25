import logo from './logo.svg';
import Customer from "./components/Customer";
import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
// import './App.css';


function App() {

  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    const response = await(
      await fetch('http://localhost:5000/api/customers')
    ).json();
    // console.log(`response: `, response);
    return response;
  };

  useEffect(() => {
    getCustomers()
    .then((data) => setCustomers(data));
  },[]);
  
  // customers.map(c => {
  //   console.log(`c: `, c.id);
  // })
  
  
  return (
    <div className="App">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { customers?
            customers.map(c => 
              <Customer
                key={c.id}
                id={c.id}
                name={c.name}
                img={c.img}
                birth={c.birth}
                gender={c.gender}
                job={c.job}
              />
            ) :""
          }
          
        </TableBody>
      </Table>
    </div>
  );
}




export default App;
