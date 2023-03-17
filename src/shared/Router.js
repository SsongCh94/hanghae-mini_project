import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mypage from "../pages/Mypage";

const Router = () => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    return (
        <BrowserRouter>
            <AppContainer width={containerWidth} height={containerHeight}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail" element={<Detail />} />
                    <Route path="/mypage" element={<Mypage />} />
                    {/* 아이디로 페이지를 들어가야 하지만 임시로 일단 그냥 id없이 페이지 링크 확인 */}
                    {/* <Route path="/mypage:id" element={<Mypage />} /> */}
                </Routes>
                <Footer />
            </AppContainer>
        </BrowserRouter>
    )
}


export default Router;

const AppContainer = styled.div`
    margin: 0px;
    width: ${({ width }) => width? width: '100vw'};
    min-height: 100vh;
`