import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex flex-row gap-3 items-center justify-center w-full">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 rounded appearance-none border border-slate-200 checked:bg-violet-500 checked:content-agree checked:border-0 outline-none cursor-pointer "
      />
      <label className="text-white">{label}</label>
    </div>
  );
};

export default Checkbox;
