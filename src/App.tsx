import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tsLogo from "./assets/ts-logo.svg";
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
import { cn } from "@/lib/utils";
import { FileSignature } from "lucide-react";
import { Terminal } from "lucide-react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Vite + React + TypeScript + Shadcn UI
      </h1>

      <Alert className="w-[480px]">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Note!</AlertTitle>
        <AlertDescription>
          Shadcn UI is a Re-usable components built using Radix UI and Tailwind
          CSS
        </AlertDescription>
      </Alert>

      <Card className={cn("w-[480px]", "min-w-[480]")}>
        <CardHeader>
          <CardTitle>Template</CardTitle>
          <CardDescription>Minimalist Design and Basic Components.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <FileSignature />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Get started
              </p>
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
            count is {count}
          </Button>
        </CardFooter>
      </Card>

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

      <p className="read-the-docs">
        Click on the Vite, React and TypeScript logos to learn more
      </p>
    </div>
  );
}

export default App;
