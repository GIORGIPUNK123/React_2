import { Footer } from './Footer';
import { Component, FC } from 'react';
import { Navbar } from './Navbar';
export const Wrapper = (props: { components: FC[] }) => {
  console.log(props.components);
  return (
    <>
      <Navbar />
      {props.components.map((MyComponent, index) => (
        <MyComponent key={index} />
      ))}
      <Footer />
    </>
  );
};
