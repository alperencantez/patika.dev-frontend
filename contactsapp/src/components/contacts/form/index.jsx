import { useState } from "react";

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ fullName: "", phoneNumber: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contacts, form]);
    setForm({ fullName: "", phoneNumber: "" });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
