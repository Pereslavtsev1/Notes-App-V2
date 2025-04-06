import { useTheme } from "../ThemeProvider";
import { Button } from "../ui/button";

const AppearanceSettings = () => {
  const { setTheme } = useTheme();
  return (
    <div>
      <div className="flex flex-col items-start gap-y-10">
        <div className="text-lg font-semibold">
          <h4>Appearance</h4>
          <p className="text-muted-foreground text-sm">
            Customize the appearance of the app.
          </p>
        </div>
        <div>
          <h6 className="text-lg font-semibold">Theme</h6>

          <p className="text-muted-foreground text-sm">
            Select the theme for the dashboard.
          </p>
          <div className="mt-6 flex gap-x-10">
            <div>
              <button
                className="max-w-32 space-y-2 rounded-sm bg-slate-100 p-2"
                onClick={() => setTheme("light")}
              >
                <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                  <div className="h-2 w-[80px] rounded-lg bg-slate-300"></div>
                  <div className="h-2 w-[100px] rounded-lg bg-slate-300"></div>
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-slate-300"></div>
                  <div className="h-2 w-[100px] rounded-lg bg-slate-300"></div>
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-slate-300"></div>
                  <div className="h-2 w-[100px] rounded-lg bg-slate-300"></div>
                </div>
              </button>
              <h6 className="font-semibold mt-2 text-center">Light</h6>
            </div>
            <div className="flex flex-col">
              <button
                className="max-w-32 space-y-2 rounded-sm bg-slate-950 p-2"
                onClick={() => setTheme("dark")}
              >
                <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                  <div className="h-2 w-[80px] rounded-lg bg-slate-400"></div>
                  <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                  <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                  <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
                </div>
              </button>
              <h6 className="font-semibold mt-2 text-center">Dark</h6>
            </div>
          </div>
        </div>
        <div>
          <h6 className="text-lg font-semibold">Font Size</h6>

          <p className="text-foreground/30 text-sm">
            Set the font size for the dashboard.
          </p>
        </div>
      </div>
      <Button className="mt-8">Update appearance</Button>
    </div>
  );
};

export default AppearanceSettings;
