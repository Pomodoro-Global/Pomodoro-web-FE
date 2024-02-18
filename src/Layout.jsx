import PropTypes from 'prop-types';
import Navbar from './components/Navbar';

const Layout = ({ page }) => (
  <div className="flex">
    <Navbar />
    {page}
  </div>
);

Layout.propTypes = {
  page: PropTypes.func.isRequired,
};

export default Layout;
