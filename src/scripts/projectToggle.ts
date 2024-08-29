// scripts/projectToggle.ts
export function handleProjectClick(projectId: string) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.add('hidden');
    });
  
    // Expand the right column
    const leftColumn = document.querySelector('.left-column');
    if (leftColumn) {
      leftColumn.classList.add('expand-right');
    }
  
    // Optionally, log or handle the specific project click
    console.log(`Project ${projectId} clicked`);
  }  