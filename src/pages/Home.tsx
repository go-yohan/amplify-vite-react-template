import '@aws-amplify/ui-react/styles.css'
import logo from "../assets/spartanics.webp";
import logo_octopus from "../assets/octopus_energy.webp";
import logo_emerson from "../assets/Logo_Emerson.svg";
import logo_western from "../assets/Western-Midstream-Advancing-Energy_Color-768x124-1.webp";
import Header from "../components/Header.tsx";

const WelcomeMessage = () => {
  return (
    <div>
      <center>
        <img src={logo} width="20%" />
        <h3>We are Spartanics</h3></center>

      <p>
        Welcome! We formed Spartanics to support our children who are interested in Robotics,
        and are currently students at Junior High Schools and High Schools at Katy ISD in Texas.
        We aim to inspire our children and other students to pursue interests in Robotics
        and STEM-related fields.
      </p><p>
        We prepare students to compete in
        the <a href="https://www.firstinspires.org/robotics/ftc">First Tech Challenge</a> and <a href="https://info.firstinspires.org/first-in-show?utm_source=adwords&utm_term=%2Blego%20%2Bleague&utm_medium=ppc&utm_campaign=fir-bra&hsa_src=g&hsa_acc=3688876192&hsa_mt=b&hsa_net=adwords&hsa_cam=654200147&hsa_grp=49518348374&hsa_ad=655982770780&hsa_kw=%2Blego%20%2Bleague&hsa_tgt=kwd-342252918864&hsa_ver=3&gad=1&gclid=Cj0KCQjwib2mBhDWARIsAPZUn_kYBST1iYqQQZhzl6ugLIrWJvpnFY2osYgSfwEO-fdvI2yjvmcAPqwaAkPSEALw_wcB">
          First Lego League</a>,
        develop a platform whereby teams can spar their robots and help each other towards
        a better design, and raise coaches and mentors among the parents who will encourage
        students further in their journey to completing their design and to ready their robots
        to solve the various competition challenges.
      </p>
      <p>
        If you have any questions please contact us at <a href="mailto:info@spartanics.org">info@spartanics.org</a>.
      </p>
      <a href="https://drive.google.com/file/d/17888X62KTxcdfDhIEo0BYQYviKQ3TOs9/view?usp=sharing">Spartanics Bylaws</a>

    </div >
  )
}

const SponsorMessage = () => {
  return (
    <div>
      <center><h3>Our Sponsors</h3>
      </center>
      <p>We thank our Sponsors for their dedication to education and STEM initiatives.</p>

      <table width="100%" height="220px">
        <tr>
          <td width="300">
            <a href="https://emerson.com/en-us"><img height="100px" src={logo_emerson} /></a>
          </td>
          <td width="600">
            <a href="https://www.westernmidstream.com/"><img height="100px" src={logo_western} /></a>
          </td>
        </tr>
    </table>
    <table width="100%" height="220px">
        <tr>
          <td width="400" className="sponsor-text">
          Elitefix Renovations<br />
          (281) 612-3330
          </td>
        </tr>
      </table>

      <br />
      <p>Our past Sponsors.</p>

      <table width="40%">
        <tr>
          <td>
            <a href="https://octopusenergy.com/"><img height="200px" src={logo_octopus} /></a>
          </td>
        </tr>
      </table>
    </div>
  )
}

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <WelcomeMessage />
        <br />
        <hr />
        <br />
        <SponsorMessage />
      </main>
    </>

  );

};

export default Home;
