import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "../components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>Home page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/">About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{" "}
        <code className={'code'}>pages/home.jsx</code>
      </p>
    </MainLayout>
  );
}
