import DataStore    from 'flux/stores/DataStore.js'

class Presenters extends React.Component {
    constructor() {
        super();

        this.allData = DataStore.getAll();
    }

    componentWillMount() {
        const sliderStyles = document.createElement("link");
              sliderStyles.setAttribute('id', 'sliderStyles');
              sliderStyles.setAttribute('href', '/src/assets/css/slider-styles.css');
              sliderStyles.setAttribute('rel', 'stylesheet');

        document.head.appendChild(sliderStyles);
    }

    componentWillUnmount() {
        document.getElementById('sliderStyles').remove();
    }

    render() {
        const presenterRadio = this.allData.team.map((presenterRadio, index) =>
            <input
                type="radio"
                name="slider"
                className={'slide-radio' + index}
                id={'slider_' + index}
                key={'slider_' + index}
            />
        );

        const presenterNav = this.allData.team.map((presenterNav, index) =>
            <label
                htmlFor={'slider_' + index}
                key={presenterNav.slug}
                className={'presenterLink' + index}>
                {presenterNav.title.rendered}
            </label>
        );

        const presenterInfo = this.allData.team.map((presenterInfo, index) =>
            <div
                className={'slider slide' + index}
                key={presenterInfo.id}
                style={{backgroundImage: getImage(presenterInfo.featured_media, this.allData.media)}}>
                <div className="presenter-info-wrapper">
                    <h2>{presenterInfo.title.rendered}</h2>
                    <div className="presenter-bio" dangerouslySetInnerHTML={createMarkup(presenterInfo.content.rendered)}></div>
                </div>
            </div>
        );

        function createMarkup(content) {
            return {__html: content};
        }

        function getImage(id, media) {
            if(!id) {
                return;
            } else {
                const presenterImage = media.filter(
                    (media) => media.id === id
                )[0].source_url;

                return 'url(' + presenterImage + ')';
            }
        }

        return (
            <div className="content-container-presenters">
                <div className="css-slider-wrapper">
                    <input
                        type="radio"
                        name="slider"
                        className="slide-radioDefault"
                        id="slider_default"
                        key="slider_defaultInput"
                        defaultChecked />
                    {presenterRadio}

                    <div className="slider-pagination">
                        <label
                            htmlFor="slider_default"
                            key="sliderDefaultLabel"
                            className="presenterLinkDefault">
                            Meet Your Hosts
                        </label>
                        {presenterNav}
                    </div>

                    <div
                        className="slider slideDefault"
                        key="slider_defaultDiv">
                        <div className="presenter-info-wrapper">
                            <h2>Meet Your Hosts</h2>
                            <div className="presenter-bio"><span>Your Devcon 5 Presenters</span></div>
                        </div>
                    </div>
                    {presenterInfo}
                </div>
            </div>
        );
    }
}

export default Presenters;
