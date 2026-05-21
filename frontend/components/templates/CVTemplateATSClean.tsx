const CVTemplateATSClean = () => <div style={{
  width: 500,
  height: 700,
  backgroundColor: "white",
  fontFamily: "'Times New Roman', serif",
  padding: "32px 36px",
  display: "flex",
  flexDirection: "column",
  gap: 0
}}>
    {/* Header */}
    <div style={{
    textAlign: "center",
    marginBottom: 12
  }}>
      <p style={{
      fontWeight: 700,
      fontSize: 20,
      color: "#111",
      margin: 0,
      fontFamily: "Arial, sans-serif",
      letterSpacing: "-0.01em"
    }}>Jeroen Timmer</p>
      <p style={{
      fontSize: 8.5,
      color: "#555",
      margin: "5px 0 0",
      fontFamily: "Arial, sans-serif"
    }}>
        jeroen@cvlabz.nl &nbsp;|&nbsp; +31 6 99 88 77 66 &nbsp;|&nbsp; Eindhoven, NL &nbsp;|&nbsp; linkedin.com/in/jeroentimmer
      </p>
    </div>
    <div style={{
    height: 1.5,
    backgroundColor: "#111",
    marginBottom: 12
  }} />
    {[{
    title: "PROFESSIONAL SUMMARY",
    content: <p style={{
      fontSize: 8.5,
      color: "#333",
      lineHeight: 1.6,
      margin: 0,
      fontFamily: "Arial, sans-serif"
    }}>
            Results-driven Financial Analyst with 8 years of experience in corporate finance, FP&A, and investment analysis. Proven ability to build financial models, drive cost optimization, and present insights to C-suite stakeholders at Dutch and international firms.
          </p>
  }, {
    title: "EXPERIENCE",
    content: <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontFamily: "Arial, sans-serif"
    }}>
            {[{
        role: "Senior Financial Analyst",
        co: "Shell · Rotterdam",
        dates: "Mar 2020 – Present",
        bullets: ["Built DCF and LBO models for €200M+ capital allocation decisions.", "Reduced monthly close process from 8 days to 3 days through automation.", "Presented quarterly financial reviews to CFO and board of directors."]
      }, {
        role: "Financial Analyst",
        co: "KPMG · Amsterdam",
        dates: "Jun 2017 – Feb 2020",
        bullets: ["Supported M&A due diligence on 12 transactions totaling €1.8B.", "Developed 3-statement financial models for PE clients.", "Managed junior analyst team of 4 across two project streams."]
      }, {
        role: "Junior Analyst",
        co: "ABN AMRO · Amsterdam",
        dates: "Sep 2015 – May 2017",
        bullets: ["Prepared weekly risk reports for retail banking portfolio.", "Maintained regulatory reporting dashboards (Basel III compliance)."]
      }].map(e => <div key={e.co}>
                <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
                  <span style={{
            fontWeight: 700,
            fontSize: 9,
            color: "#111"
          }}>{e.role}</span>
                  <span style={{
            fontSize: 8,
            color: "#555"
          }}>{e.dates}</span>
                </div>
                <p style={{
          fontSize: 8.5,
          color: "#555",
          margin: "1px 0 4px",
          fontStyle: "italic"
        }}>{e.co}</p>
                <ul style={{
          margin: 0,
          paddingLeft: 14
        }}>
                  {e.bullets.map(b => <li key={b} style={{
            fontSize: 7.5,
            color: "#333",
            lineHeight: 1.55
          }}>{b}</li>)}
                </ul>
              </div>)}
          </div>
  }, {
    title: "EDUCATION",
    content: <div style={{
      fontFamily: "Arial, sans-serif"
    }}>
            <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
              <span style={{
          fontWeight: 700,
          fontSize: 9,
          color: "#111"
        }}>MSc Finance</span>
              <span style={{
          fontSize: 8,
          color: "#555"
        }}>2013 – 2015</span>
            </div>
            <p style={{
        fontSize: 8.5,
        color: "#555",
        margin: "1px 0",
        fontStyle: "italic"
      }}>VU Amsterdam · Thesis: Capital Structure in Dutch SMEs</p>
          </div>
  }, {
    title: "SKILLS",
    content: <p style={{
      fontSize: 8,
      color: "#333",
      margin: 0,
      fontFamily: "Arial, sans-serif",
      lineHeight: 1.6
    }}>
            <strong>Financial Modeling</strong> · <strong>Excel / VBA</strong> · <strong>Power BI</strong> · <strong>SQL</strong> · <strong>Python (pandas)</strong> · Budgeting · FP&amp;A · M&amp;A Analysis · Bloomberg Terminal · IFRS / GAAP
          </p>
  }].map(sec => <div key={sec.title} style={{
    marginBottom: 12
  }}>
        <p style={{
      fontSize: 8,
      fontWeight: 700,
      letterSpacing: "0.1em",
      color: "#555",
      margin: "0 0 5px",
      fontFamily: "Arial, sans-serif",
      textTransform: "uppercase" as const
    }}>{sec.title}</p>
        <div style={{
      height: 1,
      backgroundColor: "#CCCCCC",
      marginBottom: 8
    }} />
        {sec.content}
      </div>)}
  </div>;

export default CVTemplateATSClean;
