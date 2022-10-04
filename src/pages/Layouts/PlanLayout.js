import { Outlet } from 'react-router'

const PlanLayout = () => {
  return (
    <div style={{ width: "100%", maxWidth: '500px', margin: 'auto'}}><Outlet/></div>
  );
};
 
export default PlanLayout