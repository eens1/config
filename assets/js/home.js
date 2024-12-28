  // Toggle the dropdown visibility
  function toggleDropdown() {
    document.getElementById("content-dropdown").classList.toggle("show");
  }

  // Fetch and list items in the /content directory
  async function fetchContentItems() {
    const response = await fetch('/content.json');
    const contentItems = await response.json();

    const dropdownContent = document.getElementById('content-dropdown');
    contentItems.forEach(item => {
      const link = document.createElement('a');
      link.href = item.url;
      link.textContent = item.title || item.name; // Title from _index.md or the file name
      dropdownContent.appendChild(link);
    });
  }

  // Load content items when the page loads
  document.addEventListener('DOMContentLoaded', fetchContentItems);
