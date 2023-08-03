import { render } from '@testing-library/react';

import UiComp from './ui-comp';

describe('UiComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiComp />);
    expect(baseElement).toBeTruthy();
  });
});
