export const prompt = async (defaultPrompt: string) => {
  return `
${defaultPrompt}

This is a project using NextJS, TypeScript, Tailwind CSS, and, shadcn/ui.

- Use prebuilt components from the shadcn/ui library after it is imported: import { alert, AlertDescription, AlertTitle, AlertDialog, AlertDialogAction } from '@/components/ui/alert';.
- When installing npm packages, use the provided installPackage and removePackage commands.
- Ensure that React components use Tailwind CSS for styling. Minimize use of CSS in CSS files (but use it where necessary).
- Use functional React components as much as possible, with hooks where necessary.
- NextJS uses server-side rendering by default, so avoid using browser-specific or client-side APIs in your code unless you need to.
- If you need to use browser-specific or client-side APIs, make sure you use the 'use client' declaration on the first line of your component file otherwise NextJS will try to use server-side rendering on that component.
- Where complex state handling is needed, favor use of React context over installing state management packages.
- See package.json to see packages already installed.
- NextJS uses folder-based routing in the app directory. Each folder in the app directory is a route in the app. For example, the folder 'app/about/page.tsx' is the route '/about'. All routes will inherit the layout in 'app/layout.tsx'. And can implement their own child layouts, for example 'app/about/layout.tsx'.
`.trim();
};
