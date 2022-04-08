import React from 'react';
import renderer from 'react-test-renderer';
import PageIndicator from './pageIndicator';
describe("PageIndicator", () => {

    const props = {
        currentPage: 1,
        totalPage: 5,
        testID: "page-indicator"
    }

    beforeEach(() => {

    });

    it('should render PageIndicator screen correctly', () => {
        const PageIndicatorTree = renderer.create(<PageIndicator {...props} />).toJSON();
        expect(PageIndicatorTree).toMatchSnapshot();
    });

});