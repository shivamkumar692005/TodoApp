export const getLocalStorageData = () => {
    try {
      const storedTask = localStorage.getItem(todoKey);
      return storedTask ? JSON.parse(storedTask) : [];
    } catch (e) {
      console.error("Error parsing local storage data:", e);
      return [];
    }
  };

  
  export const setLocalStorageData = (task) => {
    return localStorage.setItem(todoKey, JSON.stringify(task));
}