import { fireEvent, render } from '@testing-library/react';

import { Button } from '@components';

describe('Button component test', () => {
    it('trigger the callback', () => {
        const testCallBack = jest.fn();

        const { getByText } = render(<Button label="Button test" callBack={testCallBack} />);
        fireEvent.click(getByText('Button test'));

        expect(testCallBack).toHaveBeenCalled();
    });
});
