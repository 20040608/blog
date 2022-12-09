import React from 'react';

const Option = () => {
  const option = [{name:'note 10'},{name:'note 11'},{name:'note 12'}]
  return (
    <>
      {
        option.map((e) => {
          return <option><a href="">{e.name}</a></option>
        })
      }
    </>
  );
}

export default Option;
