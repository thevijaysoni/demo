import React from 'react';
import renderer from 'react-test-renderer';
import Splash from './Splash';
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { useEffect } from 'react';

configure({ adapter: new Adapter() });
describe("Splash", () => {

    beforeEach(() => {

    });

    it('should render splash screen correctly', () => {
        const tree = renderer.create(<Splash />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should call useEffect', () => {
        const prop = {
            navigate: jest.fn()
        }
        let component = shallow(<Splash {...prop} />);

        expect(prop.navigate).toHaveBeenCalled();
    })

    it('should navigate to app navigator after 2 seconds of useEffect calling', () => {

    })
});