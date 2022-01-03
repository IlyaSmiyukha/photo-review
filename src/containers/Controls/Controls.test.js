import React from 'react';
import { render, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import Controls from './Controls';

import { store } from 'store/store';
import { Provider } from 'react-redux';
import { getImage } from 'store/collection/actions';


describe('Controls component', () => {
  let component;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Controls />
      </Provider>
    );
  });

  it('should render Controls component with NoCurrentImage state', async () => {
    const { getByText } = component;
    const btn = await getByText(/click on the/i);
    expect(btn).toBeInTheDocument();
  });
});
