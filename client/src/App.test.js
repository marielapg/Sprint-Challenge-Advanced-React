import React from 'react';
import App from './App';
import PCard from "./Components/PCard";
import {render} from "@testing-library/react";

test ('renders without crashing', () => {
  renders(<App/>);

});

test('it renders person name', ()=> {  
  const {getByName} = render(<PCard/>)
  getByName.getByTestId(/nameprint/i)
  expect(getByName.children.length).toBe(1);
})

test('it renders person country', ()=> {  
  const {getByCountry} = render(<PCard/>)
  getByCountry.getByTestId(/countryprint/i)
  expect(getByCountry.children.length).toBe(1);
})

test('it renders person searches', ()=> {  
  const {getBySearches} = render(<PCard/>)
  getBySearches(/searchesprint/i)
  expect(getBySearches.children.length).toBe(1);
})

