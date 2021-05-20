import React from 'react';
import { render, screen,waitFor } from '@testing-library/react';
import CharListContainer from './CharListContainer'
import { BrowserRouter as Router } from 'react-router-dom'



describe('CharListContainer container tests', () => {

  it('displays a loading screen', async () => {
    render(<Router><CharListContainer /></Router>);
    screen.getByText('L O A D I N G');
  });
  
  
  it('displays 10 character cards on the page', async () => {
      render(<Router><CharListContainer /></Router>);
      
      const test = await screen.findAllByRole('img', {} ,{timeout: 2000})
      expect(test).toHaveLength(10)
    });
    
    


});