import { refreshUser } from "./redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../src/pages/RegisterPage/RegisterPage")
);
const LoginPage = lazy(() => import("../src/pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../src/pages/ContactsPage/ContactsPage")
);
const NotFoundPage = lazy(() =>
  import("../src/pages/NotFoundPage/NotFoundPage")
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={<RegistrationPage />}
                    redirectTo="/"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<LoginPage />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    component={<ContactsPage />}
                    redirectTo="/login"
                  />
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      )}
    </div>
  );
}
