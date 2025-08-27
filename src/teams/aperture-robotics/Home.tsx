import Header from "../aperture-robotics/components/Header.tsx";
import '@aws-amplify/ui-react/styles.css'
import logo from "../../assets/logo_aperture_robotics.webp"

const WelcomeMessage = () => {
  return (
    <div className="mainLogo">
      <center>
        <img src={logo} width="20%" />
        <h3>We are Aperture</h3>
      </center>

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
      <center><a href="https://drive.google.com/file/d/1T4abzoTBvbVDghAB3-lCEGDZv0f7vngr/view?usp=sharing">Spartanics Bylaws</a></center>

    </div >
  )
}



const Home = () => {
  return (
    <>
      <Header />
      <main>
        <WelcomeMessage />
      </main>
    </>

  );

};

export default Home;