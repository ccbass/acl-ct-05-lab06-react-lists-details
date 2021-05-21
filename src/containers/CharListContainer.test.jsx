import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharListContainer from './CharListContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { avatarListData, avatarListDataPageTwo } from '../../fixtures/avatar-data';
import { rest } from 'msw';
import { setupServer } from 'msw/node';


const server = setupServer(
  rest.get(
    'https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10&page=1',
    (req, res, ctx) => {
      return res(
        ctx.json(avatarListData)
      );
    }
  ),
  rest.get(
    'https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10&page=2',
    (req, res, ctx) => {
      return res(
        ctx.json(avatarListDataPageTwo)
      );
    }
  )
);


describe('CharListContainer container tests', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('runs all container tests', async () => {
    render(<Router><CharListContainer /></Router>);

    // Check for loading text to appear before API resolves
    screen.getByText('L O A D I N G');
  
    // Check that 10 image cards load and display in DOM
    // Compare to snapshots
    const images = await screen.findAllByRole('img');
    expect(images).toHaveLength(10);
    expect(images).toMatchSnapshot();

    // Click next page button
    const nextPage = await screen.getByRole('button', { name: 'NEXT PAGE' });
    userEvent.click(nextPage);

    // Wait for DOM to update and check if new character is listed.
    waitFor(async () => {
      const character = await screen.findByText('Chit Sang\'s friend');
      expect(character).toBeInTheDocument();
    });

  });
      
      
});
