import reactLogo from "./assets/react.svg";
import tsLogo from "./assets/ts-logo.svg";
import viteLogo from "/vite.svg";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileSignature, Github, Heart } from "lucide-react";
import { Terminal } from "lucide-react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-6 p-4 relative">
      <div className="flex items-center justify-end w-[90%] absolute top-10">
        <a
          href="https://github.com/angelitolm/shadcn-ui-react-template"
          target="_blank"
          className="inline-flex gap-2 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4"
        >
          <Github />
          <span className="font-bold">GitHub</span>
          <Heart style={{ color: "red" }} />
        </a>
      </div>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        Vite + React + TypeScript + Shadcn UI
      </h1>

      <Alert className="w-[380px] md:w-[480px] 2xl:w-[480px]">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Note!</AlertTitle>
        <AlertDescription>
          <span className="hover:underline">
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              style={{ color: "rgb(2, 132, 199" }}
            >
              Shadcn UI is
            </a>
          </span>
          &nbsp;a Re-usable components built using Radix UI and Tailwind CSS
        </AlertDescription>
      </Alert>

      <div className="w-[380px] md:w-[480px] md:min-w-[480px]">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Template</CardTitle>
            <CardDescription>
              Minimalist Design and Basic Components.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:w-[480px] md:min-w-[480px]">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <FileSignature />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Get started</p>
                <div className="text-sm text-muted-foreground">
                  <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex items-center justify-center gap-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src={tsLogo} className="logo typescript" alt="TypeScript logo" />
        </a>
      </div>

      <p className="read-the-docs text-center">
        Click on the Vite, React and TypeScript logos to learn more
      </p>
    </div>
  );
}

export default App;
