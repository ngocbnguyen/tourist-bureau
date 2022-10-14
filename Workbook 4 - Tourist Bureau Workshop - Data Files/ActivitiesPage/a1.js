function loadCategories() {
    for (const category of categories) {
      let option = new Option(category);
      categoryList.appendChild(option);
    }
  }