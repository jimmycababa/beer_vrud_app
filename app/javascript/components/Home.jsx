import { Layout } from "antd";
import React from "react";
import Beers from "./Beers";
import Header from "./Header";
import Favorites from "./Favorites";

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: "100px auto" }}>
        <h1>Beer Catalog</h1>
        <Beers />
      </div>
      <Favorites />
    </Content>
    <Footer style={{ textAlign: "center" }}>Cabababadger ©2021.</Footer>
  </Layout>
);

// the Home component behaves like an assembler, accomodating all the other component pieces of the app (Layout, Header, Content, and Footer )