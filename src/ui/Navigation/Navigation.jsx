function Navigation(props) {
  const { links } = { ...props };

  const lists = links.map((link) => (
    <li key={`nav-item-${link.text}`}><a href={link.href}>{link.text}</a></li>
  ));

  return (
    <header>
      <div className="nav">
        <ul>
          {lists}
        </ul>
      </div>
    </header>
  );
}

export default Navigation;
