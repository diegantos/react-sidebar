import "./Sidebar.scss";

export const Sidebar = () => {
  const menuItems = [
    { id: 0, name: "Home", icon: "home" },
    { id: 1, name: "Apss", icon: "apps" },
    { id: 2, name: "Create", icon: "add_box" },
    { id: 3, name: "Profile", icon: "person" },
    { id: 4, name: "Favourites", icon: "favorite" },
    { id: 5, name: "Search", icon: "search" }
  ]
  const menuHeader = [
    { id: 0, name: 'menu', icon:'menu'},
    { id: 1, name: 'signup', icon:'lock'},
    { id: 2, name: 'settings', icon:'settings'}
  ]

  return (
    <>
      <aside className="Sidebar">
        <header className="Header">
          <ul className="Header-ul">
            {menuHeader.map(({id, name, icon}) => (
              <li key={id} className="Header-li">
                <button className="Header-button">
                  <span className="material-symbols-outlined">{icon}</span>
                </button>
              </li>
            ))}
          </ul>
        </header>
        <ul className="Sidebar-ul">
          {menuItems.map(({ id, name, icon }) => (
            <li key={id} className="Sidebar-li">
              <button className="Sidebar-button">
                <span className="material-symbols-outlined">{icon}</span>
                <span className="Sidebar-span">{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
