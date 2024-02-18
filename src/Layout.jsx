import Navbar from './components/Navbar';
import PropTypes from 'prop-types';

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
