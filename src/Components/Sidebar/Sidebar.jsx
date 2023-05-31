import "./Sidebar.scss";

export const Sidebar = () => {
  const menuItems = [
    { id: 0, name: "Home", icon: "home" },
    { id: 1, name: "Apss", icon: "apps" },
    { id: 2, name: "Create", icon: "add_box" },
    { id: 3, name: "Profile", icon: "person" },
    { id: 4, name: "Favourites", icon: "favorite" },
    { id: 5, name: "Search", icon: "search" },
  ]
  const menuHeader = ['menu','signup','settings']

  return (
    <>
      <div className="Sidebar">
        <header className="Sidebar-header">
            
        </header>
        <ul className="Sidebar-ul">
          {menuItems.map(({ id, name, icon }) => (
            <li key={id} className="Sidebar-li">
              <button className="Sidebar-button">
                <span className="material-symbols-outlined">{icon}</span>
                <span>{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
