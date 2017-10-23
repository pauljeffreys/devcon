import axios from 'axios';
import alt   from 'flux/alt/alt.js';

class DataActions {
    constructor() {
        const appUrl = 'https://devcon.cafe/wordpress';                         // Wordpress installation url
        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages/?per_page=100`;     // Endpoint for getting Wordpress Pages
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts/?per_page=100`;     // Endpoint for getting Wordpress Posts
        this.meetTeamEndPoint = `${appUrl}/wp-json/wp/v2/team/?per_page=100`;   // Endpoint for getting Meet the Team Plugin
        this.mediaEndPoint = `${appUrl}/wp-json/wp/v2/media/?per_page=100`;     // Endpoint for getting Meet the Team Plugin

        // WP Endpoints
        // this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`;                // Endpoint for getting Wordpress Posts
        // this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`;                // Endpoint for getting Wordpress Pages
        // this.mediaEndPoint = `${appUrl}/wp-json/wp/v2/media`;                // Endpoint for getting Wordpress Media
        // this.meetTeamEndPoint = `${appUrl}/wp-json/wp/v2/team`;              // Endpoint for getting Meet the Team Plugin
        // this.feedbackEndPoint = `${appUrl}/wp-json/wp/v2/feedback`;          // Endpoint for getting Wordpress Feedback
        // this.jpPayOrderEndPoint = `${appUrl}/wp-json/wp/v2/jp_pay_order`;    // Endpoint for getting Wordpress JP Pay Order Info
        // this.typesEndPoint = `${appUrl}/wp-json/wp/v2/types`;                // Endpoint for getting Wordpress Types
        // this.statusesEndPoint = `${appUrl}/wp-json/wp/v2/statuses`;          // Endpoint for getting Wordpress Statuses
        // this.taxonomiesEndPoint = `${appUrl}/wp-json/wp/v2/taxonomies`;      // Endpoint for getting Wordpress Taxonomies
        // this.tagsEndPoint = `${appUrl}/wp-json/wp/v2/tags`;                  // Endpoint for getting Wordpress Tags
        // this.usersEndPoint = `${appUrl}/wp-json/wp/v2/users`;                // Endpoint for getting Wordpress Users
        // this.commentsEndPoint = `${appUrl}/wp-json/wp/v2/comments`;          // Endpoint for getting Wordpress Comments
        // this.settingsEndPoint = `${appUrl}/wp-json/wp/v2/settings`;          // Endpoint for getting Wordpress Settings
    }

    // Method for getting data from the provided end point url
    api(endPoint) {
        return new Promise((resolve, reject) => {
            axios.get(endPoint).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    // Method for getting Pages data
    getPages(cb){
        this.api(this.pagesEndPoint).then((response)=>{
            this.getPosts(response, cb)
        });
        return true;
    }


    // Method for getting Posts data
    getPosts(pages, cb){
        this.api(this.postsEndPoint).then((response)=>{
            const posts     = response;                                             // const payload   = { pages, posts };
            this.getMedia(pages, posts, cb);                                        // Pass to getMedia
        });
        return true;
    }

    // Method for getting Media data
    getMedia(pages, posts, cb){
        this.api(this.mediaEndPoint).then((response)=>{
            const media     = response;                                             // const payload   = { pages, posts, media };
            this.getTeam(pages, posts, media, cb);                                  // Pass to getTeam
        });
        return true;
    }

    // Method for getting Meet the Team data
    getTeam(pages, posts, media, cb){
        this.api(this.meetTeamEndPoint).then((response)=>{
            const team     = response;
            const payload   = { pages, posts, media, team };

            this.getSuccess(payload);                                               // Pass returned data to the state
            cb(payload);                                                            // This callback will be used for dynamic rout building
        });
        return true;
    }

    // This returnes an object with Pages and Posts data together
    // The Alt Store will listen for this method to fire and will store the returned data
    getSuccess(payload){
        return payload;
    }
}

export default alt.createActions(DataActions);
