import React from 'react';
import { render } from '@testing-library/react';
import AddButton from './AddButton';
import fireEvent from '@testing-library/user-event';

const mockProps = {
  onClick: jest.fn()
}

describe('AddButton component', () => {
  let component;

  beforeEach(() => {
    component = render(<AddButton {...mockProps}/>);
  });

  it('should render AddButton component', async () => {
    const { findByTestId } = component;
    const btn = await findByTestId(/addBtn/i);
    expect(btn).toBeInTheDocument();
  });

  it('should handle click AddButton', () => {
    const {container} = component;
    fireEvent.click(container.firstChild);
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });

});
