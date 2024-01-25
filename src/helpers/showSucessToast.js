import Swal from "sweetalert2";

export const showSucessToast = (message) => {
  Swal.fire({
    position: "top-end",
    toast: true,
    text: message,
    icon: "success",
    timer: 1500,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
