export const HandleLogOut = () => {
    // Clear localStorage
    localStorage.clear();
    // Clear sessionStorage if you're using it
    sessionStorage.clear();
    // Redirect to login page
    window.location.href = "/login";
  };