import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [openDialog, setOpenDialog] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile based on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json',
      },
    }).then((resp) => {
      localStorage.setItem('user', JSON.stringify(resp.data));
      setUser(resp.data);
      setOpenDialog(false);
    });
  };

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5 md:px-10">
      <a href="/" className="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
        <h2 className="font-bold text-2xl text-gray-950">Travel.com</h2>
      </a>

      <div className="flex items-center gap-3 md:gap-5">
        {user ? (
          <div className="flex items-center gap-3 md:gap-5">
            {/* Show buttons only on larger screens */}
            {!isMobile && (
              <>
                <a href="/create-trip">
                  <Button variant="outline" className="rounded-full">+ Create Trip</Button>
                </a>
                <a href="/my-trips">
                  <Button variant="outline" className="rounded-full">My Trip</Button>
                </a>
              </>
            )}
            <Popover>
              <PopoverTrigger>
                <img src={user?.picture || "/user.svg"} className="h-8 w-8 rounded-full" alt="User Profile" />
              </PopoverTrigger>
              <PopoverContent className="p-3">
                {isMobile && (
                  <div className="flex flex-col items-start gap-2">
                    <a href="/create-trip" className="text-gray-700">+ Create Trip</a>
                    <a href="/my-trips" className="text-gray-700">My Trip</a>
                  </div>
                )}
                <h2
                  className="cursor-pointer text-red-500 text-center mt-2"
                  onClick={handleLogout}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription className="text-center">
              <img src="/logo.svg" alt="Logo" className="mx-auto mb-4" />
              <h2 className="font-bold text-lg mt-4">Sign In With Google</h2>
              <p className="text-gray-500">Sign in to the app with Google Authentication securely</p>
              <Button
                onClick={login}
                className="w-full mt-5 gap-3 flex justify-center items-center"
              >
                <FcGoogle className="h-6 w-6" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
