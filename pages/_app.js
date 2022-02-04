import "bootstrap/dist/css/bootstrap.css";
import "../styles/customBootstrap.scss";
import "reactjs-popup/dist/index.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ayuda para usuarios - Jolly Hour</title>
        <meta name="description" content="Te invitamos a conocer nuestra App" />
        <link rel="icon" type="image/png" href="/icon.png" />
      </Head>
      <Component {...pageProps} />

      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>

      <Script strategy="lazyOnload" id="123">
        {`
 
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "109406864905472");
    chatbox.setAttribute("attribution", "biz_inbox");
 
  
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v12.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
`}
      </Script>
    </>
  );
}

export default MyApp;
