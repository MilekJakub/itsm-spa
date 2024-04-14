document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.create-project-form') as HTMLFormElement;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('create-project-name-input') as HTMLInputElement;
    const descriptionInput = document.getElementById('create-project-description-input') as HTMLTextAreaElement;

    const isFormValid = validateForm(nameInput.value, descriptionInput.value);

    if (!isFormValid) {
      return;
    }

    const formData = {
      name: nameInput.value,
      description: descriptionInput.value
    };

    try {
      const response = await fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('[INFO]: Project created successfully:\n', data);
      form.reset();
      location.href = "../projects.html"
    } catch (error) {
      console.error('[ERROR]:', error);
    }
  });
});

function validateForm(projectName: string, projectDescription: string): boolean {
  const trimmedName = projectName.trim();
  const trimmedDescription = projectDescription.trim();

  let isValid = true;
  let errors: string[] = [];

  if (trimmedName.length === 0 || trimmedName.length > 50) {
    isValid = false;
    errors.push('Project name must be between 1 and 50 characters.');
  }

  if (trimmedDescription.length < 5) {
    isValid = false;
    errors.push('Project description must be at least 5 characters long.');
  }

  if (isValid) {
    console.log('[INFO]: Form is valid.');
    return true;
  } else {
    console.error('[ERROR]: Validation errors:\n', errors);
    alert(errors.join('\n'));
    return false;
  }
}