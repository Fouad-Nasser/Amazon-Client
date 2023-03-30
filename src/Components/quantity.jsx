import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

function Quantity(props) {
    const [num, setNum] = useState(1);
    const {qty} = props;
    const options = Array(qty);

    for (let i = 1; i <= qty; i++) {
        const item = <Dropdown.Item onClick={()=>{setNum(i)}}>{i}</Dropdown.Item>
        options.push(item);
        
    }


  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        qty {num}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Quantity;