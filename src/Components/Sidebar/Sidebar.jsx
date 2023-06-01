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
  const userLogin = [
    { id: 0, icon: 'account_circle', type: 'text', placeholder: 'Username'},
    { id: 1, icon: 'password', type: 'password', placeholder: 'Password'},
    { id: 2, icon: 'email', type: 'email', placeholder: 'Email'}
  ]

  return (
    <>
      <aside className="Sidebar">
        <header className="Header">
          <ul className="Header-ul">
            {menuHeader.map(({id, icon}) => (
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

        <ul className="Sesion">
          {userLogin.map(({id, icon, type, placeholder})=>(
            <li key={id} className="Sesion-li">
              <span className="Sesion-icon material-symbols-outlined">{icon}</span>
              <input 
                type={type}
                placeholder={placeholder} />
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
