const CVTemplateDarkPro = () => <div style={{
  width: 500,
  height: 700,
  backgroundColor: "#1a1a2e",
  fontFamily: "'Arial', sans-serif",
  padding: "30px 28px",
  display: "flex",
  flexDirection: "column",
  gap: 20
}}>
    {/* Header */}
    <div style={{
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    paddingBottom: 18
  }}>
      <p style={{
      color: "white",
      fontWeight: 800,
      fontSize: 26,
      margin: 0,
      letterSpacing: "-0.02em"
    }}>Lisa van den Berg</p>
      <p style={{
      color: "#A78BFA",
      fontSize: 12,
      fontWeight: 600,
      margin: "5px 0 10px",
      letterSpacing: "0.05em"
    }}>UX Designer · Product Strategist</p>
      <div style={{
      display: "flex",
      gap: 16,
      flexWrap: "wrap"
    }}>
        <span style={{
        color: "rgba(255,255,255,0.5)",
        fontSize: 8
      }}>lisa@cvlabz.nl</span>
        <span style={{
        color: "rgba(255,255,255,0.5)",
        fontSize: 8
      }}>+31 6 87 65 43 21</span>
        <span style={{
        color: "rgba(255,255,255,0.5)",
        fontSize: 8
      }}>Rotterdam, NL</span>
      </div>
    </div>
    {/* Two-column body */}
    <div style={{
    display: "flex",
    gap: 20,
    flex: 1
  }}>
      {/* Left: Skills */}
      <div style={{
      width: "38%",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <div>
          <p style={{
          color: "#A78BFA",
          fontSize: 8,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          margin: "0 0 10px"
        }}>Core Skills</p>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 8
        }}>
            {[["Figma / Sketch", "#A78BFA", 88], ["User Research", "#60A5FA", 92], ["Prototyping", "#A78BFA", 82], ["Design Systems", "#60A5FA", 78], ["HTML / CSS", "#A78BFA", 65], ["SQL", "#60A5FA", 55]].map(([label, color, pct]) => <div key={String(label)}>
                <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 3
            }}>
                  <span style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: 8
              }}>{String(label)}</span>
                  <span style={{
                color: String(color),
                fontSize: 8,
                fontWeight: 700
              }}>{String(pct)}%</span>
                </div>
                <div style={{
              height: 3,
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: 2
            }}>
                  <div style={{
                height: "100%",
                width: `${pct}%`,
                backgroundColor: String(color),
                borderRadius: 2
              }} />
                </div>
              </div>)}
          </div>
        </div>
        <div>
          <p style={{
          color: "#A78BFA",
          fontSize: 8,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          margin: "0 0 10px"
        }}>Tools</p>
          <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4
        }}>
            {["Figma", "Notion", "Jira", "Miro", "Hotjar", "Maze"].map(tool => <span key={tool} style={{
            backgroundColor: "rgba(167,139,250,0.12)",
            color: "#A78BFA",
            fontSize: 7,
            padding: "2px 6px",
            borderRadius: 3,
            border: "1px solid rgba(167,139,250,0.25)"
          }}>{tool}</span>)}
          </div>
        </div>
        <div>
          <p style={{
          color: "#A78BFA",
          fontSize: 8,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          margin: "0 0 8px"
        }}>Education</p>
          <p style={{
          color: "rgba(255,255,255,0.8)",
          fontSize: 8.5,
          fontWeight: 600,
          margin: 0
        }}>BA Industrial Design</p>
          <p style={{
          color: "rgba(255,255,255,0.45)",
          fontSize: 7.5,
          margin: "2px 0"
        }}>TU Delft · 2014 – 2018</p>
        </div>
      </div>
      {/* Right: Experience timeline */}
      <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 0
    }}>
        <p style={{
        color: "#A78BFA",
        fontSize: 8,
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        margin: "0 0 14px"
      }}>Experience</p>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        paddingLeft: 14,
        borderLeft: "2px solid #7C3AED"
      }}>
          {[{
          title: "Lead UX Designer",
          company: "bol.",
          dates: "2022 – Now",
          desc: "Led design system overhaul used by 40+ product teams. Reduced design-to-dev handoff time by 30%."
        }, {
          title: "Senior UX Designer",
          company: "ING Bank",
          dates: "2020 – 2022",
          desc: "Redesigned mobile banking onboarding flow. Improved completion rate from 61% to 84%."
        }, {
          title: "UX Designer",
          company: "Coolblue",
          dates: "2018 – 2020",
          desc: "Owned checkout experience across web and app. Led usability testing sessions with 200+ participants."
        }].map(item => <div key={item.company} style={{
          paddingLeft: 14,
          paddingBottom: 16,
          position: "relative"
        }}>
              <div style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#7C3AED",
            position: "absolute",
            left: -19,
            top: 2,
            border: "2px solid #1a1a2e"
          }} />
              <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2
          }}>
                <span style={{
              color: "white",
              fontWeight: 700,
              fontSize: 9
            }}>{item.title}</span>
                <span style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 7.5
            }}>{item.dates}</span>
              </div>
              <p style={{
            color: "#A78BFA",
            fontSize: 8,
            margin: "0 0 4px",
            fontWeight: 600
          }}>{item.company}</p>
              <p style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 7.5,
            lineHeight: 1.5,
            margin: 0
          }}>{item.desc}</p>
            </div>)}
        </div>
      </div>
    </div>
  </div>;

export default CVTemplateDarkPro;
