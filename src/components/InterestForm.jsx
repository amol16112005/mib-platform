import { useState } from "react";
import { saveInterest } from "../storage";

const years = ["1st year", "2nd year", "3rd year", "4th year", "PG"];
const teams = ["Just me", "2", "3", "4"];

const empty = {
  name: "",
  email: "",
  usn: "",
  branch: "",
  year: "1st year",
  team: "2",
  note: "",
};

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Add a real email so MIB can reach you.";
  }
  if (!/^[a-z0-9]{5,20}$/i.test(values.usn.trim())) {
    errors.usn = "USN should be 5–20 letters or numbers.";
  }
  if (values.branch.trim().length < 2) errors.branch = "Add your branch.";
  return errors;
}

export default function InterestForm({ event, intent }) {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(null);

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    const entry = {
      ...values,
      name: values.name.trim(),
      email: values.email.trim(),
      usn: values.usn.trim().toUpperCase(),
      branch: values.branch.trim(),
      note: values.note.trim(),
      eventId: event.id,
      eventName: event.name,
      intent,
    };
    let where = "local-excel";
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        setErrors({ form: payload.error || "Could not add this to the organiser sheet." });
        return;
      }
      where = payload.where || where;
    } catch {
      setErrors({ form: "Could not reach the organiser sheet." });
      return;
    }
    saveInterest(entry);
    setSaved({ ...entry, where });
  };

  if (saved) {
    return (
      <div className="saved-banner" role="status">
        <p className="kicker">Saved on this device</p>
        <h3>
          {saved.name}, you’re on the list for {saved.eventName}.
        </h3>
        <p>
          {saved.where === "google-sheet"
            ? "This row is in the organiser’s Google Sheet. You can open that sheet from any device, or download it as Excel."
            : "This row is in organizer/MIB-registrations.xlsx on this computer. If that file is already open in Excel, close it and open it again."}
        </p>
        <button type="button" className="button ghost" onClick={() => setSaved(null)}>
          Add someone else
        </button>
      </div>
    );
  }

  const label = intent === "interest" ? "Register interest" : "Tell me about the next one";

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="fields">
        <label>
          Full name
          <input name="name" value={values.name} onChange={onChange} autoComplete="name" />
          {errors.name && <small role="alert">{errors.name}</small>}
        </label>
        <label>
          Email
          <input name="email" type="email" value={values.email} onChange={onChange} autoComplete="email" />
          {errors.email && <small role="alert">{errors.email}</small>}
        </label>
        <label>
          USN
          <input name="usn" value={values.usn} onChange={onChange} autoComplete="off" />
          {errors.usn && <small role="alert">{errors.usn}</small>}
        </label>
        <label>
          Branch
          <input name="branch" value={values.branch} onChange={onChange} placeholder="CSE, ECE, MBA…" />
          {errors.branch && <small role="alert">{errors.branch}</small>}
        </label>
        <label>
          Year
          <select name="year" value={values.year} onChange={onChange}>
            {years.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </label>
        <label>
          Team size
          <select name="team" value={values.team} onChange={onChange}>
            {teams.map((team) => (
              <option key={team}>{team}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        One line on what you want to build, or why you’re coming
        <textarea name="note" rows="3" value={values.note} onChange={onChange} />
      </label>
      {errors.form && <small role="alert">{errors.form}</small>}
      <button className="button" type="submit">
        {label}
      </button>
    </form>
  );
}
