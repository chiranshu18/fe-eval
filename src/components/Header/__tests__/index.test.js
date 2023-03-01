import Header from '../Header'
import { render , screen} from "@testing-library/react";

describe('header', () => {
    
    it('should display heading when rendered', () => {
        render(<Header />);
        expect(screen.getByText('EVENTIFY')).toBeTruthy();
    });

    it('Should render correctly', () => {
        const {asFragment} = render(<Header />)
        expect(asFragment()).toMatchSnapshot();
    })
});