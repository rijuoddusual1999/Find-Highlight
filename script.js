const customPrompt = prompt("Enter the text you want to search and replace (case-insensitive):");

if (customPrompt == null) {
  alert('No Valid Input');
} else {
  replaceText(document.body, customPrompt);
}

function replaceText(element, searchText) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(child => replaceText(child, searchText));
  } else if (element.nodeType === Node.TEXT_NODE) {
    if (element.textContent.match(new RegExp(searchText, 'gi'))) {
      const newElement = document.createElement('span');
      newElement.innerHTML = element.textContent.replace(new RegExp(`(${searchText})`, 'gi'), '<span class="rainbow">$1</span>');
      element.replaceWith(newElement);
    }
  }
}
