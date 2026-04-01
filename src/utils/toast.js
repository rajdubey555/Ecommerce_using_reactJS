import toast from "react-hot-toast";

export const showSuccess = (msg) => {
  toast.success(msg);
};

export const showError = (msg) => {
  toast.error(msg);
};

export const showLoading = (msg = "Loading...") => {
  return toast.loading(msg);
};

export const dismissToast = (id) => {
  toast.dismiss(id);
};

// Promise based (BEST 🔥)
export const showPromise = (promise, messages) => {
  toast.promise(promise, {
    loading: messages.loading || "Loading...",
    success: messages.success || "Success",
    error: messages.error || "Error",
  });
};