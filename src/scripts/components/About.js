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
                <p className="page-content"
                   dangerouslySetInnerHTML={createMarkup(page.content.rendered)} />
            </div>
        );
    }
}

export default About;
