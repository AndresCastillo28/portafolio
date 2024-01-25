import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../hooks";
import { showErrorToast } from "../../helpers";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { startLogin, errorMessage } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();

    startLogin({ username, password });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      showErrorToast(errorMessage);
    }
  }, [errorMessage]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-lg p-8 shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <form onSubmit={handleLogin} autoComplete="off">
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-accent bg-transparent"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-accent bg-transparent"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-lg"
              disabled={isLoading} // Disable the button when loading
            >
              {isLoading ? "Loading..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
