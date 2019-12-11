import React from "react";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className="footer">
          <div className="row">
       

            <div col-md-6>
              <p
                style={{
                  marginTop: "20px",
                  color: " #FFF",
                 textAlign:"center"
                }}
              >
                Copyright @ 2019 Credentek Software & Consultancy Private
                Limited All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;