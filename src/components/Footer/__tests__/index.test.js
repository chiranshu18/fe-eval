import Footer from '../Footer'
import { render , screen} from "@testing-library/react";

describe('footer', () => {
    
    it('should display footer text when rendered', () => {
        render(<Footer />);
        expect(screen.getByText('THEMES')).toBeTruthy();
    });

    it('Should render correctly', () => {
        const {asFragment} = render(<Footer />)
        expect(asFragment()).toMatchSnapshot();
    })
});