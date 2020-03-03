import React from 'react';
import { SwConsumer } from '../SwContext';

const withSwapidata = (Wrapped, mapMethodToprops) => {
  return (props) => {
    return (
      <SwConsumer>
        {
          (swapiService) => {
            return (
              <Wrapped {...props} {...mapMethodToprops(swapiService)} ></Wrapped>
            )
          }
        }
      </SwConsumer>
    )
  }
};

export default withSwapidata;