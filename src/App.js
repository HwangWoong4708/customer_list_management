import React from "react";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "http://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "961212",
    gender: "male",
    job: "학생",
  },
  {
    id: 2,
    image: "http://placeimg.com/64/64/2",
    name: "장삐쭈",
    birthday: "961222",
    gender: "male",
    job: "학생",
  },
  {
    id: 3,
    image: "http://placeimg.com/64/64/3",
    name: "나천재",
    birthday: "961223",
    gender: "male",
    job: "학생",
  },
];
class App extends React.Component {
  render() {
    return (
      <div>
        {customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              name={c.name}
              image={c.image}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
