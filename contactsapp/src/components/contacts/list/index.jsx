import { useState } from "react";

function List({ contacts }) {
  const [filterText, setfilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });

  return (
    <div>
      <p id="count">{filtered.length + " contact(s)"} </p>
      <input
        type="text"
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setfilterText(e.target.value)}
      />

      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullName}</span>
            <span>{contact.phoneNumber}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
