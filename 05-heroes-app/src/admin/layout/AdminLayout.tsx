import { Outlet } from 'react-router'

export const AdminLayout = () => {
  return (
    <div className='bg-violet-500'
    >
        <Outlet></Outlet>
    </div>
  )
}
 