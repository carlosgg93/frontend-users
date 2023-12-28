import { forwardRef, useImperativeHandle, useState } from 'react';
import Button from '../form/Button';

const Toggable = forwardRef(({ children }, ref) => {
  const [visible, setVisible] = useState(true);

  const handleChangeVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => ({
    handleChangeVisibility,
  }));

  return (
    <>
      <Button text={visible ? 'Hide Menu' : 'Show Menu'} handleClick={handleChangeVisibility} />

      {visible && children}
    </>
  );
});

export default Toggable;
