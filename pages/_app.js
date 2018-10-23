import React from "react";
import App, { Container } from "next/app";

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      shared: 42,
      name: "ordeal",
      password: "kojot123",
      email: "",
      odeslano: false,
      dataPush: true
    };
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  onChangeShared = (shared, name, password) => {
    this.setState({
      shared,
      name,
      password
    });
  };

  render() {
    const { Component, pageProps } = this.props;

    // kdyz se pouzije to {...this.state} tak se tam automaticky posle vsechno ze statu

    return (
      <Container>
        <Component
          {...pageProps}
          shared={this.state.shared}
          onChangeShared={this.onChangeShared}
        />
      </Container>
    );
  }
}
