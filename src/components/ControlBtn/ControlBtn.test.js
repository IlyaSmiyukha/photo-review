import React from 'react';
import { render } from '@testing-library/react';
import ControlBtn from './ControlBtn';
import fireEvent from '@testing-library/user-event';

const mockProps = {
  onClick: jest.fn()
}

describe('ControlBtn component', () => {
  let component;

  beforeEach(() => {
    component = render(<ControlBtn {...mockProps}/>);
  });

  it('should render ControlBtn component', async () => {
    const { findByTestId } = component;
    const btn = await findByTestId(/controlBtn/i);
    expect(btn).toBeInTheDocument();
  });

  it('should handle click ControlBtn', () => {
    const {container} = component;
    fireEvent.click(container.firstChild);
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });

});
