const LisaVanDenBergCV = () => {
  const lisaSkills = [{
    id: "ux",
    label: "UX Design",
    pct: 95
  }, {
    id: "figma",
    label: "Figma",
    pct: 92
  }, {
    id: "research",
    label: "User Research",
    pct: 88
  }, {
    id: "proto",
    label: "Prototyping",
    pct: 85
  }, {
    id: "css",
    label: "CSS/HTML",
    pct: 78
  }];
  const lisaLangs = [{
    id: "nl",
    label: "Nederlands",
    filled: 5
  }, {
    id: "en",
    label: "Engels",
    filled: 5
  }, {
    id: "fr",
    label: "Frans",
    filled: 2
  }];
  const lisaJobs = [{
    id: "coolblue",
    title: "Senior UX Designer",
    company: "Coolblue",
    dates: "Feb 2021 – heden",
    location: "Rotterdam",
    bullets: ["Checkout redesign +31% conversie", "50+ gebruikerstests uitgevoerd", "Design system voor 12 producten"]
  }, {
    id: "wehkamp",
    title: "UX Designer",
    company: "Wehkamp",
    dates: "Jun 2019 – Jan 2021",
    location: "Zwolle",
    bullets: ["Mobiele app 4.8 App Store rating", "Wireframes en prototypes"]
  }];
  return <div style={{
    display: "flex",
    width: 760,
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden"
  }}>
      {/* LEFT SIDEBAR */}
      <div style={{
      width: 230,
      backgroundColor: "#0D1B3E",
      padding: "24px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      color: "white",
      flexShrink: 0
    }}>
        {/* Avatar */}
        <div style={{
        width: 96,
        height: 96,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #FCD34D 0%, #D97706 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 28,
        fontWeight: 900,
        color: "white",
        border: "3px solid rgba(255,255,255,0.2)"
      }}>LB</div>
        {/* Contact */}
        <div>
          <p style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FCD34D",
          borderBottom: "1px solid #1e3a70",
          paddingBottom: 4,
          margin: "0 0 8px"
        }}>Contact</p>
          {["06-98765432", "lisa@email.com", "Rotterdam NL", "linkedin.com/in/lisavandenberg"].map(item => <p key={item} style={{
          fontSize: 10,
          color: "#D1D5DB",
          margin: "0 0 3px"
        }}>{item}</p>)}
        </div>
        {/* Skills */}
        <div>
          <p style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FCD34D",
          borderBottom: "1px solid #1e3a70",
          paddingBottom: 4,
          margin: "0 0 8px"
        }}>Skills</p>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 6
        }}>
            {lisaSkills.map(s => <div key={s.id}>
                <p style={{
              fontSize: 10,
              color: "white",
              margin: "0 0 2px"
            }}>{s.label}</p>
                <div style={{
              height: 4,
              backgroundColor: "#1a2d5a",
              borderRadius: 2
            }}>
                  <div style={{
                height: "100%",
                width: `${s.pct}%`,
                backgroundColor: "#F59E0B",
                borderRadius: 2
              }} />
                </div>
              </div>)}
          </div>
        </div>
        {/* Education */}
        <div>
          <p style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FCD34D",
          borderBottom: "1px solid #1e3a70",
          paddingBottom: 4,
          margin: "0 0 8px"
        }}>Opleiding</p>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 8
        }}>
            <div>
              <p style={{
              fontSize: 10,
              fontWeight: 700,
              color: "white",
              margin: 0
            }}>MSc Human-Computer Interaction</p>
              <p style={{
              fontSize: 9,
              color: "#D1D5DB",
              fontStyle: "italic",
              margin: "1px 0 0"
            }}>TU Delft</p>
              <p style={{
              fontSize: 9,
              color: "#6B7280",
              margin: "1px 0 0"
            }}>2018 – 2020</p>
            </div>
            <div>
              <p style={{
              fontSize: 10,
              fontWeight: 700,
              color: "white",
              margin: 0
            }}>BSc Industrial Design</p>
              <p style={{
              fontSize: 9,
              color: "#D1D5DB",
              fontStyle: "italic",
              margin: "1px 0 0"
            }}>TU Eindhoven</p>
              <p style={{
              fontSize: 9,
              color: "#6B7280",
              margin: "1px 0 0"
            }}>2015 – 2018</p>
            </div>
          </div>
        </div>
        {/* Languages */}
        <div>
          <p style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FCD34D",
          borderBottom: "1px solid #1e3a70",
          paddingBottom: 4,
          margin: "0 0 8px"
        }}>Talen</p>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 5
        }}>
            {lisaLangs.map(l => <div key={l.id} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
                <span style={{
              fontSize: 10,
              color: "#D1D5DB"
            }}>{l.label}</span>
                <div style={{
              display: "flex",
              gap: 3
            }}>
                  {Array.from({
                length: 5
              }).map((_, di) => <div key={di} style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: di < l.filled ? "#F59E0B" : "#1a2d5a",
                border: "1px solid #F59E0B"
              }} />)}
                </div>
              </div>)}
          </div>
        </div>
      </div>
      {/* RIGHT CONTENT */}
      <div style={{
      flex: 1,
      backgroundColor: "white",
      padding: "24px 28px",
      overflowY: "hidden"
    }}>
        {/* Name */}
        <div style={{
        display: "flex",
        alignItems: "baseline",
        gap: 6,
        marginBottom: 2
      }}>
          <span style={{
          fontSize: 28,
          fontWeight: 900,
          letterSpacing: "0.08em",
          color: "#0D1B3E"
        }}>LISA</span>
          <span style={{
          fontSize: 28,
          fontWeight: 900,
          letterSpacing: "0.08em",
          color: "#F59E0B"
        }}>VAN DEN BERG</span>
        </div>
        <p style={{
        fontSize: 10,
        letterSpacing: "0.25em",
        color: "#9CA3AF",
        textTransform: "uppercase",
        margin: "0 0 4px",
        paddingBottom: 6,
        borderBottom: "2px solid #F59E0B",
        display: "inline-block"
      }}>UX Designer</p>
        <p style={{
        fontSize: 10,
        color: "#6B7280",
        lineHeight: 1.65,
        margin: "8px 0 14px"
      }}>
          Creatieve UX Designer met passie voor gebruikersgerichte oplossingen. Gespecialiseerd in intuïtieve interfaces die complex eenvoudig maken.
        </p>
        {/* Werkervaring */}
        <div style={{
        marginBottom: 12
      }}>
          <div style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 6
        }}>
            <div style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            backgroundColor: "#F59E0B",
            flexShrink: 0
          }} />
            <p style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#0D1B3E",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0
          }}>Werkervaring</p>
            <div style={{
            flex: 1,
            height: 1,
            backgroundColor: "#F3F4F6"
          }} />
          </div>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 10
        }}>
            {lisaJobs.map(job => <div key={job.id} style={{
            display: "flex",
            gap: 8
          }}>
                <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 3
            }}>
                  <div style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#F59E0B",
                flexShrink: 0
              }} />
                  <div style={{
                width: 1,
                flex: 1,
                backgroundColor: "#E5E7EB",
                marginTop: 2
              }} />
                </div>
                <div style={{
              flex: 1
            }}>
                  <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline"
              }}>
                    <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#0D1B3E"
                }}>{job.title}</span>
                    <span style={{
                  fontSize: 9,
                  color: "#9CA3AF"
                }}>{job.dates}</span>
                  </div>
                  <div style={{
                display: "flex",
                justifyContent: "space-between"
              }}>
                    <span style={{
                  fontSize: 10,
                  color: "#F59E0B",
                  fontWeight: 600
                }}>{job.company}</span>
                    <span style={{
                  fontSize: 9,
                  color: "#9CA3AF",
                  fontStyle: "italic"
                }}>{job.location}</span>
                  </div>
                  <ul style={{
                margin: "3px 0 0",
                paddingLeft: 12
              }}>
                    {job.bullets.map(b => <li key={b} style={{
                  fontSize: 9,
                  color: "#4B5563",
                  lineHeight: 1.55
                }}>{b}</li>)}
                  </ul>
                </div>
              </div>)}
          </div>
        </div>
        {/* Projecten */}
        <div style={{
        marginBottom: 10
      }}>
          <div style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 6
        }}>
            <div style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            backgroundColor: "#F59E0B",
            flexShrink: 0
          }} />
            <p style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#0D1B3E",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0
          }}>Projecten</p>
            <div style={{
            flex: 1,
            height: 1,
            backgroundColor: "#F3F4F6"
          }} />
          </div>
          <div style={{
          display: "flex",
          gap: 6,
          alignItems: "baseline"
        }}>
            <span style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#0D1B3E"
          }}>CV Labz App Redesign</span>
            <span style={{
            color: "#D1D5DB",
            fontSize: 9
          }}>|</span>
            <span style={{
            fontSize: 9,
            color: "#F59E0B",
            fontWeight: 600
          }}>Figma/Maze</span>
          </div>
          <p style={{
          fontSize: 9,
          color: "#4B5563",
          margin: "2px 0 0",
          lineHeight: 1.5
        }}>+40% taakcompletie door volledige UX herontwerp van onboarding flow.</p>
        </div>
        {/* Certificaten */}
        <div>
          <div style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 6
        }}>
            <div style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            backgroundColor: "#F59E0B",
            flexShrink: 0
          }} />
            <p style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#0D1B3E",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0
          }}>Certificaten</p>
            <div style={{
            flex: 1,
            height: 1,
            backgroundColor: "#F3F4F6"
          }} />
          </div>
          <ul style={{
          margin: 0,
          paddingLeft: 12
        }}>
            <li style={{
            fontSize: 9,
            color: "#4B5563",
            lineHeight: 1.7
          }}>Google UX Design Certificate</li>
            <li style={{
            fontSize: 9,
            color: "#4B5563",
            lineHeight: 1.7
          }}>Nielsen Norman UX Certified</li>
          </ul>
        </div>
      </div>
    </div>;
};

export default LisaVanDenBergCV;
