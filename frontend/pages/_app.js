import App, { Container } from "next/app";
import Page from "../components/Page";

import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";

class MyApp extends App {
  // all of this code is for server side rendering
  // basically it crawls the page before the app renders,
  // looks for queries, fires them off, gets the data
  // and adds it to the pageProps object, which it then
  // includes in the props so that the client side code can access it
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
