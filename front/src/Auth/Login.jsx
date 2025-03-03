import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {
  //for navigation between pages
  const navigate = useNavigate();

  //handle signin user data 
  const [formData, setFormData] = useState({});
  
  // Use a single Google login approach
  const googleLogin = useGoogleLogin({                                                                                                                            
    onSuccess: tokenResponse => {
      console.log('Google login successful', tokenResponse);
      
      // With implicit flow, you get the access token directly
      const accessToken = tokenResponse.access_token;
      
      // Use the token to get user info
      fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(response => response.json())
      .then(userInfo => {
        console.log('User info:', userInfo);
        localStorage.setItem('user', JSON.stringify(userInfo));
        navigate('/dashboard');
      });
    },
    flow: 'implicit' // Use implicit flow instead of auth-code
    }); 

  //target the data we need
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  //submit on click the data
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {  // Use the full URL in development
        method: 'POST',
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4" id="login">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl max-md:max-w-md w-full">
          <form className="max-w-md md:ml-auto w-full" onSubmit={handleSubmit}>
            <h3 className="text-gray-100 text-3xl font-extrabold mb-8">
              Sign in
            </h3>
            <div className="space-y-4">
              <div>
                <input 
                  name="email" 
                  type="email" 
                  autoComplete="email" 
                  className="bg-gray-900 w-full text-sm text-gray-100 px-4 py-3.5 rounded-md focus:bg-transparent" 
                  placeholder="Email address" 
                  onChange={handleChange} 
                  required
                />
              </div>
              <div>
                <input 
                  name="password" 
                  type="password" 
                  autoComplete="current-password" 
                  required 
                  className="bg-gray-900 w-full text-sm text-gray-100 px-4 py-3.5 rounded-md focus:bg-transparent" 
                  onChange={handleChange} 
                  placeholder="Password" 
                />
              </div>
            </div>

            <div className="!mt-8">
              <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                Sign In
              </button>
            </div>
            <div className="!mt-4">
              <Link to="/">
                <button type="button" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Create An Account
                </button>
              </Link>
            </div>

            <div className="my-4 flex items-center gap-4">
              <hr className="w-full border-gray-300" />
              <p className="text-sm text-gray-400 text-center">or</p>
              <hr className="w-full border-gray-300" />
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => googleLogin()} 
                type="button"
                className="flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                </svg>
                Sign in with Google
              </button>
            </div>
          </form>

          {/* image */}
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <figure className="relative w-full h-96">
              <img className="object-cover object-center w-full h-full rounded-xl"
                src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
                alt="nature image" />
              <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <div>
                  <h5 className="text-xl font-medium text-slate-800">
                    Aymane Elkhadraoui
                  </h5>
                  <p className="mt-2 text-slate-600">
                    20 July 2025
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;