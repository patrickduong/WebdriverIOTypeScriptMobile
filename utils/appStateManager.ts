import fs from "fs";
import path from "path";

interface AppState {
  package: string;
  activity: string;
  timestamp: number;
}

const STATE_PATH = path.resolve(__dirname, "../.appState.json");

export const appStateManager = {
  save: async (): Promise<void> => {
    const pkg = await driver.getCurrentPackage();
    const activity = await driver.getCurrentActivity();

    const state: AppState = {
      package: pkg,
      activity,
      timestamp: Date.now(),
    };

    fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
    console.log("[AppStateManager] State saved:", state);
  },

  restore: async (): Promise<boolean> => {
    if (!fs.existsSync(STATE_PATH)) {
      console.log("[AppStateManager] No saved app state to restore.");
      return false;
    }

    const state: AppState = JSON.parse(fs.readFileSync(STATE_PATH, "utf-8"));
    console.log("[AppStateManager] Restoring app state:", state);

    try {
      await driver.execute("mobile: shell", {
        command: `am start -n ${state.package}/${state.activity}`,
      });
      return true;
    } catch (err: any) {
      console.warn("[AppStateManager] Failed to restore state:", err.message);
      return false;
    }
  },
};
