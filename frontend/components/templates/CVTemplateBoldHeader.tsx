const CVTemplateBoldHeader = () => <div style={{
  width: 500,
  height: 700,
  backgroundColor: "white",
  fontFamily: "'Arial', sans-serif",
  display: "flex",
  flexDirection: "column"
}}>
    {/* Full-width gradient header */}
    <div style={{
    background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
    padding: "26px 28px 22px"
  }}>
      <p style={{
      color: "white",
      fontWeight: 800,
      fontSize: 22,
      margin: 0,
      letterSpacing: "-0.02em"
    }}>Mark de Jong</p>
      <p style={{
      color: "rgba(255,255,255,0.8)",
      fontSize: 10,
      margin: "4px 0 14px",
      fontWeight: 500
    }}>Senior Software Engineer</p>
      <div style={{
      display: "flex",
      gap: 18,
      flexWrap: "wrap"
    }}>
        <span style={{
        color: "rgba(255,255,255,0.75)",
        fontSize: 8
      }}>mark@cvlabz.nl</span>
        <span style={{
        color: "rgba(255,255,255,0.75)",
        fontSize: 8
      }}>+31 6 22 33 44 55</span>
        <span style={{
        color: "rgba(255,255,255,0.75)",
        fontSize: 8
      }}>Den Haag, NL</span>
        <span style={{
        color: "rgba(255,255,255,0.75)",
        fontSize: 8
      }}>github.com/markdejong</span>
      </div>
    </div>
    {/* Two-column body */}
    <div style={{
    flex: 1,
    display: "flex",
    padding: "20px 0 0",
    gap: 0
  }}>
      {/* Left 60%: Experience */}
      <div style={{
      width: "60%",
      padding: "0 20px 20px 24px",
      borderRight: "1px solid #F1F5F9"
    }}>
        <p style={{
        fontSize: 8,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#2563EB",
        margin: "0 0 12px"
      }}>Experience</p>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 13
      }}>
          {[{
          role: "Senior Software Engineer",
          co: "ASML",
          dates: "2022 – Present",
          stack: "Python, Rust, C++",
          detail: "Built high-performance data pipelines for semiconductor lithography control systems. Reduced processing latency by 40%."
        }, {
          role: "Software Engineer",
          co: "Philips",
          dates: "2019 – 2022",
          stack: "Java, Spring Boot, Kafka",
          detail: "Developed microservices for healthcare IoT platform. Served 2M+ connected devices across 35 countries."
        }, {
          role: "Junior Developer",
          co: "Rabobank",
          dates: "2017 – 2019",
          stack: "Node.js, React, PostgreSQL",
          detail: "Built internal banking dashboards and automated reporting tools used by 500+ analysts."
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
              <div style={{
            display: "flex",
            gap: 6,
            alignItems: "center",
            margin: "2px 0 4px"
          }}>
                <p style={{
              fontSize: 8.5,
              color: "#2563EB",
              fontWeight: 600,
              margin: 0
            }}>{e.co}</p>
                <span style={{
              color: "#CBD5E1",
              fontSize: 7
            }}>·</span>
                <p style={{
              fontSize: 7.5,
              color: "#94A3B8",
              margin: 0
            }}>{e.stack}</p>
              </div>
              <p style={{
            fontSize: 7.5,
            color: "#64748B",
            lineHeight: 1.55,
            margin: 0
          }}>{e.detail}</p>
            </div>)}
        </div>
      </div>
      {/* Right 40%: Skills + Education */}
      <div style={{
      width: "40%",
      padding: "0 20px 20px"
    }}>
        <div style={{
        marginBottom: 16
      }}>
          <p style={{
          fontSize: 8,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#2563EB",
          margin: "0 0 10px"
        }}>Technical Skills</p>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 5
        }}>
            {[["Languages", "Python, Java, Rust, JS"], ["Frameworks", "Spring, React, FastAPI"], ["Cloud", "AWS, GCP, Docker"], ["Databases", "PostgreSQL, Redis"], ["Tools", "Git, CI/CD, Kubernetes"]].map(([cat, skills]) => <div key={String(cat)}>
                <span style={{
              fontSize: 7.5,
              fontWeight: 700,
              color: "#475569"
            }}>{String(cat)}: </span>
                <span style={{
              fontSize: 7.5,
              color: "#64748B"
            }}>{String(skills)}</span>
              </div>)}
          </div>
        </div>
        <div style={{
        marginBottom: 16
      }}>
          <p style={{
          fontSize: 8,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#2563EB",
          margin: "0 0 10px"
        }}>Education</p>
          <p style={{
          fontWeight: 700,
          fontSize: 9,
          color: "#0f172a",
          margin: 0
        }}>BSc Computer Science</p>
          <p style={{
          fontSize: 8.5,
          color: "#2563EB",
          fontWeight: 600,
          margin: "2px 0"
        }}>TU Eindhoven</p>
          <p style={{
          fontSize: 7.5,
          color: "#94A3B8",
          margin: 0
        }}>2013 – 2017</p>
        </div>
        <div>
          <p style={{
          fontSize: 8,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#2563EB",
          margin: "0 0 8px"
        }}>Certifications</p>
          <p style={{
          fontSize: 7.5,
          color: "#64748B",
          margin: "0 0 4px"
        }}>AWS Certified Solutions Architect</p>
          <p style={{
          fontSize: 7.5,
          color: "#64748B",
          margin: "0 0 4px"
        }}>Google Cloud Professional</p>
          <p style={{
          fontSize: 7.5,
          color: "#64748B",
          margin: 0
        }}>Certified Kubernetes Administrator</p>
        </div>
      </div>
    </div>
  </div>;

export default CVTemplateBoldHeader;
