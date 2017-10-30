import DataStore    from 'flux/stores/DataStore.js'

class About extends React.Component {
    render() {
        let page = DataStore.getPageBySlug('about');

        function createMarkup(content) {
          return {__html: content};
        }

        return (
            <div className="content-container-about">
                <div className="page-header">
                    <h1 className="page-title">
                        {page.title.rendered}
                    </h1>
                    <span className="rectangle-2"></span>
                </div>

                <div className="page-content">
                    <p dangerouslySetInnerHTML={createMarkup(page.content.rendered)} />
                    <div className="about-logos-container">
                        <div className="about-logos-row">
                            <div className="about-logos-icon"><img src="/src/assets/images/logo-devcon.png" alt="DevCon Logo" className="about-logo" /></div>
                            <div className="about-logos-icon"><img src="/src/assets/images/logo-de.png" alt="Dominion Enterprises Logo" className="about-logo" /></div>
                            <div className="about-logos-icon"><img src="/src/assets/images/logo-landmark.png" alt="Landmark Media Enterprises LLC Logo" className="about-logo" /></div>
                            <div className="about-logos-icon"><img src="/src/assets/images/logo-homes.png" alt="Homes.com Logo" className="about-logo" /></div>
                        </div>
                        <div className="about-logos-row">
                            <div className="about-logos-icon"><img src="/src/assets/images/logo-dx1.png" alt="DX1 Logo" className="about-logo" /></div>
                            <div className="about-logos-icon"><img src="/src/assets/images/logo-dds.png" alt="Dominion Dealer Solutions Logo" className="about-logo" /></div>
                            <div className="about-logos-icon"><img src="/src/assets/images/logo-trader.png" alt="Trader Interactive Logo" className="about-logo" /></div>
                            <div className="about-logos-icon"><img src="/src/assets/images/logo-forrent.png" alt="For Rent Logo" className="about-logo" /></div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default About;
