import { Link } from 'react-router-dom'

const Brand = () => {
  return (
    <Link to="/home" aria-current="page" className="flex-none">
      <img
        className="w-10 h-auto"
        src={'/static/images/logo-aconcagua-hogar.png'}
        alt="Logo"
      />
    </Link>
  )
}

export default Brand
