import Head from "next/head";
import Image from "next/image";

export default function PlacementProcess() {
  return (
    <>
      <section className="placement-section container">
        <div className="section-header">
          <h2>Different steps in conducting a placement drive.</h2>
        </div>

        <div className="row align-items-center">
          
          <div className="col-lg-7">
            <ul className="placement-steps">
              <li>
                <span className="step-count">01</span>
                <div>
                  <h5>Company Invitation</h5>
                  <p>
                    To start with the placement cell contacts the various
                    companies and invite for the campus drive.
                  </p>
                </div>
              </li>

              <li>
                <span className="step-count">02</span>
                <div>
                  <h5>Student Data Sharing</h5>
                  <p>
                    As it goes with the placement cell are approached by the
                    companies as in response for the invitation and thus the
                    details of the final year students details are shared as per
                    the requirement of the companies and the dates for placement
                    drive is finalized in a mutual agreed manner.
                  </p>
                </div>
              </li>

              <li>
                <span className="step-count">03</span>
                <div>
                  <h5>Campus Recruitment Activities</h5>
                  <p>
                    On the day of placement drive to carter the need of the
                    organization the necessary requirements for the
                    pre-placement talk, written test, online test, Group
                    Discussion and Interview are arranged at college.
                  </p>
                </div>
              </li>

              <li>
                <span className="step-count">04</span>
                <div>
                  <h5>Selection & Results</h5>
                  <p>
                    After the various short listing stage the students are
                    finally interviewed and the list of shortlisted candidate
                    are shared with the placement cell. After which the result
                    are announced by the placement office with the consent of
                    the organization.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="placement-image">
              <Image
                src="/images/kce/b1-940x360-1-435x280.webp"
                alt="Campus Placement Interaction"
                width={500}
                height={360}
                className="img-fluid"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
