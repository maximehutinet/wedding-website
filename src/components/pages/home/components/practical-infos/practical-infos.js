import {useTranslation} from "react-i18next";
import './practical-infos.scss'
import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import FullWidthImage from "../../../../common/full-width-image/FullWidthImage";
import giftImage from "../../../../../img/gift.jpg";
import dressCodeImage from "../../../../../img/dess_code.jpeg";

function PracticalInfos() {
    const {t} = useTranslation('common');
    return (
        <div>
            <div id="shuttle-infos-wrapper">
                <h2>{t('practical_infos.shuttle_info_title')}</h2>
                <p>
                    {t('practical_infos.shuttle_info_content_1')}
                    <br/>
                    <br/>
                    {t('practical_infos.shuttle_info_content_2')}
                </p>
            </div>
            <hr/>
            <div id="where-do-we-meet-wrapper">
                <h2>{t('practical_infos.where_do_we_meet')}</h2>
                <div id="meeting-point">
                    {t('practical_infos.in_front_of')} <a href="https://goo.gl/maps/di9HkMD8HftHQcMA8" target="_blank"
                                                          rel="noreferrer">Banque Populaire
                    Auvergne Rhône Alpes - 331 Rte des Grandes Alpes, 74220 La Clusaz</a>
                    <strong>{t('practical_infos.meeting_date_time')}</strong>
                </div>
                <div className="iframe-wrapper">
                    <iframe
                        title="Meeting point"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11105.071772798305!2d6.4267398!3d45.9059525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd8e14290584dc87!2sBanque%20Populaire%20Auvergne%20Rh%C3%B4ne%20Alpes!5e0!3m2!1sfr!2sfr!4v1655921744472!5m2!1sfr!2sfr"
                    ></iframe>
                </div>
            </div>
            <hr/>
            <div id="where-can-i-park-wrapper">
                <h2>{t('practical_infos.parking_title')}</h2>
                <p>
                    {t('practical_infos.parking_content_1')} <a href="https://goo.gl/maps/jKkJfY3QEHWQpKXG9"
                                                                target="_blank" rel="noreferrer">Parking centre
                    village</a>. {t('practical_infos.parking_content_2')}
                </p>
                <div className="iframe-wrapper">
                    <iframe
                        title="Parking"
                        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d674.315902666257!2d6.425930833412189!3d45.90532484336883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x478bf1ae18f898ed%3A0xf52bf1803d8a3f36!2sParking%20centre%20village%2C%2033%20Rte%20de%20l&#39;%C3%89tale%2C%2074220%20La%20Clusaz!3m2!1d45.9049573!2d6.4256395!4m5!1s0x478c10913c165359%3A0xfd8e14290584dc87!2sBanque%20Populaire%20Auvergne%20Rh%C3%B4ne%20Alpes%2C%20Route%20des%20Grandes%20Alpes%2C%20La%20Clusaz!3m2!1d45.905948599999995!2d6.4267422!5e0!3m2!1sfr!2sfr!4v1655923207014!5m2!1sfr!2sfr"
                    ></iframe>
                </div>
            </div>
            <hr/>
            <div id="plan-wrapper">
                <h2>{t('practical_infos.plan_title')}</h2>
                <Timeline position="right">
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            {t('practical_infos.plan_time_pickup')}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>{t('practical_infos.plan_pickup')}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            {t('practical_infos.plan_time_ceremony')}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="primary"/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>{t('practical_infos.plan_ceremony')}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            {t('practical_infos.plan_time_shuttle_venue')}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="error"/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>{t('practical_infos.plan_shuttle_venue')}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            {t('practical_infos.plan_time_vin')}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="secondary"/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>{t('practical_infos.plan_vin')}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            {t('practical_infos.plan_time_dinner')}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="success"/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>{t('practical_infos.plan_dinner')}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            {t('practical_infos.plan_time_party')}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="warning"/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>{t('practical_infos.plan_party')}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            {t('practical_infos.plan_time_snacks')}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="primary"/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>{t('practical_infos.plan_snacks')}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            {t('practical_infos.plan_time_party_over')}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                        </TimelineSeparator>
                        <TimelineContent>{t('practical_infos.plan_party_over')}</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            <hr/>
            <div id="dress-code-wrapper">
                <h2>{t('practical_infos.dress_code_title')}</h2>
                <img src={dressCodeImage} alt="dress code"/>
                <div>
                    <p>
                        {t('practical_infos.dress_code_summary')}
                    </p>

                    <label>{t('practical_infos.dress_code_women')}</label>
                    <ul>
                        <li>{t('practical_infos.dress_code_women_shoes')}</li>
                        <li>{t('practical_infos.dress_code_women_dress')}</li>
                        <li>{t('practical_infos.dress_code_women_rompers')}</li>
                        <li>{t('practical_infos.dress_code_women_pant_suits')}</li>
                    </ul>

                    <label>{t('practical_infos.dress_code_men')}</label>
                    <ul>
                        <li>{t('practical_infos.dress_code_men_shirt')}</li>
                        <li>{t('practical_infos.dress_code_men_slacks')}</li>
                        <li>{t('practical_infos.dress_code_men_suit')}</li>
                    </ul>

                    <label>{t('practical_infos.dress_code_not_wear')}</label>
                    <ul>
                        <li>Jeans</li>
                        <li>Shorts</li>
                        <li>{t('practical_infos.dress_code_flip_flops')}</li>
                        <li>{t('practical_infos.dress_code_polo')}</li>
                        <li>T-shirts</li>
                        <li>{t('practical_infos.dress_code_hoodies')}</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div id="registry-wrapper">
                <h2>{t('practical_infos.registry_title')}</h2>
                <div>
                    <p>{t('practical_infos.registry_content')}</p>
                    <a className="btn" href="http://www.leetchi.com/c/sarah-maxs-wedding" target="_blank"
                       rel="noreferrer">{t('practical_infos.registry_btn')}</a>
                </div>
            </div>
            <FullWidthImage image={giftImage}/>
            <div id="welcome-drink-wrapper">
                <h2>{t('practical_infos.welcome_drink_title')}</h2>
                <p>{t('practical_infos.welcome_drink_content')}
                    <strong>{t('practical_infos.welcome_drink_time')}</strong> {t('practical_infos.welcome_drink_our_place')}
                    <br/><br/><a href="https://goo.gl/maps/z8x8CFZ22iySfYEi9" target="_blank" rel="noreferrer">639 Route
                        du Col de la Croix Fry, 74220 La Clusaz</a></p>
            </div>
            <hr/>
            <div id="plan-coming-days">
                <h2>{t('practical_infos.plan_coming_days_title')}</h2>
                <Timeline position="right">
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            Sept. 7
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="primary"/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>Welcome drink</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            Sept. 8
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="secondary"/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>{t('practical_infos.plan_coming_days_wedding_day')}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            Sept. 9
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>{t('practical_infos.plan_coming_days_rest_day')}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            Sept. 10
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="success"/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>{t('practical_infos.plan_coming_days_mtb_day')}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            Sept. 11
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="warning"/>
                        </TimelineSeparator>
                        <TimelineContent>{t('practical_infos.plan_coming_days_white_water_day')}</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            <hr/>
            <div id="la-clusaz-infos-wrapper">
                <h2>{t('practical_infos.la_clusaz_infos_title')}</h2>
                <p>{t('practical_infos.la_clusaz_infos_content')} <a
                    href="https://en.laclusaz.com/events-and-activities.html" target="_blank"
                    rel="noreferrer">{t('practical_infos.la_clusaz_infos_link')}</a></p>
            </div>
        </div>
    )
}

export default PracticalInfos;
