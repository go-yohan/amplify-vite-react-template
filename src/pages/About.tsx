import logo_aperture_robotics from "../assets/logo_aperture_robotics.webp";
import logo_spartantech from "../assets/placeholder.jpg";
import logo_sparking from "../assets/placeholder.jpg";
import logo_cyber_spartan_x from "../assets/placeholder.jpg";
import Header from "../components/Header.tsx";

const lst_teams_ftc = [
    { name: "Aperture Robotics", "logo": logo_aperture_robotics, uri: "/aperture-robotics" },
    { name: "Sparking", "logo": logo_sparking, uri: "/sparking" },
];

const lst_teams_fll = [
    { name: "Cyber Spartan X", logo: logo_cyber_spartan_x, uri: "/cyber-spartan-x" },
    { name: "Spartan Tech", logo: logo_spartantech, uri: "/spartan-tech" },
];

function Show({ team_name, logo, uri }) {
    return (
        <div className='container' style={{
            margin: '1em', alignContent: 'top', verticalAlign: 'top', backgroundColor: 'white', color: 'blue',
            width: '17em', height: '15em'
        }}>
            <a href={uri}>
                <h5>{team_name}</h5>
                <img src={logo} style={{ objectFit: 'contain', width: '100%', height: '50%' }} />
            </a>
        </div>
    )
}

const About = () => {
    return (
        <>
            <Header />
            <main>

                <div>
                    <center>
                        <h3>Our FTC Teams</h3>
                        <div className="flex">
                            {lst_teams_ftc.map((v) => {
                                return (
                                    <Show team_name={v.name} logo={v.logo} uri={v.uri} />
                                )
                            })}
                        </div>

                        <h3>Our FLL Teams</h3>
                        <div className="flex">
                            {lst_teams_fll.map((v) => {
                                return (
                                    <Show team_name={v.name} logo={v.logo} uri={v.uri} />
                                )
                            })}
                        </div>

                    </center>

                </div>
            </main>
        </>

    );
};

export default About;
