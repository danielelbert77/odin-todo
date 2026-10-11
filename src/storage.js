const STORAGE_KEY = "items";

export function saveItems(items) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(items)
    );
}

export function loadItems() {
    const savedItems = localStorage.getItem(STORAGE_KEY);

    return savedItems ? JSON.parse(savedItems) : [];
}