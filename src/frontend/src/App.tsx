import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import CapalabaPage from "./pages/suburbs/CapalabaPage";
import ChermsidePage from "./pages/suburbs/ChermsidePage";
import FortitudeValleyPage from "./pages/suburbs/FortitudeValleyPage";
import IndooroopillyPage from "./pages/suburbs/IndooroopillyPage";
import IpswichPage from "./pages/suburbs/IpswichPage";
import LoganCentralPage from "./pages/suburbs/LoganCentralPage";
import ManlyPage from "./pages/suburbs/ManlyPage";
import SouthBrisbanePage from "./pages/suburbs/SouthBrisbanePage";
import SpringwoodPage from "./pages/suburbs/SpringwoodPage";
import WynnumPage from "./pages/suburbs/WynnumPage";

const hashHistory = createHashHistory();

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Toaster position="top-right" richColors />
      <Layout>
        <Outlet />
      </Layout>
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

// ── Suburb Routes ────────────────────────────────────────────────────────────

const fortitudeValleyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/fortitude-valley",
  component: FortitudeValleyPage,
});

const southBrisbaneRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/south-brisbane",
  component: SouthBrisbanePage,
});

const chermsideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/chermside",
  component: ChermsidePage,
});

const capalabaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/capalaba",
  component: CapalabaPage,
});

const manlyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/manly",
  component: ManlyPage,
});

const wynnumRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/wynnum",
  component: WynnumPage,
});

const ipswichRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/ipswich",
  component: IpswichPage,
});

const loganCentralRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/logan-central",
  component: LoganCentralPage,
});

const springwoodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/springwood",
  component: SpringwoodPage,
});

const indooroopillyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/indooroopilly",
  component: IndooroopillyPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
  fortitudeValleyRoute,
  southBrisbaneRoute,
  chermsideRoute,
  capalabaRoute,
  manlyRoute,
  wynnumRoute,
  ipswichRoute,
  loganCentralRoute,
  springwoodRoute,
  indooroopillyRoute,
]);

const router = createRouter({
  routeTree,
  history: hashHistory,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
