import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

export default function FE7() {
  const [buffer] = useOutletContext();

  return (
    <Outlet context={[buffer]} />
  );
}
