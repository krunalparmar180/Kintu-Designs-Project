import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import './layout.css'
function Layout() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu>
        <main>
        <button onClick={() => collapseSidebar()} style={{justifyContent:"center"}}><i class="fa-solid fa-bars"> Menu</i></button>
      </main>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
     
    </div>
  );
}

export default Layout