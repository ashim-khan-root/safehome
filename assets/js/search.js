import Fuse from 'fuse.js';

let searchIndex = [];
let fuse = null;

async function loadSearchIndex() {
  try {
    const response = await fetch('/search-index.json');
    searchIndex = await response.json();
    
    fuse = new Fuse(searchIndex, {
      keys: ['title', 'content', 'tags'],
      includeScore: true,
      threshold: 0.4,
    });
  } catch (error) {
    console.error('Failed to load search index:', error);
  }
}

function performSearch(query) {
  if (!fuse || !query) return [];
  const results = fuse.search(query);
  return results.map(result => result.item);
}

// Initialize search on page load
loadSearchIndex();

// Expose search globally
window.performSearch = performSearch;
