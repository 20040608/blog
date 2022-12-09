import React from 'react';
import Option from '../Option/option';

const Select = ({data}) => {
  return (
    <>
      {
        data.map((e) => {
          return <option value=""><input type="checkbox"/>{e.title}</option>
        })
      }
    </>
  );
}

export default Select;
