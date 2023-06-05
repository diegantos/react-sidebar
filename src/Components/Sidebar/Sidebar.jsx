import { useState } from "react";
import "./Sidebar.scss";

export const Sidebar = () => {

  const menuHeader = [
    { id: 0, name: 'menu', icon:'menu'},
    { id: 1, name: 'signup', icon:'lock'},
    { id: 2, name: 'settings', icon:'settings'}
  ]

  // const content = [
  //   { id: 0, component: <Menu />},
  //   { id: 1, component: <Sesion />},
  //   { id: 2, component: <Setting />},
  // ]

  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <aside className="Sidebar">

        <header className="Header">
          <ul className={`Header-ul Active${activeTab}`}>
            {menuHeader.map(({id, icon}) => (
              <li key={id} className='Header-li'>
                <button 
                  className="Header-button"
                  onClick={()=> setActiveTab(id)}>
                  <span className="material-symbols-outlined">{icon}</span>
                </button>
              </li>
            ))}
          </ul>
        </header>

        <div 
          className="Container"
          style={{transform: `translateX(${-((activeTab/menuHeader.length)*100)+(100/menuHeader.length)}%)`}}
          >
          {/* {content[activeTab].component} */}
          <Menu />
          <Sesion />
          <Setting />
        </div>
        
      </aside>
    </>
  )
}

const Menu = () => {

  const menuItems = [
    { id: 0, name: "Home", icon: "home" },
    { id: 1, name: "Apss", icon: "apps" },
    { id: 2, name: "Create", icon: "add_box" },
    { id: 3, name: "Profile", icon: "person" },
    { id: 4, name: "Favourites", icon: "favorite" },
    { id: 5, name: "Search", icon: "search" }
  ]

  return(
    <ul className="Menu">
      {menuItems.map(({ id, name, icon }) => (
        <li key={id} className='Menu-li'>
          <button className="Menu-button">
            <span className="material-symbols-outlined">{icon}</span>
            <span className="Menu-span">{name}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

const Sesion = () => {

  const userLogin = [
    { id: 0, icon: 'account_circle', type: 'text', placeholder: 'Username'},
    { id: 1, icon: 'password', type: 'password', placeholder: 'Password'},
    { id: 2, icon: 'email', type: 'email', placeholder: 'Email'}
  ]

  const [isVisible, setIsVisible] = useState(false)
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return(

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
  )
}

const Setting = () => {

  const settings = [
    { id: 0, name: 'Dark Mode'},
    { id: 1, name: 'Accesibility Mode'},
    { id: 2, name: 'Quirks Mode'}
  ]

  const darkMode = () => {
    document.body.classList.toggle("dark")
    const sidebarClass = document.querySelector('.Sidebar')
    sidebarClass.classList.toggle('dark')
  }

  return(
    <ul className="Setting">
      {settings.map(({id, name})=>(
        <li key={id} className="Setting-li">
          <label className="Setting-name" htmlFor="check">{name}</label>
          <input 
            id="check"
            type="checkbox"
            name={name}
            onClick={()=> name === 'Dark Mode' && darkMode()}
            />
        </li>
      ))}
    </ul>
  )
}