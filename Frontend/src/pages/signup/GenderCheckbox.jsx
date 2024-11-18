const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male"}`}>
          <span className="label-text text-slate-50">Male</span>
          <input
            type="checkbox"
            className="checkbox border bg-slate-50"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female"}`}>
          <span className="label-text text-slate-50">Female</span>
          <input
            type="checkbox"
            className="checkbox border bg-slate-50"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
