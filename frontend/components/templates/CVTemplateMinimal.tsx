const CVTemplateMinimal = () => <div style={{
  width: 500,
  height: 700,
  backgroundColor: "white",
  fontFamily: "'Helvetica Neue', Arial, sans-serif",
  padding: "36px 40px",
  display: "flex",
  flexDirection: "column",
  gap: 0
}}>
    <div style={{
    marginBottom: 16
  }}>
      <p style={{
      fontSize: 26,
      fontWeight: 800,
      color: "#0f172a",
      margin: 0,
      letterSpacing: "-0.03em"
    }}>Sanne Verhoeven</p>
      <p style={{
      fontSize: 11,
      color: "#64748B",
      margin: "4px 0 12px",
      fontWeight: 400
    }}>Marketing Director</p>
      <div style={{
      height: 1,
      backgroundColor: "#E2E8F0"
    }} />
      <p style={{
      fontSize: 8,
      color: "#94A3B8",
      margin: "8px 0 0"
    }}>sanne@cvlabz.nl &nbsp;·&nbsp; +31 6 55 44 33 22 &nbsp;·&nbsp; Utrecht, NL &nbsp;·&nbsp; linkedin.com/in/sanneverhoeven</p>
    </div>
    {[{
    title: "Summary",
    content: <p style={{
      fontSize: 8.5,
      color: "#475569",
      lineHeight: 1.65,
      margin: 0
    }}>
            Marketing director with 10+ years driving growth for consumer and B2B brands. Proven record of scaling acquisition channels, building high-performing teams, and turning data into campaigns that convert.
          </p>
  }, {
    title: "Experience",
    content: <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
            {[{
        role: "VP Marketing",
        co: "Coolblue",
        dates: "2021 – Present",
        detail: "Built performance marketing org from 3 to 18 people. Grew paid channel ROAS by 2.4× in 18 months. Launched brand refresh across NL and BE."
      }, {
        role: "Head of Growth",
        co: "Picnic",
        dates: "2018 – 2021",
        detail: "Owned all acquisition and lifecycle marketing. Scaled email list from 200K to 1.4M subscribers. Reduced CAC by 35% through channel diversification."
      }, {
        role: "Marketing Manager",
        co: "Zalando NL",
        dates: "2015 – 2018",
        detail: "Managed seasonal campaigns with €4M budget. Improved ROAS 60% YoY through creative testing."
      }].map(e => <div key={e.co}>
                <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline"
        }}>
                  <span style={{
            fontWeight: 700,
            fontSize: 9,
            color: "#0f172a"
          }}>{e.role}</span>
                  <span style={{
            fontSize: 7.5,
            color: "#94A3B8"
          }}>{e.dates}</span>
                </div>
                <p style={{
          fontSize: 8.5,
          color: "#3B82F6",
          fontWeight: 600,
          margin: "1px 0 4px"
        }}>{e.co}</p>
                <p style={{
          fontSize: 7.5,
          color: "#64748B",
          lineHeight: 1.55,
          margin: 0
        }}>{e.detail}</p>
              </div>)}
          </div>
  }, {
    title: "Education",
    content: <div>
            <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
              <span style={{
          fontWeight: 700,
          fontSize: 9,
          color: "#0f172a"
        }}>MSc Marketing</span>
              <span style={{
          fontSize: 7.5,
          color: "#94A3B8"
        }}>2013 – 2015</span>
            </div>
            <p style={{
        fontSize: 8.5,
        color: "#3B82F6",
        margin: "1px 0",
        fontWeight: 600
      }}>Erasmus University Rotterdam</p>
          </div>
  }, {
    title: "Skills",
    content: <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 5
    }}>
            {["SEO / SEM", "Paid Social", "Email Marketing", "Brand Strategy", "Analytics", "A/B Testing", "Team Leadership", "Budget Management"].map(s => <span key={s} style={{
        fontSize: 7.5,
        color: "#475569",
        backgroundColor: "#F8FAFC",
        border: "1px solid #E2E8F0",
        borderRadius: 3,
        padding: "2px 7px"
      }}>{s}</span>)}
          </div>
  }].map(sec => <div key={sec.title} style={{
    marginTop: 16
  }}>
        <div style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }}>
          <div style={{
        width: 3,
        height: 12,
        backgroundColor: "#3B82F6",
        borderRadius: 2,
        flexShrink: 0
      }} />
          <p style={{
        fontSize: 8,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#0f172a",
        margin: 0
      }}>{sec.title}</p>
        </div>
        {sec.content}
      </div>)}
  </div>;

export default CVTemplateMinimal;
