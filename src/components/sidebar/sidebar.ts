import "./sidebar.css";

async function LoadSidebar(sidebarContainer: HTMLElement) {
  const response = await fetch("/src/components/sidebar/sidebar.html");

  if (!response.ok) {
    console.error('[ERROR]: Failed fetching sidebar component.')
    console.error(`[ERROR]: Response status ${response.status}.`);
    return;
  }

  sidebarContainer.innerHTML = await response.text();
}

document.addEventListener('DOMContentLoaded', async (): Promise<void> => {
  console.log('[INFO]: Loading sidebar.')
  const sidebarContainer= document.getElementById('sidebar');
  if (!sidebarContainer) {
    console.error('[ERROR]: Sidebar container not found.');
    return;
  }

  await LoadSidebar(sidebarContainer);

  const sidebarMenuButton = document.getElementById('sidebar-menu-button');
  if (!sidebarMenuButton) {
    console.error("[ERROR]: Sidebar menu button not found.")
    return;
  }

  sidebarMenuButton.addEventListener('click', function() {
    sidebarContainer.classList.toggle('active');
  });

  console.log('[INFO]: Sidebar loaded.')
});
