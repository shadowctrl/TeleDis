"use client";
import { FormEvent, useState, useEffect } from "react";
import "./settings.css";
import { Settings2Icon } from "lucide-react";

const page = () => {
  const [savedSettings, setSaved] = useState<{
    telegramId: string;
    discordId: string;
  } | null>(null);

  const fetchSettings = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_Base_Url}/api/formFetch`
    );
    const data = await res.json();
    setSaved(data);
  };

  const [submitted, setSubmit] = useState(false);
  const [success, setSuccess] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(true);
    const formData = new FormData(event.currentTarget);
    const rawFormData = {
      telegramId: formData.get("Tid"),
      discordId: `${formData.get("Did")}`,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rawFormData),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_Base_Url}/api/form`,
        options
      );

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(undefined);
          window.location.reload();
        }, 3000);
      } else {
        setSuccess(false);
        setTimeout(() => {
          setSuccess(undefined);
        }, 3000);
      }
    } catch (err) {
      setSuccess(false);
      setTimeout(() => {
        setSuccess(undefined);
      }, 3000);
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
              placeholder={
                savedSettings?.telegramId
                  ? `curernt: ${savedSettings?.telegramId}`
                  : "-1020131887"
              }
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="Did">Discord Webhook URL</label>
            <input
              type="url"
              id="Did"
              name="Did"
              placeholder={
                savedSettings?.discordId
                  ? `curernt: ${savedSettings?.discordId}`
                  : ""
              }
              required
              autoComplete="off"
            />
          </div>
          {success === undefined && (
            <input
              type="submit"
              value="save"
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
