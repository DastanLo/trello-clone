import React from 'react';
import Card from "./components/Card/CardComponent/Card";
import BoardForm from "./components/BoardForm/BoardForm";
import Modal from "./components/UI/Modal/Modal";

const App = () => {
  return (
    <div>
      <Card/>
      <Modal show={true}>
          <BoardForm/>
      </Modal>
    </div>
  );
};

export default App;

