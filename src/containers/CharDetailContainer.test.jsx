import React from 'react';
import { render, screen } from '@testing-library/react';
import CharDetailContainer from './CharDetailContainer';
import { MemoryRouter, Route } from 'react-router-dom';


describe('CharDetailContainer container tests', () => {

  it('detailed character tests', async () => {
    render(
      <MemoryRouter initialEntries={['/5cf5679a915ecad153ab68d5']}>
        <Route path="/:id"> <CharDetailContainer /> </Route>
      </MemoryRouter>
    );

    // Check for loading text to appear before API resolves
    screen.getByText('L O A D I N G');
  
    // Check that 1 image card loads and displays in DOM
    const image = await screen.findAllByRole('img');
    expect(image).toHaveLength(1);
    expect(image).toMatchSnapshot();

    // Check if character data is in DOM
    const character = await screen.findByText('Earth Kingdom Air Force');
    expect(character).toBeInDOM;
    const characterJob = await screen.findByText('Airman');
    expect(characterJob).toBeInDOM;

  });
      
      
});
