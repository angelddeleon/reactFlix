import logo from "../img/logo.png"
import search from "../img/buscar (1).png"
import avatar from "../img/Netflix-avatar.png"

function Header( {handleOnSubmit, searchWord, handleOnChange}) {

  return (
  <div className="header" >
    <div className="header_list">
      <a href="">
      <img src={logo} alt="" />
      </a>

    </div>

    <div className="header_search">

    <form onSubmit={handleOnSubmit}>
      <input 
      type="search" 
      name="search" 
      placeholder="Search"
      value={searchWord} 
      onChange={handleOnChange}
      />
      </form>

    <img src={search} alt="search"  />
    <img src={avatar} alt="avatar" />
    </div>
  </div>
  )
}

export default Header