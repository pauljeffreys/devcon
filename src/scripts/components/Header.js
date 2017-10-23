import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';
import { stack as Menu } from 'react-burger-menu';

class Header extends React.Component {
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order


        return (
            <div className="content-fixed-header">
                <Link to="/" className="nav-home">
                    <img src="/src/assets/images/home.png" width="55" height="22" alt="Home" />
                </Link>

                <div className="nav-main">
                    { window.innerWidth >= 960 &&
                        <div className="main-menu">
                            { allPages.map((page) => {
                            if(page.slug === 'home' || page.slug === 'homewp' || page.slug === 'blog' || page.slug === 'contact'){}
                            else {
                                return (
                                    <Link
                                        key={ page.id }
                                        to={ `/${page.slug}` }
                                        className="menu-item">
                                        { page.title.rendered }
                                    </Link>
                                )
                            }
                            })}
                        </div>
                    }
                    {window.innerWidth < 960 &&
                        <Menu
                            right
                            width={150}
                            isOpen={ false }
                            className="burger-menu">
                            { allPages.map((page) => {
                                if(page.slug === 'home' || page.slug === 'homewp' || page.slug === 'blog' || page.slug === 'contact'){}
                                else {
                                   return (
                                        <Link
                                            key={ page.id }
                                            to={ `/${page.slug}` }
                                            className="menu-item"
                                            onClick={ this.handleMenuClick }>
                                            { page.title.rendered }
                                        </Link>
                                    )
                               }
                            })}
                        </Menu>
                    }
                </div>
            </div>
        );
    }
}

export default Header;
