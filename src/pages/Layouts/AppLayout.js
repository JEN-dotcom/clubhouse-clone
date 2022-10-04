import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className='app_layout' style={{ width: "100%", maxWidth: '500px', margin: 'auto' }}><Outlet /></div>
  );
};

export default AppLayout