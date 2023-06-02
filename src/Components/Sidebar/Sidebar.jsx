import { useEffect, useState } from "react";
import "./Sidebar.scss";

export const Sidebar = () => {
  const menuHeader = [
    { id: 0, name: 'menu', icon:'menu'},
    { id: 1, name: 'signup', icon:'lock'},
    { id: 2, name: 'settings', icon:'settings'}
  ]
  const menuItems = [
    { id: 0, name: "Home", icon: "home" },
    { id: 1, name: "Apss", icon: "apps" },
    { id: 2, name: "Create", icon: "add_box" },
    { id: 3, name: "Profile", icon: "person" },
    { id: 4, name: "Favourites", icon: "favorite" },
    { id: 5, name: "Search", icon: "search" }
  ]
  const userLogin = [
    { id: 0, icon: 'account_circle', type: 'text', placeholder: 'Username'},
    { id: 1, icon: 'password', type: 'password', placeholder: 'Password'},
    { id: 2, icon: 'email', type: 'email', placeholder: 'Email'}
  ]
  const settings = [
    { id: 0, name: 'Dark Mode'},
    { id: 1, name: 'Accesibility Mode'},
    { id: 2, name: 'Quirks Mode'}
  ]

  const handleToggled = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", document.body.className);
  }

  useEffect(() => {
    if (localStorage.getItem("dark")) {
      document.body.classList.add("dark")
    }
  }, [])

  const [isVisible, setIsVisible] = useState(false)
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

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
              <form action="">
                <span className="Sesion-icon material-symbols-outlined">{icon}</span>
                <input 
                  type={type === 'password' ? (isVisible ? 'text' : 'password') : type}
                  placeholder={placeholder}
                  className="Sesion-input" />
                {type === 'password' && <span 
                  className="Sesion-icon2 material-symbols-outlined"
                  onClick={toggleVisibility}>{isVisible ? 'visibility_off' : 'visibility'}</span>}
              </form>
            </li>
          ))}
        </ul>

        <ul className="Setting">
          {settings.map(({id, name})=>(
            <li key={id} className="Setting-li">
              <label className="Setting-name" htmlFor="check">{name}</label>
              <input 
                id="check"
                type="checkbox"
                name={name}
                onClick={()=> name === 'Dark Mode' && handleToggled()}
                />
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
