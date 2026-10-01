## 💻 Replaying the Captured Run inside VS Code

If you prefer a graphical interface rather than the command-line GDB to scrub through time, follow these steps:

1. Install the **Midas** or **Native Debug** extension in VS Code.
2. Extract the downloaded `time-travel-trace.tar.gz` artifact into your project directory.
3. Add a time-travel target to your `.vscode/launch.json` file:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Time-Travel Replay",
      "type": "gdb",
      "request": "launch",
      "target": "\${workspaceRoot}/node_modules/.bin/jest",
      "cwd": "\${workspaceRoot}",
      "gdbpath": "rr",
      "autorun": [
        "replay",
        "local/share/rr/latest-trace-directory-name"
      ]
    }
  ]
}
```
4. Put breakpoints anywhere in your code, hit **F5**, and use the VS Code debug interface to step backward and forward through the broken CI state.
