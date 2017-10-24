import Slider from 'react-slick';

class Schedule extends React.Component {
    componentWillMount() {
        const styleNode = document.createElement("link");
              styleNode.setAttribute('id', 'calendarStyle');
              styleNode.setAttribute('rel', 'stylesheet');
              styleNode.setAttribute('type', 'text/css');
              styleNode.setAttribute('href', 'https://addtocalendar.com/atc/1.5/atc-style-blue.css');

        const styleNodeSlickMin = document.createElement("link");
              styleNodeSlickMin.setAttribute('id', 'calendarStyleSlickMin');
              styleNodeSlickMin.setAttribute('rel', 'stylesheet');
              styleNodeSlickMin.setAttribute('type', 'text/css');
              styleNodeSlickMin.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');

        const styleNodeSlickThemeMin = document.createElement("link");
              styleNodeSlickThemeMin.setAttribute('id', 'calendarStyleSlickThemeMin');
              styleNodeSlickThemeMin.setAttribute('rel', 'stylesheet');
              styleNodeSlickThemeMin.setAttribute('type', 'text/css');
              styleNodeSlickThemeMin.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css');

        const scriptNode = document.createElement("script");
              scriptNode.setAttribute('id', 'calendarScript');
              scriptNode.innerHTML = "(function () {if (window.addtocalendar)if(typeof window.addtocalendar.start == \"function\")return;if (window.ifaddtocalendar == undefined) { window.ifaddtocalendar = 1;var d = document, s = d.createElement('script'), g = 'getElementsByTagName';s.type = 'text/javascript';s.charset = 'UTF-8';s.async = true;s.src = ('https:' == window.location.protocol ? 'https' : 'http')+'://addtocalendar.com/atc/1.5/atc.min.js';var h = d[g]('body')[0];h.appendChild(s); }})();";

        document.head.appendChild(styleNode);
        document.head.appendChild(scriptNode);
        document.head.appendChild(styleNodeSlickMin);
        document.head.appendChild(styleNodeSlickThemeMin);
    }

    componentWillUnmount() {
        document.getElementById('calendarScript').remove();
        document.getElementById('calendarStyle').remove();
        document.getElementById('calendarStyleSlickMin').remove();
        document.getElementById('calendarStyleSlickThemeMin').remove();
    }

    render() {
        const settings = {
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            autoplay: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1279,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
                        autoplay: true,
                        autoplaySpeed: 6000,
                        arrows: true
                    }
                },
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        autoplay: true,
                        autoplaySpeed: 6000,
                        arrows: true
                    }
                }
            ]
        };

        return (
            <div className="content-container-schedule">
                <div className="page-header">
                    <h1 className="page-title">Schedule</h1>
                    <span className="rectangle-2"></span>
                </div>
                <div className="schedule-container">
                    <p className="schedule-filler">8:30am - Breakfast & Coffee</p>
                    <p className="schedule-filler">9:00am - Opening Remarks - Joe Fuller & Eric Kleintop</p>
                    <Slider {...settings}>
                        <div className="schedule-container-div">
                            <h3>Lynnhaven</h3>
                            <div className="schedule-details-container">
                                <div className="schedule-times">
                                    <ul>
                                        <li>10:00am</li>
                                        <li>11:00am</li>
                                        <li className="schedule-lunch">12:00pm</li>
                                        <li>1:00pm</li>
                                        <li>2:00pm</li>
                                        <li>3:00pm</li>
                                        <li>4:00pm</li>
                                    </ul>
                                </div>
                                <div className="schedule-details">
                                    <ul>
                                        <li>
                                            <span>Brandon Beijay</span><br />
                                            Giant UI/UX - People are Hard / In a World of Hammers
                                            <div className="schedule-details-hover">
                                                <span>Brandon Beijay</span><br />
                                                Giant UI/UX - People are Hard / In a World of Hammers
                                                <hr />
                                                After attending the Giant Conference I came away with a few key takeaways and eye opening points.  There are 2 parts of the presentation:  People are Hard (Understanding Users) & In a World of Hammers (Principles & Strategies).  Both parts explore the complicated world of UI / UX.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 10:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 11:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Giant UI/UX - People are Hard / In a World of Hammers</var>
                                                        <var className="atc_description">After attending the Giant Conference I came away with a few key takeaways and eye opening points.  There are 2 parts of the presentation:  People are Hard (Understanding Users) & In a World of Hammers (Principles & Strategies).  Both parts explore the complicated world of UI / UX.</var>
                                                        <var className="atc_location">Lynnhaven Room, 20th Floor</var>
                                                        <var className="atc_organizer">Brandon Beijay</var>
                                                        <var className="atc_organizer_email">brandon.beigay@traderinteractive.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Alex Pedicini</span><br />
                                            Get Out Of Your Office to Build Better Products
                                            <div className="schedule-details-hover">
                                                <span>Alex Pedicini</span><br />
                                                Get Out Of Your Office to Build Better Products
                                                <hr />
                                                Talk about the importance and value of regularly speaking with users to better understand their problems and solutions. This habit is the key to unlocking new product innovations and improvements that will actually make a difference in your customers lives.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 11:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 12:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Get Out Of Your Office to Build Better Products</var>
                                                        <var className="atc_description">Talk about the importance and value of regularly speaking with users to better understand their problems and solutions. This habit is the key to unlocking new product innovations and improvements that will actually make a difference in your customers lives.</var>
                                                        <var className="atc_location">Lynnhaven Room, 20th Floor</var>
                                                        <var className="atc_organizer">Alex Pedicini</var>
                                                        <var className="atc_organizer_email">alex.pedicini@forrent.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="schedule-lunch">
                                            <span>Lunch</span>
                                        </li>
                                        <li>
                                            <span>Pam Bandy & Karin Schultz</span><br />
                                            Relating Project Management to Daily Life
                                            <div className="schedule-details-hover">
                                                <span>Pam Bandy & Karin Schultz</span><br />
                                                Relating Project Management to Daily Life
                                                <hr />
                                                Taking everyday task and situations and showing how project management can be used to make life easier.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 13:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 14:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Relating Project Management to Daily Life</var>
                                                        <var className="atc_description">Taking everyday task and situations and showing how project management can be used to make life easier.</var>
                                                        <var className="atc_location">Lynnhaven Room, 20th Floor</var>
                                                        <var className="atc_organizer">Pam Bandy & Karin Schultz</var>
                                                        <var className="atc_organizer_email">pamela.bandy@homes.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Adam Vandover</span><br />
                                            How to Build Products using a One-Week Design Sprint
                                            <div className="schedule-details-hover">
                                                <span>Adam Vandover</span><br />
                                                How to Build Products using a One-Week Design Sprint
                                                <hr />
                                                In this talk, we will go over how to build products and test ideas in a one week sprint.  Starting with a problem statement on Monday and finishing with one on one interviews on Friday we will go over all the benefits of using this method to get started with your next project.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 14:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 15:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - How to Build Products using a One-Week Design Sprint</var>
                                                        <var className="atc_description">In this talk, we will go over how to build products and test ideas in a one week sprint.  Starting with a problem statement on Monday and finishing with one on one interviews on Friday we will go over all the benefits of using this method to get started with your next project.</var>
                                                        <var className="atc_location">Lynnhaven Room, 20th Floor</var>
                                                        <var className="atc_organizer">Adam Vandover</var>
                                                        <var className="atc_organizer_email">adam.vandover@forrent.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="share-menu-up">
                                            <span>Lucien Frelin</span><br />
                                            Creativity is a Tool
                                            <div className="schedule-details-hover">
                                                <span>Lucien Frelin</span><br />
                                                Creativity is a Tool
                                                <hr />
                                                Using creativity as a skill set, how to think outside the box and discover solutions to new problems. Techniques on how to be creative. How to problem solve and navigate the unknown.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 15:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 16:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Creativity is a Tool</var>
                                                        <var className="atc_description">Using creativity as a skill set, how to think outside the box and discover solutions to new problems. Techniques on how to be creative. How to problem solve and navigate the unknown.</var>
                                                        <var className="atc_location">Lynnhaven Room, 20th Floor</var>
                                                        <var className="atc_organizer">Lucien Frelin</var>
                                                        <var className="atc_organizer_email">lucien.frelin@traderinteractive.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="schedule-last left">
                                            <span>Ezhil Manoj Cruz Micheal</span><br />
                                            Converting ideas into reality
                                            <div className="schedule-details-hover">
                                                <span>Ezhil Manoj Cruz Micheal</span><br />
                                                Converting ideas into reality
                                                <hr />
                                                At some point,  whether its at work or outside we all get our Aha moment about a great idea but most of these Aha moments doesn't come into reality and there is a science to converting great ideas into reality and this talk will cover the approach/framework to give your idea a best chance to become a reality.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 16:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 17:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Converting ideas into reality</var>
                                                        <var className="atc_description">At some point,  whether its at work or outside we all get our Aha moment about a great idea but most of these Aha moments doesn't come into reality and there is a science to converting great ideas into reality and this talk will cover the approach/framework to give your idea a best chance to become a reality.</var>
                                                        <var className="atc_location">Lynnhaven Room, 20th Floor</var>
                                                        <var className="atc_organizer">Ezhil Manoj Cruz Micheal</var>
                                                        <var className="atc_organizer_email">ezhilmanoj.cruzmic@forrent.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-container-div">
                            <h3>York</h3>
                            <div className="schedule-details-container right">
                                <div className="schedule-times hide">
                                    <ul>
                                        <li>10:00am</li>
                                        <li>11:00am</li>
                                        <li className="schedule-lunch">12:00pm</li>
                                        <li>1:00pm</li>
                                        <li>2:00pm</li>
                                        <li>3:00pm</li>
                                        <li>4:00pm</li>
                                    </ul>
                                </div>
                                <div className="schedule-details">
                                    <ul>
                                        <li>
                                            <span>Alicia Sedarski</span><br />
                                            Coding Dojo
                                            <div className="schedule-details-hover">
                                                <span>Alicia Sedarski</span><br />
                                                Coding Dojo
                                                <hr />
                                                Workshop
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 10:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 11:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Coding Dojo</var>
                                                        <var className="atc_description">Workshop</var>
                                                        <var className="atc_location">York Room, 20th Floor</var>
                                                        <var className="atc_organizer">Alicia Sedarski</var>
                                                        <var className="atc_organizer_email">alicia.sedarski@dominionenterprises.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Daniel Worsnup</span><br />
                                            Serverless Architecture - What, Why, and How?
                                            <div className="schedule-details-hover">
                                                <span>Daniel Worsnup</span><br />
                                                Serverless Architecture - What, Why, and How?
                                                <hr />
                                                Serverless is one of those new buzzwords that everyone seems to be throwing around. Is it really going to kill all other computing architectures? Is it just a new trend that will soon fade away and is not worth your time to learn? In this talk we will see what serverless architecture is, why it developed, and what problems it is intended to solve. It is important for all software developers to have a basic understanding of serverless computing because all major cloud providers (Google, Amazon, and Microsoft) are rolling out their own flavors of serverless architecture, and major tech companies are turning to the model to power various parts of the tech stack.
                                                <br /><br />
                                                We will sample the power and convenience of serverless computing by developing a simple web application using AWS Lambda functions and a few other AWS services. We will see how Lambda is able to completely eliminate the need for explicitly defined and managed server instances. Finally, we will see how to utilize a platform like Serverless (https://serverless.com/) to remove your application's dependence on a single cloud provider.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 11:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 12:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Serverless Architecture - What, Why, and How?</var>
                                                        <var className="atc_description">Serverless is one of those new buzzwords that everyone seems to be throwing around. Is it really going to kill all other computing architectures? Is it just a new trend that will soon fade away and is not worth your time to learn? In this talk we will see what serverless architecture is, why it developed, and what problems it is intended to solve. It is important for all software developers to have a basic understanding of serverless computing because all major cloud providers (Google, Amazon, and Microsoft) are rolling out their own flavors of serverless architecture, and major tech companies are turning to the model to power various parts of the tech stack.
                                                        <br /><br />
                                                        We will sample the power and convenience of serverless computing by developing a simple web application using AWS Lambda functions and a few other AWS services. We will see how Lambda is able to completely eliminate the need for explicitly defined and managed server instances. Finally, we will see how to utilize a platform like Serverless (https://serverless.com/) to remove your application's dependence on a single cloud provider.</var>
                                                        <var className="atc_location">York Room, 20th Floor</var>
                                                        <var className="atc_organizer">Daniel Worsnup</var>
                                                        <var className="atc_organizer_email">daniel.worsnup@forrent.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="schedule-lunch">
                                            <span>Lunch</span>
                                        </li>
                                        <li>
                                            <span>Chad Gray</span><br />
                                            Code for Your Usecase not Your Re-Usecase
                                            <div className="schedule-details-hover">
                                                <span>Chad Gray</span><br />
                                                Code for Your Usecase not Your Re-Usecase
                                                <hr />
                                                One of the most difficult things to do as a developer is to stop over engineering a process because of a possible future use. In this talk I will provide tips to avoid complicating the code base on the possibility of future changes while at the same time writing code which is open for extension.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 13:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 14:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Code for Your Usecase not Your Re-Usecase</var>
                                                        <var className="atc_description">One of the most difficult things to do as a developer is to stop over engineering a process because of a possible future use. In this talk I will provide tips to avoid complicating the code base on the possibility of future changes while at the same time writing code which is open for extension.</var>
                                                        <var className="atc_location">York Room, 20th Floor</var>
                                                        <var className="atc_organizer">Chad Gray</var>
                                                        <var className="atc_organizer_email">chad.gray@traderinteractive.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Krishna Murthy</span><br />
                                            Event Driven Architecture
                                            <div className="schedule-details-hover">
                                                <span>Krishna Murthy</span><br />
                                                Event Driven Architecture
                                                <hr />
                                                Messages, Streams and Data Pipelines with Tools such as Kafka and Kinesis
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 14:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 15:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Event Driven Architecture</var>
                                                        <var className="atc_description">Messages, Streams and Data Pipelines with Tools such as Kafka and Kinesis</var>
                                                        <var className="atc_location">York Room, 20th Floor</var>
                                                        <var className="atc_organizer">Krishna Murthy</var>
                                                        <var className="atc_organizer_email">krishna.murthy@traderinteractive.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="share-menu-up">
                                            <span>Chris Ryan</span><br />
                                            Refactoring; Updating code sanely
                                            <div className="schedule-details-hover">
                                                <span>Chris Ryan</span><br />
                                                Refactoring; Updating code sanely
                                                <hr />
                                                Discuss what refactor is and is not, go over some basic steps to refactoring, and then some principles to help make refactoring easier.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 15:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 16:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Refactoring; Updating code sanely</var>
                                                        <var className="atc_description">Discuss what refactor is and is not, go over some basic steps to refactoring, and then some principles to help make refactoring easier.</var>
                                                        <var className="atc_location">York Room, 20th Floor</var>
                                                        <var className="atc_organizer">Chris Ryan</var>
                                                        <var className="atc_organizer_email">christopher.ryan@traderinteractive.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="schedule-last">
                                            <span>Stanley Zheng</span><br />
                                            Leveraging Kubernetes for everyone
                                            <div className="schedule-details-hover">
                                                <span>Stanley Zheng</span><br />
                                                Leveraging Kubernetes for everyone
                                                <hr />
                                                Kuberetes is an container orchestration technology that can help you deliver services to your users faster and more robustly. Home has been leveraging kubernetes to develop and run micro services .  Kubernetes ecosystem is full of terminology and jargon but it still uses the same ways we been shipping software for years. We will go over how to get started with running containers to going to production with kubernetes.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 16:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 17:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Leveraging Kubernetes for everyone</var>
                                                        <var className="atc_description">Kuberetes is an container orchestration technology that can help you deliver services to your users faster and more robustly. Home has been leveraging kubernetes to develop and run micro services .  Kubernetes ecosystem is full of terminology and jargon but it still uses the same ways we been shipping software for years. We will go over how to get started with running containers to going to production with kubernetes.</var>
                                                        <var className="atc_location">York Room, 20th Floor</var>
                                                        <var className="atc_organizer">Stanley Zheng</var>
                                                        <var className="atc_organizer_email">stanley.zheng@homes.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-container-div">
                            <h3>Rappahanock</h3>
                            <div className="schedule-details-container">
                                <div className="schedule-times hide">
                                    <ul>
                                        <li>10:00am</li>
                                        <li>11:00am</li>
                                        <li className="schedule-lunch">12:00pm</li>
                                        <li>1:00pm</li>
                                        <li>2:00pm</li>
                                        <li>3:00pm</li>
                                        <li>4:00pm</li>
                                    </ul>
                                </div>
                                <div className="schedule-details">
                                    <ul>
                                        <li>
                                            <span>Rakesh Nookala</span><br />
                                            Commercializing Voice in your Apps
                                            <div className="schedule-details-hover">
                                                <span>Rakesh Nookala</span><br />
                                                Commercializing Voice in your Apps
                                                <hr />
                                                This presentation will focus on the the growing trend of voice search. Our approach in trying to commercializing this feature in our Apps. Suggestions on how you could tap into it. This will include a demo of the current implementation and and overview of our learning and challenges.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 10:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 11:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Commercializing Voice in your Apps</var>
                                                        <var className="atc_description">This presentation will focus on the the growing trend of voice search. Our approach in trying to commercializing this feature in our Apps. Suggestions on how you could tap into it. This will include a demo of the current implementation and and overview of our learning and challenges.</var>
                                                        <var className="atc_location">Rappahanock Room, 20th Floor</var>
                                                        <var className="atc_organizer">Rakesh Nookala</var>
                                                        <var className="atc_organizer_email">nookala@dominionenterprises.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Jeff Pratt</span><br />
                                            Building Personal Assistant "Skills" with Amazon Alexa
                                            <div className="schedule-details-hover">
                                                <span>Jeff Pratt</span><br />
                                                Building Personal Assistant "Skills" with Amazon Alexa
                                                <hr />
                                                Will walk through the personal assistant landscape. Will show a demo of a homes.com alexa skill. Will walk through how anyone can create a skill for alexa by looking at the setup and code required to do so.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 11:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 12:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Building Personal Assistant "Skills" with Amazon Alexa</var>
                                                        <var className="atc_description">Will walk through the personal assistant landscape. Will show a demo of a homes.com alexa skill. Will walk through how anyone can create a skill for alexa by looking at the setup and code required to do so.</var>
                                                        <var className="atc_location">Rappahanock Room, 20th Floor</var>
                                                        <var className="atc_organizer">Jeff Pratt</var>
                                                        <var className="atc_organizer_email">jeff.pratt@homes.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="schedule-lunch">
                                            <span>Lunch</span>
                                        </li>
                                        <li>
                                            <span>Robert Bittle</span><br />
                                            Getting to know Go
                                            <div className="schedule-details-hover">
                                                <span>Robert Bittle</span><br />
                                                Getting to know Go
                                                <hr />
                                                With its simple design, Go has quickly become one of the top system level programming languages. From Docker to Syncthing, there are all kinds of cool open source projects being built in Go. Go is a relatively easy language to learn, but it can be difficult to know where to start especially if you come from a background of interpreted or dynamically typed languages.  In this talk we will introduce the basic language syntax and features as well as the tools that make learning the language easier.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 13:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 14:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Getting to know Go</var>
                                                        <var className="atc_description">With its simple design, Go has quickly become one of the top system level programming languages. From Docker to Syncthing, there are all kinds of cool open source projects being built in Go. Go is a relatively easy language to learn, but it can be difficult to know where to start especially if you come from a background of interpreted or dynamically typed languages.  In this talk we will introduce the basic language syntax and features as well as the tools that make learning the language easier.</var>
                                                        <var className="atc_location">Rappahanock Room, 20th Floor</var>
                                                        <var className="atc_organizer">Robert Bittle</var>
                                                        <var className="atc_organizer_email">robert.bittle@traderinteractive.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Grant Simmons</span><br />
                                            Seeing Through Googles Eyes
                                            <div className="schedule-details-hover">
                                                <span>Grant Simmons</span><br />
                                                Seeing Through Googles Eyes
                                                <hr />
                                                Aligning development, product & marketing goals to build site traffic & topic authority.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 14:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 15:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Seeing Through Googles Eyes</var>
                                                        <var className="atc_description">Aligning development, product & marketing goals to build site traffic & topic authority.</var>
                                                        <var className="atc_location">Rappahanock Room, 20th Floor</var>
                                                        <var className="atc_organizer">Grant Simmons</var>
                                                        <var className="atc_organizer_email">Grant.Simmons@homes.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="share-menu-up">
                                            <span>Loran Martin</span><br />
                                            QA Best Practices in an Agile Production Environment
                                            <div className="schedule-details-hover">
                                                <span>Loran Martin</span><br />
                                                QA Best Practices in an Agile Production Environment
                                                <hr />
                                                Going to discuss how to survive as a QA Engineer in an agile environment. This will cover the top 5 Best QA Practices in an agile environment. It will be educational for both QAs AND Devs, sort of a "Can we all just get along" angle. How we work together and Support each other is  extremely important to achieving the best possible code release results. This will be an interactive session that I believe everyone will get a lot out of. My mentor, Dave Haeffner, took me down this road a few years ago and I have never looked back.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 15:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 16:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - QA Best Practices in an Agile Production Environment</var>
                                                        <var className="atc_description">Going to discuss how to survive as a QA Engineer in an agile environment. This will cover the top 5 Best QA Practices in an agile environment. It will be educational for both QAs AND Devs, sort of a "Can we all just get along" angle. How we work together and Support each other is  extremely important to achieving the best possible code release results. This will be an interactive session that I believe everyone will get a lot out of. My mentor, Dave Haeffner, took me down this road a few years ago and I have never looked back.</var>
                                                        <var className="atc_location">Rappahanock Room, 20th Floor</var>
                                                        <var className="atc_organizer">Loran Martin</var>
                                                        <var className="atc_organizer_email">loran.martin@traderinteractive.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="schedule-last">
                                            <span>Adam Bess</span><br />
                                            Marketing: How Comprehensive is Your Marketing?
                                            <div className="schedule-details-hover">
                                                <span>Adam Bess</span><br />
                                                Marketing: How Comprehensive is Your Marketing?
                                                <hr />
                                                Every business can improve comprehensive marketing with 1) literature reviews of scholarly articles, 2) experimental research designs, and 3) statistical analysis.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 16:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 17:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Marketing: How Comprehensive is Your Marketing?</var>
                                                        <var className="atc_description">Every business can improve comprehensive marketing with 1) literature reviews of scholarly articles, 2) experimental research designs, and 3) statistical analysis.</var>
                                                        <var className="atc_location">Rappahanock Room, 20th Floor</var>
                                                        <var className="atc_organizer">Adam Bess</var>
                                                        <var className="atc_organizer_email">adam.bess@homes.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-container-div">
                            <h3>Elizabeth</h3>
                            <div className="schedule-details-container right">
                                <div className="schedule-times">
                                    <ul>
                                        <li>10:00am</li>
                                        <li>11:00am</li>
                                        <li className="schedule-lunch">12:00pm</li>
                                        <li>1:00pm</li>
                                        <li>2:00pm</li>
                                        <li>3:00pm</li>
                                        <li>4:00pm</li>
                                    </ul>
                                </div>
                                <div className="schedule-details">
                                    <ul>
                                        <li>
                                            <span>Ken Crim</span><br />
                                            CSS Grid: The future of layout design is now.
                                            <div className="schedule-details-hover">
                                                <span>Ken Crim</span><br />
                                                CSS Grid: The future of layout design is now.
                                                <hr />
                                                As of March 2017, most modern browsers fully support the new CSS display type, Grid.  An easy and intuitive way make beautifully simple and exotically elaborate layouts on websites.  No more Bootstrap columns.  No more resource guzzling JavaScript.  Make resource friendly and responsive web applications with just a few quick lines of CSS.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 10:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 11:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - CSS Grid: The future of layout design is now.</var>
                                                        <var className="atc_description">As of March 2017, most modern browsers fully support the new CSS display type, Grid.  An easy and intuitive way make beautifully simple and exotically elaborate layouts on websites.  No more Bootstrap columns.  No more resource guzzling JavaScript.  Make resource friendly and responsive web applications with just a few quick lines of CSS.</var>
                                                        <var className="atc_location">Elizabeth Room, 20th Floor</var>
                                                        <var className="atc_organizer">Ken Crim</var>
                                                        <var className="atc_organizer_email">kenneth.crim@commercialwebservices.comteja@homes.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Teja Potineni</span><br />
                                            Image Analysis using Deep learning
                                            <div className="schedule-details-hover">
                                                <span>Teja Potineni</span><br />
                                                Image Analysis using Deep learning
                                                <hr />
                                                Using Pre-trained Deep Learning models for your own Dataset
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 11:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 12:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Image Analysis using Deep learning</var>
                                                        <var className="atc_description">Using Pre-trained Deep Learning models for your own Dataset</var>
                                                        <var className="atc_location">Elizabeth Room, 20th Floor</var>
                                                        <var className="atc_organizer">Teja Potineni</var>
                                                        <var className="atc_organizer_email">teja@homes.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="schedule-lunch">
                                            <span>Lunch</span>
                                        </li>
                                        <li>
                                            <span>Jesse Wright & Patrick Kilduff</span><br />
                                            Forecasting in the Cloud
                                            <div className="schedule-details-hover">
                                                <span>Jesse Wright & Patrick Kilduff</span><br />
                                                Forecasting in the Cloud
                                                <hr />
                                                Discuss math and process of forecasting monthly page views for Homes.com.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 13:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 14:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Forecasting in the Cloud</var>
                                                        <var className="atc_description">Discuss math and process of forecasting monthly page views for Homes.com.</var>
                                                        <var className="atc_location">Elizabeth Room, 20th Floor</var>
                                                        <var className="atc_organizer">Jesse Wright & Patrick Kilduff</var>
                                                        <var className="atc_organizer_email">jesse.wright@homes.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="share-menu-up">
                                            <span>Shivani Bima</span><br />
                                            CUDA programming on GPUs
                                            <div className="schedule-details-hover">
                                                <span>Shivani Bima</span><br />
                                                CUDA programming on GPUs
                                                <hr />
                                                CUDA is a parallel computing platform and programming model for general computing on GPUs. In GPU-accelerated applications, the sequential part of the workload runs on the CPU- which is optimized for single-threaded performance- while the compute intensive portion of the application runs on thousands of GPU cores in parallel. When using CUDA, developers program in popular languages such as C, C++, Fortran, Python and MATLAB and express parallelism  through extensions in the form of a few basic keywords.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 14:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 15:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - CUDA programming on GPUs</var>
                                                        <var className="atc_description">CUDA is a parallel computing platform and programming model for general computing on GPUs. In GPU-accelerated applications, the sequential part of the workload runs on the CPU- which is optimized for single-threaded performance- while the compute intensive portion of the application runs on thousands of GPU cores in parallel. When using CUDA, developers program in popular languages such as C, C++, Fortran, Python and MATLAB and express parallelism  through extensions in the form of a few basic keywords.</var>
                                                        <var className="atc_location">Elizabeth Room, 20th Floor</var>
                                                        <var className="atc_organizer">Shivani Bima</var>
                                                        <var className="atc_organizer_email">shivani.bimavarapu@traderinteractive.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="share-menu-up">
                                            <span>Steve Jones</span><br />
                                            Data Pipelining and Operations with StreamSets
                                            <div className="schedule-details-hover">
                                                <span>Steve Jones</span><br />
                                                Data Pipelining and Operations with StreamSets
                                                <hr />
                                                The StreamSets Data Collector platform enables rapid development of data flows, with instant operational feedback. Build a streaming event processing pipeline end-to-end in minutes, not days.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 15:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 16:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Data Pipelining and Operations with StreamSets</var>
                                                        <var className="atc_description">The StreamSets Data Collector platform enables rapid development of data flows, with instant operational feedback. Build a streaming event processing pipeline end-to-end in minutes, not days.</var>
                                                        <var className="atc_location">Elizabeth Room, 20th Floor</var>
                                                        <var className="atc_organizer">Steve Jones</var>
                                                        <var className="atc_organizer_email">stephen.jones@dominionenterprises.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="schedule-last">
                                            <span>Silver Ibenye</span><br />
                                            Lead Insights Aggregation With Apache Spark And Kafka - My experience
                                            <div className="schedule-details-hover">
                                                <span>Silver Ibenye</span><br />
                                                Lead Insights Aggregation With Apache Spark And Kafka - My experience
                                                <hr />
                                                A year ago I agreed to take up a challenge to re-implement ForRent's Lead Insights data process. In this talk I will share the challenges I had and the lessons I learned using Apache Spark and Kafka to generate user insights for Leads (guest cards) submitted through the front-end website.
                                                <hr />
                                                <span className="addtocalendar atc-style-blue">
                                                    <var className="atc_event">
                                                        <var className="atc_date_start">2017-11-03 16:00:00</var>
                                                        <var className="atc_date_end">2017-11-03 17:00:00</var>
                                                        <var className="atc_timezone">America/New_York</var>
                                                        <var className="atc_title">DevCon5 - Lead Insights Aggregation With Apache Spark And Kafka - My experience</var>
                                                        <var className="atc_description">A year ago I agreed to take up a challenge to re-implement ForRent's Lead Insights data process. In this talk I will share the challenges I had and the lessons I learned using Apache Spark and Kafka to generate user insights for Leads (guest cards) submitted through the front-end website.</var>
                                                        <var className="atc_location">Elizabeth Room, 20th Floor</var>
                                                        <var className="atc_organizer">Silver Ibenye</var>
                                                        <var className="atc_organizer_email">silver.ibenye@forrent.com</var>
                                                    </var>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <p className="schedule-filler">5:00pm - Closing Remarks</p>
                </div>
            </div>
        );
    }
}

export default Schedule;
