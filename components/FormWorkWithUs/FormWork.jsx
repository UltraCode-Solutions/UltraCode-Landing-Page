import React, { useState } from "react";
import { FileInput, Label } from 'flowbite-react';
import Image from 'next/image';
import sendImage from './sent-amico.svg';
const FormWork = () => {
  const [name, setName] = useState({ value: "", focused: false });
  const [email, setEmail] = useState({ value: "", focused: false });
  const [role, setRole] = useState({ value: "", focused: false });
  const [cv, setCv] = useState(null);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name.value);
    console.log("Email:", email.value);
    console.log("Role:", role.value);
    console.log("CV:", cv);
  };
  const handleFocus = (field) => {
    field.focused = true;
    switch (field) {
      case name:
        setName({ ...field });
        break;
      case email:
        setEmail({ ...field });
        break;
      case role:
        setRole({ ...field });
        break;
      default:
        break;
    }
  };
  const handleBlur = (field) => {
    if(field.value.length > 0) {
      field.focused = true;
    } else {
      field.focused = false;
    }
    switch (field) {
      case name:
        setName({ ...field });
        break;
      case email:
        setEmail({ ...field });
        break;
      case role:
        setRole({ ...field });
        break;
      default:
        break;
    }
  }
  return (
    <section
      id="form-work"
      className="bg-[#090E34] w-full h-screen flex flex-col items-center justify-center pt-12"
    >
      <h2 className="text-4xl text-white capitalize font-bold mb-12 text-center">Complete the application</h2>
      <div className="w-full flex flex-row items-center justify-center gap-16 max-md:flex-col">
        <Image src={sendImage} width={100} height={100} className='w-4/12 max-lg:w-6/12 max-sm:w-full' alt="form-image" priority={true}/>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 justify-center items-center max-lg:gap-2">
          <div className="flex justify-center items-center gap-6 max-lg:flex-col max-lg:gap-4">
            <div className={`relative ${name.focused ? 'peer-focus:border-white peer-focus:border-3' : ''}`}>
              <input
                type="text"
                id="name"
                value={name.value}
                onChange={(e) => setName({ ...name, value: e.target.value })}
                onFocus={() => handleFocus(name)}
                onBlur={() => handleBlur(name)}
                className="w-64 bg-transparent border-2 py-2 px-2 focus:outline-none peer rounded-lg max-md:w-72"
                autoComplete="off"
                required
              />
              <label
                htmlFor="name"
                className={`absolute left-2 text-gray-600 cursor-text peer-focus:font-medium peer-focus:text-xs peer-focus:-top-4 peer-focus:text-white transition-all ${
                  name.focused ? 'font-medium text-xs -top-4' : 'top-2.5'
                }`}
              >
                Full Name
              </label>
            </div>
            <div className={`relative ${email.focused ? 'peer-focus:border-white peer-focus:border-3' : ''}`}>
              <input
                type="text"
                id="email"
                value={email.value}
                onChange={(e) => setEmail({ ...email, value: e.target.value })}
                onFocus={() => handleFocus(email)}
                onBlur={() => handleBlur(email)}
                className="w-64 bg-transparent border-2 py-2 px-2 focus:outline-none peer rounded-lg max-md:w-72"
                autoComplete="off"
                required
              />
              <label
                htmlFor="email"
                className={`absolute left-2 text-gray-600 cursor-text peer-focus:font-medium peer-focus:text-xs peer-focus:-top-4 peer-focus:text-white transition-all ${
                  email.focused ? 'font-medium text-xs -top-4' : 'top-2.5'
                }`}
              >
                Email
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 max-lg:flex-col max-lg:gap-4">
            <div className={`relative ${role.focused ? 'peer-focus:border-white peer-focus:border-3' : ''}`}>
              <input
                type="text"
                id="role"
                value={role.value}
                onChange={(e) => setRole({ ...role, value: e.target.value })}
                onFocus={() => handleFocus(role)}
                onBlur={() => handleBlur(role)}
                className="w-64 bg-transparent border-2 py-2 px-2 focus:outline-none peer rounded-lg max-md:w-72"
                autoComplete="off"
                required
              />
              <label
                htmlFor="role"
                className={`absolute left-2 text-gray-600 cursor-text peer-focus:font-medium peer-focus:text-xs peer-focus:-top-4 peer-focus:text-white transition-all ${
                  role.focused ? 'font-medium text-xs -top-4' : 'top-2.5'
                }`}
              >
                Role
              </label>
            </div>
            <div className="relative pt-1">
              <div>
                <Label htmlFor="file-upload-helper-text" value="Upload Resume" className="text-white text-xs font-medium" />
              </div>
              <FileInput id="file-upload-helper-text" helperText=".pdf, .doc, .docx" accept=".pdf,.doc,.docx" className="max-md:w-72" required />
            </div>
          </div>
          <button type="submit" className="w-1/2 max-lg:w-full rounded-md bg-[#4A6CF7] py-3 px-10 mt-6 text-base capitalize font-semibold  text-white duration-300 ease-in-out hover:bg-blue-500/60">
            Submit Resume
          </button>
        </form>
      </div>
    </section>
  );
};
export default FormWork;