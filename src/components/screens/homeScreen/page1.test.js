import { render } from '@testing-library/react-native';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme/build';
import React from 'react';
import renderer from 'react-test-renderer';
import PageFirst from './page1';

configure({ adapter: new Adapter() });
jest.mock('../../common/CommonSlider', () => ({
    minValue: 0,
    maxValue: 10,
    onSlide: jest.fn(),
    onSlidingComplete: jest.fn(),
    value: 1,
    steps: 1
}))

describe("PageFirst", () => {

    let props = {
        angerValue: 2,
        setAngerValue: jest.fn()
    }

    beforeEach(() => {

    });

    it('should render PageFirst screen correctly', () => {
        const tree = renderer.create(<PageFirst {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should receive 2 in slider as value if anger valkue is 2', () => {
        const { getByTestId } = render(<PageFirst {...props} />)
        expect(getByTestId('CommonSlider').props.value).toEqual(2)
    });

    it('should have not onSlide as undefined', () => {
        const { getByTestId } = render(<PageFirst {...props} />)
        expect(getByTestId('CommonSlider').props.onValueChange).toBeTruthy()
    });

});