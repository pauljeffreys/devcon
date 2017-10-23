import DataStore    from 'flux/stores/DataStore.js'

class Home extends React.Component {
    render() {
        let allData = DataStore.getAll();
        console.log(allData);
                let page = DataStore.getPageBySlug('home');

        return (
            <div className="content-container-home">
                <div className="content-home">
                    <img src="/src/assets/images/lockup.png" width="222" height="479" alt="DevCon 5 - A Day at DevCafe" />
                </div>
            </div>
        );
    }
}

export default Home;
