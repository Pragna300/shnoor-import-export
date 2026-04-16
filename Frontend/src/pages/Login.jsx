import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ChevronDown } from 'lucide-react';

export default function Login() {
  const [role, setRole] = useState('Client');

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] relative p-4">
      <div className="w-full max-w-[420px] p-8 md:p-10 bg-white rounded-[24px] shadow-sm border border-[#F1DDC8]">
        <h2 className="text-[28px] font-bold text-center text-slate-900 mb-8 tracking-tight">Welcome Back</h2>
        
        <form className="space-y-4">
          {/* Email Input */}
          <div className="flex border border-[#e8d5c4] rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#1D3260] transition-shadow">
            <div className="px-4 py-3 md:py-3.5 bg-white flex items-center justify-center">
              <Mail className="h-5 w-5 text-slate-500" strokeWidth={1.5} />
            </div>
            <input 
              type="email" 
              placeholder="snehajadhav070105@gmail.com" 
              className="flex-1 px-3 py-3 md:py-3.5 bg-[#eef3fb] text-slate-800 placeholder-slate-800 outline-none w-full"
            />
          </div>

          {/* Password Input */}
          <div className="flex border border-[#e8d5c4] rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#1D3260] transition-shadow">
            <div className="px-4 py-3 md:py-3.5 bg-white flex items-center justify-center">
              <Lock className="h-5 w-5 text-slate-500" strokeWidth={1.5} />
            </div>
            <input 
              type="password" 
              placeholder="••••••" 
              className="flex-1 px-3 py-3 md:py-3.5 bg-[#eef3fb] text-slate-800 placeholder-slate-800 tracking-widest outline-none text-xl leading-none w-full"
            />
          </div>

          {/* Role Dropdown */}
          <div className="relative flex border border-[#e8d5c4] rounded-xl overflow-hidden bg-white focus-within:ring-2 focus-within:ring-[#1D3260] transition-shadow duration-200 mt-2">
            <select 
              className="block flex-1 w-full pl-4 pr-10 py-3.5 bg-white text-slate-800 appearance-none focus:outline-none"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Client">User</option>
              <option value="Admin">Admin</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <ChevronDown className="h-5 w-5 text-slate-800" />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end pt-2 pb-2">
            <a href="#" className="text-[14px] font-medium text-[#1D3260] hover:text-[#284687] transition-colors">Forgot Password?</a>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-[#203461] text-white font-medium py-3.5 px-4 rounded-xl hover:bg-[#15254a] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1D3260]"
          >
            Login
          </button>
        </form>

        {/* Footer links */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-[15px] text-[#203461]">
            <span className="text-slate-500">Don't have an account?</span> <Link to="/register" className="font-semibold hover:underline">Register</Link>
          </p>
          <div className="flex flex-col gap-2 pt-2 text-[14px] text-slate-500">
            <a href="#" className="hover:text-slate-800 transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
