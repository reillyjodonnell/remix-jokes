import { Outlet } from 'remix';

export default function JokesRoute() {
  return (
    <>
      <span>Jokes😂😂</span>
      <main>
        <Outlet />
      </main>
    </>
  );
}
