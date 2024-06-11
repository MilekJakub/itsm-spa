export const renderElement = (id: string, element: HTMLElement) => {
  const container = document.getElementById(id);

  if (!container) {
    throw new Error(`[ERROR]: Container with id '${id}' not found.`);
  }

  container.replaceWith(element);
}
