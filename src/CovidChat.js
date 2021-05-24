import React from 'react';

class CovidChat extends React.Component {

  render() {
    return(
      <div>
        <iframe
          title="CovidChat"
          allow="microphone;"
          width="100%"
          height="500px"
          src="https://console.dialogflow.com/api-client/demo/embedded/b1b81e88-343d-4655-98ed-0f6717be7d69">
          </iframe>
      </div>
    );
  }
}

export default CovidChat;
