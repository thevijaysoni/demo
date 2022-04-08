import { render } from '@testing-library/react-native';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { } from 'react-native';
import renderer from 'react-test-renderer';
import PageSecond from './page1';

jest.mock('../../common/RegularText', () => props => (
    <MockRegularText {...props} testID={"regular-text"} />
))
configure({ adapter: new Adapter() });

describe("PageSecond", () => {

    let props = {
        angerValue: 2,
        setAngerValue: jest.fn(),
    }

    beforeEach(() => {
    });

    it('should render PageSecond screen correctly', () => {
        const tree = renderer.create(<PageSecond {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should get 2 if angerValue is 2', () => {
        const { getByTestId } = render(<PageSecond {...props} />)
        expect(getByTestId('regular-text').props.children).toEqual(2)
    });

});