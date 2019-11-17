const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

const credentials = require("../credentials").Twilio
const account_sid = credentials.account_sid
const auth_token = credentials.auth_token
const api_key = credentials.api_key
const api_secret = credentials.api_secret
const access_token = credentials.access_token
const token = new AccessToken(account_sid, api_key, api_secret);


module.exports = {
   accessToken: function(querystring) {
        token.identity = querystring.name
        
        const videoGrant = new VideoGrant({
            room: querystring.id
        });
        token.addGrant(videoGrant);
        // console.log(token.toJwt());
        
        return JSON.stringify(token.toJwt());
        // return token
   }
}