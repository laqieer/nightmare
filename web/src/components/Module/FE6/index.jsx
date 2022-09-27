import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

export default function FE6() {
  const [buffer] = useOutletContext();

  return (
    <Outlet context={[buffer]} />
  );
}
