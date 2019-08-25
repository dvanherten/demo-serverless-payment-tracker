import React from 'react';
import { UserAgentApplication } from 'msal';
import { Button } from '@material-ui/core';

const msalConfig = {
  auth: {
    clientId: '52c84e8b-4c89-44b1-b832-971a65cce7d8',
    authority: 'https://login.microsoftonline.com/common'
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true
  }
};

const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me'
};

const requestObj = {
  scopes: ['user.read']
};

const myMSALObj = new UserAgentApplication(msalConfig);

function signOut() {
  myMSALObj.logout();
}

function acquireTokenPopupAndCallMSGraph(callback) {
  //Always start with acquireTokenSilent to obtain a token in the signed in user from cache
  myMSALObj
    .acquireTokenSilent(requestObj)
    .then(function(tokenResponse) {
      callMSGraph(
        graphConfig.graphMeEndpoint,
        tokenResponse.accessToken,
        callback
      );
    })
    .catch(function(error) {
      console.log(error);
      // Upon acquireTokenSilent failure (due to consent or interaction or login required ONLY)
      // Call acquireTokenPopup(popup window)
      if (requiresInteraction(error.errorCode)) {
        myMSALObj
          .acquireTokenPopup(requestObj)
          .then(function(tokenResponse) {
            callMSGraph(
              graphConfig.graphMeEndpoint,
              tokenResponse.accessToken,
              callback
            );
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    });
}

function callMSGraph(theUrl, accessToken, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
      callback(JSON.parse(this.responseText));
  };
  xmlHttp.open('GET', theUrl, true); // true for asynchronous
  xmlHttp.setRequestHeader('Authorization', 'Bearer ' + accessToken);
  xmlHttp.send();
}

function requiresInteraction(errorCode) {
  if (!errorCode || !errorCode.length) {
    return false;
  }
  return (
    errorCode === 'consent_required' ||
    errorCode === 'interaction_required' ||
    errorCode === 'login_required'
  );
}

const AnonymousPage = ({ setUser }) => {
  function signIn() {
    myMSALObj
      .loginPopup(requestObj)
      .then(function(loginResponse) {
        //Call MS Graph using the token in the response
        acquireTokenPopupAndCallMSGraph(graphAPICallback);
      })
      .catch(function(error) {
        //Please check the console for errors
        console.log(error);
      });
  }

  function graphAPICallback(data) {
    console.log(data);
    setUser(data);
  }

  const account = myMSALObj.getAccount();
  if (account) {
    // avoid duplicate code execution on page load in case of iframe and popup window.
    acquireTokenPopupAndCallMSGraph(graphAPICallback);
  }

  return <Button onClick={signIn}>Sign In</Button>;
};

export default AnonymousPage;
