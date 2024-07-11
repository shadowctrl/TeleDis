import "./settings.css";
import { Settings2Icon } from "lucide-react";
const page = () => {
  return (
    <div className="settings-main">
      <div className="settings-form">
        <h1 className="settings-head">
          settings <Settings2Icon size={"5vw"} />
        </h1>

        <form>
          <div>
            <label htmlFor="Tid">Telegram Channel ID/Name</label>
            <input
              type="text"
              id="Tid"
              name="Tid"
              placeholder="@mirrorbot / -1020131887"
            />
          </div>
          <div>
            <label htmlFor="Did">Discord Channel ID</label>
            <input
              type="text"
              id="Did"
              name="Did"
              placeholder="@mirrorbot / -1020131887"
            />
          </div>
        </form>
        <input type="submit" value="Submit" className="settings-form-submit" />
      </div>
    </div>
  );
};

export default page;
