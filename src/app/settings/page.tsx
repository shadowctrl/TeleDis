"use client";
import { FormEvent, useState } from "react";
import "./settings.css";
import { Settings2Icon } from "lucide-react";

const page = () => {
  const [submitted, setSubmit] = useState(false);
  const [success, setSuccess] = useState<boolean | undefined>(undefined);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(true);
    const formData = new FormData(event.currentTarget);
    const rawFormData = {
      telegramId: formData.get("Tid"),
      discordId: formData.get("Did"),
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rawFormData),
    };

    try {
      const res = await fetch("http://localhost:3000/api/form", options);

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(undefined);
        }, 3000);
        event.currentTarget?.reset();
      } else {
        setSuccess(false);
        setTimeout(() => {
          setSuccess(undefined);
        }, 3000);
        event.currentTarget?.reset();
      }
    } catch (err) {
      setSuccess(false);
      setTimeout(() => {
        setSuccess(undefined);
      }, 3000);
      event.currentTarget?.reset();
    } finally {
      setSubmit(false);
    }
  };
  return (
    <div className="settings-main">
      <div className="settings-form">
        <h1 className="settings-head">
          settings <Settings2Icon size={"5vw"} />
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Tid">Telegram Channel ID/Name</label>
            <input
              type="text"
              id="Tid"
              name="Tid"
              placeholder="@mirrorbot / -1020131887"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="Did">Discord Channel ID</label>
            <input
              type="text"
              id="Did"
              name="Did"
              placeholder="@mirrorbot / -1020131887"
              required
              autoComplete="off"
            />
          </div>
          {success === undefined && (
            <input
              type="submit"
              value="Submit"
              className="settings-form-submit"
              disabled={submitted}
            />
          )}
        </form>

        {success && (
          <p className="form-success">settings applied successfully!</p>
        )}
        {success === false && <p>Save settings Failed</p>}
      </div>
    </div>
  );
};

export default page;
