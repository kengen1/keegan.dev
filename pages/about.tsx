import React from "react";
import { Window } from "@/components/Window";
import { ContentContainer } from "@/components/Container";
import { SectionDivider } from "@/components/Divider";
import { ImageSlideshow } from "@/components/Images";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";
import UnorderedList from "@/components/UnorderedList";
import { useRedirectHome } from "@/hooks/router";

const AboutPage: React.FC = () => {
    const hobbiesImages = [
        "/images/film/IMG_1.JPG",
        "/images/film/IMG_2.jpeg",
        "/images/film/IMG_3.jpeg",
        "/images/film/IMG_4.JPG",
        "/images/film/IMG_5.jpeg",
        "/images/film/IMG_6.jpeg",
        "/images/film/IMG_7.jpeg",
        "/images/film/IMG_8.JPG",
        "/images/film/IMG_9.jpeg",
        "/images/film/IMG_10.jpeg",
    ];
    
    const redirectToHome = useRedirectHome();

    return (
        
        <Window>
            <SectionDivider text="About Me" />
            <ContentContainer>
            <p>Hi, I'm Keegan 👋</p>
            <p>
                I am a Software Engineer at Cochlear and a recent computer science graduate from  
                Western Sydney University (WSU).
            </p>
            
            <p>
                I really enjoy working on large-scale systems where efficiency, scalability, and optimisation are key.  
                I also love the process of thinking deeply about complex problems, mapping out solutions, and bringing them to life through code.
            </p>
            
            <p>
                Beyond my own growth, I care deeply about sharing the knowledge I've accumulated with others. Whether through 
                mentoring, collaborating with peers, or writing about my learnings, I believe deeply in the concept of <em>"paying it forward"</em> to help others navigate their own journey.
            </p>
            </ContentContainer>

            <SectionDivider text="Hobbies & Interests" />
            <ContentContainer>
                <UnorderedList>
                    <li>🎬 Film Photography</li>
                    <li>🎶 Movies & Music – Big fan of film soundtracks</li>
                    <li>⌨️ Custom PC Builds & Keyboards</li>
                    <li>🍜 Food & Travel – Always on a quest to discover the best local eats</li>
                    <li>📖 Reading & Philosophy</li>
                    <li>🏌️‍♂️ Golf – A love-hate relationship</li>
                </UnorderedList>
            </ContentContainer>

            <SectionDivider text="Film Photography" />
                <ContentContainer>
                    <ImageSlideshow images={hobbiesImages} />
                </ContentContainer>

            <SectionDivider text="What I'm Listening to While Debugging" />
            <ContentContainer>
                <SpotifyEmbed 
                    playlistUrl="https://open.spotify.com/embed/playlist/4NyALg5gw8ZjtW1LgsMEYf?utm_source=generator"
                    width="100%"
                    height={420}
                    theme="0"
                />
            </ContentContainer>
        </Window>
    );
};

export default AboutPage;