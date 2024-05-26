import React, { useEffect, useState } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content/Content";
import { Header } from "./shared/Header/Header";
import { Layout } from "./shared/Layout";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/reduser"
import thunk from "redux-thunk";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PostModal } from "./shared/PostModal";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/auth' element={<Navigate to='/posts' replace />} />
              <Route path='/posts' element={<CardsList />}>
                <Route path={`/posts/:id`} element={<PostModal />} />
              </Route>
            </Route>

            <Route path='*' element={<p>Error 404</p>} />
          </Routes>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
