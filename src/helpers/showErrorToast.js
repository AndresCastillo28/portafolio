import Swal from "sweetalert2";

export const showErrorToast = (message) => {
  Swal.fire({
    icon: "error",
    position: "top-end",
    toast: true,
    timerProgressBar: true,
    timer: 3000,
    text: message,
    showConfirmButton: false,
    showCloseButton: true,
  });
};
