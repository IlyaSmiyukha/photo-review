import React from 'react';
import { render } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import ImagePreview from './ImagePreview';

import { store } from 'store/store';
import { Provider } from 'react-redux';


describe('ImagePreview component', () => {
  let component;

  beforeEach(() => {
    store.dispatch = jest.fn();
    component = render(
      <Provider store={store}>
        <ImagePreview />
      </Provider>
    );
  });

  it('should render ImagePreview component with AddButton', async () => {
    const { findByTestId } = component;
    const btn = await findByTestId(/addBtn/i);
    expect(btn).toBeInTheDocument();
  });

  it('should handle click AddButton', async () => {
    const { findByTestId } = component;
    const btn = await findByTestId(/addBtn/i);
    fireEvent.click(btn);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

});
