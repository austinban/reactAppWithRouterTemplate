import { NavLink } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/profile'}>Profiles</NavLink>
    </>
  )
}
