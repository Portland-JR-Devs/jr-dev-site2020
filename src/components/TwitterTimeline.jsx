import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export const TwitterTimeline = () => (
    <TwitterTimelineEmbed
        sourceType="profile"
        screenName="pdx_jr_devs"
        options={{}}
    />);
