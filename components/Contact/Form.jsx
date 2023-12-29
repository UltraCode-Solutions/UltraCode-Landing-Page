import React from "react";
import { useForm } from 'react-hook-form';

const Form = () => {

    const {
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm();


  return (
    
    <div style={{ width: '400px', height: '800px' }} className="relative">
        <form className="bg-black grid grid-cols-4 gap-4" onSubmit={handleSubmit((data)=> console.log(data))}>
            
            <div className="col-span-2">
                <label className="text-white bg-transparent rounded-md shadow-md">Objetivo</label>
                <input className="input-styled" {...register('obejctive')}/>
            </div>

            <div className="col-span-1">
                <label className="text-white rounded-md shadow-md">Nombre</label>
                <input className="input-styled" {...register('firstName',{required:true})}/>
            </div>
            <div className="col-span-1">
                <label className="text-white rounded-md shadow-md">Apellido</label>
                <input className="input-styled" {...register('lastName',{required: true})}/>
            </div>

            <div className="col-span-2">
                <label className="text-white rounded-md shadow-md">email</label>
                <input className="input-styled" {...register('email',{required: true})}/>
            </div>

            <div className="col-span-2">
                <label className="text-white">country</label>
                <input className="input-styled" {...register('country', {required: true})}/>
            </div>
            {/* select con country */}
            {/* boletines y recapchat */}
            <button type="sumbit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Enviar</button>
        </form>
    </div>
    
    );
};

export default Form;
