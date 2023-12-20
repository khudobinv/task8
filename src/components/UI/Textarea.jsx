import React from "react";

const Textarea = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-white text-sm">{label}</label>
      <textarea
        className="rounded-xl px-3 py-2 bg-slate-900 text-white text-base outline-none border-2 border-transparent focus:border-slate-600"
        placeholder={placeholder}
        rows={4}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Textarea;
