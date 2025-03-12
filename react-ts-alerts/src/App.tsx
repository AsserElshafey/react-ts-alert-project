import "./App.css";
import Alerts from "./components/ui/Alert/Alerts";
import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";

function App() {
  return (
    <>
      <div style={{ margin: "2rem" }}>
        <Alerts
          type={"alert-default"}
          icon={<Bell size={20} />}
          title={"Upgrade your plan"}
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            temporibus doloremque <a href="/">laboriosam</a> iste totam officiis
            beatae quas.
          </p>
        </Alerts>

        <Alerts
          type={"alert-info"}
          icon={<Info size={20} />}
          title={"Note"}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
        />
        <Alerts
          type={"alert-success"}
          icon={<CheckCheck size={20} />}
          title={"Your order has been processed"}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
        />
        <Alerts
          type={"alert-error"}
          icon={<Ban size={20} />}
          title={"Something went wrong"}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
        />
        <Alerts
          type={"alert-warning"}
          icon={<AlertTriangle size={20} />}
          title={"Tips & Tricks"}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
        />
      </div>
    </>
  );
}

export default App;
