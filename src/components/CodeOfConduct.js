import React, { useState } from "react"

const CodeOfConduct = () => {
    const [infection, setInfection] = useState("")
    const [buttonClicked, setButtonClicked] = useState(false)
    const buttonText = buttonClicked ? "ZOMBIES!!!" : "Dead Inside"

    const zombieAttack = () => {
    setInfection("You've been bitten!")
    setButtonClicked(true)
    }

    const style = {color: 'red'}; 

    return (
        <div className="content">
            <h1>Portland Junior Developers Code of Conduct</h1>
            <h2>Purpose</h2>
            <p>A primary goal of Portland Junior Developers is to be inclusive to the largest number of contributors, with the most varied and diverse backgrounds possible. As such, we are committed to providing a friendly, safe and welcoming environment for all, regardless of gender, sexual orientation, ability, ethnicity, socioeconomic status, and religion (or lack thereof).
                This code of conduct outlines our expectations for all those who participate in our community, as well as the consequences for unacceptable behavior.
                We invite all those who participate in Portland Junior Developers to help us create safe and positive experiences for everyone.</p>
            <h6>Open Source/Culture/Tech Citizenship</h6>
            <p>A supplemental goal of this Code of Conduct is to increase open source/culture/tech citizenship by encouraging participants to recognize and strengthen the relationships between our actions and their effects on our community.
                Communities mirror the societies in which they exist and positive action is essential to counteract the many forms of inequality and abuses of power that exist in society.
                If you see someone who is making an extra effort to ensure our community is welcoming, friendly, and encourages all participants to contribute to the fullest extent, we want to know.</p>
            <h6>Expected Behavior</h6>
            <p>The following behaviors are expected and requested of all community members:
                Participate in an authentic and active way. In doing so, you contribute to the health and longevity of this community.
                Exercise consideration and respect in your speech and actions.
                Attempt collaboration before conflict.
                Refrain from demeaning, discriminatory, or harassing behavior and speech.
                Be mindful of your surroundings and of your fellow participants. Alert community leaders if you notice a dangerous situation, someone in distress, or violations of this Code of Conduct, even if they seem inconsequential.
                Remember that community event venues may be shared with members of the public; please be respectful to all patrons of these locations.</p>
            <h6>Unacceptable Behavior</h6>
            <p>Unacceptable‭ ‬behaviors‭ ‬include:‭ ‬intimidating,‭ ‬harassing,‭ ‬abusive,‭ ‬discriminatory,‭ ‬derogatory‭ ‬or‭ ‬demeaning‭ ‬speech‭ ‬or‭ ‬actions‭ ‬by‭ ‬any‭ ‬participant‭ ‬in‭ ‬our‭ ‬community‭ ‬online,‭ ‬at‭ ‬all‭ ‬related‭ ‬events‭, ‬and‭ ‬in‭ ‬one-on-one‭ ‬communications‭ ‬carried‭ ‬out‭ ‬in‭ ‬the‭ ‬context‭ ‬of‭ ‬community‭ ‬business.‭ Jokes and attempts at humor that cross into this threshold are not permissible and we ask that attendees exercise appropriate discretion in moments of jest. Regardless of intention, being aggressive, mean, or degrading towards others is also off limits.
                We want Portland Junior Developer activities to remain safe and inclusive for individuals of all gender identities. Failing to refer to other people by their desired pronouns is transphobic and will not be tolerated.
                Harassment‭ ‬includes:‭ ‬harmful‭ ‬or‭ ‬prejudicial‭ ‬verbal‭ ‬or‭ ‬written‭ ‬comments‭ ‬related‭ ‬to‭ ‬gender,‭ ‬sexual‭ ‬orientation,‭ ‬race,‭ ‬religion,‭ ‬disability‭; ‬inappropriate‭ ‬use‭ ‬of‭ ‬nudity‭ ‬and/or‭ ‬sexual‭ ‬images‭ ‬in‭ ‬public‭ ‬spaces‭ (‬including‭ ‬presentation‭ ‬slides‭); ‬deliberate‭ ‬intimidation,‭ ‬stalking‭ ‬or‭ ‬following‭; ‬harassing‭ ‬photography‭ ‬or‭ ‬recording‭; ‬sustained‭ ‬disruption‭ ‬of‭ ‬talks‭ ‬or‭ ‬other‭ ‬events‭; ‬inappropriate‭ ‬physical‭ ‬contact,‭ ‬and‭ ‬unwelcome‭ ‬sexual‭ ‬attention.
                Consequences of Unacceptable Behavior
                Unacceptable‭ ‬behavior‭ ‬from‭ ‬any‭ ‬community‭ ‬member,‭ ‬including‭ ‬sponsors‭ ‬and‭ ‬those‭ ‬with‭ ‬decision-making‭ ‬authority,‭ ‬will‭ ‬not‭ ‬be‭ ‬tolerated.
                Anyone‭ ‬asked‭ ‬to‭ ‬stop‭ ‬unacceptable‭ ‬behavior‭ ‬is‭ ‬expected‭ ‬to‭ ‬comply‭ ‬immediately. If‭ ‬a‭ ‬community‭ ‬member‭ ‬engages‭ ‬in‭ ‬unacceptable‭ ‬behavior,‭ the‭ ‬community‭ ‬organizers‭ ‬may‭ ‬take‭ ‬any‭ ‬action‭ ‬they‭ ‬deem‭ ‬appropriate,‭ ‬up‭ ‬to‭ ‬and‭ ‬including‭ ‬a‭ ‬temporary‭ ‬ban‭ ‬or‭ ‬permanent‭ ‬expulsion‭ ‬from‭ ‬the‭ ‬community‭ ‬without‭ ‬warning‭ (‬and‭ ‬without‭ ‬refund‭ ‬in‭ ‬the‭ ‬case‭ ‬of‭ ‬a‭ ‬paid‭ ‬event‭)‬.</p>
            <h6>Prohibited Items</h6>
            <p>Weapons, drugs, and items that possess hypersexualized, violent, and/or hateful imagery or messaging are prohibited at Portland Junior Developer events.
                Consequences of Unacceptable Behavior
                Unacceptable behavior from any community member, including sponsors and those with decision-making authority, will not be tolerated.
                Anyone asked to stop unacceptable behavior is expected to comply immediately.
                If a community member engages in unacceptable behavior, the community organizers may take any action they deem appropriate, up to and including a temporary ban or permanent expulsion from the community without warning (and without refund in the case of a paid event).</p>
            <h6>Reporting Guidelines</h6>
            <p>If you are subject to or witness unacceptable behavior, or have any other concerns, please notify a community organizer as soon as possible.
                Reporting guidelines can be found here: Portland Junior Developers Reporting Guidelines
                Violations of this Code of Conduct can be reported via this form: Report Abuse Form
                Additionally, community organizers are available to help community members engage with local law enforcement or to otherwise help those experiencing unacceptable behavior feel safe. In the context of in-person events, organizers will also provide escorts as desired by the person experiencing distress.</p>
            <h6>Addressing Grievances</h6>
            <p>If you feel you have been falsely or unfairly accused of violating this Code of Conduct, you should notify a Portland Junior Developers organizer with a concise description of your grievance.</p>
            <h6>Scope</h6>
            <p>We expect all community participants (contributors, paid or otherwise; sponsors; and other guests) to abide by this Code of Conduct in all community venues -- online and in-person -- as well as in all one-on-one communications pertaining to community business.
                This code of conduct and its related procedures also applies to unacceptable behavior occurring outside the scope of community activities when such behavior has the potential to adversely affect the safety and well-being of community members.</p>
            <h6>Contact info</h6>
            <p>Kelly at (541)539-0439 / pdx.jr.devs@gmail.com.com</p>
            <h6>License and attribution</h6>
            <p>The Citizen Code of Conduct is distributed by Stumptown Syndicate under a Creative Commons Attribution-ShareAlike license.
                Portions of text derived from the Django Code of Conduct and the Geek Feminism Anti-Harassment Policy.
                Revision 2.3. Posted 6 March 2017.
                Revision 2.2. Posted 4 February 2016.
                Revision 2.1. Posted 23 June 2014.
                Revision 2.0, adopted by the Stumptown Syndicate board on 10 January 2013. Posted 17 March 2013.
            </p>
        </div>
    )
}

export default CodeOfConduct