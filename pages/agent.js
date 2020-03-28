const Agent = ({userAgent}) => <h1> User agent {userAgent} </h1>

Agent.getInitialProps = async ({req}) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return {userAgent};
} 
export default Agent;