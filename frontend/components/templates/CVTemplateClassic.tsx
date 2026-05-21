const CVTemplateClassic = () => <div style={{
  width: 500,
  height: 700,
  display: "flex",
  fontFamily: "Georgia, serif"
}}>
    {/* Left sidebar */}
    <div style={{
    width: "35%",
    backgroundColor: "#1E3A5F",
    padding: "28px 18px",
    display: "flex",
    flexDirection: "column",
    gap: 18
  }}>
      <div>
        <div style={{
        width: 52,
        height: 52,
        borderRadius: "50%",
        backgroundColor: "#4A7AB5",
        marginBottom: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
          <span style={{
          color: "white",
          fontSize: 20,
          fontWeight: 700
        }}>D</span>
        </div>
        <p style={{
        color: "white",
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 1.2,
        margin: 0
      }}>Daan de Vries</p>
        <p style={{
        color: "#93C5FD",
        fontSize: 10,
        margin: "4px 0 0",
        fontWeight: 400
      }}>Product Manager</p>
      </div>
      <div style={{
      borderTop: "1px solid rgba(255,255,255,0.15)",
      paddingTop: 14
    }}>
        <p style={{
        color: "#93C5FD",
        fontSize: 8,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        margin: "0 0 10px"
      }}>Contact</p>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 7
      }}>
          <p style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: 8.5,
          margin: 0
        }}>daan@cvlabz.nl</p>
          <p style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: 8.5,
          margin: 0
        }}>+31 6 12 34 56 78</p>
          <p style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: 8.5,
          margin: 0
        }}>linkedin.com/in/daandevries</p>
          <p style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: 8.5,
          margin: 0
        }}>Amsterdam, NL</p>
        </div>
      </div>
      <div style={{
      borderTop: "1px solid rgba(255,255,255,0.15)",
      paddingTop: 14
    }}>
        <p style={{
        color: "#93C5FD",
        fontSize: 8,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        margin: "0 0 10px"
      }}>Skills</p>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 8
      }}>
          {[["Product Strategy", 90], ["Agile / Scrum", 85], ["Stakeholder Mgmt", 80], ["Data Analysis", 75], ["UX Research", 70]].map(([skill, pct]) => <div key={String(skill)}>
              <p style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: 8,
            margin: "0 0 3px"
          }}>{String(skill)}</p>
              <div style={{
            height: 3,
            backgroundColor: "rgba(255,255,255,0.15)",
            borderRadius: 2
          }}>
                <div style={{
              height: "100%",
              width: `${pct}%`,
              backgroundColor: "#60A5FA",
              borderRadius: 2
            }} />
              </div>
            </div>)}
        </div>
      </div>
      <div style={{
      borderTop: "1px solid rgba(255,255,255,0.15)",
      paddingTop: 14
    }}>
        <p style={{
        color: "#93C5FD",
        fontSize: 8,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        margin: "0 0 10px"
      }}>Languages</p>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 5
      }}>
          <p style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: 8.5,
          margin: 0
        }}>Dutch — Native</p>
          <p style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: 8.5,
          margin: 0
        }}>English — Fluent</p>
          <p style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: 8.5,
          margin: 0
        }}>German — Conversational</p>
        </div>
      </div>
    </div>
    {/* Right content */}
    <div style={{
    flex: 1,
    backgroundColor: "white",
    padding: "28px 22px",
    display: "flex",
    flexDirection: "column",
    gap: 18
  }}>
      <div>
        <p style={{
        fontSize: 8,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#1E3A5F",
        margin: "0 0 6px",
        borderBottom: "2px solid #1E3A5F",
        paddingBottom: 4
      }}>Experience</p>
        <div style={{
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}>
          <div>
            <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline"
          }}>
              <p style={{
              fontWeight: 700,
              fontSize: 9.5,
              color: "#111",
              margin: 0
            }}>Senior Product Manager</p>
              <p style={{
              fontSize: 8,
              color: "#6B7280",
              margin: 0
            }}>2021 – Present</p>
            </div>
            <p style={{
            fontSize: 8.5,
            color: "#1E3A5F",
            fontWeight: 600,
            margin: "2px 0 5px"
          }}>Adyen · Amsterdam</p>
            <p style={{
            fontSize: 8,
            color: "#4B5563",
            lineHeight: 1.5,
            margin: 0
          }}>Led roadmap for core payments platform serving 1M+ merchants globally. Increased checkout conversion by 15% through targeted UX improvements. Managed cross-functional team of 12 engineers and designers.</p>
          </div>
          <div>
            <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline"
          }}>
              <p style={{
              fontWeight: 700,
              fontSize: 9.5,
              color: "#111",
              margin: 0
            }}>Product Manager</p>
              <p style={{
              fontSize: 8,
              color: "#6B7280",
              margin: 0
            }}>2018 – 2021</p>
            </div>
            <p style={{
            fontSize: 8.5,
            color: "#1E3A5F",
            fontWeight: 600,
            margin: "2px 0 5px"
          }}>Booking.com · Amsterdam</p>
            <p style={{
            fontSize: 8,
            color: "#4B5563",
            lineHeight: 1.5,
            margin: 0
          }}>Owned the hotel search experience for 50M+ monthly users. Shipped A/B tested features that improved booking rate by 8%. Collaborated with data science to build personalization models.</p>
          </div>
        </div>
      </div>
      <div>
        <p style={{
        fontSize: 8,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#1E3A5F",
        margin: "0 0 6px",
        borderBottom: "2px solid #1E3A5F",
        paddingBottom: 4
      }}>Education</p>
        <div style={{
        marginTop: 10
      }}>
          <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline"
        }}>
            <p style={{
            fontWeight: 700,
            fontSize: 9.5,
            color: "#111",
            margin: 0
          }}>MSc Information Management</p>
            <p style={{
            fontSize: 8,
            color: "#6B7280",
            margin: 0
          }}>2016 – 2018</p>
          </div>
          <p style={{
          fontSize: 8.5,
          color: "#1E3A5F",
          fontWeight: 600,
          margin: "2px 0"
        }}>University of Amsterdam</p>
          <p style={{
          fontSize: 8,
          color: "#4B5563",
          margin: 0
        }}>Thesis on digital product adoption in B2B SaaS. Cum laude.</p>
        </div>
      </div>
      <div>
        <p style={{
        fontSize: 8,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#1E3A5F",
        margin: "0 0 6px",
        borderBottom: "2px solid #1E3A5F",
        paddingBottom: 4
      }}>Certifications</p>
        <div style={{
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        gap: 4
      }}>
          <p style={{
          fontSize: 8,
          color: "#4B5563",
          margin: 0
        }}>Certified Scrum Product Owner (CSPO) · 2020</p>
          <p style={{
          fontSize: 8,
          color: "#4B5563",
          margin: 0
        }}>Google Analytics Certified · 2019</p>
        </div>
      </div>
    </div>
  </div>;

export default CVTemplateClassic;
