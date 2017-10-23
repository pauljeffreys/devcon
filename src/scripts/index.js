import {render}             from 'react-dom';
import DataActions          from 'flux/actions/DataActions.js';

// Page Content Containers
import Home                 from 'components/Home.js';
import About                from 'components/About.js';
import Presenters           from 'components/Presenters.js';
import Schedule             from 'components/Schedule.js';

// Fixed Content Containers
import Header               from 'components/Header.js';
import Footer               from 'components/Footer.js';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

class AppInitializer {
    templates = {
        'about': About,
        'presenters': Presenters,
        'schedule': Schedule
    }

    buildRoutes(data) {
        return data.pages.map((page, i) => {
            if (page.slug !== 'home') {
                return (
                    <Route
                        key={i}
                        component={this.templates[page.slug]}
                        path={`/${page.slug}`}
                        exact />
                )
            }
        })
    }

    run() {
        DataActions.getPages((response)=>{
            render(
                <Router>
                    <div>
                        <Header />

                        <Switch>
                            <Route path="/" component={ Home } exact />
                            {this.buildRoutes(response)}
                            <Route render={() => { return <Redirect to="/" /> }} />
                        </Switch>

                        <Footer />
                    </div>
                </Router>

                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();
