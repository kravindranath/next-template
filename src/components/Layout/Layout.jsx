function Layout(_props) {
  const props = _props || {};
  const { children } = props;
  return (
    <section className="layout">
      {children}
    </section>
  );
}

export default Layout;
