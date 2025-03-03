import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

function CustomLoginButton() {
  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log('Google login successful', codeResponse);
      // Send the code to your backend for verification
      fetch('http://localhost:3000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: codeResponse.code }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Backend response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    onError: () => {
      console.error('Google login failed');
    },
    flow: 'auth-code',
  });

  return (
    <button 
      onClick={() => googleLogin()}
      className="flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
      </svg>
      Sign in with Google 🚀
    </button>
  );
}

export default CustomLoginButton;