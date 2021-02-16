import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Dummy } from './Dummy';

test('Test dummy', () => {
  const mockCallBack = jest.fn();
  const {container, queryByText} = render(
    <Dummy 
      label="Test Text"
      onClick={mockCallBack}
    />
  );

  fireEvent.click(container.firstChild);

  expect(mockCallBack.mock.calls.length).toEqual(1);

  expect(queryByText('Test Text')).toBeInTheDocument();
});