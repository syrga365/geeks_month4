import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import User from "../../components/user/User";
import Course from "../../components/course/Course";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Footer/>
            <Button title={'Close'}/>
            <Button title={'Open'}/>
            <Button title={'Save'}/>
            <Button title={'Delete'}/>
            <Button title={'Done'}/>
            <User name={'Syrga'} age={'18'}/>
            <Course direction={'Backend'} language={'Python'}/>
            <Course direction={'Frontend'} language={'JS'}/>
        </div>
    );
};

export default MainPage;