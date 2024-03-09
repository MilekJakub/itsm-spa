import "./navbar.css"

document.addEventListener('DOMContentLoaded', (): void => {
  const navbarContainer: HTMLElement | null = document.getElementById('navbar');

  if (!navbarContainer) {
    console.error('Navbar container not found');
    return;
  }

  fetch('/src/components/navbar/navbar.html')
    .then((response: Response): Promise<string> => {
      if (!response.ok) {
        throw new Error(`[ERROR]: Response status [${response.status}]`);
      }
      return response.text();
    })
    .then((html: string): void => {
      navbarContainer.innerHTML = html;
    })
    .catch((error: Error): void => {
      console.error('[ERROR]: Cannot load the navbar.');
      console.error(error);
    });
});
