import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from './index';

jest.mock('./page1', () => 'PageFirst')
jest.mock('./page2', () => 'PageSecond')
jest.mock('../../common/RegularText', () => props => (
    <MockRegularText {...props} testID={"regular-text"} />
))
jest.mock('./pageIndicator', () => props => (
    <MockPageIndicator {...props} testID={"page-indicator"} />
))
jest.mock('../../common/CommonButton', () => props => (
    <MockCommonButton {...props} testID={"common-button"} />
))

describe("HomeScreen", () => {

    beforeEach(() => {

    });

    it('should render HomeScreen screen correctly', () => {
        const tree = renderer.create(<HomeScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});