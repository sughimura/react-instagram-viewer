// NOTE: 以下を参考に作成
// - https://developers.facebook.com/docs/javascript/quickstart
// - https://jasonwatmore.com/post/2020/10/25/react-facebook-login-tutorial-example
export function initFacebookSdk() {
  return new Promise(_resolve => {
    // wait for facebook sdk to initialize before starting the react app
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_FACEBOOK_APP_ID,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v13.0'
      });
    };

    // load facebook sdk script
    (function (d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
}
