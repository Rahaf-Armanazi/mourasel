import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountUp from 'react-countup'; // For counter animation

const WhyChoose = () => {
    const [whyChooseData, setWhyChooseData] = useState({
        title: '',
        subtitle: '',
        left_button_link: '',
        left_button_image: '',
        right_button_link: '',
        right_button_image: '',
        left_block_image: '',
        left_block_value: '',
        left_block_title: '',
        center_block_image: '',
        center_block_value: '',
        center_block_title: '',
        right_block_image: '',
        right_block_value: '',
        right_block_title: ''
    });

    useEffect(() => {
        const fetchWhyChooseData = async () => {
            try {
                const response = await axios.get('/api/why-choose');
                setWhyChooseData(response.data);
            } catch (error) {
                console.error('Error fetching why choose data:', error);
            }
        };

        fetchWhyChooseData();
    }, []);

    return (
        <>
            {/* tp-choose-area-start */}
            <div 
                className="tp-choose__area pt-120 pb-90" 
                style={{ backgroundImage: `url(/assets/frontend/img/choose/choose-bg.png)` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-choose__title-box text-center">
                                <h3 className="tp-section-title text-white mb-20">
                                    {whyChooseData.title}
                                </h3>
                                <h5 className="tp-choose__subtitle text-white">
                                    {whyChooseData.subtitle}
                                </h5>
                            </div>
                            <div className="tp-choose__thumb-box d-flex justify-content-center">
                                <div className="tp-choose__thumb-sm">
                                    <a href={whyChooseData.left_button_link}>
                                        <img src={whyChooseData.left_button_image} alt="" />
                                    </a>
                                </div>
                                <div className="tp-choose__thumb-sm">
                                    <a href={whyChooseData.right_button_link}>
                                        <img src={whyChooseData.right_button_image} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-choose-area-end */}

            {/* tp-counter-area-start */}
            <div className="tp-counter__area">
                <div className="tp-counter__theme-bg"></div>
                <div className="tp-counter__grey-bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="tp-counter__item d-flex">
                                <div className="tp-counter__icon">
                                    <img src={whyChooseData.left_block_image} alt="" />
                                </div>
                                <div className="tp-counter__content">
                                    <span>
                                        <CountUp 
                                            end={parseInt(whyChooseData.left_block_value)} 
                                            duration={2.5}
                                        />
                                    </span>
                                    <p>{whyChooseData.left_block_title}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="tp-counter__item d-flex">
                                <div className="tp-counter__icon">
                                    <img src={whyChooseData.center_block_image} alt="" />
                                </div>
                                <div className="tp-counter__content">
                                    <span>
                                        <CountUp 
                                            end={parseInt(whyChooseData.center_block_value)} 
                                            duration={2.5}
                                        />
                                    </span>
                                    <p>{whyChooseData.center_block_title}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="tp-counter__item d-flex">
                                <div className="tp-counter__icon">
                                    <img src={whyChooseData.right_block_image} alt="" />
                                </div>
                                <div className="tp-counter__content">
                                    <span>
                                        <CountUp 
                                            end={parseInt(whyChooseData.right_block_value)} 
                                            duration={2.5}
                                        />
                                    </span>
                                    <p>{whyChooseData.right_block_title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-counter-area-end */}
        </>
    );
};

export default WhyChoose;
