import { render } from '@testing-library/react';

import SharedUiComponent from './shared-ui-component';

describe('SharedUiComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiComponent />);
    expect(baseElement).toBeTruthy();
  });
});
